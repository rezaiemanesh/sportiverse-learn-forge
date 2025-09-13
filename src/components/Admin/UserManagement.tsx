import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  UserPlus, 
  Shield, 
  Mail, 
  Phone, 
  Calendar,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash,
  Eye
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserOverview: React.FC = () => {
  const users = [
    {
      id: 1,
      name: 'دکتر علی احمدی',
      email: 'ali.ahmadi@example.com',
      role: 'مربی',
      status: 'فعال',
      joinDate: '۱۴۰۲/۱۰/۱۵',
      lastLogin: '۲ ساعت پیش',
      courses: 12,
      students: 245,
    },
    {
      id: 2,
      name: 'سارا محمدی',
      email: 'sara.mohammadi@example.com',
      role: 'دانشجو',
      status: 'فعال',
      joinDate: '۱۴۰۲/۱۱/۲۰',
      lastLogin: '۱ روز پیش',
      courses: 5,
      students: 0,
    },
    {
      id: 3,
      name: 'دکتر حسین رضایی',
      email: 'hossein.rezaei@example.com',
      role: 'مربی',
      status: 'غیرفعال',
      joinDate: '۱۴۰۲/۰۹/۰۵',
      lastLogin: '۱ هفته پیش',
      courses: 8,
      students: 189,
    },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">مدیریت کاربران</h1>
          <p className="text-muted-foreground">
            مدیریت مربیان، دانشجویان و سطوح دسترسی
          </p>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 ml-2" />
          افزودن کاربر جدید
        </Button>
      </div>

      {/* User Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">کل کاربران</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,456</div>
            <p className="text-xs text-muted-foreground">+12% نسبت به ماه گذشته</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">مربیان</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+3 مربی جدید این ماه</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">دانشجویان</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,300</div>
            <p className="text-xs text-muted-foreground">+189 دانشجوی جدید</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">کاربران فعال</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,945</div>
            <p className="text-xs text-muted-foreground">72% از کل کاربران</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>جستجو و فیلتر</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="جستجو بر اساس نام، ایمیل یا نقش..." className="pr-10" />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 ml-2" />
              فیلتر نقش
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>لیست کاربران</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>کاربر</TableHead>
                <TableHead>ایمیل</TableHead>
                <TableHead>نقش</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead>تاریخ عضویت</TableHead>
                <TableHead>آخرین ورود</TableHead>
                <TableHead>آمار</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Avatar>
                        <AvatarFallback>{user.name.split(' ')[0][0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === 'مربی' ? 'default' : 'secondary'}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'فعال' ? 'default' : 'destructive'}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{user.courses} دوره</div>
                      {user.role === 'مربی' && (
                        <div className="text-muted-foreground">{user.students} دانشجو</div>
                      )}
                    </div>
                  </TableCell>
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
                          مشاهده پروفایل
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 ml-2" />
                          ویرایش
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 ml-2" />
                          ارسال ایمیل
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash className="h-4 w-4 ml-2" />
                          حذف کاربر
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

const UserManagement: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserOverview />} />
      <Route path="/instructors" element={<UserOverview />} />
      <Route path="/students" element={<UserOverview />} />
      <Route path="/roles" element={<UserOverview />} />
    </Routes>
  );
};

export default UserManagement;