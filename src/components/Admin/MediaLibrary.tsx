
import React, { useState } from 'react';
import { Upload, Image, Video, File, Search, Grid, List, Download, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const MediaLibrary = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const mediaFiles = [
    {
      id: 1,
      name: 'sports-leadership-diagram.png',
      type: 'image',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
    },
    {
      id: 2,
      name: 'team-psychology-video.mp4',
      type: 'video',
      size: '45.2 MB',
      uploadDate: '2024-01-14',
      url: null
    },
    {
      id: 3,
      name: 'marketing-strategy-presentation.pdf',
      type: 'document',
      size: '8.7 MB',
      uploadDate: '2024-01-13',
      url: null
    },
    {
      id: 4,
      name: 'sports-analytics-chart.jpg',
      type: 'image',
      size: '1.8 MB',
      uploadDate: '2024-01-12',
      url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400'
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="w-8 h-8 text-blue-600" />;
      case 'video':
        return <Video className="w-8 h-8 text-red-600" />;
      case 'document':
        return <File className="w-8 h-8 text-green-600" />;
      default:
        return <File className="w-8 h-8 text-gray-600" />;
    }
  };

  const renderGridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mediaFiles.map((file) => (
        <div key={file.id} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
          <div className="aspect-square bg-gray-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
            {file.url ? (
              <img 
                src={file.url} 
                alt={file.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            ) : (
              getFileIcon(file.type)
            )}
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800 truncate" title={file.name}>
              {file.name}
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{file.size}</span>
              <span>{file.uploadDate}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-red-600">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">File</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Size</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Upload Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mediaFiles.map((file) => (
              <tr key={file.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    {getFileIcon(file.type)}
                    <span className="font-medium text-gray-800">{file.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    file.type === 'image' ? 'bg-blue-100 text-blue-800' :
                    file.type === 'video' ? 'bg-red-100 text-red-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {file.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{file.size}</td>
                <td className="px-6 py-4 text-gray-600">{file.uploadDate}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
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
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-800">Media Library</h2>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
          <Upload className="w-4 h-4 mr-2" />
          Upload Files
        </Button>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-purple-400 transition-colors">
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Drop files here to upload</h3>
        <p className="text-gray-500 mb-4">or click to browse from your computer</p>
        <Button variant="outline">Choose Files</Button>
        <p className="text-sm text-gray-400 mt-2">Supports: Images, Videos, Documents (Max 50MB)</p>
      </div>

      {/* Search and View Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* File Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3">
            <Image className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold text-gray-800">2</p>
              <p className="text-sm text-gray-600">Images</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3">
            <Video className="w-8 h-8 text-red-600" />
            <div>
              <p className="text-2xl font-bold text-gray-800">1</p>
              <p className="text-sm text-gray-600">Videos</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3">
            <File className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold text-gray-800">1</p>
              <p className="text-sm text-gray-600">Documents</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3">
            <Upload className="w-8 h-8 text-purple-600" />
            <div>
              <p className="text-2xl font-bold text-gray-800">58MB</p>
              <p className="text-sm text-gray-600">Total Size</p>
            </div>
          </div>
        </div>
      </div>

      {/* Files Display */}
      {viewMode === 'grid' ? renderGridView() : renderListView()}
    </div>
  );
};

export default MediaLibrary;
