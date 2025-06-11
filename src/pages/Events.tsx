
import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import { Calendar, MapPin, Clock, Users, Star, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Sports Leadership Summit 2024',
      type: 'Conference',
      date: '2024-03-15',
      time: '09:00 AM - 05:00 PM',
      location: 'Virtual + New York',
      attendees: 250,
      maxAttendees: 500,
      price: 'Free',
      featured: true,
      description: 'Join industry leaders for a full day of insights into modern sports leadership challenges and solutions.',
      speakers: ['Dr. Sarah Williams', 'Coach Mike Johnson', 'CEO Lisa Chen'],
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600'
    },
    {
      id: 2,
      title: 'Digital Marketing for Sports Teams',
      type: 'Workshop',
      date: '2024-03-20',
      time: '02:00 PM - 04:00 PM',
      location: 'Online',
      attendees: 89,
      maxAttendees: 100,
      price: '$29',
      featured: false,
      description: 'Hands-on workshop covering social media strategies, content creation, and fan engagement tactics.',
      speakers: ['Prof. Michael Chen'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'
    },
    {
      id: 3,
      title: 'Sports Analytics Masterclass',
      type: 'Masterclass',
      date: '2024-03-25',
      time: '06:00 PM - 08:00 PM',
      location: 'Los Angeles',
      attendees: 45,
      maxAttendees: 75,
      price: '$99',
      featured: true,
      description: 'Deep dive into advanced analytics techniques used by professional sports organizations.',
      speakers: ['Dr. Emma Johnson', 'Analytics Director Tom Wilson'],
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600'
    }
  ];

  const categories = ['all', 'Conference', 'Workshop', 'Masterclass', 'Webinar'];
  
  const filteredEvents = events.filter(event => 
    selectedCategory === 'all' || event.type === selectedCategory
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">
            Events & Workshops
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join live events, workshops, and masterclasses with industry experts. 
            Network with peers and gain practical insights you can apply immediately.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Events' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Events Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">12</h3>
            <p className="text-gray-600">Upcoming Events</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">1,247</h3>
            <p className="text-gray-600">Total Attendees</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">4.9</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">Virtual</h3>
            <p className="text-gray-600">& In-Person</p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="space-y-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className={`bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-500 ${event.featured ? 'ring-2 ring-blue-200' : ''}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="relative lg:col-span-1">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  {event.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-medium">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.price === 'Free' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {event.price}
                    </span>
                  </div>
                </div>
                
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                          {event.type}
                        </span>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees}/{event.maxAttendees} registered</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-2">Featured Speakers:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.speakers.map((speaker, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Registration Progress</span>
                      <span className="text-sm font-medium text-gray-800">
                        {Math.round((event.attendees / event.maxAttendees) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {event.maxAttendees - event.attendees} spots remaining
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button variant="outline">
                        Learn More
                      </Button>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Host an Event CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Want to Host an Event?</h2>
            <p className="text-xl mb-8 opacity-90">
              Share your expertise with our community. We provide the platform and audience for your knowledge.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg">
              Propose an Event
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
