// frontend/src/components/Navbar.tsx (Updated)
import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Cart from './Cart';

const Navbar: React.FC = () => {
  const { user, logout, cart, getCartItemCount } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">TechWave</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`text-sm font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Home
              </Link>
              <Link to="/courses" className={`text-sm font-medium ${isActive('/courses') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Courses
              </Link>
              <Link to="/blog" className={`text-sm font-medium ${isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Blog
              </Link>
              <Link to="/about" className={`text-sm font-medium ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                About
              </Link>
              <Link to="/faq" className={`text-sm font-medium ${isActive('/faq') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                FAQ
              </Link>
              <Link to="/contact" className={`text-sm font-medium ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Contact
              </Link>
            </div>

            {/* Auth and Cart Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative p-2 text-gray-700 hover:text-blue-600"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {getCartItemCount()}
                      </span>
                    )}
                  </button>
                  <button
                    onClick={logout}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <div className="flex flex-col space-y-4">
                <Link to="/" className={`text-sm font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/courses" className={`text-sm font-medium ${isActive('/courses') ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  Courses
                </Link>
                <Link to="/blog" className={`text-sm font-medium ${isActive('/blog') ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
                <Link to="/about" className={`text-sm font-medium ${isActive('/about') ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link to="/faq" className={`text-sm font-medium ${isActive('/faq') ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </Link>
                <Link to="/contact" className={`text-sm font-medium ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                
                {user ? (
                  <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                    <Link to="/dashboard" className="text-sm font-medium text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                      Dashboard
                    </Link>
                    <button
                      onClick={() => { logout(); setIsMenuOpen(false); }}
                      className="text-sm font-medium text-gray-700 hover:text-blue-600"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                    <Link
                      to="/login"
                      className="text-sm font-medium text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </nav>
      
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;