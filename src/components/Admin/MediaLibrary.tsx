import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  Image, 
  Video, 
  FileText, 
  Download, 
  Trash, 
  Search,
  Filter,
  Grid,
  List,
  MoreHorizontal,
  File,
  Music
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MediaLibrary: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const mediaFiles = [
    {
      id: 1,
      name: 'hero-image.jpg',
      type: 'image',
      size: '2.4 MB',
      uploadDate: '۱۴۰۲/۱۲/۱۵',
      uploader: 'دکتر احمدی',
      dimensions: '1920x1080',
      url: '/api/media/hero-image.jpg',
    },
    {
      id: 2,
      name: 'management-basics.mp4',
      type: 'video',
      size: '125.6 MB',
      uploadDate: '۱۴۰۲/۱۲/۱۰',
      uploader: 'دکتر محمدی',
      duration: '45:30',
      url: '/api/media/management-basics.mp4',
    },
    {
      id: 3,
      name: 'lesson-plan.pdf',
      type: 'document',
      size: '1.8 MB',
      uploadDate: '۱۴۰۲/۱۲/۰۸',
      uploader: 'دکتر رضایی',
      pages: 24,
      url: '/api/media/lesson-plan.pdf',
    },
    {
      id: 4,
      name: 'sports-psychology.mp3',
      type: 'audio',
      size: '45.2 MB',
      uploadDate: '۱۴۰۲/۱۲/۰۵',
      uploader: 'دکتر احمدی',
      duration: '65:15',
      url: '/api/media/sports-psychology.mp3',
    },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="h-8 w-8 text-success" />;
      case 'video':
        return <Video className="h-8 w-8 text-accent" />;
      case 'document':
        return <FileText className="h-8 w-8 text-warning" />;
      case 'audio':
        return <Music className="h-8 w-8 text-primary" />;
      default:
        return <File className="h-8 w-8 text-muted-foreground" />;
    }
  };

  const getFileTypeColor = (type: string) => {
    switch (type) {
      case 'image':
        return 'success';
      case 'video':
        return 'default';
      case 'document':
        return 'warning';
      case 'audio':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getFileTypeLabel = (type: string) => {
    switch (type) {
      case 'image':
        return 'تصویر';
      case 'video':
        return 'ویدیو';
      case 'document':
        return 'سند';
      case 'audio':
        return 'صوت';
      default:
        return 'فایل';
    }
  };

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">کتابخانه رسانه</h1>
          <p className="text-muted-foreground">
            مدیریت فایل‌های تصویری، ویدیویی و اسناد آموزشی
          </p>
        </div>
        <Button>
          <Upload className="h-4 w-4 ml-2" />
          آپلود فایل جدید
        </Button>
      </div>

      {/* Storage Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">کل فایل‌ها</CardTitle>
            <File className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+24 فایل این ماه</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">فضای استفاده شده</CardTitle>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.8 GB</div>
            <p className="text-xs text-muted-foreground">از 100 GB</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">تصاویر</CardTitle>
            <Image className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">856</div>
            <p className="text-xs text-muted-foreground">68% از کل فایل‌ها</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ویدیوها</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">85% فضای استفاده شده</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Controls */}
      <Card>
        <CardHeader>
          <CardTitle>جستجو و کنترل‌ها</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between space-x-4 space-x-reverse">
            <div className="flex items-center space-x-4 space-x-reverse flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="جستجو فایل..." className="pr-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 ml-2" />
                فیلتر نوع
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 space-x-reverse">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Media Files */}
      <Card>
        <CardHeader>
          <CardTitle>فایل‌های رسانه</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">همه</TabsTrigger>
              <TabsTrigger value="images">تصاویر</TabsTrigger>
              <TabsTrigger value="videos">ویدیوها</TabsTrigger>
              <TabsTrigger value="documents">اسناد</TabsTrigger>
              <TabsTrigger value="audio">صوت</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              {viewMode === 'grid' ? (
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {mediaFiles.map((file) => (
                    <Card key={file.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center space-y-3">
                          {getFileIcon(file.type)}
                          <div className="space-y-1 w-full">
                            <h4 className="font-medium text-sm truncate" title={file.name}>
                              {file.name}
                            </h4>
                            <Badge variant={getFileTypeColor(file.type) as any} className="text-xs">
                              {getFileTypeLabel(file.type)}
                            </Badge>
                            <p className="text-xs text-muted-foreground">{file.size}</p>
                          </div>
                          <div className="flex space-x-2 space-x-reverse">
                            <Button size="sm" variant="outline">
                              <Download className="h-3 w-3" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button size="sm" variant="outline">
                                  <MoreHorizontal className="h-3 w-3" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>مشاهده جزئیات</DropdownMenuItem>
                                <DropdownMenuItem>کپی لینک</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">
                                  <Trash className="h-4 w-4 ml-2" />
                                  حذف
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {mediaFiles.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                      <div className="flex items-center space-x-4 space-x-reverse">
                        {getFileIcon(file.type)}
                        <div>
                          <h4 className="font-medium">{file.name}</h4>
                          <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                            <Badge variant={getFileTypeColor(file.type) as any} className="text-xs">
                              {getFileTypeLabel(file.type)}
                            </Badge>
                            <span>•</span>
                            <span>{file.size}</span>
                            <span>•</span>
                            <span>آپلود توسط {file.uploader}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="sm" variant="outline">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>مشاهده جزئیات</DropdownMenuItem>
                            <DropdownMenuItem>کپی لینک</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash className="h-4 w-4 ml-2" />
                              حذف
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle>آپلود سریع</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-muted-foreground/50 transition-colors">
            <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">فایل‌های خود را اینجا بکشید</h3>
            <p className="text-muted-foreground mb-4">یا روی دکمه زیر کلیک کنید</p>
            <Button>انتخاب فایل</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaLibrary;