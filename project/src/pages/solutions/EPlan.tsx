import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ePlanProducts = [
  {
    id: 1,
    title: 'EPLAN Electric P8',
    description: 'Comprehensive software for electrical engineering design, documentation, and project management with advanced automation features.',
    icon: '⚡',
    features: [
      'Intuitive graphical editing for schematics',
      'Automatic generation of documentation',
      'Integrated device and component database',
      'Advanced macro technology for standardization',
      'Automated error checking and verification'
    ]
  },
  {
    id: 2,
    title: 'EPLAN Pro Panel',
    description: '3D design software for control cabinet and switchgear engineering, with detailed mounting layout and wire routing capabilities.',
    icon: '📊',
    features: [
      'Virtual 3D control cabinet design',
      'Automatic wire routing and length calculation',
      'Collision checking and thermal layout',
      'NC data generation for machining',
      'Integration with production systems'
    ]
  },
  {
    id: 3,
    title: 'EPLAN Fluid',
    description: 'Specialized solution for designing and documenting hydraulic, pneumatic, cooling, and lubrication systems.',
    icon: '💧',
    features: [
      'Fluid power circuit design',
      'Automated parts lists and BOMs',
      'Integrated fluid component library',
      'P&ID diagram creation',
      'Seamless integration with EPLAN Platform'
    ]
  },
  {
    id: 4,
    title: 'EPLAN Preplanning',
    description: 'Early-stage engineering tool for creating functional and process-oriented plant documentation before detailed design.',
    icon: '📝',
    features: [
      'Process-oriented plant documentation',
      'Functional structure definition',
      'Automated data transfer to detailed design',
      'PLC I/O planning',
      'Seamless workflow integration'
    ]
  }
];

const ePlanServices = [
  {
    title: 'Implementation & Configuration',
    description: 'Professional setup and configuration of EPLAN software tailored to your specific workflows and requirements.',
    icon: '⚙️'
  },
  {
    title: 'Training & Certification',
    description: 'Comprehensive training programs from basic to advanced levels, including official EPLAN certification courses.',
    icon: '👨‍🏫'
  },
  {
    title: 'Standards & Templates Development',
    description: 'Creation of company-specific standards, templates, and libraries to maximize productivity and ensure consistency.',
    icon: '📋'
  },
  {
    title: 'Process Automation',
    description: 'Development of custom scripts, macros, and automation solutions to optimize your EPLAN workflows.',
    icon: '🔄'
  },
  {
    title: 'System Integration',
    description: 'Seamless integration of EPLAN with your PLM, ERP, PDM and other enterprise systems for end-to-end digital continuity.',
    icon: '🔌'
  },
  {
    title: 'Support & Maintenance',
    description: 'Ongoing technical support, troubleshooting, and regular maintenance services for your EPLAN environment.',
    icon: '🛠️'
  }
];

