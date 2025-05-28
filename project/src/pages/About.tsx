import { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - AUTOMAX';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About AUTOMAX</h1>
            <p className="text-xl text-blue-100">
              We are the industry leaders, when it comes down to solving issues in the field of Industrial Automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                AUTOMAX INDUSTRIAL SOLUTIONS's team is a collective of the most efficient and experienced Engineers in the market. We strive to provide the best Engineering and Software services for global projects in Plant / Equipment / Machine and Process Automation.
              </p>
              <p className="text-gray-600 mb-6">
                We have successfully executed many projects through via our on and off-shore model for several leading global Industrial Automation companies, Process Consultants and OEMs.
              </p>
              <p className="text-gray-600 mb-6">
                While our company's head office is located at Ambala Cantt, Haryana; we have branch offices in Haridwar, Uttarakhand as well.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Engineering team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600">
                We desire to be market leaders in our fields by focusing on consistently generating economical yet innovative solutions and services for our clients. We believe client satisfaction is the strong foundation of any long term, vigorous success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                To accurately assess our client's needs in electrical distribution and industrial automation, so that we can provide the appropriate solutions in terms of quality products and superior services for their sustainable growth and profit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Qualities */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Core Values</h2>
            <p className="text-gray-600">
              These are the principles that guide everything we do at AUTOMAX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Centric Approach",
                description: "Our biggest priority is the satisfaction of our customers and adding value to their business. We put in extra effort to fulfill all the needs of our clients."
              },
              {
                title: "Employee Orientated",
                description: "Our work culture is supportive to our employees, as we care about their well-being, value their efforts and work building our team spirit."
              },
              {
                title: "Society and Environment",
                description: "We make active choices to reduce environmental waste and do our work in the service of society. We understand our responsibility to the environment."
              },
              {
                title: "Integrity and Trust",
                description: "We believe no good work can be done without being true to oneself and establishing a trusting relationship with the clients."
              },
              {
                title: "Speed & Flexibility",
                description: "We make sure to deliver solutions in a timely fashion and don't shy away from changes necessary to be on top of our game."
              },
              {
                title: "Quality",
                description: "Quality is the striking feature of our range, and plays an important role in gaining our clientele. We maintain international quality standards."
              }
            ].map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{quality.title}</h3>
                <p className="text-gray-600">{quality.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;