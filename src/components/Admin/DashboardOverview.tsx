import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  BookOpen,
  MessageSquare,
  TrendingUp,
  Eye,
  Award,
  Clock,
  Star,
  Plus,
  BarChart3,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardOverview: React.FC = () => {
  const stats = [
    {
      title: 'کل کاربران',
      value: '12,456',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Users,
      description: 'نسبت به ماه گذشته',
    },
    {
      title: 'دروس منتشر شده',
      value: '248',
      change: '+5',
      changeType: 'positive' as const,
      icon: BookOpen,
      description: 'در این ماه',
    },
    {
      title: 'بحث‌های فعال',
      value: '1,892',
      change: '+23%',
      changeType: 'positive' as const,
      icon: MessageSquare,
      description: 'نسبت به هفته گذشته',
    },
    {
      title: 'بازدیدکنندگان',
      value: '45,231',
      change: '-2%',
      changeType: 'negative' as const,
      icon: Eye,
      description: 'در ۳۰ روز گذشته',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'lesson',
      title: 'درس جدید "مدیریت تیم‌های ورزشی" اضافه شد',
      time: '۲ ساعت پیش',
      user: 'دکتر احمدی',
    },
    {
      id: 2,
      type: 'user',
      title: 'کاربر جدید عضو شد',
      time: '۴ ساعت پیش',
      user: 'علی محمدی',
    },
    {
      id: 3,
      type: 'comment',
      title: 'نظر جدید بر روی درس "روانشناسی ورزشی"',
      time: '۶ ساعت پیش',
      user: 'سارا احمدی',
    },
    {
      id: 4,
      type: 'achievement',
      title: 'مدرک جدید صادر شد',
      time: '۸ ساعت پیش',
      user: 'حسین رضایی',
    },
  ];

  const topCourses = [
    { title: 'مبانی مدیریت ورزشی', students: 1240, rating: 4.8 },
    { title: 'روانشناسی ورزشی', students: 987, rating: 4.7 },
    { title: 'مدیریت مالی باشگاه‌ها', students: 856, rating: 4.9 },
    { title: 'بازاریابی ورزشی', students: 743, rating: 4.6 },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">داشبورد مدیریت</h1>
          <p className="text-muted-foreground">
            خلاصه‌ای از فعالیت‌های پلتفرم و آمار کلیدی
          </p>
        </div>
        <div className="flex space-x-2 space-x-reverse">
          <Button asChild>
            <Link to="/admin/content/add-lesson">
              <Plus className="h-4 w-4 ml-2" />
              افزودن درس جدید
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/admin/analytics">
              <BarChart3 className="h-4 w-4 ml-2" />
              گزارش تفصیلی
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center space-x-2 space-x-reverse text-xs text-muted-foreground">
                  <Badge
                    variant={stat.changeType === 'positive' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {stat.change}
                  </Badge>
                  <span>{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>فعالیت‌های اخیر</CardTitle>
            <CardDescription>
              آخرین رویدادها و فعالیت‌های پلتفرم
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 space-x-reverse">
                  <div className="flex-shrink-0">
                    {activity.type === 'lesson' && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    {activity.type === 'user' && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10">
                        <Users className="h-4 w-4 text-success" />
                      </div>
                    )}
                    {activity.type === 'comment' && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                        <MessageSquare className="h-4 w-4 text-accent" />
                      </div>
                    )}
                    {activity.type === 'achievement' && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warning/10">
                        <Award className="h-4 w-4 text-warning" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <div className="flex items-center space-x-2 space-x-reverse text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{activity.time}</span>
                      <span>•</span>
                      <span>{activity.user}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Courses */}
        <Card>
          <CardHeader>
            <CardTitle>دوره‌های برتر</CardTitle>
            <CardDescription>
              محبوب‌ترین دوره‌های آموزشی بر اساس تعداد دانشجو
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCourses.map((course, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{course.title}</p>
                    <div className="flex items-center space-x-2 space-x-reverse text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{course.students.toLocaleString()} دانشجو</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>عملیات سریع</CardTitle>
          <CardDescription>
            دسترسی سریع به عملیات‌های مهم
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" asChild className="h-20 flex-col">
              <Link to="/admin/content/add-lesson">
                <Plus className="h-6 w-6 mb-2" />
                افزودن درس
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-20 flex-col">
              <Link to="/admin/users">
                <Users className="h-6 w-6 mb-2" />
                مدیریت کاربران
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-20 flex-col">
              <Link to="/admin/media">
                <BookOpen className="h-6 w-6 mb-2" />
                کتابخانه رسانه
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-20 flex-col">
              <Link to="/admin/analytics">
                <TrendingUp className="h-6 w-6 mb-2" />
                مشاهده آمار
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;