import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Gauge, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSolutions = () => setIsSolutionsOpen(!isSolutionsOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Gauge className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary-dark">AUTOMAX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-gray-800'
                } hover:text-primary transition-colors`
              }
            >
              Home
            </NavLink>

            {/* Solutions Dropdown - Desktop */}
            <div className="relative group">
              <button
                onClick={toggleSolutions}
                className="flex items-center text-sm font-medium text-gray-800 hover:text-primary transition-colors"
              >
                Solutions <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 transition-all duration-200 ${
                  isSolutionsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                } group-hover:opacity-100 group-hover:visible`}
              >
                <Link
                  to="/solutions"
                  className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary"
                >
                  All Solutions
                </Link>
                <Link
                  to="/solutions/automation"
                  className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary"
                >
                  Automation
                </Link>
                <Link
                  to="/solutions/automation-consulting"
                  className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary"
                >
                  Automation Consulting
                </Link>
                <Link
                  to="/solutions/control-panels"
                  className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary"
                >
                  Control Panels
                </Link>
                <Link
                  to="/solutions/engineering-services"
                  className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary"
                >
                  Engineering Services
                </Link>
                <Link
                  to="/solutions/global-engineering-outsourcing"
                  className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary"
                >
                  Global Engineering Outsourcing
                </Link>
                <Link
                  to="/solutions/repairs-service-centers"
                  className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary"
                >
                  Repairs & Service Centers
                </Link>
                <Link
                  to="/solutions/industrial-software"
                  className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary"
                >
                  Industrial Software
                </Link>
                <Link
                  to="/solutions/machine-vision"
                  className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary"
                >
                  Machine Vision
                </Link>
                <Link
                  to="/solutions/partner-products"
                  className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary"
                >
                  Partner Products
                </Link>
              </div>
            </div>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-gray-800'
                } hover:text-primary transition-colors`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-gray-800'
                } hover:text-primary transition-colors`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-gray-800'
                } hover:text-primary transition-colors`
              }
            >
              Contact
            </NavLink>
            <Link to="/contact" className="btn btn-primary text-sm">
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              <NavLink to="/" onClick={closeMenu} className="py-2 px-4 text-sm text-gray-800 hover:text-primary">
                Home
              </NavLink>

              {/* Mobile Solutions Toggle */}
              <div>
                <button
                  onClick={toggleSolutions}
                  className="flex items-center justify-between py-2 px-4 text-sm text-gray-800 w-full"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isSolutionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isSolutionsOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                    <Link to="/solutions" onClick={closeMenu} className="block py-1 text-gray-800 hover:text-primary">
                      All Solutions
                    </Link>
                    <Link
                      to="/solutions/automation"
                      onClick={closeMenu}
                      className="block py-1 text-gray-800 hover:text-primary"
                    >
                      Automation
                    </Link>
                    <Link
                      to="/solutions/automation-consulting"
                      onClick={closeMenu}
                      className="block py-1 text-gray-800 hover:text-primary"
                    >
                      Automation Consulting
                    </Link>
                    <Link
                      to="/solutions/control-panels"
                      onClick={closeMenu}
                      className="block py-1 text-gray-800 hover:text-primary"
                    >
                      Control Panels
                    </Link>
                    <Link
                      to="/solutions/engineering-services"
                      onClick={closeMenu}
                      className="block py-1 text-gray-800 hover:text-primary"
                    >
                      Engineering Services
                    </Link>
                    <Link
                      to="/solutions/global-engineering-outsourcing"
                      onClick={closeMenu}
                      className="block py-1 text-gray-800 hover:text-primary"
                    >
                      Global Engineering Outsourcing
                    </Link>
                    <Link
                      to="/solutions/repairs-service-centers"
                      onClick={closeMenu}
                      className="block py-1 text-gray-800 hover:text-primary"
                    >
                      Repairs & Service Centers
                    </Link>
                    <Link
                      to="/solutions/industrial-software"
                      onClick={closeMenu}
                      className="block py-1 text-gray-800 hover:text-primary"
                    >
                      Industrial Software
                    </Link>
                    <Link
                      to="/solutions/machine-vision"
                      onClick={closeMenu}
                      className="block py-1 text-gray-800 hover:text-primary"
                    >
                      Machine Vision
                    </Link>
                    <Link
                      to="/solutions/partner-products"
                      onClick={closeMenu}
                      className="block py-1 text-gray-800 hover:text-primary"
                    >
                      Partner Products
                    </Link>
                  </div>
                )}
              </div>

              <NavLink to="/services" onClick={closeMenu} className="py-2 px-4 text-sm text-gray-800 hover:text-primary">
                Services
              </NavLink>
              <NavLink to="/projects" onClick={closeMenu} className="py-2 px-4 text-sm text-gray-800 hover:text-primary">
                Projects
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu} className="py-2 px-4 text-sm text-gray-800 hover:text-primary">
                Contact
              </NavLink>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="py-2 px-4 text-sm bg-primary text-white rounded-md"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
