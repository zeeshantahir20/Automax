import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const automationTypes = [
  {
    id: 1,
    title: 'Factory Automation',
    description: 'Our factory automation solutions improve production efficiency, reduce operational costs, and enhance quality control through the integration of advanced technologies and control systems.',
    features: [
      'PLC & HMI Programming',
      'SCADA Systems',
      'Motion Control Systems',
      'Robotic Integration',
      'Assembly Line Automation',
      'Manufacturing Execution Systems (MES)',
      'Quality Control Systems'
    ],
    benefits: [
      'Increased productivity and throughput',
      'Reduced operational costs',
      'Improved product quality and consistency',
      'Enhanced worker safety',
      'Real-time monitoring and control',
      'Reduced material waste'
    ],
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 2,
    title: 'Process Automation',
    description: 'Our process automation solutions streamline continuous production processes across industries, providing precise control, monitoring, and optimization for improved efficiency and quality.',
    features: [
      'DCS (Distributed Control Systems)',
      'Process Control & Instrumentation',
      'Batch Process Automation',
      'Continuous Process Control',
      'Advanced Process Control',
      'Process Data Analysis',
      'Historian & Reporting'
    ],
    benefits: [
      'Enhanced process consistency',
      'Improved quality control',
      'Reduced energy consumption',
      'Minimized downtime',
      'Optimized resource utilization',
      'Regulatory compliance'
    ],
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 3,
    title: 'EPC (Engineering, Procurement, Construction)',
    description: 'Our EPC services deliver turn-key automation projects from concept to commissioning, handling all aspects of engineering, procurement, and construction for industrial clients.',
    features: [
      'Full Project Management',
      'Electrical Design & Engineering',
      'Mechanical Design & Engineering',
      'Panel Building & Assembly',
      'Equipment Procurement',
      'Installation & Commissioning',
      'Documentation & Training'
    ],
    benefits: [
      'Single point of responsibility',
      'Streamlined project execution',
      'Reduced project risks',
      'Cost and schedule certainty',
      'Expertise across all project phases',
      'Seamless handover and support'
    ],
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

const Automation = () => {
  useEffect(() => {
    document.title = 'Automation Solutions - AUTOMAX';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Automation Solutions</h1>
            <p className="text-xl text-blue-100">
              Driving efficiency and cost savings through state-of-the-art factory and process automation solutions.
              Our expertise spans across various industries, delivering tailored automation systems that enhance 
              productivity, reduce operational costs, and improve quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Automation Types */}
      {automationTypes.map((item, index) => (
        <section key={item.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">{item.title}</h2>
                <p className="text-gray-600 mb-6">{item.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Benefits</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Case Studies Preview */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-300">
              Explore how our automation solutions have transformed operations across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/2912611/pexels-photo-2912611.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Automotive Case Study" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-primary-light text-sm font-medium">Automotive</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Assembly Line Automation</h3>
                <p className="text-gray-400 mb-4">Increased production efficiency by 35% through implementation of robotic assembly systems.</p>
                <Link to="/projects" className="text-primary-light hover:text-primary font-medium inline-flex items-center">
                  <span>Read Case Study</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Food & Beverage Case Study" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-primary-light text-sm font-medium">Food & Beverage</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Batch Processing System</h3>
                <p className="text-gray-400 mb-4">Reduced production costs by 28% while improving consistency and quality control.</p>
                <Link to="/projects" className="text-primary-light hover:text-primary font-medium inline-flex items-center">
                  <span>Read Case Study</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Manufacturing Case Study" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-primary-light text-sm font-medium">Manufacturing</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Factory-wide SCADA Implementation</h3>
                <p className="text-gray-400 mb-4">Provided real-time visibility across operations, improving decision-making and reducing downtime by 42%.</p>
                <Link to="/projects" className="text-primary-light hover:text-primary font-medium inline-flex items-center">
                  <span>Read Case Study</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
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
                Ready to Automate Your Operations?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Contact our team today to discuss how our automation solutions can transform your business.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-gray-100 transition-colors shadow-md"
              >
                Request a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Automation; 