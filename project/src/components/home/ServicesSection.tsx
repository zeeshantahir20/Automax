import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Tyre and Rubber',
    description: 'Automax is well known name in tyre industries of India, providing solutions for Tyres, Tubes and Rubber industries.',
    icon: '🏭',
  },
  {
    id: 2,
    title: 'Food and Beverages',
    description: 'We provide boost to production of food plants with fast and accurate systems for packaging and food processing.',
    icon: '🍽️',
  },
  {
    id: 3,
    title: 'Oil and Gas',
    description: 'Experience in oil and gas monitoring systems that are fast, secure and safe. "Before you control you need to monitor".',
    icon: '⛽',
  },
  {
    id: 4,
    title: 'Textile',
    description: 'We provide accurate and user-friendly systems to textile industries across India\'s diverse cultural landscape.',
    icon: '🧵',
  },
  {
    id: 5,
    title: 'Glass',
    description: 'Using our engineering excellence for floating, toughened glass and material handling technology.',
    icon: '🪟',
  },
  {
    id: 6,
    title: 'Metal and Steel',
    description: 'Providing safe and long-lasting solutions to monitor and control from remote locations to reduce downtime.',
    icon: '🔧',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our <span className="text-primary">Specializations</span>
          </h2>
          <p className="text-gray-600">
            We have expertise across multiple industries providing innovative automation solutions tailored to your specific needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-primary font-medium text-sm hover:text-primary-dark"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;