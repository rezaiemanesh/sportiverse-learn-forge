
import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import { Search, Filter, BookOpen, Users, Star, Clock } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const searchResults = [
    {
      type: 'course',
      title: 'Sports Leadership Fundamentals',
      description: 'Master the fundamentals of leading in sports environments through practical examples and case studies.',
      instructor: 'Dr. Sarah Williams',
      rating: 4.9,
      students: 234,
      duration: '6 weeks',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300'
    },
    {
      type: 'instructor',
      title: 'Prof. Michael Chen',
      description: 'Sports Marketing Strategist with 15+ years experience in digital marketing and brand management.',
      specialization: 'Digital Marketing & Brand Management',
      rating: 4.8,
      students: 892,
      courses: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300'
    },
    {
      type: 'course',
      title: 'Team Psychology & Motivation',
      description: 'Understand the psychological aspects of team dynamics and motivation strategies.',
      instructor: 'Prof. Michael Chen',
      rating: 4.8,
      students: 189,
      duration: '8 weeks',
      price: '$99',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=300'
    },
    {
      type: 'article',
      title: 'The Future of Sports Analytics',
      description: 'Exploring how data analytics is revolutionizing decision-making in professional sports.',
      author: 'Dr. Emma Johnson',
      readTime: '8 min read',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Results' },
    { id: 'course', label: 'Courses' },
    { id: 'instructor', label: 'Instructors' },
    { id: 'article', label: 'Articles' }
  ];

  const filteredResults = searchResults.filter(result => 
    selectedFilter === 'all' || result.type === selectedFilter
  );

  const renderResult = (result: any, index: number) => {
    switch (result.type) {
      case 'course':
        return (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <img 
                src={result.image} 
                alt={result.title}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    Course
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    result.price === 'Free' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {result.price}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{result.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{result.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="font-medium">{result.instructor}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{result.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{result.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{result.duration}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">View Course</Button>
            </div>
          </div>
        );

      case 'instructor':
        return (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <img 
                src={result.image} 
                alt={result.title}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    Instructor
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{result.title}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{result.specialization}</p>
                <p className="text-gray-600 text-sm mb-3">{result.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{result.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{result.students} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{result.courses} courses</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">View Profile</Button>
            </div>
          </div>
        );

      case 'article':
        return (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <img 
                src={result.image} 
                alt={result.title}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                    Article
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                    {result.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{result.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{result.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="font-medium">{result.author}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{result.readTime}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">Read Article</Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Search Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold gradient-text-primary mb-6">Search Results</h1>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search courses, instructors, articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 rounded-2xl border-2 border-gray-200 focus:border-blue-500"
            />
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Found <span className="font-semibold">{filteredResults.length}</span> results
              {searchTerm && (
                <span> for "<span className="font-semibold">{searchTerm}</span>"</span>
              )}
            </p>
            <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
              <option>Sort by relevance</option>
              <option>Sort by rating</option>
              <option>Sort by newest</option>
              <option>Sort by price</option>
            </select>
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-6">
          {filteredResults.map((result, index) => renderResult(result, index))}
        </div>

        {/* No Results */}
        {filteredResults.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
            <Button variant="outline">Browse All Courses</Button>
          </div>
        )}

        {/* Related Searches */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Searches</h3>
          <div className="flex flex-wrap gap-3">
            {['Sports Leadership', 'Team Psychology', 'Marketing Strategy', 'Analytics', 'Finance Management'].map((term, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
