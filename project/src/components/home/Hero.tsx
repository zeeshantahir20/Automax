import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white min-h-screen flex items-center">
      {/* Overlay with slight transparency */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your ONE STOP SOLUTION for Industrial Automation
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are a competent and professional organization determined to be the market leader by providing our customers innovative solutions and services.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#about-section" className="btn bg-white text-blue-900 hover:bg-gray-100">
              Learn More
            </a>
            <a href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToNextSection}
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;