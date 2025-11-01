// frontend/src/admin/AdminDashboard.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  BarChart3, 
  Settings, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  TrendingUp, 
  Calendar, 
  DollarSign,
  UserCheck,
  FileText,
  Search,
  Filter,
  MoreVertical
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';

// Mock data for admin dashboard
const mockCourses = [
  {
    id: 1,
    title: "Complete React Developer Course",
    instructor: "Sarah Johnson",
    price: 89.99,
    students: 15234,
    revenue: 1370000,
    status: "published",
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Advanced Node.js & Express",
    instructor: "Michael Chen",
    price: 79.99,
    students: 8765,
    revenue: 700000,
    status: "published",
    createdAt: "2024-02-10"
  },
  {
    id: 3,
    title: "Full Stack TypeScript Mastery",
    instructor: "Emma Rodriguez",
    price: 129.99,
    students: 6432,
    revenue: 836000,
    status: "draft",
    createdAt: "2024-03-05"
  },
  {
    id: 4,
    title: "DevOps & CI/CD Pipeline",
    instructor: "David Kim",
    price: 99.99,
    students: 4210,
    revenue: 420000,
    status: "published",
    createdAt: "2024-03-20"
  }
];

const mockUsers = [
  { id: 1, name: "Alex Thompson", email: "alex@example.com", role: "student", courses: 3, lastActive: "2 hours ago" },
  { id: 2, name: "Maria Garcia", email: "maria@example.com", role: "student", courses: 2, lastActive: "1 day ago" },
  { id: 3, name: "James Wilson", email: "james@example.com", role: "instructor", courses: 5, lastActive: "3 hours ago" },
  { id: 4, name: "Sarah Johnson", email: "sarah@example.com", role: "instructor", courses: 8, lastActive: "Just now" }
];

