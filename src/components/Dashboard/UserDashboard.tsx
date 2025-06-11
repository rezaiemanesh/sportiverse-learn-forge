
import React from 'react';
import { BookOpen, Users, Trophy, TrendingUp, Clock, Target, Star, Award } from 'lucide-react';
import DashboardCard from './DashboardCard';

interface UserDashboardProps {
  userRole: 'admin' | 'instructor' | 'student';
  userName: string;
}

const UserDashboard = ({ userRole, userName }: UserDashboardProps) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getDashboardData = () => {
    switch (userRole) {
      case 'admin':
        return [
          { title: 'Total Students', value: '2,847', change: '+12%', changeType: 'positive' as const, icon: Users, gradient: 'bg-gradient-to-br from-blue-500 to-purple-500' },
          { title: 'Active Courses', value: '156', change: '+8%', changeType: 'positive' as const, icon: BookOpen, gradient: 'bg-gradient-to-br from-green-500 to-blue-500' },
          { title: 'Total Revenue', value: '$89,247', change: '+15%', changeType: 'positive' as const, icon: TrendingUp, gradient: 'bg-gradient-to-br from-orange-500 to-red-500' },
          { title: 'Completion Rate', value: '87%', change: '+3%', changeType: 'positive' as const, icon: Trophy, gradient: 'bg-gradient-to-br from-purple-500 to-pink-500' }
        ];
      case 'instructor':
        return [
          { title: 'My Students', value: '234', change: '+5%', changeType: 'positive' as const, icon: Users, gradient: 'bg-gradient-to-br from-blue-500 to-purple-500' },
          { title: 'Active Courses', value: '8', change: '+1', changeType: 'positive' as const, icon: BookOpen, gradient: 'bg-gradient-to-br from-green-500 to-blue-500' },
          { title: 'Avg. Rating', value: '4.8', change: '+0.2', changeType: 'positive' as const, icon: Star, gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500' },
          { title: 'Course Hours', value: '127h', change: '+12h', changeType: 'positive' as const, icon: Clock, gradient: 'bg-gradient-to-br from-purple-500 to-pink-500' }
        ];
      default: // student
        return [
          { title: 'Courses Enrolled', value: '12', change: '+2', changeType: 'positive' as const, icon: BookOpen, gradient: 'bg-gradient-to-br from-blue-500 to-purple-500' },
          { title: 'Completed', value: '8', change: '+1', changeType: 'positive' as const, icon: Trophy, gradient: 'bg-gradient-to-br from-green-500 to-blue-500' },
          { title: 'Study Hours', value: '89h', change: '+8h', changeType: 'positive' as const, icon: Clock, gradient: 'bg-gradient-to-br from-orange-500 to-red-500' },
          { title: 'Achievements', value: '23', change: '+3', changeType: 'positive' as const, icon: Award, gradient: 'bg-gradient-to-br from-purple-500 to-pink-500' }
        ];
    }
  };

  const dashboardData = getDashboardData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {getGreeting()}, {userName}! 👋
          </h1>
          <p className="text-xl text-gray-600">
            {userRole === 'admin' && "Manage your platform and monitor performance across all courses and users."}
            {userRole === 'instructor' && "Track your teaching impact and engage with your students effectively."}
            {userRole === 'student' && "Continue your sports management journey and achieve your learning goals."}
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dashboardData.map((item, index) => (
            <DashboardCard key={index} {...item} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userRole === 'admin' && (
              <>
                <button className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 text-left group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Manage Users</h3>
                  <p className="text-gray-600 text-sm">Add, edit, or review user accounts and permissions</p>
                </button>
                <button className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 text-left group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Course Analytics</h3>
                  <p className="text-gray-600 text-sm">View detailed performance metrics and insights</p>
                </button>
                <button className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 text-left group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">System Reports</h3>
                  <p className="text-gray-600 text-sm">Generate comprehensive platform reports</p>
                </button>
              </>
            )}
            
            {userRole === 'instructor' && (
              <>
                <button className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 text-left group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Create Course</h3>
                  <p className="text-gray-600 text-sm">Start building your next educational masterpiece</p>
                </button>
                <button className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 text-left group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Student Progress</h3>
                  <p className="text-gray-600 text-sm">Monitor and support your students' learning journey</p>
                </button>
                <button className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 text-left group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Reviews & Feedback</h3>
                  <p className="text-gray-600 text-sm">View student feedback and course ratings</p>
                </button>
              </>
            )}
            
            {userRole === 'student' && (
              <>
                <button className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 text-left group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Browse Courses</h3>
                  <p className="text-gray-600 text-sm">Discover new sports management courses to expand your knowledge</p>
                </button>
                <button className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 text-left group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Study Goals</h3>
                  <p className="text-gray-600 text-sm">Set and track your personal learning objectives</p>
                </button>
                <button className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 text-left group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Join Discussion</h3>
                  <p className="text-gray-600 text-sm">Connect with fellow students and share insights</p>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
