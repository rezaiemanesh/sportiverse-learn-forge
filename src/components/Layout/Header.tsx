import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X, Trophy, User, LogOut, Settings, BookOpen, Users, Calendar, Search } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header: React.FC = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'صفحه اصلی', href: '/', icon: Trophy },
    { name: 'دوره‌ها', href: '/courses', icon: BookOpen },
    { name: 'مربیان', href: '/instructors', icon: Users },
    { name: 'رویدادها', href: '/events', icon: Calendar },
    { name: 'تماس با ما', href: '/contact', icon: User },
  ];

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="relative">
              <Trophy className="h-8 w-8 text-primary animate-pulse-glow" />
              <div className="absolute -inset-1 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              پلتفرم آموزشی مدیریت ورزش
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 space-x-reverse">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1 space-x-reverse">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                            isActivePage(item.href)
                              ? 'bg-accent text-accent-foreground'
                              : 'text-foreground/80'
                          }`}
                        >
                          <Icon className="w-4 h-4 ml-2" />
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search */}
            <Button variant="outline" size="sm" asChild>
              <Link to="/search">
                <Search className="w-4 h-4 ml-2" />
                جستجو
              </Link>
            </Button>

            {/* User Menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 ml-2" />
                    {user?.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">
                      <User className="w-4 h-4 ml-2" />
                      داشبورد
                    </Link>
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin">
                        <Settings className="w-4 h-4 ml-2" />
                        پنل مدیریت
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="w-4 h-4 ml-2" />
                    خروج
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild>
                <Link to="/login">ورود / ثبت نام</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 space-x-reverse px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActivePage(item.href)
                          ? 'bg-accent text-accent-foreground'
                          : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
                
                <div className="border-t pt-4">
                  <Link
                    to="/search"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 space-x-reverse px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Search className="w-5 h-5" />
                    <span>جستجو</span>
                  </Link>
                </div>

                <div className="border-t pt-4">
                  {isAuthenticated ? (
                    <div className="space-y-2">
                      <Link
                        to="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 space-x-reverse px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                      >
                        <User className="w-5 h-5" />
                        <span>داشبورد ({user?.name})</span>
                      </Link>
                      {isAdmin && (
                        <Link
                          to="/admin"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 space-x-reverse px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                        >
                          <Settings className="w-5 h-5" />
                          <span>پنل مدیریت</span>
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="flex items-center space-x-3 space-x-reverse px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground w-full text-right"
                      >
                        <LogOut className="w-5 h-5" />
                        <span>خروج</span>
                      </button>
                    </div>
                  ) : (
                    <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                      <Link to="/login">ورود / ثبت نام</Link>
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;