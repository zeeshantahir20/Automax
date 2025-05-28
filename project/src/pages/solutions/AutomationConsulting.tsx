import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const consultingServices = [
  {
    id: 1,
    title: 'System Assessment',
    description: 'Comprehensive evaluation of your existing automation systems to identify inefficiencies, bottlenecks, and opportunities for improvement.',
    icon: '🔍',
    benefits: [
      'Identify hidden process inefficiencies',
      'Evaluate current technology infrastructure',
      'Assess compliance with industry standards',
      'Develop prioritized improvement roadmap'
    ]
  },
  {
    id: 2,
    title: 'Strategic Planning',
    description: 'Development of tailored automation strategies that align with your business goals, growth targets, and operational requirements.',
    icon: '📊',
    benefits: [
      'Clear ROI-focused automation roadmap',
      'Technology selection guidance',
      'Investment prioritization',
      'Risk mitigation planning'
    ]
  },
  {
    id: 3,
    title: 'Vendor Selection',
    description: 'Expert guidance in selecting the right automation partners, technology platforms, and integration services for your specific needs.',
    icon: '🤝',
    benefits: [
      'Vendor-neutral technology evaluation',
      'Proposal and bid analysis',
      'Contract negotiation support',
      'Compatibility and integration assessment'
    ]
  },
  {
    id: 4,
    title: 'Implementation Oversight',
    description: 'Project management and technical oversight during automation implementation to ensure quality, timeline adherence, and budget compliance.',
    icon: '📋',
    benefits: [
      'Quality assurance and testing',
      'Project timeline management',
      'Technical specification compliance',
      'Stakeholder communication'
    ]
  }
];

const industries = [
  'Manufacturing', 'Automotive', 'Pharmaceuticals', 'Food & Beverage', 
  'Chemical Processing', 'Oil & Gas', 'Power Generation', 'Logistics & Warehousing'
];

const AutomationConsulting = () => {
  useEffect(() => {
    document.title = 'Automation Consulting - AUTOMAX';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Automation Consulting</h1>
            <p className="text-xl text-blue-100">
              Expert guidance on the driving factors behind successful execution of automation projects, helping 
              businesses navigate the complexities of digital transformation with confidence.
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Automation Consulting?</h2>
              <p className="text-gray-600 mb-6">
                Automation is more than just implementing technology—it's about transforming business processes, 
                enhancing operational efficiency, and creating sustainable competitive advantages. Our automation 
                consulting services provide expert guidance to navigate these complex transformations.
              </p>
              <p className="text-gray-600 mb-6">
                With decades of industry experience, our consultants bring deep technical knowledge and 
                strategic insights to help you make informed decisions, maximize ROI, and minimize risks 
                throughout your automation journey.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">85%</div>
                  <p className="text-sm text-gray-600">Efficiency improvement average</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">30%</div>
                  <p className="text-sm text-gray-600">Average cost reduction</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">40%</div>
                  <p className="text-sm text-gray-600">Reduced implementation time</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">100+</div>
                  <p className="text-sm text-gray-600">Successful projects</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Automation Consulting" 
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
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Consulting Services</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of automation consulting services designed to support you 
              at every stage of your automation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
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
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Consulting Process</h2>
            <p className="text-gray-600">
              We follow a structured, collaborative approach to ensure your automation initiatives 
              deliver maximum value with minimal disruption.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-light hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: 'Discovery & Assessment',
                  description: 'We start by thoroughly understanding your business goals, current processes, and technological landscape to identify automation opportunities and constraints.',
                  icon: '🔎'
                },
                {
                  title: 'Strategy Development',
                  description: 'Based on our assessment, we develop a comprehensive automation strategy aligned with your business objectives, including technology recommendations, implementation roadmap, and ROI analysis.',
                  icon: '📝'
                },
                {
                  title: 'Solution Design',
                  description: 'Our experts design detailed automation solutions, including technical specifications, integration requirements, and implementation planning.',
                  icon: '✏️'
                },
                {
                  title: 'Implementation Support',
                  description: 'We provide ongoing guidance during implementation, helping you navigate challenges, ensure quality, and maintain alignment with strategic objectives.',
                  icon: '🛠️'
                },
                {
                  title: 'Optimization & Scaling',
                  description: 'After implementation, we help you measure results, identify optimization opportunities, and develop plans for scaling your automation initiatives.',
                  icon: '📈'
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
              Our automation consulting expertise spans across multiple industries, each with unique 
              requirements and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                Ready to Transform Your Operations?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Contact our automation consulting team to discuss how we can help you achieve your business objectives through strategic automation.
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

export default AutomationConsulting; 