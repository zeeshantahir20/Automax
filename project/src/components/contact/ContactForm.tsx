import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('There was an error submitting the form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Your phone number"
            {...register('phone')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          id="company"
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Your company name"
          {...register('company')}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="How can we help you?"
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 bg-primary text-white rounded-md font-medium transition-colors ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
        >
          Thank you for your message! We will get back to you soon.
        </motion.div>
      )}

      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
        >
          {submitError}
        </motion.div>
      )}
    </form>
  );
};

export default ContactForm;