import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Palette, 
  Globe, 
  Shield, 
  Bell, 
  Database,
  Mail,
  Lock,
  Eye,
  Save,
  RefreshCw
} from 'lucide-react';

const AdminSettings: React.FC = () => {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">تنظیمات سیستم</h1>
          <p className="text-muted-foreground">
            پیکربندی و تنظیمات عمومی پلتفرم
          </p>
        </div>
        <Button>
          <Save className="h-4 w-4 ml-2" />
          ذخیره تغییرات
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">عمومی</TabsTrigger>
          <TabsTrigger value="appearance">ظاهر</TabsTrigger>
          <TabsTrigger value="security">امنیت</TabsTrigger>
          <TabsTrigger value="notifications">اعلان‌ها</TabsTrigger>
          <TabsTrigger value="email">ایمیل</TabsTrigger>
          <TabsTrigger value="advanced">پیشرفته</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>تنظیمات عمومی</CardTitle>
              <CardDescription>
                تنظیمات اصلی پلتفرم و اطلاعات سایت
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="site-name">نام سایت</Label>
                  <Input id="site-name" defaultValue="پلتفرم آموزشی مدیریت ورزش" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-url">آدرس سایت</Label>
                  <Input id="site-url" defaultValue="https://sportsmanagement.edu" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="site-description">توضیحات سایت</Label>
                <Input 
                  id="site-description" 
                  defaultValue="بهترین پلتفرم آموزشی برای یادگیری مدیریت ورزشی"
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">تنظیمات زبان و منطقه</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="default-language">زبان پیش‌فرض</Label>
                    <Select defaultValue="fa">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fa">فارسی</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="ar">العربية</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">منطقه زمانی</Label>
                    <Select defaultValue="asia-tehran">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asia-tehran">آسیا/تهران</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="america-new-york">آمریکا/نیویورک</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">تنظیمات عضویت</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>ثبت‌نام باز</Label>
                    <p className="text-xs text-muted-foreground">
                      اجازه ثبت‌نام آزاد کاربران جدید
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تایید ایمیل الزامی</Label>
                    <p className="text-xs text-muted-foreground">
                      کاربران باید ایمیل خود را تایید کنند
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Palette className="h-5 w-5 inline ml-2" />
                تنظیمات ظاهر
              </CardTitle>
              <CardDescription>
                تنظیم تم، رنگ‌ها و ظاهر کلی سایت
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">تم پیش‌فرض</h4>
                <Select defaultValue="light">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">روشن</SelectItem>
                    <SelectItem value="dark">تیره</SelectItem>
                    <SelectItem value="system">سیستم</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">رنگ‌های اصلی</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label>رنگ اصلی</Label>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-8 h-8 bg-primary rounded border"></div>
                      <Input defaultValue="#FFB900" className="flex-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>رنگ فرعی</Label>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-8 h-8 bg-accent rounded border"></div>
                      <Input defaultValue="#CC7A00" className="flex-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>رنگ موفقیت</Label>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-8 h-8 bg-success rounded border"></div>
                      <Input defaultValue="#16A34A" className="flex-1" />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">تنظیمات فونت</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>فونت اصلی</Label>
                    <Select defaultValue="inter">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="vazir">وزیر</SelectItem>
                        <SelectItem value="yekan">یکان</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>اندازه فونت پایه</Label>
                    <Select defaultValue="16">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="14">کوچک (14px)</SelectItem>
                        <SelectItem value="16">متوسط (16px)</SelectItem>
                        <SelectItem value="18">بزرگ (18px)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Shield className="h-5 w-5 inline ml-2" />
                تنظیمات امنیت
              </CardTitle>
              <CardDescription>
                تنظیمات امنیتی و کنترل دسترسی
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">تنظیمات رمز عبور</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>حداقل طول رمز عبور</Label>
                      <p className="text-xs text-muted-foreground">
                        حداقل تعداد کاراکتر مورد نیاز
                      </p>
                    </div>
                    <Input type="number" defaultValue="8" className="w-20" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>نیاز به حروف خاص</Label>
                      <p className="text-xs text-muted-foreground">
                        رمز عبور باید شامل حروف خاص باشد
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>نیاز به عدد</Label>
                      <p className="text-xs text-muted-foreground">
                        رمز عبور باید شامل عدد باشد
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">تنظیمات جلسه</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>مدت انقضای جلسه (دقیقه)</Label>
                      <p className="text-xs text-muted-foreground">
                        جلسه بعد از این مدت منقضی می‌شود
                      </p>
                    </div>
                    <Input type="number" defaultValue="120" className="w-24" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>یادآوری قبل از انقضا</Label>
                      <p className="text-xs text-muted-foreground">
                        هشدار قبل از پایان جلسه
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">محدودیت دسترسی</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>محدودیت IP</Label>
                      <p className="text-xs text-muted-foreground">
                        محدود کردن دسترسی بر اساس IP
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>رمزنگاری SSL اجباری</Label>
                      <p className="text-xs text-muted-foreground">
                        اجبار استفاده از HTTPS
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Bell className="h-5 w-5 inline ml-2" />
                تنظیمات اعلان‌ها
              </CardTitle>
              <CardDescription>
                مدیریت اعلان‌های سیستم و کاربران
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">اعلان‌های ایمیل</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>کاربر جدید</Label>
                      <p className="text-xs text-muted-foreground">
                        اعلان هنگام عضویت کاربر جدید
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>درس جدید</Label>
                      <p className="text-xs text-muted-foreground">
                        اعلان هنگام انتشار درس جدید
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>نظر جدید</Label>
                      <p className="text-xs text-muted-foreground">
                        اعلان هنگام ثبت نظر جدید
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">اعلان‌های داخلی</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>گزارش‌های روزانه</Label>
                      <p className="text-xs text-muted-foreground">
                        ارسال گزارش فعالیت روزانه
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>هشدارهای امنیتی</Label>
                      <p className="text-xs text-muted-foreground">
                        اعلان فعالیت‌های مشکوک
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Mail className="h-5 w-5 inline ml-2" />
                تنظیمات ایمیل
              </CardTitle>
              <CardDescription>
                پیکربندی سرور ایمیل و قالب‌های پیام
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">تنظیمات SMTP</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="smtp-host">سرور SMTP</Label>
                    <Input id="smtp-host" placeholder="smtp.gmail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-port">پورت</Label>
                    <Input id="smtp-port" type="number" placeholder="587" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-username">نام کاربری</Label>
                    <Input id="smtp-username" placeholder="your-email@gmail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-password">رمز عبور</Label>
                    <Input id="smtp-password" type="password" placeholder="••••••••" />
                  </div>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Switch id="smtp-tls" defaultChecked />
                  <Label htmlFor="smtp-tls">استفاده از TLS/SSL</Label>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">ایمیل فرستنده</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="from-name">نام فرستنده</Label>
                    <Input id="from-name" defaultValue="پلتفرم آموزشی مدیریت ورزش" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="from-email">ایمیل فرستنده</Label>
                    <Input id="from-email" defaultValue="noreply@sportsmanagement.edu" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center space-x-2 space-x-reverse">
                <Button variant="outline">
                  <RefreshCw className="h-4 w-4 ml-2" />
                  تست اتصال
                </Button>
                <Button variant="outline">
                  ارسال ایمیل آزمایشی
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Database className="h-5 w-5 inline ml-2" />
                تنظیمات پیشرفته
              </CardTitle>
              <CardDescription>
                تنظیمات فنی و پیشرفته سیستم
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">کش و عملکرد</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>فعال‌سازی کش</Label>
                      <p className="text-xs text-muted-foreground">
                        ذخیره‌سازی موقت برای بهبود سرعت
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>مدت انقضای کش (ساعت)</Label>
                      <p className="text-xs text-muted-foreground">
                        مدت نگهداری فایل‌های کش
                      </p>
                    </div>
                    <Input type="number" defaultValue="24" className="w-20" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">پایگاه داده</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>بک‌آپ خودکار</Label>
                      <p className="text-xs text-muted-foreground">
                        پشتیبان‌گیری روزانه از پایگاه داده
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>حفظ تعداد بک‌آپ</Label>
                      <p className="text-xs text-muted-foreground">
                        تعداد فایل بک‌آپ قابل نگهداری
                      </p>
                    </div>
                    <Input type="number" defaultValue="7" className="w-20" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">عملیات سیستم</h4>
                <div className="flex space-x-2 space-x-reverse">
                  <Button variant="outline">
                    <RefreshCw className="h-4 w-4 ml-2" />
                    پاک کردن کش
                  </Button>
                  <Button variant="outline">
                    <Database className="h-4 w-4 ml-2" />
                    بک‌آپ دستی
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 ml-2" />
                    مشاهده لاگ‌ها
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;