import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BarChart3,
  BookOpen,
  Calendar,
  FileText,
  Home,
  Image,
  MessageSquare,
  Settings,
  Users,
  Plus,
  Edit,
  Layers,
  TrendingUp,
  Star,
  Bell,
  Shield,
  Globe,
  Palette,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'داشبورد',
    href: '/admin',
    icon: Home,
  },
  {
    title: 'مدیریت محتوا',
    href: '/admin/content',
    icon: BookOpen,
    children: [
      { title: 'افزودن درس', href: '/admin/content/add-lesson', icon: Plus },
      { title: 'ویرایش درس', href: '/admin/content/edit-lesson', icon: Edit },
      { title: 'دسته‌بندی‌ها', href: '/admin/content/categories', icon: Layers },
      { title: 'سری‌های آموزشی', href: '/admin/content/series', icon: Layers },
    ],
  },
  {
    title: 'مدیریت کاربران',
    href: '/admin/users',
    icon: Users,
    children: [
      { title: 'مربیان', href: '/admin/users/instructors', icon: Users },
      { title: 'دانشجویان', href: '/admin/users/students', icon: Users },
      { title: 'نقش‌ها', href: '/admin/users/roles', icon: Shield },
    ],
  },
  {
    title: 'کتابخانه رسانه',
    href: '/admin/media',
    icon: Image,
  },
  {
    title: 'تحلیل و گزارش',
    href: '/admin/analytics',
    icon: BarChart3,
    children: [
      { title: 'نمودار تعامل', href: '/admin/analytics/engagement', icon: TrendingUp },
      { title: 'محبوبیت دروس', href: '/admin/analytics/popularity', icon: Star },
    ],
  },
  {
    title: 'بازخورد و نظرات',
    href: '/admin/feedback',
    icon: MessageSquare,
    children: [
      { title: 'نظرات', href: '/admin/feedback/comments', icon: MessageSquare },
      { title: 'گزارش‌ها', href: '/admin/feedback/reports', icon: FileText },
      { title: 'پیشنهادات', href: '/admin/feedback/suggestions', icon: Star },
    ],
  },
  {
    title: 'تنظیمات',
    href: '/admin/settings',
    icon: Settings,
    children: [
      { title: 'تم و ظاهر', href: '/admin/settings/theme', icon: Palette },
      { title: 'زبان', href: '/admin/settings/language', icon: Globe },
      { title: 'سطوح دسترسی', href: '/admin/settings/access', icon: Shield },
    ],
  },
];

interface AdminSidebarProps {
  isCollapsed?: boolean;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isCollapsed = false }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  const toggleExpanded = (href: string) => {
    setExpandedItems(prev =>
      prev.includes(href)
        ? prev.filter(item => item !== href)
        : [...prev, href]
    );
  };

  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const isItemActive = isActive(item.href);
    const isExpanded = expandedItems.includes(item.href);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.href}>
        <Button
          variant={isItemActive ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start text-right",
            level > 0 && "mr-4",
            isItemActive && "bg-sidebar-accent text-sidebar-accent-foreground"
          )}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.href);
            }
          }}
          asChild={!hasChildren}
        >
          {hasChildren ? (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <item.icon className="h-4 w-4 ml-2" />
                {!isCollapsed && <span>{item.title}</span>}
              </div>
              {item.badge && (
                <Badge variant="secondary" className="mr-auto">
                  {item.badge}
                </Badge>
              )}
            </div>
          ) : (
            <Link to={item.href} className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <item.icon className="h-4 w-4 ml-2" />
                {!isCollapsed && <span>{item.title}</span>}
              </div>
              {item.badge && (
                <Badge variant="secondary" className="mr-auto">
                  {item.badge}
                </Badge>
              )}
            </Link>
          )}
        </Button>

        {hasChildren && (isExpanded || isCollapsed) && !isCollapsed && (
          <div className="mr-4 mt-1 space-y-1">
            {item.children!.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={cn(
      "flex h-screen flex-col bg-sidebar border-r transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex h-16 items-center border-b px-4">
        {!isCollapsed && (
          <div className="flex items-center space-x-2 space-x-reverse">
            <Shield className="h-6 w-6 text-sidebar-primary" />
            <span className="font-bold text-sidebar-foreground">پنل مدیریت</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto py-4">
        <div className="px-3 space-y-1">
          {sidebarItems.map(item => renderSidebarItem(item))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        {!isCollapsed && (
          <div className="text-xs text-sidebar-foreground/60 text-center">
            نسخه 1.0.0
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;