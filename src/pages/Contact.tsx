// frontend/src/pages/Contact.tsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  const handleSubmit = (formData: { name: string; email: string; message: string }) => {
    // Mock form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  // Contact page schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact TechWave Learning",
    "description": "Get in touch with our team for questions about courses, partnerships, or general inquiries.",
    "url": "https://techwave-learning.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "TechWave Learning",
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
      "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+15551234567",
        "email": "hello@techwave-learning.com",
        "availableLanguage": ["English"]
      }
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with our team for questions about courses, partnerships, or general inquiries."
        keywords="contact, support, customer service, partnership inquiries, tech support, course questions"
        canonicalUrl="/contact"
        ogImage="https://techwave-learning.com/og-contact.jpg"
        schema={contactSchema}
      />
      
      <div id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm onSubmit={handleSubmit} />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Office</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Tech Street, San Francisco, CA 94103</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>hello@techwave-learning.com</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h2>
                <div className="text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600">Google Maps Embed</p>
                  <p className="text-sm text-gray-500">API integration would go here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;