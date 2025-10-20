// frontend/src/pages/About.tsx
import React from 'react';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  // About page schema
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TechWave Learning",
    "url": "https://techwave-learning.com",
    "logo": "https://techwave-learning.com/logo.png",
    "description": "Learn about our mission, team, and commitment to providing world-class software engineering education.",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      {
        "@type": "Person", 
        "name": "Michael Chen"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94103",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+15551234567",
      "email": "hello@techwave-learning.com"
    },
    "sameAs": [
      "https://www.facebook.com/techwavelearning",
      "https://twitter.com/techwavelearn",
      "https://www.linkedin.com/company/techwave-learning",
      "https://www.instagram.com/techwavelearning"
    ]
  };

  return (
    <>
      <SEO
        title="About TechWave Learning"
        description="Learn about our mission, team, and commitment to providing world-class software engineering education."
        keywords="about us, our story, team, mission, software engineering education, online learning platform, coding bootcamp"
        canonicalUrl="/about"
        ogImage="https://techwave-learning.com/og-about.jpg"
        schema={aboutSchema}
      />
      
      <div id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">About TechWave Learning</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At TechWave Learning, we believe that quality software engineering education should be accessible to everyone, 
                regardless of their background or location. Our mission is to empower aspiring developers with the skills 
                and knowledge they need to succeed in today's competitive tech industry.
              </p>
              <p className="text-gray-600">
                We partner with industry experts to create comprehensive, up-to-date courses that reflect real-world 
                challenges and best practices. Our hands-on approach ensures that students don't just learn theory, 
                but gain practical experience they can apply immediately.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '50K+', label: 'Students Enrolled' },
                  { number: '200+', label: 'Courses Available' },
                  { number: '95%', label: 'Job Placement Rate' },
                  { number: '4.8', label: 'Average Rating' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Johnson', role: 'Lead Instructor', image: 'https://placehold.co/300x300/1D4ED8/FFFFFF?text=SJ' },
                { name: 'Michael Chen', role: 'Curriculum Director', image: 'https://placehold.co/300x300/6366F1/FFFFFF?text=MC' },
                { name: 'Emma Rodriguez', role: 'Student Success Manager', image: 'https://placehold.co/300x300/1D4ED8/FFFFFF?text=ER' }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;