// frontend/src/pages/Courses.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import SEO from '../components/SEO';

// Mock data interface
interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  duration: string;
  students: string;
  image: string;
  description: string;
  level: string;
  category: string;
}

// Mock data
const mockCourses: Course[] = [
  {
    id: 1,
    title: "Complete React Developer Course",
    instructor: "Sarah Johnson",
    rating: 4.8,
    reviews: 2450,
    price: 89.99,
    originalPrice: 199.99,
    duration: "42 hours",
    students: "15,234 students",
    image: "https://placehold.co/400x225/1D4ED8/FFFFFF?text=React+Course",
    description: "Master React, Redux, and modern JavaScript with hands-on projects.",
    level: "Beginner to Advanced",
    category: "Frontend"
  },
  {
    id: 2,
    title: "Advanced Node.js & Express",
    instructor: "Michael Chen",
    rating: 4.9,
    reviews: 1890,
    price: 79.99,
    originalPrice: 149.99,
    duration: "36 hours",
    students: "8,765 students",
    image: "https://placehold.co/400x225/6366F1/FFFFFF?text=Node.js+Course",
    description: "Build scalable backend applications with Node.js and Express.",
    level: "Intermediate",
    category: "Backend"
  },
  {
    id: 3,
    title: "Full Stack TypeScript Mastery",
    instructor: "Emma Rodriguez",
    rating: 4.7,
    reviews: 1230,
    price: 129.99,
    originalPrice: 249.99,
    duration: "58 hours",
    students: "6,432 students",
    image: "https://placehold.co/400x225/1D4ED8/FFFFFF?text=TypeScript+Course",
    description: "From basics to advanced patterns with real-world applications.",
    level: "All Levels",
    category: "Full Stack"
  },
  {
    id: 4,
    title: "DevOps & CI/CD Pipeline",
    instructor: "David Kim",
    rating: 4.6,
    reviews: 980,
    price: 99.99,
    originalPrice: 179.99,
    duration: "28 hours",
    students: "4,210 students",
    image: "https://placehold.co/400x225/6366F1/FFFFFF?text=DevOps+Course",
    description: "Master Docker, Kubernetes, and automated deployment workflows.",
    level: "Advanced",
    category: "DevOps"
  }
];

const CoursesPage: React.FC = () => {
  const [courses] = useState<Course[]>(mockCourses);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Courses page schema
  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courses.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
          "@type": "Organization",
          "name": "TechWave Learning"
        },
        "offers": {
          "@type": "Offer",
          "price": course.price.toString(),
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": course.level
        }
      }
    }))
  };

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'DevOps'];
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Software Engineering Courses"
        description="Browse our comprehensive catalog of software engineering courses covering web development, mobile apps, DevOps, and more."
        keywords="coding courses, programming tutorials, software development, web development courses, React courses, Node.js courses, TypeScript courses, DevOps courses"
        canonicalUrl="/courses"
        ogImage="https://techwave-learning.com/og-courses.jpg"
        schema={coursesSchema}
      />
      
      <div id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">All Courses</h1>
          
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="text-sm text-gray-600">
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
          </div>
          
          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-gray-600">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CoursesPage;