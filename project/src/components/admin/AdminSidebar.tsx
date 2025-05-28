import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Gauge, 
  Database, 
  CopyCheck, 
  Settings, 
  ChevronDown,
  Wrench,
  Package
} from 'lucide-react';

const AdminSidebar = () => {
  const [showServices, setShowServices] = useState(true);
  
  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-primary text-white w-64 flex-shrink-0 fixed inset-y-0 z-40 md:relative md:translate-x-0 -translate-x-full md:flex flex-col"
    >
      <div className="p-4 border-b border-blue-800 flex items-center">
        <Gauge className="h-8 w-8 mr-2" />
        <span className="text-lg font-bold">AUTOMAX Admin</span>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          <li>
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-md transition-colors ${
                  isActive
                    ? 'bg-primary-dark text-white'
                    : 'text-blue-100 hover:bg-primary-dark hover:text-white'
                }`
              }
            >
              <Database className="h-5 w-5 mr-3" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <button
              className="w-full flex items-center justify-between py-2 px-4 rounded-md text-blue-100 hover:bg-primary-dark hover:text-white transition-colors"
              onClick={() => setShowServices(!showServices)}
            >
              <div className="flex items-center">
                <Wrench className="h-5 w-5 mr-3" />
                <span>Services</span>
              </div>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showServices ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showServices && (
              <ul className="pl-10 mt-1 space-y-1">
                <li>
                  <NavLink
                    to="/admin/services"
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded-md transition-colors ${
                        isActive
                          ? 'bg-primary-dark text-white'
                          : 'text-blue-100 hover:bg-primary-dark hover:text-white'
                      }`
                    }
                  >
                    Manage Services
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/admin/projects"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-md transition-colors ${
                  isActive
                    ? 'bg-primary-dark text-white'
                    : 'text-blue-100 hover:bg-primary-dark hover:text-white'
                }`
              }
            >
              <Package className="h-5 w-5 mr-3" />
              <span>Projects</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-md transition-colors ${
                  isActive
                    ? 'bg-primary-dark text-white'
                    : 'text-blue-100 hover:bg-primary-dark hover:text-white'
                }`
              }
            >
              <Settings className="h-5 w-5 mr-3" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="p-4 text-xs text-blue-200 border-t border-blue-800">
        <p>© 2025 AUTOMAX Admin Panel</p>
        <p>v1.0.0</p>
      </div>
    </motion.aside>
  );
};

export default AdminSidebar;