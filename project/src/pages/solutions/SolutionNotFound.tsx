import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SolutionNotFound = () => {
  useEffect(() => {
    document.title = 'Solution Coming Soon - AUTOMAX';
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Solution Coming Soon</h1>
            <p className="text-xl text-blue-100">
              We're currently developing this solution page to provide you with more detailed information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <svg className="w-24 h-24 mx-auto text-primary opacity-75" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              This solution page is under development
            </h2>
            
            <p className="text-xl text-gray-600 mb-10">
              Our team is working hard to bring you detailed information about this solution. 
              In the meantime, you can explore our other solutions or contact us directly to learn more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/solutions" 
                className="btn btn-primary"
              >
                Browse Other Solutions
              </Link>
              
              <Link 
                to="/contact" 
                className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Suggested Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Explore These Solutions</h2>
            <p className="text-gray-600">
              While you wait, check out our other available solution pages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Link to="/solutions/automation" className="block">
                <div className="h-52 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Automation"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Automation</h3>
                  <p className="text-gray-600 mb-4">Driving efficiency and cost savings through factory and process automation solutions.</p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Learn more</span>
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Link to="/solutions/control-panels" className="block">
                <div className="h-52 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3912362/pexels-photo-3912362.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Control Panels"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Control Panels</h3>
                  <p className="text-gray-600 mb-4">Complete range of automation and LT Panel solutions across industries delivered around the globe.</p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Learn more</span>
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionNotFound;
