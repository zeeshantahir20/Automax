import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const panelTypes = [
  {
    id: 1,
    title: 'PLC Control Panels',
    description: 'Advanced programmable logic controller (PLC) panels designed for precise automation and control across multiple industrial applications.',
    features: [
      'High-quality components from leading manufacturers',
      'Modular design for easy maintenance',
      'Compact footprint with optimized layout',
      'Integrated HMI options',
      'Built-in remote monitoring capabilities',
      'Multiple network protocol support'
    ],
    image: 'https://images.pexels.com/photos/3846488/pexels-photo-3846488.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 2,
    title: 'Motor Control Centers (MCC)',
    description: 'Centralized control assemblies for group motor control in industrial applications, offering consolidated power distribution, control, and monitoring.',
    features: [
      'Variable Frequency Drives (VFDs)',
      'Motor starters and protection',
      'Fault diagnostics and protection',
      'Power monitoring systems',
      'Energy efficiency optimization',
      'NEMA/IP-rated enclosures'
    ],
    image: 'https://images.pexels.com/photos/4491477/pexels-photo-4491477.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 3,
    title: 'Distribution Boards',
    description: 'Custom electrical distribution panels for reliable power distribution in commercial and industrial facilities, ensuring safety and compliance.',
    features: [
      'Circuit protection and isolation',
      'Surge protection devices',
      'Energy monitoring systems',
      'Tier-based distribution',
      'UPS integration capabilities',
      'Circuit identification and labeling'
    ],
    image: 'https://images.pexels.com/photos/236759/pexels-photo-236759.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 4,
    title: 'SCADA System Panels',
    description: 'Integrated control panels for supervisory control and data acquisition systems, enabling comprehensive monitoring and control of industrial processes.',
    features: [
      'Industrial PCs and servers',
      'Network redundancy',
      'Historian and data logging',
      'Remote access capabilities',
      'Alarm management systems',
      'Cybersecurity features'
    ],
    image: 'https://images.pexels.com/photos/2494961/pexels-photo-2494961.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

const ControlPanels = () => {
  useEffect(() => {
    document.title = 'Control Panel Solutions - AUTOMAX';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Control Panel Solutions</h1>
            <p className="text-xl text-blue-100">
              Complete range of automation and LT Panel solutions across industries, 
              delivering high-quality, reliable control systems tailored to your specific requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Approach to Control Panel Design</h2>
              <p className="text-gray-600 mb-6">
                At AUTOMAX, we design and build custom control panels that meet the highest standards of 
                quality, reliability, and performance. Our comprehensive approach ensures that each panel 
                is tailored to your specific requirements and operational environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Custom Engineering</h3>
                    <p className="text-gray-600">Each panel is engineered to meet your specific application requirements, ensuring optimal performance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Quality Components</h3>
                    <p className="text-gray-600">We use only the highest quality components from industry-leading manufacturers for reliability and longevity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Rigorous Testing</h3>
                    <p className="text-gray-600">Every panel undergoes comprehensive testing to ensure it meets our high standards before delivery.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Compliance & Certification</h3>
                    <p className="text-gray-600">All our panels are designed and built to meet or exceed relevant industry standards and regulatory requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/4468901/pexels-photo-4468901.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Control Panel Design Process" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Control Panel Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Control Panel Solutions</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of control panel solutions to meet diverse industrial requirements.
            </p>
          </motion.div>

          <div className="space-y-16">
            {panelTypes.map((panel, index) => (
              <motion.div
                key={panel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={panel.image} 
                      alt={panel.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{panel.title}</h3>
                  <p className="text-gray-600 mb-6">{panel.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {panel.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Industries We Serve</h2>
            <p className="text-gray-600">
              Our control panel solutions are used across various industries, providing reliable automation and control.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Manufacturing', icon: '🏭' },
              { name: 'Food & Beverage', icon: '🍲' },
              { name: 'Automotive', icon: '🚗' },
              { name: 'Pharmaceuticals', icon: '💊' },
              { name: 'Oil & Gas', icon: '⛽' },
              { name: 'Water Treatment', icon: '💧' },
              { name: 'Chemical Processing', icon: '🧪' },
              { name: 'Mining & Metals', icon: '⛏️' }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-800">{industry.name}</h3>
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
                Need a Custom Control Panel Solution?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Contact our team today to discuss how we can design and build the perfect control panel solution for your specific requirements.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-gray-100 transition-colors shadow-md"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ControlPanels; 