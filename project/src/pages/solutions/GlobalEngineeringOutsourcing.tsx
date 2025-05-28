import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const outsourcingServices = [
  {
    id: 1,
    title: 'Dedicated Engineering Teams',
    description: 'Access to dedicated teams of skilled engineers who work as an extension of your in-house resources.',
    icon: '👥',
    benefits: [
      'Seamless integration with your internal teams',
      'Dedicated project management',
      'Flexible team scaling based on project needs',
      'Consistent knowledge retention and transfer'
    ]
  },
  {
    id: 2,
    title: 'Project-Based Outsourcing',
    description: 'Complete project execution by our specialized engineering teams with defined deliverables and timelines.',
    icon: '📋',
    benefits: [
      'Fixed scope and cost structure',
      'Milestone-based delivery model',
      'Reduced project management overhead',
      'Accelerated time-to-market'
    ]
  },
  {
    id: 3,
    title: 'Specialized Skill Augmentation',
    description: 'Targeted expertise in specialized domains like PLC programming, SCADA development, and industrial networking.',
    icon: '🧠',
    benefits: [
      'Access to niche technical skills',
      'Rapid deployment of specialized resources',
      'Knowledge transfer to internal teams',
      'Reduced recruitment and training costs'
    ]
  },
  {
    id: 4,
    title: 'Managed Services',
    description: 'End-to-end management of critical engineering functions with defined SLAs and performance metrics.',
    icon: '⚙️',
    benefits: [
      'Predictable operational costs',
      'Continuous improvement and optimization',
      'Regular performance reporting',
      'Reduced management overhead'
    ]
  }
];

const specializations = [
  'PLC Programming & Testing',
  'SCADA & HMI Development',
  'Control Panel Design',
  'Electrical Engineering',
  'Instrumentation Design',
  'Automation System Integration',
  'Industrial IoT Solutions',
  'Process Control Engineering',
  'Industrial Network Design',
  'Technical Documentation',
  'CAD/CAM Services',
  'Simulation & Testing'
];

const GlobalEngineeringOutsourcing = () => {
  useEffect(() => {
    document.title = 'Global Engineering Outsourcing - AUTOMAX';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Global Engineering Outsourcing</h1>
            <p className="text-xl text-blue-100">
              A bench strength of 350+ engineers for customers keen to outsource skilled engineering resources
              and manpower for their automation and control engineering projects.
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Outsource Your Engineering Needs?</h2>
              <p className="text-gray-600 mb-6">
                In today's competitive landscape, accessing skilled engineering talent quickly and cost-effectively
                is crucial for business success. Our Global Engineering Outsourcing services provide the flexibility,
                expertise, and scalability needed to accelerate your automation and control engineering projects.
              </p>
              <p className="text-gray-600 mb-6">
                With a diverse pool of over 350 specialized engineers, we offer tailored outsourcing solutions
                that help you overcome talent shortages, reduce overhead costs, and focus on your core business
                while ensuring technical excellence in your engineering projects.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">40%</div>
                  <p className="text-sm text-gray-600">Average cost savings</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">60%</div>
                  <p className="text-sm text-gray-600">Faster project delivery</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">350+</div>
                  <p className="text-sm text-gray-600">Specialized engineers</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">24/7</div>
                  <p className="text-sm text-gray-600">Global delivery model</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Global Engineering Outsourcing" 
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
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Outsourcing Models</h2>
            <p className="text-gray-600">
              We offer flexible engineering outsourcing solutions tailored to your specific requirements,
              project timelines, and budget constraints.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outsourcingServices.map((service, index) => (
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

      {/* Key Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">The AUTOMAX Advantage</h2>
            <p className="text-gray-600">
              What sets our engineering outsourcing services apart from traditional staffing solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Deep Domain Expertise',
                description: 'Our engineers bring specialized knowledge and experience in industrial automation, control systems, and related domains.',
                icon: '🔍'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality control processes ensure deliverables meet the highest industry standards and your specific requirements.',
                icon: '✓'
              },
              {
                title: 'Flexible Engagement Models',
                description: 'Choose from dedicated teams, project-based outsourcing, or specialized skill augmentation based on your needs.',
                icon: '🔄'
              },
              {
                title: 'Global Delivery Network',
                description: 'With engineering teams across multiple time zones, we provide round-the-clock service and faster turnaround times.',
                icon: '🌐'
              },
              {
                title: 'Transparent Communication',
                description: 'Regular progress reports, structured communication channels, and direct access to engineering teams.',
                icon: '💬'
              },
              {
                title: 'Intellectual Property Protection',
                description: 'Stringent security protocols and contractual agreements to protect your intellectual property and confidential information.',
                icon: '🔒'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Technical Specializations</h2>
            <p className="text-gray-600">
              Our engineering talent pool covers a wide range of technical specializations to meet your
              diverse project requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {specializations.map((specialization, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-gray-800">{specialization}</h3>
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
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Engagement Process</h2>
            <p className="text-gray-600">
              A streamlined approach to establishing and managing successful engineering outsourcing partnerships
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-light hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: 'Requirements Analysis',
                  description: 'We start by understanding your technical requirements, project scope, timeline, and budget constraints.',
                  icon: '📋'
                },
                {
                  title: 'Resource Planning',
                  description: 'Based on your requirements, we identify the optimal team composition, skill sets, and engagement model.',
                  icon: '👥'
                },
                {
                  title: 'Onboarding & Knowledge Transfer',
                  description: 'Our engineers undergo project-specific training and knowledge transfer to ensure alignment with your processes and requirements.',
                  icon: '🔄'
                },
                {
                  title: 'Execution & Delivery',
                  description: 'The engineering team delivers work according to agreed timelines and quality standards with regular progress updates.',
                  icon: '⚙️'
                },
                {
                  title: 'Continuous Improvement',
                  description: 'We regularly review performance metrics, gather feedback, and implement process improvements to enhance service delivery.',
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
                Ready to Scale Your Engineering Capacity?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Contact us to discuss how our Global Engineering Outsourcing solutions can help you accelerate project delivery, reduce costs, and access specialized expertise.
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

export default GlobalEngineeringOutsourcing; 