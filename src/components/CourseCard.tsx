// frontend/src/components/CourseCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

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

interface CourseCardProps {
  course: Course;
  showEnrollButton?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, showEnrollButton = true }) => {
  const { addToCart, enrolledCourses } = useAuth();
  
  const isEnrolled = enrolledCourses.some(enrolled => enrolled.id === course.id);

  const handleAddToCart = () => {
    addToCart(course);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
          {course.level}
        </div>
        {isEnrolled && (
          <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
            Enrolled
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{course.instructor}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({course.reviews})</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Clock className="w-4 h-4 mr-1" />
          {course.duration}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${course.price}</span>
            <span className="text-sm text-gray-500 line-through ml-2">${course.originalPrice}</span>
          </div>
          {showEnrollButton && !isEnrolled && (
            <button 
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add to Cart
            </button>
          )}
          {isEnrolled && (
            <span className="text-green-600 text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Enrolled
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;