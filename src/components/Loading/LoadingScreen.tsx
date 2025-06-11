
import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "Initializing Sports Universe...",
    "Loading Championship Knowledge...",
    "Preparing Your Learning Journey...",
    "Almost Ready to Achieve Greatness..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [loadingTexts.length]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-orange-900 flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-orange-500/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Morphing Sports Symbol */}
        <div className="mb-12 relative">
          <div className="w-32 h-32 mx-auto relative">
            {/* Olympic Rings Inspired Animation */}
            <div className="absolute inset-0 border-8 border-blue-400 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-8 border-yellow-400 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
            <div className="absolute inset-4 border-8 border-red-400 rounded-full animate-spin"></div>
            <div className="absolute inset-6 border-8 border-green-400 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
            
            {/* Center Pulsing Element */}
            <div className="absolute inset-8 bg-gradient-to-br from-white to-gray-200 rounded-full animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h1 className="text-4xl font-bold text-white mb-8 animate-pulse">
          SportiVerse
        </h1>
        
        <p className="text-xl text-blue-200 mb-8 animate-fade-in">
          {loadingTexts[currentText]}
        </p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <p className="text-blue-200 text-lg font-medium">
          {progress}%
        </p>

        {/* Inspirational Quote */}
        <div className="mt-12 max-w-md mx-auto">
          <blockquote className="text-white/80 italic text-lg">
            "Champions are made when nobody's watching."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
