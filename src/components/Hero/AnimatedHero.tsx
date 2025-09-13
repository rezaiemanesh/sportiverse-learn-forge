import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trophy, Target, Users, BookOpen, ArrowLeft } from 'lucide-react';

const AnimatedHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary rounded-full olympic-ring"></div>
        <div className="absolute top-32 left-24 w-24 h-24 border-4 border-accent rounded-full olympic-ring" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-20 left-40 w-28 h-28 border-4 border-secondary rounded-full olympic-ring" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-20 w-20 h-20 border-4 border-primary rounded-full olympic-ring" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-32 w-36 h-36 border-4 border-accent rounded-full olympic-ring" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Sports Icons */}
      <div className="absolute inset-0 opacity-5">
        <Trophy className="absolute top-1/4 left-1/4 w-16 h-16 text-primary animate-float" />
        <Target className="absolute top-1/3 right-1/4 w-12 h-12 text-accent animate-float" style={{ animationDelay: '1s' }} />
        <Users className="absolute bottom-1/3 left-1/5 w-14 h-14 text-primary animate-float" style={{ animationDelay: '2s' }} />
        <BookOpen className="absolute bottom-1/4 right-1/3 w-10 h-10 text-accent animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="block mb-2">پلتفرم آموزشی</span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
              مدیریت ورزش
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            آینده آموزش مدیریت ورزشی را تجربه کنید. یادگیری تعاملی، محتوای روز دنیا، و مربیان برتر را در یک مکان پیدا کنید.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm opacity-80">دوره تخصصی</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-primary mb-2">10000+</div>
              <div className="text-sm opacity-80">دانشجوی فعال</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm opacity-80">استاد برتر</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground text-lg px-8 py-3 shadow-glow transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/courses">
                شروع یادگیری
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-3 backdrop-blur-sm"
              asChild
            >
              <Link to="/about">درباره پلتفرم</Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10"></div>
    </section>
  );
};

export default AnimatedHero;