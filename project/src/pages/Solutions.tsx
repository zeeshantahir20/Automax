import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Solution categories from Cotmac website
const solutionCategories = [
  {
    id: 1,
    title: 'Automation',
    description: 'Driving efficiency and cost savings through factory and process automation solutions.',
    image: 'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/solutions/automation'
  },
  {
    id: 2,
    title: 'Automation Consulting',
    description: 'Expert guidance on the driving factors behind successful execution of automation projects.',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/solutions/automation-consulting'
  },
  {
    id: 3,
    title: 'Control Panels',
    description: 'Complete range of automation and LT Panel solutions across industries delivered around the globe.',
    image: 'https://images.pexels.com/photos/3912362/pexels-photo-3912362.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/solutions/control-panels'
  },
  {
    id: 4,
    title: 'Engineering Services',
    description: 'Engineering services for control automation, plant engineering and design across industries.',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/solutions/engineering-services'
  },
  {
    id: 5,
    title: 'Global Engineering Outsourcing',
    description: 'A bench strength of experienced engineers for customers keen to outsource skilled engineering resources.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/solutions/global-engineering-outsourcing'
  },
  {
    id: 6,
    title: 'Industrial Software',
    description: 'Design and engineering services, software sales & support, and training services for industrial applications.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/solutions/industrial-software'
  },
  {
    id: 7,
    title: 'Machine Vision',
    description: 'Advanced vision systems for quality control, inspection, and process automation.',
    image: 'https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/solutions/machine-vision'
  },
  {
    id: 8,
    title: 'Partner Products',
    description: 'Representing world-class brands with a focus on quality and reliability.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/solutions/partner-products'
  },
  {
    id: 9,
    title: 'Repairs and Service Centers',
    description: 'Industrial automation products repair services across a vast spectrum of hardware products.',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    path: '/solutions/repairs-service-centers'
  }
];

const Solutions = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  useEffect(() => {
    document.title = 'Solutions - AUTOMAX';
  }, []);

  // Filter solutions based on URL parameter if present
  const filteredSolutions = categoryFilter 
    ? solutionCategories.filter(solution => 
        solution.title.toLowerCase().includes(categoryFilter.toLowerCase()))
    : solutionCategories;

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {categoryFilter ? `${categoryFilter} Solutions` : 'Our Solutions'}
            </h1>
            <p className="text-xl text-blue-100">
              At AUTOMAX, efficiency meets innovation & cutting-edge technology transforms possibilities into realities. 
              Our end-to-end automation solutions define industry standards with seamless integration of hardware & software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Link to={solution.path} className="block">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      <span>Learn more</span>
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
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
                Need a Custom Solution?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Our team of experts can develop a tailored automation solution for your specific industry needs.
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

export default Solutions; 