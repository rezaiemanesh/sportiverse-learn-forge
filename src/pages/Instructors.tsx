
import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import { Search, Star, BookOpen, Users, Award, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const Instructors = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const instructors = [
    {
      id: 1,
      name: 'Dr. Sarah Williams',
      title: 'Sports Psychology Expert',
      specialization: 'Team Psychology & Leadership',
      bio: 'Leading expert in sports psychology with 15+ years experience working with professional teams worldwide.',
      rating: 4.9,
      students: 1247,
      courses: 8,
      location: 'New York, USA',
      avatar: 'SW',
      achievements: ['PhD in Sports Psychology', 'Olympic Team Consultant', 'Best Instructor 2023'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b137?w=400'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      title: 'Sports Marketing Strategist',
      specialization: 'Digital Marketing & Brand Management',
      bio: 'Former marketing director for major sports franchises, now dedicated to educating the next generation.',
      rating: 4.8,
      students: 892,
      courses: 5,
      location: 'Los Angeles, USA',
      avatar: 'MC',
      achievements: ['MBA from Stanford', 'Nike Marketing Director', 'TEDx Speaker'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    },
    {
      id: 3,
      name: 'Dr. Emma Johnson',
      title: 'Sports Finance Specialist',
      specialization: 'Financial Management & Analytics',
      bio: 'Expert in sports economics and financial planning for athletic organizations and individual athletes.',
      rating: 4.7,
      students: 654,
      courses: 6,
      location: 'London, UK',
      avatar: 'EJ',
      achievements: ['CFA Charterholder', 'Premier League Consultant', 'Published Author'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
    }
  ];

  const filteredInstructors = instructors.filter(instructor =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instructor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">
            Meet Our Expert Instructors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn from industry leaders, former athletes, and academic experts who bring 
            real-world experience to your sports management education.
          </p>
          
          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search instructors or specializations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 rounded-2xl border-2 border-gray-200 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">24</h3>
            <p className="text-gray-600">Expert Instructors</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">15+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">156</h3>
            <p className="text-gray-600">Courses Created</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">4.8</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInstructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group">
              <div className="relative">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{instructor.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{instructor.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{instructor.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{instructor.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{instructor.specialization}</p>
                </div>
                
                <p className="text-gray-700 text-sm mb-6 line-clamp-3">{instructor.bio}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-800">{instructor.courses}</p>
                    <p className="text-xs text-gray-500">Courses</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-800">{instructor.students.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Students</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-800">{instructor.rating}</p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Achievements</h4>
                  <div className="space-y-2">
                    {instructor.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Twitter className="w-4 h-4 text-blue-400" />
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join as Instructor CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Become an Instructor</h2>
            <p className="text-xl mb-8 opacity-90">
              Share your expertise with thousands of students worldwide and make an impact in sports management education.
            </p>
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg">
              Apply to Teach
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Instructors;
