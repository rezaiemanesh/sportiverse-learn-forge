
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, BookOpen, Users, Trophy } from 'lucide-react';

const AnimatedHero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    "Champions are made when nobody's watching. - Unknown",
    "Leadership is not about being in charge. It's about taking care of those in your charge. - Simon Sinek",
    "The way a team plays as a whole determines its success. - Babe Ruth",
    "Excellence is not a skill, it's an attitude. - Ralph Marston"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-bounce"></div>
      </div>

      {/* Morphing Sports Symbol */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
        <div className="w-96 h-96 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full animate-pulse transform scale-75"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full animate-bounce transform scale-50"></div>
          <div className="absolute inset-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full animate-pulse transform scale-25"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              The Future
            </span>
            <span className="block text-gray-800 mt-2">
              of Sports Education
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed animate-fade-in max-w-3xl mx-auto">
            Master theoretical concepts in Sports Management through revolutionary interactive learning. 
            Join the next generation of sports leaders, innovators, and visionaries.
          </p>

          {/* Quote Carousel */}
          <div className="mb-12 h-16 flex items-center justify-center">
            <blockquote className="text-lg italic text-gray-700 animate-fade-in max-w-2xl">
              "{quotes[currentQuote]}"
            </blockquote>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
              Start Learning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 hover:border-blue-500 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 group">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Interactive Learning</h3>
              <p className="text-gray-600">Engage with dynamic content, quizzes, and real-world case studies designed for modern sports management.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Community</h3>
              <p className="text-gray-600">Connect with industry professionals, renowned instructors, and fellow students from around the globe.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Achieve Excellence</h3>
              <p className="text-gray-600">Track your progress, earn certifications, and build the skills needed for sports management leadership.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default AnimatedHero;
