import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getServices, subscribeToServices } from '../lib/api';
import { Service } from '../types';

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Services - AUTOMAX';
    
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await getServices();
        setServices(data);
      } catch (err: any) {
        console.error('Error fetching services:', err);
        setError('Failed to load services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();

    // Set up real-time subscription
    const subscription = subscribeToServices((payload) => {
      if (payload.new) {
        // Handle different events by checking what changed
        setServices(prevServices => {
          // Check if this is an update to an existing service
          const existingIndex = prevServices.findIndex(s => s.id === payload.new.id);
          
          if (existingIndex >= 0) {
            // Update existing service
            const updatedServices = [...prevServices];
            updatedServices[existingIndex] = payload.new;
            return updatedServices;
          } else {
            // Add new service
            return [payload.new, ...prevServices];
          }
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-blue-100">
              We provide specialized automation solutions across multiple industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    {service.features && service.features.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Features:</h4>
                        <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                          {service.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-3">No services found</h3>
              <p className="text-gray-500">We're currently updating our service offerings. Please check back later.</p>
            </div>
          )}
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
                Looking for a Custom Solution?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Our team of experienced engineers can develop a tailored automation solution for your specific industry needs.
              </p>
              <a 
                href="/contact" 
                className="btn bg-white text-primary hover:bg-gray-100 transition-colors shadow-md"
              >
                Request a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;