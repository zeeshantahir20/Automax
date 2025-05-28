import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const repairServices = [
  {
    id: 1,
    title: 'Preventive Maintenance',
    description: 'Scheduled maintenance services to prevent equipment failure and extend the lifespan of your automation hardware.',
    icon: '🔧',
    benefits: [
      'Reduced unplanned downtime',
      'Extended equipment lifespan',
      'Optimized performance',
      'Lower overall maintenance costs'
    ]
  },
  {
    id: 2,
    title: 'Repair Services',
    description: 'Expert diagnosis and repair of faulty automation equipment, components, and systems across various manufacturers.',
    icon: '🛠️',
    benefits: [
      'Fast turnaround times',
      'Comprehensive diagnostic testing',
      'High-quality replacement parts',
      'Detailed repair documentation'
    ]
  },
  {
    id: 3,
    title: 'System Upgrades',
    description: 'Modernization and upgrades for legacy automation systems to improve performance, reliability, and compatibility.',
    icon: '⬆️',
    benefits: [
      'Enhanced system performance',
      'Improved compatibility with modern technologies',
      'Extended equipment lifespan',
      'Reduced maintenance requirements'
    ]
  },
  {
    id: 4,
    title: 'Emergency Support',
    description: '24/7 emergency response services for critical equipment failures and system outages.',
    icon: '🚨',
    benefits: [
      'Rapid response times',
      'Minimized production losses',
      'Priority service scheduling',
      'Remote diagnostic capabilities'
    ]
  }
];

const repairedProducts = [
  'PLCs & Controllers',
  'HMI Panels',
  'Servo Drives & Motors',
  'VFDs & Motor Drives',
  'Industrial PCs',
  'Power Supplies',
  'I/O Modules',
  'Industrial Sensors',
  'Communication Modules',
  'Process Control Equipment',
  'Robotics Components',
  'SCADA Hardware'
];

const RepairsServiceCenters = () => {
  useEffect(() => {
    document.title = 'Repairs and Service Centers - AUTOMAX';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Repairs and Service Centers</h1>
            <p className="text-xl text-blue-100">
              Professional repair services for industrial automation products across a vast spectrum of hardware, 
              ensuring minimal downtime and maximum operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Our Repair Services?</h2>
              <p className="text-gray-600 mb-6">
                Equipment failures and system malfunctions can lead to costly production downtime and operational 
                disruptions. Our repair and service centers provide fast, reliable solutions to get your automation 
                systems back online quickly and operating at peak efficiency.
              </p>
              <p className="text-gray-600 mb-6">
                With a team of highly skilled technicians and state-of-the-art repair facilities, we offer comprehensive 
                diagnostic, repair, and maintenance services for a wide range of industrial automation equipment from 
                leading manufacturers.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">24/7</div>
                  <p className="text-sm text-gray-600">Emergency support</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">48hrs</div>
                  <p className="text-sm text-gray-600">Average repair time</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">12mo</div>
                  <p className="text-sm text-gray-600">Repair warranty</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">5000+</div>
                  <p className="text-sm text-gray-600">Repairs completed annually</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3846262/pexels-photo-3846262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Repairs and Service Centers" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Repair and Maintenance Services</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of repair and maintenance services to keep your automation 
              systems running smoothly and efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repairServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <h4 className="font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Repair Process</h2>
            <p className="text-gray-600">
              We follow a systematic approach to ensure fast, high-quality repairs and transparent communication
              throughout the process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Initial Assessment',
                description: 'We receive your equipment and perform a preliminary inspection to identify the issue.',
                icon: '📋'
              },
              {
                step: '02',
                title: 'Detailed Diagnosis',
                description: 'Our technicians conduct comprehensive diagnostic testing to pinpoint the exact problem.',
                icon: '🔍'
              },
              {
                step: '03',
                title: 'Repair Quote',
                description: 'We provide a detailed repair quote including parts, labor, and estimated completion time.',
                icon: '💰'
              },
              {
                step: '04',
                title: 'Repair Execution',
                description: 'Upon approval, our technicians perform the necessary repairs using high-quality parts.',
                icon: '🛠️'
              },
              {
                step: '05',
                title: 'Testing & Return',
                description: 'We thoroughly test the repaired equipment before returning it with a repair warranty.',
                icon: '✅'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector line */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
                )}
                
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-lg mr-3">
                      {phase.icon}
                    </div>
                    <div className="text-xl font-bold text-gray-800">{phase.step}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Repair Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Products We Repair</h2>
            <p className="text-gray-600">
              Our service centers are equipped to repair a wide range of industrial automation products
              from leading manufacturers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {repairedProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-gray-800">{product}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Center Locations */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Service Center Locations</h2>
            <p className="text-gray-600">
              With multiple service centers strategically located across the country, we provide fast, 
              efficient repair services wherever you are.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: 'Mumbai',
                address: '123 Industrial Area, Andheri East, Mumbai - 400093',
                contact: '+91 22 1234 5678',
                hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
              },
              {
                city: 'Delhi',
                address: '456 Tech Park, Noida, Delhi NCR - 201301',
                contact: '+91 11 9876 5432',
                hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
              },
              {
                city: 'Bangalore',
                address: '789 Electronics City, Phase 1, Bangalore - 560100',
                contact: '+91 80 4567 8901',
                hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{location.city}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{location.address}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span>{location.contact}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{location.hours}</span>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900 to-primary rounded-xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative"
          >
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Need Emergency Repair Services?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Contact our 24/7 emergency hotline for immediate assistance with critical equipment failures.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-white text-primary hover:bg-gray-100 transition-colors shadow-md"
                >
                  Request Repair Service
                </Link>
                <a 
                  href="tel:+1800123456789" 
                  className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
                >
                  Call Emergency Hotline
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RepairsServiceCenters; 