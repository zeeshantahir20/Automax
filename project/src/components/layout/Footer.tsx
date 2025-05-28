import { Link } from 'react-router-dom';
import { Gauge, Mail, Phone, MapPin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Gauge className="h-6 w-6 text-primary-light mr-2" />
              <h3 className="text-xl font-bold text-white m-0">AUTOMAX</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Your ONE STOP SOLUTION for all types of Industrial Automation solutions. We are a competent and professional organization determined to be the market leader.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/automax.ambala" target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-light transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-light transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-light transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-primary-light transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-light transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ambala Office */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Ambala Office</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-light mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm m-0">
                  #28 Ranjeet Nagar, Ambala Cantt., Haryana (133001)
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-light mr-2 flex-shrink-0" />
                <a href="tel:7018229954" className="text-gray-300 hover:text-primary-light transition-colors text-sm">
                  7018229954 (ARUN KASHYAP)
                </a>
              </div>
            </div>
          </div>

          {/* Haridwar Office */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Haridwar Office</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-light mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm m-0">
                  #202 A3 Gharaunda, Near Denso Chowk, Bahadrabad, Haridwar (249402)
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-light mr-2 flex-shrink-0" />
                <a href="tel:8168295889" className="text-gray-300 hover:text-primary-light transition-colors text-sm">
                  8168295889 (PRABHJOT SINGH)
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-light mr-2 flex-shrink-0" />
                <a href="mailto:sales@automaxindustries.com" className="text-gray-300 hover:text-primary-light transition-colors text-sm">
                  sales@automaxindustries.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SoftriXSolutions And HR_Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;