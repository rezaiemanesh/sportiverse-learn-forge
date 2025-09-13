import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Users, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'مبانی مدیریت ورزشی',
      description: 'آشنایی کامل با اصول و مبانی مدیریت در حوزه ورزش',
      instructor: 'دکتر علی احمدی',
      students: 1245,
      rating: 4.8,
      duration: '12 ساعت',
      level: 'مقدماتی',
      price: 'رایگان',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
    },
    // ... more courses
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">دوره‌های آموزشی</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            با بهترین دوره‌های مدیریت ورزشی خود را به روز کنید
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-hero"></div>
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>{course.instructor}</span>
                  <Badge>{course.level}</Badge>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                  <Button asChild>
                    <Link to={`/course/${course.id}`}>مشاهده دوره</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;