const EPlan = () => {
  useEffect(() => {
    document.title = 'EPLAN Software Solutions - AUTOMAX';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">EPLAN Software Solutions</h1>
            <p className="text-xl text-blue-100">
              As an EPLAN Certified Partner, we provide comprehensive software solutions, implementation services, and 
              expert training to optimize your electrical engineering and control cabinet design processes.
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800">EPLAN: The Industry Standard for Engineering Design</h2>
              <p className="text-gray-600 mb-6">
                EPLAN provides innovative software solutions for electrical, automation, and mechatronic engineering. 
                With its comprehensive suite of tools, EPLAN enables efficient and standardized design, documentation, 
                and management of complex engineering projects.
              </p>
              <p className="text-gray-600 mb-6">
                As an authorized EPLAN partner, we offer the complete range of EPLAN solutions along with expert 
                implementation services, training, and technical support to help you maximize your return on investment.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">40%</div>
                  <p className="text-sm text-gray-600">Average time savings</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">500+</div>
                  <p className="text-sm text-gray-600">EPLAN implementations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">15+</div>
                  <p className="text-sm text-gray-600">Certified EPLAN trainers</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">24/7</div>
                  <p className="text-sm text-gray-600">Technical support</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3861954/pexels-photo-3861954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="EPLAN Software" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">EPLAN Software Suite</h2>
            <p className="text-gray-600">
              Explore the comprehensive range of EPLAN solutions that we offer to address 
              various engineering challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ePlanProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="text-3xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">EPLAN Benefits</h2>
            <p className="text-gray-600">
              Implementing EPLAN solutions delivers significant advantages and return on investment 
              for engineering organizations of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Increased Productivity',
                description: 'Automate repetitive tasks and streamline workflows to achieve up to 50% time savings in project execution.',
                icon: '📈'
              },
              {
                title: 'Enhanced Quality',
                description: 'Automated error checking, consistent standards, and comprehensive documentation ensure higher quality deliverables.',
                icon: '✓'
              },
              {
                title: 'Standardization',
                description: 'Implement company-wide engineering standards, templates, and best practices for consistent output.',
                icon: '📋'
              },
              {
                title: 'Digital Continuity',
                description: 'Maintain seamless data flow between different disciplines and systems throughout the engineering lifecycle.',
                icon: '🔄'
              },
              {
                title: 'Cost Reduction',
                description: 'Minimize errors, reduce rework, and optimize material usage for significant cost savings.',
                icon: '💰'
              },
              {
                title: 'Knowledge Management',
                description: 'Capture and reuse engineering knowledge through centralized libraries and standardized components.',
                icon: '🧠'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our EPLAN Services</h2>
            <p className="text-gray-600">
              We offer comprehensive support services to ensure successful implementation and 
              optimal utilization of your EPLAN software investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ePlanServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Implementation Approach</h2>
            <p className="text-gray-600">
              We follow a systematic methodology to ensure successful EPLAN implementation 
              with minimal disruption to your operations.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-light hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: 'Assessment & Planning',
                  description: 'We analyze your existing processes, requirements, and objectives to develop a tailored implementation plan.',
                  icon: '📋'
                },
                {
                  title: 'Installation & Configuration',
                  description: 'Our experts handle the software installation, system configuration, and integration with your existing IT infrastructure.',
                  icon: '⚙️'
                },
                {
                  title: 'Standards Development',
                  description: 'We work with your team to develop company-specific templates, libraries, and standards to maximize productivity.',
                  icon: '📐'
                },
                {
                  title: 'Training & Knowledge Transfer',
                  description: 'Comprehensive training programs ensure your team can effectively utilize EPLAN to its full potential.',
                  icon: '👨‍🏫'
                },
                {
                  title: 'Support & Optimization',
                  description: 'Ongoing technical support and periodic system optimization to ensure continued success with EPLAN.',
                  icon: '🔄'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`hidden md:flex flex-1 ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative flex-shrink-0 mx-2 md:mx-0 z-10">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="md:hidden flex-1 pl-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className={`hidden md:flex flex-1 ${index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Success Story</h2>
            <p className="text-gray-600">
              See how our EPLAN solutions have transformed engineering processes for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 h-full">
                <img 
                  src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Engineering Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-3 p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Pharmaceutical Manufacturing Company</h3>
                <p className="text-gray-600 mb-6">
                  A leading pharmaceutical manufacturer was struggling with inefficient electrical design processes,
                  resulting in extended project timelines and frequent errors in documentation. By implementing
                  EPLAN Electric P8 with our comprehensive support and training, they achieved:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">40% reduction in design time for control panel schematics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">85% reduction in documentation errors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Standardized library of components for reuse across projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Improved coordination between engineering teams</span>
                  </li>
                </ul>
                <div className="italic text-gray-600 border-l-4 border-primary pl-4 py-2">
                  "EPLAN has transformed our engineering process. What used to take days now takes hours, and the quality of our documentation has improved significantly."
                </div>
              </div>
            </div>
          </motion.div>
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
                Ready to Transform Your Engineering Processes?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Contact our EPLAN specialists to discuss how we can help you implement EPLAN solutions 
                to streamline your engineering workflows and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-white text-primary hover:bg-gray-100 transition-colors shadow-md"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  to="/contact" 
                  className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EPlan; 