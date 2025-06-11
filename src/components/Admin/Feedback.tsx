
import React from 'react';
import { MessageSquare, FileText, Star, ThumbsUp, ThumbsDown, Eye, Reply } from 'lucide-react';
import { Button } from '../ui/button';

interface FeedbackProps {
  activeTab: string;
}

const Feedback: React.FC<FeedbackProps> = ({ activeTab }) => {
  const comments = [
    {
      id: 1,
      user: 'Sarah Johnson',
      lesson: 'Sports Leadership Fundamentals',
      comment: 'This lesson was incredibly insightful! The examples from real sports teams really helped me understand the concepts better.',
      rating: 5,
      date: '2024-01-15',
      status: 'approved'
    },
    {
      id: 2,
      user: 'Mike Chen',
      lesson: 'Team Psychology & Motivation',
      comment: 'Great content, but I think it could use more interactive elements to keep students engaged.',
      rating: 4,
      date: '2024-01-14',
      status: 'pending'
    }
  ];

  const reports = [
    {
      id: 1,
      reporter: 'Emma Davis',
      type: 'Content Issue',
      subject: 'Outdated statistics in Marketing lesson',
      description: 'The sports marketing statistics mentioned in lesson 3 appear to be from 2019 and should be updated.',
      priority: 'Medium',
      status: 'Under Review'
    },
    {
      id: 2,
      reporter: 'Alex Smith',
      type: 'Technical Issue',
      subject: 'Video not loading properly',
      description: 'The video in the Team Psychology lesson keeps buffering and won\'t play completely.',
      priority: 'High',
      status: 'Open'
    }
  ];

  const suggestions = [
    {
      id: 1,
      user: 'Dr. Williams',
      title: 'Add Virtual Reality Training Module',
      description: 'Consider adding VR-based training scenarios for leadership decision-making in high-pressure sports situations.',
      votes: 23,
      category: 'Feature Request',
      status: 'Under Review'
    },
    {
      id: 2,
      user: 'Coach Martinez',
      title: 'Mobile App Development',
      description: 'A mobile app would make it easier for students to access lessons during travel or between training sessions.',
      votes: 18,
      category: 'Platform',
      status: 'Planned'
    }
  ];

  const renderComments = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <MessageSquare className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Comments</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold text-gray-800">124</p>
              <p className="text-sm text-gray-600">Total Comments</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3">
            <ThumbsUp className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold text-gray-800">89</p>
              <p className="text-sm text-gray-600">Approved</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3">
            <Eye className="w-8 h-8 text-yellow-600" />
            <div>
              <p className="text-2xl font-bold text-gray-800">35</p>
              <p className="text-sm text-gray-600">Pending Review</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {comment.user.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{comment.user}</h3>
                  <p className="text-sm text-gray-500">on "{comment.lesson}"</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < comment.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  comment.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {comment.status}
                </span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{comment.comment}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{comment.date}</span>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Reply className="w-4 h-4 mr-1" />
                  Reply
                </Button>
                {comment.status === 'pending' && (
                  <>
                    <Button variant="ghost" size="sm" className="text-green-600">
                      <ThumbsUp className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <ThumbsDown className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <FileText className="w-6 h-6 text-red-600" />
        <h2 className="text-2xl font-bold text-gray-800">Reports</h2>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{report.subject}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    report.priority === 'High' ? 'bg-red-100 text-red-800' :
                    report.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {report.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Reported by: {report.reporter}</p>
                <p className="text-gray-700">{report.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                report.status === 'Open' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {report.status}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Type: {report.type}</span>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">View Details</Button>
                <Button variant="default" size="sm">Resolve</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSuggestions = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Star className="w-6 h-6 text-yellow-600" />
        <h2 className="text-2xl font-bold text-gray-800">Suggestions</h2>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{suggestion.title}</h3>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                    {suggestion.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">by {suggestion.user}</p>
                <p className="text-gray-700">{suggestion.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-gray-800">{suggestion.votes}</span>
                  </div>
                  <p className="text-xs text-gray-500">votes</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  suggestion.status === 'Planned' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {suggestion.status}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-green-600">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Upvote
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Comment
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">View Full</Button>
                <Button variant="default" size="sm">Consider</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  switch (activeTab) {
    case 'comments':
      return renderComments();
    case 'reports':
      return renderReports();
    case 'suggestions':
      return renderSuggestions();
    default:
      return renderComments();
  }
};

export default Feedback;
