import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Flag, 
  Search,
  Filter,
  MoreHorizontal,
  Reply,
  Trash,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Feedback: React.FC = () => {
  const comments = [
    {
      id: 1,
      user: 'علی محمدی',
      course: 'مبانی مدیریت ورزشی',
      comment: 'درس بسیار مفیدی بود. توضیحات استاد بسیار روشن و قابل فهم است.',
      rating: 5,
      date: '۱۴۰۲/۱۲/۱۵',
      status: 'تایید شده',
      likes: 12,
      replies: 2,
    },
    {
      id: 2,
      user: 'سارا احمدی',
      course: 'روانشناسی ورزشی',
      comment: 'محتوای درس خوب است اما کیفیت صدا در ویدیو مشکل دارد.',
      rating: 3,
      date: '۱۴۰۲/۱۲/۱۰',
      status: 'در انتظار بررسی',
      likes: 5,
      replies: 0,
    },
    {
      id: 3,
      user: 'حسین رضایی',
      course: 'مدیریت مالی باشگاه‌ها',
      comment: 'یکی از بهترین دوره‌هایی که تا به حال دیده‌ام. مطالب بسیار کاربردی و روز.',
      rating: 5,
      date: '۱۴۰۲/۱۲/۰۸',
      status: 'تایید شده',
      likes: 18,
      replies: 1,
    },
  ];

  const reports = [
    {
      id: 1,
      reporter: 'محمد احمدی',
      content: 'نظر نامناسب در درس روانشناسی ورزشی',
      type: 'محتوای نامناسب',
      status: 'جدید',
      date: '۱۴۰۲/۱۲/۲۰',
      priority: 'بالا',
    },
    {
      id: 2,
      reporter: 'فاطمه رضایی',
      content: 'اسپم در بخش نظرات',
      type: 'اسپم',
      status: 'در حال بررسی',
      date: '۱۴۰۲/۱۲/۱۸',
      priority: 'متوسط',
    },
  ];

  const suggestions = [
    {
      id: 1,
      user: 'دکتر احمدی',
      title: 'افزودن بخش تمرین عملی',
      description: 'پیشنهاد می‌کنم برای هر درس بخش تمرین عملی اضافه شود.',
      category: 'محتوا',
      status: 'در حال بررسی',
      date: '۱۴۰۲/۱۲/۱۵',
      votes: 24,
    },
    {
      id: 2,
      user: 'سارا محمدی',
      title: 'بهبود رابط کاربری موبایل',
      description: 'استفاده از اپلیکیشن در موبایل کمی سخت است.',
      category: 'رابط کاربری',
      status: 'تایید شده',
      date: '۱۴۰۲/۱۲/۱۰',
      votes: 15,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'تایید شده':
        return 'default';
      case 'در انتظار بررسی':
        return 'warning';
      case 'رد شده':
        return 'destructive';
      case 'جدید':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'بالا':
        return 'destructive';
      case 'متوسط':
        return 'warning';
      case 'پایین':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">بازخورد و نظرات</h1>
          <p className="text-muted-foreground">
            مدیریت نظرات، گزارش‌ها و پیشنهادات کاربران
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">کل نظرات</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+24 نظر جدید این ماه</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">میانگین امتیاز</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7</div>
            <p className="text-xs text-muted-foreground">از 5 ستاره</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">گزارش‌های جدید</CardTitle>
            <Flag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">نیاز به بررسی</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">پیشنهادات</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">پیشنهاد فعال</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="comments" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="comments">نظرات</TabsTrigger>
          <TabsTrigger value="reports">گزارش‌ها</TabsTrigger>
          <TabsTrigger value="suggestions">پیشنهادات</TabsTrigger>
        </TabsList>

        <TabsContent value="comments" className="space-y-4">
          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <CardTitle>جستجو و فیلتر نظرات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="جستجو در نظرات..." className="pr-10" />
                  </div>
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 ml-2" />
                  فیلتر وضعیت
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Avatar>
                        <AvatarFallback>{comment.user[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{comment.user}</h4>
                        <p className="text-sm text-muted-foreground">{comment.course}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Badge variant={getStatusColor(comment.status) as any}>
                        {comment.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <CheckCircle className="h-4 w-4 ml-2" />
                            تایید نظر
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Reply className="h-4 w-4 ml-2" />
                            پاسخ دادن
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="h-4 w-4 ml-2" />
                            حذف نظر
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < comment.rating 
                              ? 'text-warning fill-current' 
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground">({comment.rating}/5)</span>
                    </div>
                    <p className="text-sm">{comment.comment}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{comment.date}</span>
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <ThumbsUp className="h-3 w-3" />
                          <span>{comment.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Reply className="h-3 w-3" />
                          <span>{comment.replies} پاسخ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>گزارش‌های کاربران</CardTitle>
              <CardDescription>
                گزارش‌هایی که کاربران ارسال کرده‌اند
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>گزارش‌دهنده</TableHead>
                    <TableHead>محتوا</TableHead>
                    <TableHead>نوع گزارش</TableHead>
                    <TableHead>اولویت</TableHead>
                    <TableHead>وضعیت</TableHead>
                    <TableHead>تاریخ</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.reporter}</TableCell>
                      <TableCell>{report.content}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{report.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getPriorityColor(report.priority) as any}>
                          {report.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(report.status) as any}>
                          {report.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 ml-2" />
                              بررسی گزارش
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CheckCircle className="h-4 w-4 ml-2" />
                              حل شده
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash className="h-4 w-4 ml-2" />
                              رد گزارش
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-4">
          <div className="space-y-4">
            {suggestions.map((suggestion) => (
              <Card key={suggestion.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{suggestion.title}</h4>
                      <p className="text-sm text-muted-foreground">توسط {suggestion.user}</p>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Badge variant={getStatusColor(suggestion.status) as any}>
                        {suggestion.status}
                      </Badge>
                      <Badge variant="outline">{suggestion.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm">{suggestion.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{suggestion.date}</span>
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <ThumbsUp className="h-3 w-3" />
                          <span>{suggestion.votes} رای</span>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <CheckCircle className="h-4 w-4 ml-2" />
                              تایید پیشنهاد
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Clock className="h-4 w-4 ml-2" />
                              در نظر گیری
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash className="h-4 w-4 ml-2" />
                              رد پیشنهاد
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Feedback;