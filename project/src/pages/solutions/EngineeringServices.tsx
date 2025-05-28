import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const engineeringServices = [
  {
    id: 1,
    title: 'Control Automation',
    description: 'Expert engineering services for industrial control systems, including PLC programming, SCADA development, and HMI design.',
    icon: '🔧',
    benefits: [
      'Optimized control systems for maximum efficiency',
      'Seamless integration with existing infrastructure',
      'Advanced visualization and monitoring capabilities',
      'Real-time data processing and analysis'
    ]
  },
  {
    id: 2,
    title: 'Plant Engineering',
    description: 'Comprehensive plant engineering services covering electrical, mechanical, and process control aspects of industrial facilities.',
    icon: '🏭',
    benefits: [
      'End-to-end plant design and optimization',
      'Energy efficiency improvements',
      'Safety system implementation',
      'Regulatory compliance assurance'
    ]
  },
  {
    id: 3,
    title: 'Design Engineering',
    description: 'Specialized design services for industrial systems, components, and processes using cutting-edge CAD and simulation tools.',
    icon: '📐',
    benefits: [
      'Detailed 3D modeling and visualization',
      'Stress analysis and simulation',
      'Design optimization for manufacturability',
      'Technical documentation and specifications'
    ]
  },
  {
    id: 4,
    title: 'Project Management',
    description: 'End-to-end project management services ensuring on-time, on-budget delivery of engineering projects across industries.',
    icon: '📊',
    benefits: [
      'Detailed project planning and scheduling',
      'Resource allocation and optimization',
      'Risk identification and mitigation',
      'Comprehensive progress tracking and reporting'
    ]
  }
];

const industries = [
  'Automotive', 'Cement', 'Chemicals & Pharmaceuticals', 'Data Centers', 
  'Energy Sector', 'Food & Beverages', 'Material Handling', 'Metals & Mining',
  'Pulp & Paper', 'Textile Industry', 'Water & Wastewater'
];

const EngineeringServices = () => {
  useEffect(() => {
    document.title = 'Engineering Services - AUTOMAX';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Engineering Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive engineering services for control automation, plant engineering, and design across industries,
              delivered by our team of highly skilled engineers with extensive domain expertise.
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Our Engineering Services?</h2>
              <p className="text-gray-600 mb-6">
                With decades of industry experience, our engineering services team brings technical excellence 
                and deep domain knowledge to every project. We combine innovative engineering approaches with
                practical implementation expertise to deliver solutions that drive operational excellence.
              </p>
              <p className="text-gray-600 mb-6">
                Our multidisciplinary team provides end-to-end engineering support, from conceptualization 
                and design to implementation and commissioning, ensuring seamless project execution and 
                technology adoption.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">350+</div>
                  <p className="text-sm text-gray-600">Skilled engineers</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">25+</div>
                  <p className="text-sm text-gray-600">Years of experience</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">70+</div>
                  <p className="text-sm text-gray-600">Countries served</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">1000+</div>
                  <p className="text-sm text-gray-600">Projects completed</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Engineering Services" 
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
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Engineering Capabilities</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of engineering services tailored to meet the unique 
              requirements of various industries and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringServices.map((service, index) => (
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Engineering Process</h2>
            <p className="text-gray-600">
              We follow a systematic engineering approach that ensures quality, reliability, and efficiency 
              in all our projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Requirements Analysis',
                description: 'We thoroughly analyze your requirements, constraints, and objectives to establish a clear foundation for the engineering process.',
                icon: '📋'
              },
              {
                step: '02',
                title: 'Conceptual Design',
                description: 'Our engineers develop conceptual designs, evaluating various approaches and technologies to identify the optimal solution.',
                icon: '💡'
              },
              {
                step: '03',
                title: 'Detailed Engineering',
                description: 'We create detailed engineering designs, specifications, and documentation, ensuring compliance with standards and best practices.',
                icon: '📐'
              },
              {
                step: '04',
                title: 'Implementation & Testing',
                description: 'Our team executes the engineering plans, conducting rigorous testing to validate functionality, performance, and reliability.',
                icon: '⚙️'
              },
              {
                step: '05',
                title: 'Commissioning',
                description: 'We ensure smooth startup and operation of the engineered systems, optimizing performance parameters and training users.',
                icon: '🚀'
              },
              {
                step: '06',
                title: 'Post-Implementation Support',
                description: 'Our engineers provide ongoing support, maintenance, and optimization services to ensure long-term success.',
                icon: '🛠️'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
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

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
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
              Our engineering expertise spans across multiple industries, each with unique requirements 
              and technical challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-gray-800">{industry}</h3>
              </motion.div>
            ))}
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
                Ready to Engineer Your Success?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Contact our engineering team to discuss how we can help you tackle your most challenging industrial engineering projects.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-gray-100 transition-colors shadow-md"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringServices; 