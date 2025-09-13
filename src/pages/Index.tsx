import React from 'react';
import AnimatedHero from '@/components/Hero/AnimatedHero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Trophy, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedHero />
      
      {/* Features Section */}
      <section className="py-20 bg-background" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">چرا پلتفرم ما را انتخاب کنید؟</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              بهترین ابزارها و محتوای آموزشی برای یادگیری مدیریت ورزشی
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>دوره‌های تخصصی</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  بیش از 500 دوره تخصصی در حوزه مدیریت ورزش
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle>مربیان برتر</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  یادگیری از بهترین اساتید و متخصصان حوزه ورزش
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-success rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-success-foreground" />
                </div>
                <CardTitle>گواهینامه معتبر</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  دریافت گواهینامه معتبر پس از تکمیل دوره‌ها
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-warning rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-warning-foreground" />
                </div>
                <CardTitle>یادگیری هدفمند</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  مسیرهای یادگیری شخصی‌سازی شده برای هر فرد
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" asChild>
              <Link to="/courses">مشاهده دوره‌ها</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
