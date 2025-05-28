import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - AUTOMAX';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Get in touch with our team for inquiries, support, or to discuss your automation needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Get In Touch</h2>
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Offices</h2>
              
              <div className="space-y-8">
                {/* Ambala Office */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Ambala Unit</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-600">
                        #28 Ranjeet Nagar, Ambala Cantt., Haryana (133001)
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <a href="tel:7018229954" className="text-gray-600 hover:text-primary">
                        7018229954 (ARUN KASHYAP)
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                    
                    <a 
                      href="https://www.google.com/maps/place/Sewa+Samiti+Senior+Secondary+School/@30.3357016,76.8334839,17z/data=!3m1!4b1!4m5!3m4!1s0x390fb619895c250f:0x916922f94f366482!8m2!3d30.3357016!4d76.8356726" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-primary-dark transition-colors"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
                
                {/* Haridwar Office */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Haridwar Unit</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-600">
                        #202 A3 Gharaunda, Near Denso Chowk, Bahadrabad, Haridwar (249402)
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <a href="tel:8168295889" className="text-gray-600 hover:text-primary">
                        8168295889 (PRABHJOT SINGH)
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <a href="mailto:sales@automaxindustries.com" className="text-gray-600 hover:text-primary">
                        sales@automaxindustries.com
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                    
                    <a 
                      href="https://www.google.com/maps/dir/28.6500709,77.1370109/DENSO+INDIA+LTD,+Salempur+Mahdood,+Uttarakhand/@29.2796551,77.0128035,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390949a5914a6d73:0xb001a6006c8a575d!2m2!1d78.0526483!2d29.9439527" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-primary-dark transition-colors"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Email Us</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <a href="mailto:sales@automaxindustries.com" className="text-gray-600 hover:text-primary">
                      sales@automaxindustries.com
                    </a>
                    <span className="ml-2 text-gray-500 text-sm">(Sales)</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <a href="mailto:admin@automaxindustries.com" className="text-gray-600 hover:text-primary">
                      admin@automaxindustries.com
                    </a>
                    <span className="ml-2 text-gray-500 text-sm">(Admin)</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <a href="mailto:purchase@automaxindustries.com" className="text-gray-600 hover:text-primary">
                      purchase@automaxindustries.com
                    </a>
                    <span className="ml-2 text-gray-500 text-sm">(Purchase)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;