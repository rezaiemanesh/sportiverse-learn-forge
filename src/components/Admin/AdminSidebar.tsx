
import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Image, 
  BarChart3, 
  MessageSquare, 
  Settings,
  ChevronDown,
  ChevronRight,
  BookOpen,
  FolderOpen,
  UserCheck,
  GraduationCap,
  TrendingUp,
  Star
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  children?: MenuItem[];
}

const AdminSidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['content']);

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      id: 'content',
      label: 'Content',
      icon: FileText,
      children: [
        { id: 'lessons', label: 'Add/Edit Lesson', icon: BookOpen },
        { id: 'categories', label: 'Categories', icon: FolderOpen },
        { id: 'series', label: 'Series', icon: GraduationCap }
      ]
    },
    {
      id: 'users',
      label: 'Users',
      icon: Users,
      children: [
        { id: 'instructors', label: 'Manage Instructors', icon: UserCheck },
        { id: 'students', label: 'Students', icon: GraduationCap },
        { id: 'roles', label: 'Roles', icon: Settings }
      ]
    },
    {
      id: 'media',
      label: 'Media Library',
      icon: Image
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      children: [
        { id: 'engagement', label: 'Engagement Graphs', icon: TrendingUp },
        { id: 'popularity', label: 'Lesson Popularity', icon: Star }
      ]
    },
    {
      id: 'feedback',
      label: 'Feedback',
      icon: MessageSquare,
      children: [
        { id: 'comments', label: 'Comments', icon: MessageSquare },
        { id: 'reports', label: 'Reports', icon: FileText },
        { id: 'suggestions', label: 'Suggestions', icon: Star }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings
    }
  ];

  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const isExpanded = expandedMenus.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = activeSection === item.id;

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleMenu(item.id);
            } else {
              onSectionChange(item.id);
            }
          }}
          className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-xl transition-all duration-200 ${
            isActive 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
              : 'text-gray-700 hover:bg-gray-100'
          } ${depth > 0 ? 'ml-4 mr-2' : 'mx-2'}`}
        >
          <div className="flex items-center">
            <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-gray-500'}`} />
            <span className="font-medium">{item.label}</span>
          </div>
          {hasChildren && (
            isExpanded ? 
              <ChevronDown className="w-4 h-4" /> : 
              <ChevronRight className="w-4 h-4" />
          )}
        </button>
        
        {hasChildren && isExpanded && (
          <div className="mt-1 mb-2">
            {item.children?.map(child => renderMenuItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-800">SportiVerse</h1>
            <p className="text-sm text-gray-500">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map(item => renderMenuItem(item))}
      </nav>

      {/* User Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">A</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">Administrator</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