const mockAnalytics = {
  totalRevenue: 3326000,
  totalStudents: 34641,
  totalCourses: 200,
  monthlyGrowth: 12.5,
  popularCourse: "Complete React Developer Course",
  completionRate: 68
};

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [courseFilter, setCourseFilter] = useState('all');

  // Admin dashboard schema
  const adminSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Admin Dashboard - TechWave Learning",
    "description": "Admin panel for managing courses, users, and platform analytics.",
    "url": "https://techwave-learning.com/admin"
  };

  // Check if user is admin (in real app, this would come from auth context)
  const isAdmin = user?.email === 'admin@techwave.com' || user?.email === 'demo@techwave.com';

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to access admin dashboard</h2>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-4">You don't have permission to access the admin dashboard.</p>
          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Go to Student Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = courseFilter === 'all' || 
                         (courseFilter === 'published' && course.status === 'published') ||
                         (courseFilter === 'draft' && course.status === 'draft');
    return matchesSearch && matchesFilter;
  });

  const handleAddCourse = () => {
    navigate('/admin/courses/new');
  };

  const handleEditCourse = (courseId: number) => {
    navigate(`/admin/courses/${courseId}/edit`);
  };

  const handleDeleteCourse = (courseId: number) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      // In real app, this would call API to delete course
      console.log('Delete course:', courseId);
    }
  };

  return (
    <>
      <SEO
        title="Admin Dashboard"
        description="Admin panel for managing courses, users, and platform analytics."
        keywords="admin dashboard, course management, user management, analytics, content management"
        canonicalUrl="/admin"
        schema={adminSchema}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto border-r border-gray-200">
              <div className="flex items-center flex-shrink-0 px-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">TechWave Admin</span>
              </div>
              <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 px-2 space-y-1">
                  {[
                    { name: 'Dashboard', href: '#overview', icon: LayoutDashboard, id: 'overview' },
                    { name: 'Courses', href: '#courses', icon: BookOpen, id: 'courses' },
                    { name: 'Users', href: '#users', icon: Users, id: 'users' },
                    { name: 'Analytics', href: '#analytics', icon: BarChart3, id: 'analytics' },
                    { name: 'Settings', href: '#settings', icon: Settings, id: 'settings' }
                  ].map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setActiveTab(item.id)}
                      className={`${
                        activeTab === item.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left`}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:pl-64 flex flex-col flex-1">
            {/* Header */}
            <div className="sticky top-0 z-10 md:hidden">
              <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="px-4 py-4 flex justify-between items-center">
                  <h1 className="text-lg font-semibold text-gray-900 capitalize">{activeTab}</h1>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 hover:text-blue-600"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <main className="flex-1">
              <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard Overview</h1>
                      
                      {/* Stats Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              <DollarSign className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                              <p className="text-2xl font-bold text-gray-900">
                                ${Math.round(mockAnalytics.totalRevenue / 1000)}K
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                              <UserCheck className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-600">Total Students</p>
                              <p className="text-2xl font-bold text-gray-900">
                                {mockAnalytics.totalStudents.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                              <BookOpen className="w-6 h-6 text-purple-600" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-600">Total Courses</p>
                              <p className="text-2xl font-bold text-gray-900">
                                {mockAnalytics.totalCourses}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                              <TrendingUp className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-600">Monthly Growth</p>
                              <p className="text-2xl font-bold text-gray-900">
                                {mockAnalytics.monthlyGrowth}%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                          <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Recent Courses</h2>
                          </div>
                          <div className="divide-y divide-gray-200">
                            {mockCourses.slice(0, 3).map((course) => (
                              <div key={course.id} className="px-6 py-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h3 className="text-sm font-medium text-gray-900">{course.title}</h3>
                                    <p className="text-sm text-gray-500">{course.instructor}</p>
                                  </div>
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    course.status === 'published' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {course.status}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                          <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Recent Users</h2>
                          </div>
                          <div className="divide-y divide-gray-200">
                            {mockUsers.slice(0, 3).map((user) => (
                              <div key={user.id} className="px-6 py-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h3 className="text-sm font-medium text-gray-900">{user.name}</h3>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                  </div>
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    user.role === 'instructor' 
                                      ? 'bg-blue-100 text-blue-800' 
                                      : 'bg-gray-100 text-gray-800'
                                  }`}>
                                    {user.role}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Courses Tab */}
                  {activeTab === 'courses' && (
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-semibold text-gray-900">Course Management</h1>
                        <button
                          onClick={handleAddCourse}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add New Course
                        </button>
                      </div>

                      {/* Filters and Search */}
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="text"
                              placeholder="Search courses..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <select
                            value={courseFilter}
                            onChange={(e) => setCourseFilter(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="all">All Status</option>
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                          </select>
                        </div>
                      </div>

                      {/* Courses Table */}
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {filteredCourses.map((course) => (
                                <tr key={course.id} className="hover:bg-gray-50">
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{course.title}</div>
                                    <div className="text-sm text-gray-500">{course.createdAt}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {course.instructor}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    ${course.price}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {course.students.toLocaleString()}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    ${Math.round(course.revenue / 1000)}K
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      course.status === 'published' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                      {course.status}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-end space-x-2">
                                      <button
                                        onClick={() => handleEditCourse(course.id)}
                                        className="text-blue-600 hover:text-blue-900"
                                        title="Edit"
                                      >
                                        <Edit3 className="w-4 h-4" />
                                      </button>
                                      <button
                                        onClick={() => handleDeleteCourse(course.id)}
                                        className="text-red-600 hover:text-red-900"
                                        title="Delete"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                      <button
                                        className="text-gray-600 hover:text-gray-900"
                                        title="View"
                                      >
                                        <Eye className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {filteredCourses.length === 0 && (
                          <div className="px-6 py-12 text-center">
                            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Users Tab */}
                  {activeTab === 'users' && (
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-900 mb-6">User Management</h1>
                      
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {mockUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {user.email}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      user.role === 'instructor' 
                                        ? 'bg-blue-100 text-blue-800' 
                                        : 'bg-gray-100 text-gray-800'
                                    }`}>
                                      {user.role}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {user.courses}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {user.lastActive}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-end space-x-2">
                                      <button className="text-blue-600 hover:text-blue-900">
                                        <Edit3 className="w-4 h-4" />
                                      </button>
                                      <button className="text-red-600 hover:text-red-900">
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Analytics Tab */}
                  {activeTab === 'analytics' && (
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Analytics & Reports</h1>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                          <h3 className="text-lg font-medium text-gray-900 mb-4">Course Performance</h3>
                          <div className="space-y-4">
                            {mockCourses.map((course) => (
                              <div key={course.id}>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm font-medium text-gray-700">{course.title}</span>
                                  <span className="text-sm text-gray-500">{course.students} students</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-blue-600 h-2 rounded-full" 
                                    style={{ width: `${Math.min(100, (course.students / 20000) * 100)}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                          <h3 className="text-lg font-medium text-gray-900 mb-4">Platform Metrics</h3>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Course Completion Rate</span>
                                <span className="text-sm text-gray-500">{mockAnalytics.completionRate}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-green-600 h-2 rounded-full" 
                                  style={{ width: `${mockAnalytics.completionRate}%` }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Most Popular Course</span>
                                <span className="text-sm text-gray-500">React</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Monthly Growth</span>
                                <span className="text-sm text-gray-500">{mockAnalytics.monthlyGrowth}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-orange-600 h-2 rounded-full" 
                                  style={{ width: `${mockAnalytics.monthlyGrowth}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Settings Tab */}
                  {activeTab === 'settings' && (
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Platform Settings</h1>
                      
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Site Title</label>
                                <input
                                  type="text"
                                  defaultValue="TechWave Learning"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Site Description</label>
                                <textarea
                                  rows={3}
                                  defaultValue="Master software engineering with world-class courses"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Settings</h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Stripe Publishable Key</label>
                                <input
                                  type="text"
                                  defaultValue="pk_test_..."
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                  <option>USD - US Dollar</option>
                                  <option>EUR - Euro</option>
                                  <option>GBP - British Pound</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              Save Settings
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;