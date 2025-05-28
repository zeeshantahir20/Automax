import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about-section" className="bg-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About <span className="text-primary">AUTOMAX</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              AUTOMAX INDUSTRIAL SOLUTIONS's team is a collective of the most efficient and experienced Engineers in the market. We strive to provide the best Engineering and Software services for global projects in Plant / Equipment / Machine and Process Automation.
            </p>
            
            <p className="text-gray-600 mb-6">
              We have successfully executed many projects through our on and off-shore model for several leading global Industrial Automation companies, Process Consultants and OEMs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  To be market leaders by focusing on consistently generating economical yet innovative solutions for our clients.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To accurately assess our client's needs and provide appropriate solutions in terms of quality products and superior services.
                </p>
              </div>
            </div>
            
            <a href="/about" className="btn btn-primary">
              Learn More About Us
            </a>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Industrial automation equipment" 
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;