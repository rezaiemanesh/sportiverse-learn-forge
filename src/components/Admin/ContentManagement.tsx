
import React, { useState } from 'react';
import { Plus, Search, Edit3, Trash2, Eye, BookOpen, FolderOpen, GraduationCap } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface ContentManagementProps {
  activeTab: string;
}

const ContentManagement: React.FC<ContentManagementProps> = ({ activeTab }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const lessons = [
    {
      id: 1,
      title: 'Sports Leadership Fundamentals',
      category: 'Leadership',
      series: 'Management Basics',
      status: 'Published',
      views: 1234,
      lastModified: '2024-01-15'
    },
    {
      id: 2,
      title: 'Team Psychology & Motivation',
      category: 'Psychology',
      series: 'Mental Game',
      status: 'Draft',
      views: 0,
      lastModified: '2024-01-14'
    },
    {
      id: 3,
      title: 'Sports Marketing Strategy',
      category: 'Marketing',
      series: 'Business Sports',
      status: 'Published',
      views: 856,
      lastModified: '2024-01-13'
    }
  ];

  const categories = [
    { id: 1, name: 'Leadership', lessons: 15, color: 'blue' },
    { id: 2, name: 'Psychology', lessons: 12, color: 'green' },
    { id: 3, name: 'Marketing', lessons: 8, color: 'orange' },
    { id: 4, name: 'Finance', lessons: 6, color: 'purple' }
  ];

  const series = [
    { id: 1, name: 'Management Basics', lessons: 8, category: 'Leadership' },
    { id: 2, name: 'Mental Game', lessons: 6, category: 'Psychology' },
    { id: 3, name: 'Business Sports', lessons: 5, category: 'Marketing' }
  ];

  const renderLessons = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Lessons</h2>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Add New Lesson
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search lessons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Lessons Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Series</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Views</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {lessons.map((lesson) => (
                <tr key={lesson.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <h3 className="font-medium text-gray-800">{lesson.title}</h3>
                      <p className="text-sm text-gray-500">Modified {lesson.lastModified}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {lesson.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{lesson.series}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lesson.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {lesson.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{lesson.views}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCategories = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FolderOpen className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
        </div>
        <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className={`w-12 h-12 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-xl flex items-center justify-center mb-4`}>
              <FolderOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
            <p className="text-gray-600 mb-4">{category.lessons} lessons</p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Edit3 className="w-4 h-4 mr-1" />
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="text-red-600">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSeries = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <GraduationCap className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-800">Series</h2>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Series
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Series Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Lessons</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {series.map((serie) => (
                <tr key={serie.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">{serie.name}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                      {serie.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{serie.lessons} lessons</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  switch (activeTab) {
    case 'lessons':
      return renderLessons();
    case 'categories':
      return renderCategories();
    case 'series':
      return renderSeries();
    default:
      return renderLessons();
  }
};

export default ContentManagement;
