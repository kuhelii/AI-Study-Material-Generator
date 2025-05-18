import { courseOutlineAIModel } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { courseId, topic, courseType, difficultyLevel, createdBy } =
        await req.json();

        if (!courseId || !topic || !courseType || !difficultyLevel || !createdBy) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const PROMPT = `
      Generate a study material for '${topic}' for '${courseType}'
      and level of Difficulty will be '${difficultyLevel}'
      with course title, summary of course, List of chapters along with the summary and Emoji icon for each chapter,
      Topic list in each chapter. Return the response in strict JSON format with the following structure:
      {
        "courseSummary": "string",
        "chapters": [
          {
            "chapterTitle": "string",
            "chapterSummary": "string",
            "emoji": "string",
            "topics": ["string"]
          }
        ]
      }
    `;

        // Generate course layout using AI
        const aiResp = await courseOutlineAIModel.sendMessage(PROMPT);
        const aiText = aiResp.response.text();

        // Extract JSON from the response (in case it contains markdown backticks)
        const jsonMatch = aiText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error("Invalid AI response format");
        }

        let aiResult;
        try {
            aiResult = JSON.parse(jsonMatch[0]);
        } catch (parseError) {
            console.error("JSON Parse Error:", parseError);
            return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
        }

        // Validate the AI response structure
        if (!aiResult.courseSummary || !Array.isArray(aiResult.chapters)) {
            return NextResponse.json({ error: "Invalid AI response structure" }, { status: 500 });
        }

        // Save result along with user input
        const dbResult = await db
            .insert(STUDY_MATERIAL_TABLE)
            .values({
                courseId: courseId,
                courseType: courseType,
                difficultyLevel: difficultyLevel,
                topic: topic,
                createdBy: createdBy,
                courseLayout: aiResult,
            })
            .returning({ resp: STUDY_MATERIAL_TABLE });

        console.log("Course created:", dbResult[0].resp);

        // Trigger Inngest function to generate chapter notes
        await inngest.send({
            name: "notes.generate",
            data: {
                course: dbResult[0].resp,
            },
        });

        return NextResponse.json({ result: dbResult[0] });
    } catch (error) {
        console.error("Error in generate-course-outline:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}