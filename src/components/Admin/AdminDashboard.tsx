
import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import DashboardOverview from './DashboardOverview';
import ContentManagement from './ContentManagement';
import UserManagement from './UserManagement';
import MediaLibrary from './MediaLibrary';
import Analytics from './Analytics';
import Feedback from './Feedback';
import AdminSettings from './AdminSettings';
import { useAuth } from '../../hooks/useAuth';
import { LogOut, Bell } from 'lucide-react';
import { Button } from '../ui/button';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const { logout, user } = useAuth();

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'lessons':
      case 'categories':
      case 'series':
        return <ContentManagement activeTab={activeSection} />;
      case 'instructors':
      case 'students':
      case 'roles':
        return <UserManagement activeTab={activeSection} />;
      case 'media':
        return <MediaLibrary />;
      case 'engagement':
      case 'popularity':
        return <Analytics activeTab={activeSection} />;
      case 'comments':
      case 'reports':
      case 'suggestions':
        return <Feedback activeTab={activeSection} />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 capitalize">
                {activeSection === 'dashboard' ? 'Dashboard' : activeSection.replace(/([A-Z])/g, ' $1')}
              </h1>
              <p className="text-gray-600">Manage your sports education platform</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              
              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">{user?.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                </div>
                <Button
                  onClick={logout}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
