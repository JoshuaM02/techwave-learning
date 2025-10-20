// frontend/src/App.tsx (Updated)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import CoursesPage from './pages/Courses';
import BlogPage from './pages/Blog';
import FAQPage from './pages/FAQ';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import DashboardPage from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;