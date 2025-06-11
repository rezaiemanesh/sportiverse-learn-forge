
import React from 'react';
import { UserCheck, GraduationCap, Settings, Plus, Search, Edit3, Trash2, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface UserManagementProps {
  activeTab: string;
}

const UserManagement: React.FC<UserManagementProps> = ({ activeTab }) => {
  const instructors = [
    {
      id: 1,
      name: 'Dr. Sarah Williams',
      email: 'sarah.williams@sportiverse.com',
      expertise: 'Sports Psychology',
      courses: 8,
      students: 234,
      rating: 4.9,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      email: 'michael.chen@sportiverse.com',
      expertise: 'Sports Marketing',
      courses: 5,
      students: 189,
      rating: 4.7,
      status: 'Active'
    }
  ];

  const students = [
    {
      id: 1,
      name: 'Emma Johnson',
      email: 'emma.j@email.com',
      enrolledCourses: 3,
      completedCourses: 1,
      progress: 85,
      joinDate: '2024-01-10',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Alex Smith',
      email: 'alex.smith@email.com',
      enrolledCourses: 2,
      completedCourses: 2,
      progress: 100,
      joinDate: '2024-01-05',
      status: 'Active'
    }
  ];

  const roles = [
    { id: 1, name: 'Super Admin', users: 1, permissions: ['All'] },
    { id: 2, name: 'Admin', users: 2, permissions: ['Manage Content', 'Manage Users'] },
    { id: 3, name: 'Instructor', users: 15, permissions: ['Create Content', 'Grade Students'] },
    { id: 4, name: 'Student', users: 2847, permissions: ['View Content', 'Submit Assignments'] }
  ];

  const renderInstructors = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <UserCheck className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Instructors</h2>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Instructor
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input placeholder="Search instructors..." className="pl-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{instructor.name}</h3>
                  <p className="text-sm text-gray-600">{instructor.expertise}</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                {instructor.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{instructor.courses}</p>
                <p className="text-xs text-gray-500">Courses</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{instructor.students}</p>
                <p className="text-xs text-gray-500">Students</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">{instructor.rating}</p>
                <p className="text-xs text-gray-500">Rating</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{instructor.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Edit3 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-600">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <GraduationCap className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">Students</h2>
        </div>
        <Button className="bg-gradient-to-r from-green-500 to-blue-500">
          <Plus className="w-4 h-4 mr-2" />
          Add Student
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Student</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Enrolled</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Completed</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Progress</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Join Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{student.name}</h3>
                        <p className="text-sm text-gray-500">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.enrolledCourses}</td>
                  <td className="px-6 py-4 text-gray-600">{student.completedCourses}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.joinDate}</td>
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

  const renderRoles = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Settings className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-800">Roles & Permissions</h2>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
          <Plus className="w-4 h-4 mr-2" />
          Add Role
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <div key={role.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">{role.name}</h3>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Edit3 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-600">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{role.users} users with this role</p>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Permissions:</p>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  switch (activeTab) {
    case 'instructors':
      return renderInstructors();
    case 'students':
      return renderStudents();
    case 'roles':
      return renderRoles();
    default:
      return renderInstructors();
  }
};

export default UserManagement;
