import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const partnerBrands = [
  {
    id: 1,
    name: 'Siemens',
    description: 'Industry-leading automation, control, and drive technologies for manufacturing and process industries.',
    logo: 'https://via.placeholder.com/200x100?text=Siemens',
    products: [
      'SIMATIC PLCs and Controllers',
      'SINAMICS Drive Systems',
      'SIRIUS Control Products',
      'HMI Systems',
      'Industrial Communication'
    ]
  },
  {
    id: 2,
    name: 'Lapp Kabel',
    description: 'Premium cables, connectors, and cable accessories for industrial automation and connectivity solutions.',
    logo: 'https://via.placeholder.com/200x100?text=Lapp+Kabel',
    products: [
      'ÖLFLEX® Control Cables',
      'UNITRONIC® Data Cables',
      'ETHERLINE® Network Cables',
      'EPIC® Industrial Connectors',
      'SKINTOP® Cable Glands'
    ]
  },
  {
    id: 3,
    name: 'Omron',
    description: 'Innovative automation and sensing technologies, including control systems, vision, safety, and robotics.',
    logo: 'https://via.placeholder.com/200x100?text=Omron',
    products: [
      'Machine Automation Controllers',
      'Vision Systems and Sensors',
      'Safety Components',
      'Motion Control Systems',
      'Industrial Robots'
    ]
  },
  {
    id: 4,
    name: 'Phoenix Contact',
    description: 'Comprehensive range of industrial connection technology, automation solutions, and electronic interfaces.',
    logo: 'https://via.placeholder.com/200x100?text=Phoenix+Contact',
    products: [
      'Terminal Blocks and Connectors',
      'Industrial Communication Systems',
      'Control and Signal Conditioning',
      'Power Supplies',
      'Surge Protection Devices'
    ]
  }
];

const serviceOfferings = [
  {
    title: 'Product Selection & Sourcing',
    description: 'Expert guidance on selecting the right products from our partner brands to meet your specific application requirements.',
    icon: '🔍'
  },
  {
    title: 'Technical Support',
    description: 'Comprehensive technical assistance for product selection, installation, configuration, and troubleshooting.',
    icon: '🛠️'
  },
  {
    title: 'Warranty Management',
    description: 'Streamlined warranty administration and claim processing for all partner products purchased through us.',
    icon: '📝'
  },
  {
    title: 'Custom Solutions',
    description: 'Development of customized solutions that integrate our partner products to address your unique requirements.',
    icon: '⚙️'
  },
  {
    title: 'Training & Knowledge Transfer',
    description: 'Hands-on training sessions and knowledge transfer to ensure effective utilization of purchased products.',
    icon: '👨‍🏫'
  },
  {
    title: 'Inventory Management',
    description: 'Just-in-time inventory solutions and stock management services to minimize your inventory costs.',
    icon: '📦'
  }
];

const PartnerProducts = () => {
  useEffect(() => {
    document.title = 'Partner Products - AUTOMAX';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Partner Products</h1>
            <p className="text-xl text-blue-100">
              AUTOMAX represents world-class brands in automation and industrial equipment – including Lapp Kabel, 
              Omron, Phoenix Contact, and Siemens – delivering quality products with exceptional support.
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Authorized Distributor of Premium Industrial Brands</h2>
              <p className="text-gray-600 mb-6">
                As an authorized distributor for leading industrial automation brands, we provide 
                access to high-quality components and systems that form the backbone of modern 
                industrial automation and control solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Our strong partnerships with world-class manufacturers enable us to offer not just 
                products, but comprehensive solutions backed by deep technical expertise, competitive 
                pricing, and reliable after-sales support.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">4+</div>
                  <p className="text-sm text-gray-600">Premium brand partnerships</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">10K+</div>
                  <p className="text-sm text-gray-600">Products available</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">98%</div>
                  <p className="text-sm text-gray-600">On-time delivery rate</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">15+</div>
                  <p className="text-sm text-gray-600">Years of distribution experience</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Industrial Automation Components" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Partner Brands</h2>
            <p className="text-gray-600">
              We partner with industry-leading manufacturers to provide you with the highest quality 
              industrial automation and electrical components.
            </p>
          </motion.div>

          <div className="space-y-12">
            {partnerBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center p-8 bg-gray-50">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} Logo`} 
                      className="max-w-full max-h-24"
                    />
                  </div>
                  <div className="md:col-span-2 p-8">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{brand.name}</h3>
                    <p className="text-gray-600 mb-4">{brand.description}</p>
                    
                    <h4 className="font-semibold text-gray-700 mb-2">Featured Products:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {brand.products.map((product, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-gray-600">{product}</span>
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

      {/* Value-Added Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Value-Added Services</h2>
            <p className="text-gray-600">
              Beyond product distribution, we offer a range of value-added services to enhance 
              your experience and maximize the value of your investments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceOfferings.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Us as Your Supply Partner</h2>
            <p className="text-gray-600">
              We offer a superior procurement experience with benefits that go beyond 
              just product availability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                title: 'Authorized Distributor',
                description: 'As an authorized distributor, we provide genuine products with full manufacturer warranties and technical support.',
                icon: '🏅'
              },
              {
                title: 'Technical Expertise',
                description: 'Our team of application engineers can help you select the right products for your specific requirements.',
                icon: '👨‍💻'
              },
              {
                title: 'Competitive Pricing',
                description: 'Leverage our strong manufacturer relationships and volume purchasing power for competitive pricing.',
                icon: '💰'
              },
              {
                title: 'Extensive Inventory',
                description: 'Wide selection of products maintained in stock for quick delivery when you need them.',
                icon: '📦'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality control processes ensure that only genuine, high-quality products reach our customers.',
                icon: '✓'
              },
              {
                title: 'Single-Source Solution',
                description: 'Simplify your procurement process by working with one reliable partner for multiple brand requirements.',
                icon: '🔄'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="text-3xl mr-4 flex-shrink-0">{advantage.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Customers Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it—hear from some of our satisfied customers who rely 
              on our partner products for their critical industrial applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "We have been working with AUTOMAX for more than two decades and we recognize that this organization is reliable, approachable, efficient and knowledgeable.",
                author: "Amol Timbe",
                position: "GM - Materials",
                company: "Praj Industries Limited"
              },
              {
                quote: "During our association, AUTOMAX have demonstrated cooperation, flexibility, quality and customer commitment to meet our project requirements.",
                author: "Umesh Upadhye",
                position: "Regional Vice President (SCM)",
                company: "MAN Diesel & Turbo India Pvt. Ltd."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8 shadow-md"
              >
                <svg className="w-10 h-10 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position} | {testimonial.company}</p>
                </div>
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
                Ready to Source Quality Products?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Contact us to discuss your industrial automation product requirements and experience 
                the benefits of working with an authorized distributor of premium brands.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn bg-white text-primary hover:bg-gray-100 transition-colors shadow-md"
                >
                  Request a Quote
                </Link>
                <Link 
                  to="/contact" 
                  className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
                >
                  Product Inquiry
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnerProducts; 