// frontend/src/pages/Blog.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

const BlogPage: React.FC = () => {
  // Mock blog data
  const mockBlogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging trends and technologies that will shape the web development landscape.",
      date: "March 15, 2024",
      author: "TechWave Team",
      image: "https://placehold.co/600x300/1D4ED8/FFFFFF?text=Web+Dev+2024"
    },
    {
      id: 2,
      title: "Why TypeScript is Essential for Modern Applications",
      excerpt: "Understanding the benefits of static typing and how it improves code quality.",
      date: "March 10, 2024",
      author: "Sarah Johnson",
      image: "https://placehold.co/600x300/6366F1/FFFFFF?text=TypeScript+Guide"
    },
    {
      id: 3,
      title: "Mastering React Performance Optimization",
      excerpt: "Learn advanced techniques to optimize your React applications for maximum performance.",
      date: "March 5, 2024",
      author: "Michael Chen",
      image: "https://placehold.co/600x300/1D4ED8/FFFFFF?text=React+Performance"
    },
    {
      id: 4,
      title: "Getting Started with DevOps and CI/CD",
      excerpt: "A comprehensive guide to implementing DevOps practices in your development workflow.",
      date: "February 28, 2024",
      author: "Emma Rodriguez",
      image: "https://placehold.co/600x300/6366F1/FFFFFF?text=DevOps+Guide"
    }
  ];

  // Blog page schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "TechWave Learning Blog",
    "description": "Latest insights, tutorials, and industry news on software engineering and technology trends.",
    "url": "https://techwave-learning.com/blog",
    "blogPost": mockBlogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "image": post.image,
      "url": `https://techwave-learning.com/blog/${post.id}`
    }))
  };

  return (
    <>
      <SEO
        title="TechWave Blog"
        description="Latest insights, tutorials, and industry news on software engineering and technology trends."
        keywords="tech blog, programming tutorials, software development news, coding tips, web development trends, React tutorials, TypeScript guides"
        canonicalUrl="/blog"
        ogImage="https://techwave-learning.com/og-blog.jpg"
        schema={blogSchema}
      />
      
      <div id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockBlogPosts.map(post => (
              <motion.article
                key={post.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;