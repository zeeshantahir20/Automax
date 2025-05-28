import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, LogOut, Menu } from 'lucide-react';
import { signOut } from '../../lib/api';

interface AdminHeaderProps {
  toggleSidebar?: () => void;
}

const AdminHeader = ({ toggleSidebar }: AdminHeaderProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await signOut();
      localStorage.removeItem('isAuthenticated');
      navigate('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 z-30">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="md:hidden text-gray-500 focus:outline-none mr-3"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <Bell size={20} />
          </button>

          <div className="relative">
            <button
              className="flex items-center focus:outline-none"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
                Admin
              </span>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <button
                  className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                >
                  <LogOut size={16} className="mr-2" />
                  <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;