import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Edit, 
  Trash, 
  Eye, 
  BookOpen, 
  Layers, 
  Tag,
  Search,
  Filter,
  MoreHorizontal,
  Calendar
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

const ContentOverview: React.FC = () => {
  const lessons = [
    {
      id: 1,
      title: 'مبانی مدیریت ورزشی',
      category: 'مدیریت',
      instructor: 'دکتر احمدی',
      status: 'منتشر شده',
      students: 245,
      created: '۱۴۰۲/۱۲/۱۵',
    },
    {
      id: 2,
      title: 'روانشناسی ورزشی',
      category: 'روانشناسی',
      instructor: 'دکتر محمدی',
      status: 'پیش‌نویس',
      students: 0,
      created: '۱۴۰۲/۱۲/۲۰',
    },
    {
      id: 3,
      title: 'مدیریت مالی باشگاه‌ها',
      category: 'مالی',
      instructor: 'دکتر رضایی',
      status: 'منتشر شده',
      students: 189,
      created: '۱۴۰۲/۱۲/۱۰',
    },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">مدیریت محتوا</h1>
          <p className="text-muted-foreground">
            مدیریت دروس، دسته‌بندی‌ها و محتوای آموزشی
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 ml-2" />
          افزودن درس جدید
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">کل دروس</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">منتشر شده</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">195</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">پیش‌نویس</CardTitle>
            <Edit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">53</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">دسته‌بندی‌ها</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>فیلتر و جستجو</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="جستجو در دروس..." className="pr-10" />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 ml-2" />
              فیلتر
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lessons Table */}
      <Card>
        <CardHeader>
          <CardTitle>لیست دروس</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>عنوان درس</TableHead>
                <TableHead>دسته‌بندی</TableHead>
                <TableHead>مربی</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead>دانشجویان</TableHead>
                <TableHead>تاریخ ایجاد</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lessons.map((lesson) => (
                <TableRow key={lesson.id}>
                  <TableCell className="font-medium">{lesson.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{lesson.category}</Badge>
                  </TableCell>
                  <TableCell>{lesson.instructor}</TableCell>
                  <TableCell>
                    <Badge variant={lesson.status === 'منتشر شده' ? 'default' : 'secondary'}>
                      {lesson.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{lesson.students}</TableCell>
                  <TableCell>{lesson.created}</TableCell>
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
                          مشاهده
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 ml-2" />
                          ویرایش
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash className="h-4 w-4 ml-2" />
                          حذف
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
    </div>
  );
};

const AddLesson: React.FC = () => {
  return (
    <div className="space-y-6" dir="rtl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">افزودن درس جدید</h1>
        <p className="text-muted-foreground">
          درس جدید ایجاد کنید و محتوای آموزشی اضافه کنید
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>اطلاعات اصلی درس</CardTitle>
          <CardDescription>
            عنوان، توضیحات و تنظیمات کلی درس را وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">عنوان درس</Label>
              <Input id="title" placeholder="عنوان درس را وارد کنید" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">دسته‌بندی</Label>
              <Input id="category" placeholder="دسته‌بندی را انتخاب کنید" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">توضیحات کوتاه</Label>
            <Textarea 
              id="description" 
              placeholder="توضیح کوتاهی از درس..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">محتوای درس</Label>
            <Textarea 
              id="content" 
              placeholder="محتوای کامل درس را در اینجا وارد کنید..."
              className="min-h-[300px]"
            />
          </div>

          <div className="flex justify-end space-x-2 space-x-reverse">
            <Button variant="outline">ذخیره به عنوان پیش‌نویس</Button>
            <Button>انتشار درس</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ContentManagement: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ContentOverview />} />
      <Route path="/add-lesson" element={<AddLesson />} />
      <Route path="/edit-lesson" element={<ContentOverview />} />
      <Route path="/categories" element={<ContentOverview />} />
      <Route path="/series" element={<ContentOverview />} />
    </Routes>
  );
};

export default ContentManagement;