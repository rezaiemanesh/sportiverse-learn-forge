
import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import { 
  Play, 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Award, 
  CheckCircle, 
  MessageSquare,
  Download,
  Share2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const course = {
    id: 1,
    title: 'Sports Leadership Fundamentals',
    instructor: {
      name: 'Dr. Sarah Williams',
      bio: 'Leading expert in sports psychology with 15+ years experience',
      avatar: 'SW',
      rating: 4.9,
      students: 1247
    },
    category: 'Leadership',
    level: 'Beginner',
    duration: '6 weeks',
    students: 234,
    rating: 4.9,
    totalRatings: 127,
    price: 'Free',
    description: 'Master the fundamentals of leading in sports environments through practical examples and case studies from professional teams worldwide.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    whatYouLearn: [
      'Understand core leadership principles in sports',
      'Develop effective communication strategies',
      'Learn team motivation techniques',
      'Apply leadership theory to real scenarios',
      'Build confidence in decision-making'
    ],
    curriculum: [
      {
        week: 1,
        title: 'Introduction to Sports Leadership',
        lessons: [
          { title: 'What Makes a Great Sports Leader?', duration: '15 min', type: 'video' },
          { title: 'Historical Examples of Leadership', duration: '20 min', type: 'reading' },
          { title: 'Leadership Styles Assessment', duration: '10 min', type: 'quiz' }
        ]
      },
      {
        week: 2,
        title: 'Communication & Team Dynamics',
        lessons: [
          { title: 'Effective Communication Strategies', duration: '25 min', type: 'video' },
          { title: 'Managing Team Conflicts', duration: '18 min', type: 'video' },
          { title: 'Practice Scenarios', duration: '30 min', type: 'assignment' }
        ]
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      user: 'Alex Johnson',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent course! The real-world examples really helped me understand the concepts better.'
    },
    {
      id: 2,
      user: 'Maria Garcia',
      rating: 5,
      date: '1 month ago',
      comment: 'Dr. Williams explains complex leadership concepts in such an accessible way. Highly recommend!'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About This Course</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{course.description}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-200">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'curriculum':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Course Curriculum</h3>
            {course.curriculum.map((week, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                  <h4 className="text-lg font-bold text-gray-800">Week {week.week}: {week.title}</h4>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {week.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            lesson.type === 'video' ? 'bg-blue-100' :
                            lesson.type === 'reading' ? 'bg-green-100' :
                            'bg-orange-100'
                          }`}>
                            {lesson.type === 'video' ? <Play className="w-5 h-5 text-blue-600" /> :
                             lesson.type === 'reading' ? <BookOpen className="w-5 h-5 text-green-600" /> :
                             <Award className="w-5 h-5 text-orange-600" />}
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800">{lesson.title}</h5>
                            <p className="text-sm text-gray-500 capitalize">{lesson.type} • {lesson.duration}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'instructor':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {course.instructor.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.instructor.name}</h3>
                  <p className="text-gray-600 mb-4">{course.instructor.bio}</p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-xl font-bold text-gray-800">{course.instructor.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600">Instructor Rating</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-800">{course.instructor.students.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Students</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-800">8</p>
                      <p className="text-sm text-gray-600">Courses</p>
                    </div>
                  </div>
                  
                  <Button variant="outline">View Full Profile</Button>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-800">Student Reviews</h3>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="text-xl font-bold text-gray-800">{course.rating}</span>
                <span className="text-gray-600">({course.totalRatings} reviews)</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {review.user.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{review.user}</h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
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
      
      <main className="container mx-auto px-6 py-8">
        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden mb-6">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button className="bg-white/90 hover:bg-white text-blue-600 rounded-full w-16 h-16 p-0">
                  <Play className="w-8 h-8" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {course.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.level}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>
              
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                  <span>({course.totalRatings} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-5 h-5" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enrollment Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{course.price}</div>
                {course.price !== 'Free' && (
                  <p className="text-gray-500 line-through">$199</p>
                )}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-14 text-lg font-semibold rounded-2xl mb-4">
                Enroll Now
              </Button>
              
              <div className="space-y-3 text-center text-sm text-gray-600">
                <p>✅ Lifetime access</p>
                <p>✅ Certificate of completion</p>
                <p>✅ 30-day money-back guarantee</p>
              </div>
              
              <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-gray-200">
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content Tabs */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8 py-4">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'curriculum', label: 'Curriculum' },
                { id: 'instructor', label: 'Instructor' },
                { id: 'reviews', label: 'Reviews' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-4 font-medium rounded-lg transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-8">
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
