import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.",
    author: "Elbert Hubbard",
    role: "Writer & Philosopher",
  },
  {
    id: 2,
    content: "The intelligent use of science and technology are the tools with which to achieve a new direction.",
    author: "Jacque Fresco",
    role: "Futurist",
  },
  {
    id: 3,
    content: "Science and technology can solve all the world's problems, and historically it has been shown to make the world better and better.",
    author: "Ray Kurzweil",
    role: "Inventor & Futurist",
  },
  {
    id: 4,
    content: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
    role: "Writer & Pioneer",
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-primary py-16 md:py-24 text-white">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Inspirational Quotes
          </h2>
          <p className="text-blue-100">
            Thoughts that drive our innovation and approach
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center"
          >
            <Quote className="h-12 w-12 mx-auto mb-6 text-blue-300 opacity-50" />
            
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-blue-50">
              "{testimonials[currentIndex].content}"
            </p>
            
            <div>
              <p className="font-semibold text-white">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-blue-300 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;