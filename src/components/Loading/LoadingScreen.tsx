import React from 'react';
import { Trophy } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-hero flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Trophy */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            <Trophy className="w-24 h-24 text-primary animate-pulse-glow" />
            <div className="absolute inset-0 w-24 h-24 border-4 border-primary/30 rounded-full animate-spin"></div>
            <div className="absolute inset-2 w-20 h-20 border-4 border-accent/30 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-4">در حال بارگذاری پلتفرم</h2>
        <p className="text-white/80 mb-8">لطفاً صبر کنید...</p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-primary rounded-full animate-pulse" style={{ width: '100%' }}></div>
        </div>

        {/* Olympic Rings */}
        <div className="mt-12 flex items-center justify-center space-x-4 space-x-reverse opacity-50">
          <div className="w-8 h-8 border-2 border-primary rounded-full olympic-ring"></div>
          <div className="w-8 h-8 border-2 border-accent rounded-full olympic-ring" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-8 h-8 border-2 border-secondary rounded-full olympic-ring" style={{ animationDelay: '1s' }}></div>
          <div className="w-8 h-8 border-2 border-primary rounded-full olympic-ring" style={{ animationDelay: '1.5s' }}></div>
          <div className="w-8 h-8 border-2 border-accent rounded-full olympic-ring" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;