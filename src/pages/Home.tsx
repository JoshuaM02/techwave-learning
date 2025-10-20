// frontend/src/pages/Home.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Target, Star, Laptop, GraduationCap, Award, Shield, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  // Home page schema
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "TechWave Learning",
    "url": "https://techwave-learning.com",
    "logo": "https://techwave-learning.com/logo.png",
    "description": "Master full-stack development, AI, and DevOps with TechWave Learning. Affordable online Software Engineering courses designed for real-world success.",
    "sameAs": [
      "https://www.facebook.com/techwavelearning",
      "https://twitter.com/techwavelearn",
      "https://www.linkedin.com/company/techwave-learning",
      "https://www.instagram.com/techwavelearning"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94103",
      "addressCountry": "US"
    },
    "telephone": "+15551234567",
    "email": "hello@techwave-learning.com",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "79.99",
      "highPrice": "129.99",
      "priceCurrency": "USD",
      "offerCount": 200
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5000"
    }
  };

  const mockCourses = [
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
      level: "Beginner to Advanced",
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
      level: "Intermediate",
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
      level: "All Levels",
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
      level: "Advanced",
    }
  ];

  const mockTestimonials = [
    {
      name: "Alex Thompson",
      role: "Senior Software Engineer",
      company: "Google",
      content: "TechWave's courses helped me transition from frontend to full-stack development. The hands-on projects were invaluable.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Junior Developer",
      company: "StartupXYZ",
      content: "As someone new to coding, the beginner-friendly approach made complex concepts easy to understand. Highly recommend!",
      rating: 5
    }
  ];

  const mockStats = [
    { number: "50K+", label: "Students Enrolled", icon: Users },
    { number: "200+", label: "Courses Available", icon: BookOpen },
    { number: "95%", label: "Job Placement Rate", icon: Target },
    { number: "4.8", label: "Average Rating", icon: Star }
  ];

  return (
    <>
      <SEO
        title="Software Engineering Courses Online"
        description="Master full-stack development, AI, and DevOps with TechWave Learning. Affordable online Software Engineering courses designed for real-world success."
        keywords="Software Engineering, online learning, React, TypeScript, Udemy clone, coding bootcamp, web development courses, programming tutorials, software development"
        canonicalUrl="/"
        schema={homeSchema}
      />
      
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Master Software Engineering
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
              >
                Learn from industry experts with hands-on projects and real-world applications
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/courses"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Browse Courses
                </Link>
                <Link
                  to="/signup"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Start Free Trial
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {mockStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TechWave?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide the most comprehensive and up-to-date software engineering education available online.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: Laptop, 
                  title: "Hands-on Projects", 
                  desc: "Build real applications with industry-standard tools and frameworks." 
                },
                { 
                  icon: GraduationCap, 
                  title: "Expert Instructors", 
                  desc: "Learn from senior engineers with years of real-world experience." 
                },
                { 
                  icon: Award, 
                  title: "Career Support", 
                  desc: "Get resume reviews, interview prep, and job placement assistance." 
                },
                { 
                  icon: Shield, 
                  title: "Quality Guarantee", 
                  desc: "30-day money-back guarantee and lifetime access to course materials." 
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Courses */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Courses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join thousands of students learning in-demand software engineering skills
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockCourses.map((course) => (
                <motion.div
                  key={course.id}
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
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">${course.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${course.originalPrice}</span>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link
                to="/courses"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Courses <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real success stories from developers who transformed their careers with TechWave
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mockTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Join over 50,000 developers who have already transformed their careers with TechWave
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/courses"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                to="/signup"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Start Free Trial
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;