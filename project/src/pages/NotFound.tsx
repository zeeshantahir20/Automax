import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gray-50 p-4"
    >
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-8">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;