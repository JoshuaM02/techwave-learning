// frontend/src/pages/Dashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Calendar, Play, CheckCircle, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';

const DashboardPage: React.FC = () => {
  const { user, enrolledCourses, logout } = useAuth();

  // Mock progress data
  const getCourseProgress = (courseId: number) => {
    const course = enrolledCourses.find(c => c.id === courseId);
    return course ? course.progress : 0;
  };

  const getCompletedLessons = (progress: number) => {
    return Math.floor((progress / 100) * 25); // Assuming 25 lessons per course
  };

  const mockCourseDetails = [
    { id: 1, totalLessons: 42, completedLessons: 15, lastAccessed: "2 hours ago" },
    { id: 2, totalLessons: 36, completedLessons: 8, lastAccessed: "1 day ago" },
    { id: 3, totalLessons: 58, completedLessons: 22, lastAccessed: "3 days ago" },
    { id: 4, totalLessons: 28, completedLessons: 5, lastAccessed: "1 week ago" }
  ];

  // Dashboard schema
  const dashboardSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Student Dashboard - TechWave Learning",
    "description": "Access your enrolled courses, track progress, and continue your learning journey.",
    "url": "https://techwave-learning.com/dashboard"
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to access your dashboard</h2>
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

  return (
    <>
      <SEO
        title="Student Dashboard"
        description="Access your enrolled courses, track progress, and continue your learning journey."
        keywords="student dashboard, course progress, learning management, enrolled courses"
        canonicalUrl="/dashboard"
        schema={dashboardSchema}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome back, {user.name}!</p>
              </div>
              <button
                onClick={logout}
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Enrolled Courses</p>
                  <p className="text-2xl font-bold text-gray-900">{enrolledCourses.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed Courses</p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg. Progress</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {enrolledCourses.length > 0 
                      ? Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length) + '%'
                      : '0%'
                    }
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Learning Time</p>
                  <p className="text-2xl font-bold text-gray-900">12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* My Courses */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">My Courses</h2>
            </div>
            
            {enrolledCourses.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No courses enrolled yet</h3>
                <p className="text-gray-600 mb-4">Start your learning journey by enrolling in courses.</p>
                <Link
                  to="/courses"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Browse Courses
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {enrolledCourses.map((course) => {
                  const courseDetail = mockCourseDetails.find(d => d.id === course.id) || mockCourseDetails[0];
                  const progress = course.progress;
                  const completedLessons = getCompletedLessons(progress);
                  
                  return (
                    <div key={course.id} className="px-6 py-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {course.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">{course.instructor}</p>
                          
                          {/* Progress Bar */}
                          <div className="mb-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">
                                {completedLessons} of {courseDetail.totalLessons} lessons
                              </span>
                              <span className="font-medium text-gray-900">{progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          {/* Course Actions */}
                          <div className="flex items-center space-x-4">
                            <Link
                              to={`/course/${course.id}`}
                              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                              <Play className="w-4 h-4 mr-1" />
                              Continue Learning
                            </Link>
                            <span className="text-sm text-gray-500">
                              Last accessed: {courseDetail.lastAccessed}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/courses"
                  className="block w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Browse New Courses</span>
                </Link>
                <Link
                  to="/profile"
                  className="block w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Update Profile</span>
                </Link>
                <Link
                  to="/certificates"
                  className="block w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">View Certificates</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Tips</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• Set aside dedicated time each day for learning</p>
                <p>• Complete hands-on projects to reinforce concepts</p>
                <p>• Join our community discussions for support</p>
                <p>• Track your progress regularly to stay motivated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;