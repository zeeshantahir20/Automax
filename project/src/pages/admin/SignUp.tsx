import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gauge, Lock, UserPlus } from 'lucide-react';
import { signUp } from '../../lib/api';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    setIsLoading(true);

    try {
      // Use Supabase signUp
      const data = await signUp(email, password);
      
      if (data?.user) {
        setSuccess('Account created successfully! Please check your email to confirm your account.');
        setTimeout(() => {
          navigate('/admin/login');
        }, 3000);
      } else {
        setError('Failed to create account. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
      console.error('SignUp error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="bg-primary p-6 text-white text-center">
          <div className="flex justify-center mb-4">
            <UserPlus className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold">Admin Sign Up</h2>
          <p className="text-blue-100">Create an admin account</p>
        </div>

        <div className="p-6">
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          
          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4">
              {success}
            </div>
          )}
          
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 bg-primary text-white rounded-md font-medium transition-colors ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
              }`}
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/admin/login" className="text-primary font-medium hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp; 