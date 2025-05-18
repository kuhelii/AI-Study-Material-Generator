import React from "react";
import { ArrowRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">EduWiz</span>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link href="/dashboard">
            <button className="px-3 md:px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 text-sm md:text-base transition-all duration-300 transform hover:scale-105">
              Dashboard
            </button>
          </Link>
        </div>
      </nav>

      {/* New Badge Banner */}
      <div className="flex justify-center mt-6 md:mt-8 px-4">
        <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full">
          <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded-full">
            New
          </span>
          <span className="text-sm">Adiaparmar : AI-Powered Exam Prep</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 mt-8 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Icon - Floating AI Bot Head */}
<div className="hidden md:flex md:col-span-3 justify-end">
  <div className="relative transform -rotate-12 hover:rotate-0 transition-transform duration-500">
    <div className="w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg">
      <div className="relative animate-bounce-slow">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full border-4 border-purple-400 shadow-md flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full ml-1"></div>
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-purple-300 blur-sm rounded-full opacity-70"></div>
      </div>
    </div>
  </div>
</div>


          {/* Center Content */}
                   <div className="md:col-span-6 text-center">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
                <div className="flex flex-wrap justify-center whitespace-normal md:whitespace-nowrap">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">AI-Powered </span>
                  <span className="text-blue-600">E-Notes & Quiz</span>
                </div>
                <div className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-transparent bg-clip-text">
                   Generator
                </div>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-xl px-4 leading-relaxed">
                Your AI Exam Partner — Study Smarter, Not Harder. All You Need, One Click Away
              </p>
              <div className="flex justify-center mt-6 md:mt-8">
                <Link href="/dashboard">
                  <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-base md:text-xl">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Icon - Brainy Lightbulb with Sparks */}
<div className="hidden md:flex md:col-span-3 justify-start">
  <div className="transform rotate-12 hover:rotate-0 transition-transform duration-500">
    <div className="w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-yellow-100 to-amber-200 rounded-2xl flex items-center justify-center shadow-lg">
      <div className="relative">
        <div className="w-10 h-14 bg-yellow-300 rounded-b-full shadow-inner relative flex flex-col items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full mb-1"></div>
          <div className="w-6 h-1 bg-yellow-600 rounded mt-1"></div>
        </div>
        {/* Spark Effects */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1 right-2 w-1 h-1 bg-red-400 rounded-full animate-pulse">
          
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 md:py-6 text-gray-600 text-sm md:text-base font-medium">
  <p>
    Made with <span className="inline-block animate-pulse text-red-500">❤️</span> by <strong className="hover:text-indigo-600 transition-colors duration-300">Kuheli</strong> · <span className="font-semibold text-indigo-500">EduWiz</span>
  </p>
</footer>

    </div>
  );
};

export default LandingPage;
