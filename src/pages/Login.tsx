// frontend/src/pages/Login.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSignInButton from '../components/GoogleSignInButton';
import SEO from '../components/SEO';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const { login, googleSignIn } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    login(email, password);
  };

  // Login page schema
  const loginSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Login to TechWave Learning",
    "description": "Sign in to your TechWave Learning account to access your courses and continue your learning journey.",
    "url": "https://techwave-learning.com/login"
  };

  return (
    <>
      <SEO
        title="Login"
        description="Sign in to your TechWave Learning account to access your courses and continue your learning journey."
        keywords="login, sign in, account access, course access, student portal"
        canonicalUrl="/login"
        ogImage="https://techwave-learning.com/og-login.jpg"
        schema={loginSchema}
      />
      
      <div id="main-content" className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to continue your learning journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <GoogleSignInButton onClick={googleSignIn} />
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;