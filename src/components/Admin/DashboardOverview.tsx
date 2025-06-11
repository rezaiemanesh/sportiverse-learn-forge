
import React from 'react';
import { Users, BookOpen, MessageSquare, Eye, TrendingUp, Clock, Star, Award } from 'lucide-react';
import DashboardCard from '../Dashboard/DashboardCard';

const DashboardOverview = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: Users,
      gradient: 'bg-gradient-to-br from-blue-500 to-purple-600'
    },
    {
      title: 'Lessons Published',
      value: '156',
      change: '+8 this week',
      changeType: 'positive' as const,
      icon: BookOpen,
      gradient: 'bg-gradient-to-br from-green-500 to-blue-500'
    },
    {
      title: 'Active Discussions',
      value: '89',
      change: '+15.2%',
      changeType: 'positive' as const,
      icon: MessageSquare,
      gradient: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      title: 'Visitor Stats',
      value: '12,459',
      change: '+23.1%',
      changeType: 'positive' as const,
      icon: Eye,
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
    }
  ];

  const recentActivity = [
    {
      user: 'Sarah Johnson',
      action: 'completed "Sports Leadership Fundamentals"',
      time: '2 hours ago',
      avatar: 'SJ'
    },
    {
      user: 'Mike Chen',
      action: 'started new discussion in "Marketing Strategy"',
      time: '4 hours ago',
      avatar: 'MC'
    },
    {
      user: 'Dr. Williams',
      action: 'published new lesson "Team Psychology"',
      time: '6 hours ago',
      avatar: 'DW'
    },
    {
      user: 'Emma Davis',
      action: 'earned "Course Completion" badge',
      time: '1 day ago',
      avatar: 'ED'
    }
  ];

  const popularCourses = [
    { title: 'Sports Leadership Fundamentals', students: 234, rating: 4.8 },
    { title: 'Sports Marketing Strategy', students: 189, rating: 4.7 },
    { title: 'Team Psychology & Motivation', students: 156, rating: 4.9 },
    { title: 'Sports Finance Management', students: 134, rating: 4.6 }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {activity.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Courses */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Popular Courses</h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {popularCourses.map((course, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{course.title}</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500">{course.students} students</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{course.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600">#{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 group">
            <BookOpen className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-gray-800">Create New Lesson</h4>
            <p className="text-sm text-gray-600 mt-1">Add educational content</p>
          </button>
          
          <button className="p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 group">
            <Users className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-gray-800">Manage Users</h4>
            <p className="text-sm text-gray-600 mt-1">Add instructors & students</p>
          </button>
          
          <button className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 group">
            <Award className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-gray-800">View Analytics</h4>
            <p className="text-sm text-gray-600 mt-1">Track performance</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
