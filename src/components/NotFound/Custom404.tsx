
import React from 'react';
import { ArrowLeft, Home, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* 404 Graphic */}
        <div className="mb-12">
          <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-4">
            404
          </div>
          
          {/* Sports-themed illustration */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-bounce">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="text-4xl">⚽</div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full animate-spin"></div>
            <div className="text-4xl">🏀</div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Lost in the Game Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Oops! You're <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">Lost in the Game</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Looks like this play didn't work out as planned. Don't worry, even the greatest athletes miss sometimes. 
          Let's get you back in the game!
        </p>

        {/* Sports Quote */}
        <blockquote className="text-lg italic text-gray-700 mb-12 border-l-4 border-blue-500 pl-6 max-w-lg mx-auto">
          "You miss 100% of the shots you don't take. But you also miss some of the shots you do take... like this page!"
          <footer className="text-gray-500 mt-2">- Definitely not Wayne Gretzky</footer>
        </blockquote>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            <Home className="w-5 h-5" />
            Back to Home Base
          </Link>
          
          <Link 
            to="/courses" 
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:border-blue-500 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 group"
          >
            <Search className="w-5 h-5" />
            Explore Courses
          </Link>
        </div>

        {/* Fun Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">99.9%</div>
            <div className="text-gray-600 text-sm">Pages Found Successfully</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">0.1%</div>
            <div className="text-gray-600 text-sm">Lost in Cyberspace</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-gray-600 text-sm">Ready to Get Back</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
