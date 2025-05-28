import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="bg-gradient-to-r from-blue-900 to-primary rounded-2xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Decorative element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute right-40 -top-20 w-32 h-32 bg-white/10 rounded-full"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Automate Your Business?
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Contact us today for a consultation on how our industrial automation solutions can transform your operations and boost efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-0">
                <a 
                  href="tel:7018229954" 
                  className="inline-flex items-center bg-white/20 hover:bg-white/30 transition-colors py-3 px-5 rounded-lg text-white"
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  <span>7018229954</span>
                </a>
                
                <a 
                  href="mailto:sales@automaxindustries.com" 
                  className="inline-flex items-center bg-white/20 hover:bg-white/30 transition-colors py-3 px-5 rounded-lg text-white"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  <span>sales@automaxindustries.com</span>
                </a>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="btn bg-white text-primary hover:bg-gray-100 transition-colors shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;