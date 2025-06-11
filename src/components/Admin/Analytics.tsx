
import React from 'react';
import { TrendingUp, Star, Users, BookOpen, BarChart3, Calendar } from 'lucide-react';

interface AnalyticsProps {
  activeTab: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ activeTab }) => {
  const engagementData = [
    { date: '2024-01-10', views: 120, interactions: 45 },
    { date: '2024-01-11', views: 135, interactions: 52 },
    { date: '2024-01-12', views: 158, interactions: 68 },
    { date: '2024-01-13', views: 142, interactions: 59 },
    { date: '2024-01-14', views: 178, interactions: 73 },
    { date: '2024-01-15', views: 195, interactions: 89 }
  ];

  const popularLessons = [
    { title: 'Sports Leadership Fundamentals', views: 2340, rating: 4.9, completion: 87 },
    { title: 'Team Psychology & Motivation', views: 1890, rating: 4.8, completion: 82 },
    { title: 'Sports Marketing Strategy', views: 1654, rating: 4.7, completion: 79 },
    { title: 'Athletic Performance Analysis', views: 1432, rating: 4.6, completion: 74 }
  ];

  const renderEngagement = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <TrendingUp className="w-6 h-6 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">Engagement Analytics</h2>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <span className="text-green-600 text-sm font-medium">+15.3%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">12,459</h3>
          <p className="text-gray-600">Total Page Views</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-green-600" />
            <span className="text-green-600 text-sm font-medium">+8.7%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">2,847</h3>
          <p className="text-gray-600">Active Users</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <BookOpen className="w-8 h-8 text-purple-600" />
            <span className="text-green-600 text-sm font-medium">+12.1%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">4.2</h3>
          <p className="text-gray-600">Avg. Session Duration</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-8 h-8 text-orange-600" />
            <span className="text-green-600 text-sm font-medium">+5.4%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">73%</h3>
          <p className="text-gray-600">Course Completion</p>
        </div>
      </div>

      {/* Engagement Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Daily Engagement Trends</h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {engagementData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex flex-col space-y-1">
                <div 
                  className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md"
                  style={{ height: `${(data.views / 200) * 100}px` }}
                ></div>
                <div 
                  className="bg-gradient-to-t from-green-500 to-green-400 rounded-t-md"
                  style={{ height: `${(data.interactions / 100) * 100}px` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">{data.date.slice(-2)}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-600">Views</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-sm text-gray-600">Interactions</span>
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Top Performing Content</h3>
        <div className="space-y-4">
          {['Sports Leadership Fundamentals', 'Team Psychology', 'Marketing Strategy'].map((content, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold ${
                  index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                }`}>
                  {index + 1}
                </div>
                <span className="font-medium text-gray-800">{content}</span>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-800">{2340 - (index * 300)} views</p>
                <p className="text-sm text-gray-500">This week</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPopularity = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Star className="w-6 h-6 text-yellow-600" />
        <h2 className="text-2xl font-bold text-gray-800">Lesson Popularity</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Lesson</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Views</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rating</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Completion Rate</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {popularLessons.map((lesson, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-500' : 'bg-blue-500'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-800">{lesson.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-800">{lesson.views.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium text-gray-800">{lesson.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" 
                          style={{ width: `${lesson.completion}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{lesson.completion}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-medium">↗ +12%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Categories Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Leadership', lessons: 15, avgRating: 4.8, color: 'blue' },
          { name: 'Psychology', lessons: 12, avgRating: 4.7, color: 'green' },
          { name: 'Marketing', lessons: 8, avgRating: 4.6, color: 'orange' }
        ].map((category, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className={`w-12 h-12 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-xl flex items-center justify-center mb-4`}>
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Lessons</span>
                <span className="font-semibold text-gray-800">{category.lessons}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Avg. Rating</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-800">{category.avgRating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  switch (activeTab) {
    case 'engagement':
      return renderEngagement();
    case 'popularity':
      return renderPopularity();
    default:
      return renderEngagement();
  }
};

export default Analytics;
