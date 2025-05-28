import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gauge, Lock } from 'lucide-react';
import { signIn } from '../../lib/api';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Use Supabase authentication
      const authData = await signIn(email, password);
      
      if (authData?.user) {
        // Store auth state
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/admin');
      } else {
        setError('Authentication failed. Please check your credentials.');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
      console.error('Login error:', err);
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
            <Gauge className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold">AUTOMAX Admin</h2>
          <p className="text-blue-100">Login to access admin dashboard</p>
        </div>

        <div className="p-6">
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
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

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 bg-primary text-white rounded-md font-medium transition-colors ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
              }`}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="/admin/signup" className="text-primary font-medium hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;