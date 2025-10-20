// frontend/src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-xl font-bold">TechWave</span>
          </div>
          <p className="text-gray-400 text-sm">
            Empowering developers with world-class software engineering education.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
            <li><a href="#" className="hover:text-white transition-colors">DevOps</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2024 TechWave Learning. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;