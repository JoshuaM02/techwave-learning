// frontend/src/pages/FAQ.tsx
import React, { useState } from 'react';
import SEO from '../components/SEO';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Mock FAQ data
  const mockFAQs: FAQItem[] = [
    {
      question: "How do I access my courses after purchase?",
      answer: "Once you complete your purchase, you'll receive immediate access to your course dashboard where you can start learning right away."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards through our secure Stripe payment system, as well as PayPal for your convenience."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes! We offer a 30-day money-back guarantee on all our courses. If you're not satisfied, contact us for a full refund."
    },
    {
      question: "Are the courses updated regularly?",
      answer: "Absolutely! Our instructors regularly update course content to reflect the latest industry standards and technologies."
    },
    {
      question: "How long do I have access to the courses?",
      answer: "All courses come with lifetime access. Once you enroll, you'll have unlimited access to the course materials, including any future updates."
    },
    {
      question: "Do I need prior programming experience?",
      answer: "Our courses are designed for all skill levels. We have beginner courses that start from the basics, as well as advanced courses for experienced developers."
    }
  ];

  // FAQ page schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mockFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const filteredFAQs = mockFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about our courses, enrollment process, and platform features."
        keywords="FAQ, help center, support, course questions, enrollment help, technical support, billing questions"
        canonicalUrl="/faq"
        ogImage="https://techwave-learning.com/og-faq.jpg"
        schema={faqSchema}
      />
      
      <div id="main-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
          
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`faq-content-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-600 bg-gray-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;