import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  BookOpen, 
  Eye, 
  Clock,
  Star,
  Calendar,
  Download,
  Filter
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Analytics: React.FC = () => {
  // Sample data for charts
  const engagementData = [
    { name: 'شنبه', users: 4000, sessions: 2400, pageViews: 8000 },
    { name: 'یکشنبه', users: 3000, sessions: 1398, pageViews: 6200 },
    { name: 'دوشنبه', users: 2000, sessions: 9800, pageViews: 7800 },
    { name: 'سه‌شنبه', users: 2780, sessions: 3908, pageViews: 9200 },
    { name: 'چهارشنبه', users: 1890, sessions: 4800, pageViews: 5600 },
    { name: 'پنجشنبه', users: 2390, sessions: 3800, pageViews: 7400 },
    { name: 'جمعه', users: 3490, sessions: 4300, pageViews: 8900 },
  ];

  const coursePopularityData = [
    { name: 'مبانی مدیریت ورزشی', students: 1240, completion: 85 },
    { name: 'روانشناسی ورزشی', students: 987, completion: 78 },
    { name: 'مدیریت مالی باشگاه‌ها', students: 856, completion: 92 },
    { name: 'بازاریابی ورزشی', students: 743, completion: 67 },
    { name: 'قوانین و مقررات', students: 654, completion: 73 },
  ];

  const userTypeData = [
    { name: 'دانشجویان', value: 12300, color: '#8884d8' },
    { name: 'مربیان', value: 156, color: '#82ca9d' },
    { name: 'مدیران', value: 12, color: '#ffc658' },
  ];

  const timeSpentData = [
    { name: 'هفته ۱', minutes: 245 },
    { name: 'هفته ۲', minutes: 312 },
    { name: 'هفته ۳', minutes: 278 },
    { name: 'هفته ۴', minutes: 389 },
    { name: 'هفته ۵', minutes: 445 },
    { name: 'هفته ۶', minutes: 423 },
  ];

  const overviewStats = [
    {
      title: 'کل بازدیدکنندگان',
      value: '45,231',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: Users,
      description: 'در ۳۰ روز گذشته',
    },
    {
      title: 'میانگین زمان یادگیری',
      value: '42 دقیقه',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: Clock,
      description: 'هر جلسه',
    },
    {
      title: 'نرخ تکمیل دوره‌ها',
      value: '78.5%',
      change: '-2.1%',
      changeType: 'negative' as const,
      icon: BookOpen,
      description: 'میانگین کلی',
    },
    {
      title: 'رضایت کاربران',
      value: '4.7/5',
      change: '+0.3',
      changeType: 'positive' as const,
      icon: Star,
      description: 'میانگین امتیازها',
    },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">تحلیل و گزارشات</h1>
          <p className="text-muted-foreground">
            آمار تفصیلی تعامل کاربران و عملکرد پلتفرم
          </p>
        </div>
        <div className="flex space-x-2 space-x-reverse">
          <Button variant="outline">
            <Filter className="h-4 w-4 ml-2" />
            فیلتر زمانی
          </Button>
          <Button>
            <Download className="h-4 w-4 ml-2" />
            دانلود گزارش
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((stat) => {
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
                  <div className="flex items-center">
                    {stat.changeType === 'positive' ? (
                      <TrendingUp className="h-3 w-3 text-success ml-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-destructive ml-1" />
                    )}
                    <Badge
                      variant={stat.changeType === 'positive' ? 'default' : 'destructive'}
                      className="text-xs"
                    >
                      {stat.change}
                    </Badge>
                  </div>
                  <span>{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="engagement" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="engagement">تعامل کاربران</TabsTrigger>
          <TabsTrigger value="courses">محبوبیت دوره‌ها</TabsTrigger>
          <TabsTrigger value="users">تحلیل کاربران</TabsTrigger>
          <TabsTrigger value="time">زمان یادگیری</TabsTrigger>
        </TabsList>

        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>نمودار تعامل کاربران</CardTitle>
              <CardDescription>
                آمار روزانه بازدید و فعالیت کاربران در هفته گذشته
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stackId="1"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="sessions"
                      stackId="1"
                      stroke="hsl(var(--accent))"
                      fill="hsl(var(--accent))"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>محبوبیت دوره‌های آموزشی</CardTitle>
              <CardDescription>
                تعداد دانشجویان و نرخ تکمیل دوره‌های مختلف
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={coursePopularityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>توزیع نوع کاربران</CardTitle>
                <CardDescription>
                  نسبت انواع مختلف کاربران در پلتفرم
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={userTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {userTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>آمار کاربران فعال</CardTitle>
                <CardDescription>
                  کاربرانی که در ۷ روز گذشته فعال بوده‌اند
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">دانشجویان فعال</span>
                    <span className="font-medium">8,945</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: '72.7%' }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مربیان فعال</span>
                    <span className="font-medium">142</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full" 
                      style={{ width: '91%' }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مدیران فعال</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-success h-2 rounded-full" 
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="time" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>میانگین زمان یادگیری</CardTitle>
              <CardDescription>
                زمان صرف شده برای یادگیری در هفته‌های گذشته (دقیقه)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timeSpentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="minutes" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;