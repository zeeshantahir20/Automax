import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const visionSolutions = [
  {
    id: 1,
    title: 'Quality Inspection',
    description: 'Automated visual inspection systems that detect defects, verify assembly, and ensure product quality with precision and consistency.',
    icon: '🔍',
    benefits: [
      'Significant reduction in quality escapes',
      'Consistent inspection criteria application',
      'Detailed defect documentation and traceability',
      'Higher throughput than manual inspection'
    ]
  },
  {
    id: 2,
    title: 'Part Identification & Tracking',
    description: 'Vision-based identification systems that read barcodes, QR codes, text, and other identifiers for reliable tracking throughout production.',
    icon: '🏷️',
    benefits: [
      'High-speed identification capabilities',
      'Reliable traceability throughout production',
      'Reduced manual data entry errors',
      'Integration with MES and ERP systems'
    ]
  },
  {
    id: 3,
    title: 'Robotic Guidance',
    description: 'Precision vision systems that guide robots for accurate part picking, placement, and assembly operations in dynamic environments.',
    icon: '🤖',
    benefits: [
      'Increased flexibility in robotic applications',
      'Reduced fixturing and mechanical alignment',
      'Adaptation to part position variations',
      'Improved production accuracy and speed'
    ]
  },
  {
    id: 4,
    title: 'Measurement & Gauging',
    description: 'High-precision vision-based measurement systems for dimensional verification, feature location, and non-contact gauging.',
    icon: '📏',
    benefits: [
      'Non-contact measurement of critical dimensions',
      'Micron-level precision capabilities',
      'Rapid 100% inspection of parts',
      'Digital documentation of measurements'
    ]
  }
];

const industries = [
  'Automotive',
  'Electronics',
  'Pharmaceuticals',
  'Food & Beverage',
  'Consumer Goods',
  'Medical Devices',
  'Packaging',
  'Metals & Mining'
];

const MachineVision = () => {
  useEffect(() => {
    document.title = 'Machine Vision - AUTOMAX';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Machine Vision</h1>
            <p className="text-xl text-blue-100">
              AUTOMAX is a premier Authorized Solution Partner for Cognex, a global leader in providing vision systems,
              delivering cutting-edge machine vision solutions that enhance quality, increase efficiency, and reduce costs.
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Machine Vision Excellence</h2>
              <p className="text-gray-600 mb-6">
                Machine vision systems use cameras, lighting, and advanced algorithms to automate visual inspection 
                and analysis tasks that once required human operators. These intelligent systems provide 
                consistent, reliable, and high-speed inspection capabilities that enhance product quality and 
                manufacturing efficiency.
              </p>
              <p className="text-gray-600 mb-6">
                As a leading Cognex partner, we offer comprehensive machine vision solutions including system design, 
                integration, programming, and ongoing support. Our team of certified vision specialists has 
                successfully implemented hundreds of vision applications across diverse industries.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">500+</div>
                  <p className="text-sm text-gray-600">Vision systems installed</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">99.9%</div>
                  <p className="text-sm text-gray-600">Inspection accuracy</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">25+</div>
                  <p className="text-sm text-gray-600">Certified vision engineers</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">15+</div>
                  <p className="text-sm text-gray-600">Years of vision expertise</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Machine Vision System" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Vision Solutions</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of machine vision solutions to address diverse 
              manufacturing and quality control challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="text-3xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <h4 className="font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, i) => (
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

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Cutting-Edge Vision Technology</h2>
            <p className="text-gray-600">
              As a Cognex Authorized Solution Partner, we leverage the latest vision technologies 
              to deliver high-performance solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Deep Learning',
                description: 'AI-powered vision tools that can handle complex visual inspection tasks, classify defects, and identify anomalies with human-like judgment but at machine speed.',
                icon: '🧠'
              },
              {
                title: 'High-Resolution Imaging',
                description: 'Advanced camera systems with megapixel resolution and specialized optics to capture detailed images for precise analysis and measurement.',
                icon: '📷'
              },
              {
                title: '3D Vision',
                description: 'Sophisticated 3D machine vision technologies that enable height, volume, and topography measurements for comprehensive part inspection.',
                icon: '📊'
              },
              {
                title: 'Multi-Spectrum Imaging',
                description: 'Specialized lighting and imaging systems that can reveal defects and features invisible to the human eye by using IR, UV, and other spectrum ranges.',
                icon: '🌈'
              },
              {
                title: 'High-Speed Vision',
                description: 'Ultra-fast image capture and processing capabilities to perform inspections on fast-moving production lines without compromising accuracy.',
                icon: '⚡'
              },
              {
                title: 'Integrated Systems',
                description: 'Seamless integration with factory automation systems, robots, PLCs, and enterprise software for comprehensive manufacturing solutions.',
                icon: '🔄'
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
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
              We follow a systematic approach to ensure successful vision system implementation 
              that delivers reliable, long-term performance.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-light hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: "Needs Assessment",
                  description: "We begin by thoroughly understanding your inspection requirements, production environment, and business objectives.",
                  icon: "📋"
                },
                {
                  title: "Solution Design",
                  description: "Our vision specialists design a comprehensive solution encompassing cameras, lighting, optics, software, and integration with existing systems.",
                  icon: "✏️"
                },
                {
                  title: "Proof of Concept",
                  description: "We create a prototype to validate the solution's capability to reliably detect the required features and defects under actual production conditions.",
                  icon: "🧪"
                },
                {
                  title: "Implementation",
                  description: "Our team handles hardware installation, software configuration, and integration with your production systems for a seamless deployment.",
                  icon: "🛠️"
                },
                {
                  title: "Validation & Training",
                  description: "We validate system performance against your specifications and provide comprehensive training to ensure your team can operate and maintain the system effectively.",
                  icon: "✅"
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

      {/* Industries Section */}
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
              Our machine vision solutions address the unique inspection and quality control challenges 
              across a diverse range of industries.
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
                className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-gray-800">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Success Story</h2>
              <h3 className="text-xl font-bold mb-3 text-gray-700">Automotive Component Manufacturer</h3>
              <p className="text-gray-600 mb-6">
                A leading automotive parts manufacturer needed to inspect critical safety components for defects
                at high production speeds. We implemented a multi-camera vision system with specialized lighting
                that achieved:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-600">100% inspection of safety-critical components</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-600">99.98% defect detection accuracy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-600">200 parts per minute inspection rate</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-600">ROI achieved in under 6 months</span>
                </li>
              </ul>
              <Link 
                to="/case-studies" 
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                View more success stories <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/5712487/pexels-photo-5712487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Automotive Vision System" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
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
                Ready to Enhance Your Quality Control?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Contact our machine vision specialists to discuss how we can help you implement advanced 
                vision inspection systems to improve quality and efficiency in your operations.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-gray-100 transition-colors shadow-md"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MachineVision; 