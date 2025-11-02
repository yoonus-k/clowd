import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCalendar, FaRocket } from 'react-icons/fa';

const Contact = () => {
  const [formType, setFormType] = useState('consultation'); // consultation, demo, general
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      info: 'Jeddah, Saudi Arabia',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      info: 'info@clowd.ai',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      info: '+966 XX XXX XXXX',
    },
  ];

  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary-dark dark:from-gray-950 dark:via-gray-900 dark:to-black text-white section-padding border-b dark:border-gray-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Let's Transform Your <span className="text-accent">Business</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to close the efficiency gap? Schedule a free consultation and discover 
              how AI can revolutionize your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-neutral-light dark:bg-black border-t dark:border-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-display font-bold text-neutral dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-neutral-medium dark:text-gray-300 mb-8 leading-relaxed">
                Have questions? Want to discuss your project? We're here to help. 
                Reach out and let's start the conversation.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                      <item.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-neutral-medium dark:text-gray-300">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-primary to-primary-light dark:from-gray-950 dark:to-gray-900 rounded-xl text-white border dark:border-gray-800 shadow-lg dark:shadow-accent/10">
                <h3 className="text-xl font-display font-bold mb-3">
                  Why Choose Clowd?
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>No obligation or commitment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>Instant actionable insights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>Custom solutions for your needs</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-xl dark:shadow-accent/10 border dark:border-gray-900 p-8">
                {/* Form Type Selector */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <button
                    onClick={() => setFormType('consultation')}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      formType === 'consultation'
                        ? 'bg-accent text-white dark:text-black'
                        : 'bg-neutral-light dark:bg-gray-900 text-neutral-medium dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                    }`}
                  >
                    <FaCalendar />
                    <span>Schedule Consultation</span>
                  </button>
                  <button
                    onClick={() => setFormType('demo')}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      formType === 'demo'
                        ? 'bg-accent text-white dark:text-black'
                        : 'bg-neutral-light dark:bg-gray-900 text-neutral-medium dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                    }`}
                  >
                    <FaRocket />
                    <span>Request Demo</span>
                  </button>
                  <button
                    onClick={() => setFormType('general')}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      formType === 'general'
                        ? 'bg-accent text-white dark:text-black'
                        : 'bg-neutral-light dark:bg-gray-900 text-neutral-medium dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                    }`}
                  >
                    <FaEnvelope />
                    <span>General Inquiry</span>
                  </button>
                </div>

                {/* Dynamic Title */}
                <h2 className="text-3xl font-display font-bold text-neutral dark:text-white mb-6">
                  {formType === 'consultation' && 'Schedule Your Free Consultation'}
                  {formType === 'demo' && 'Request a Product Demo'}
                  {formType === 'general' && 'Send Us a Message'}
                </h2>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral dark:text-white mb-3">
                      Thank You!
                    </h3>
                    <p className="text-neutral-medium dark:text-gray-300 mb-6">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-neutral dark:text-gray-200 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-800 dark:bg-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-neutral dark:text-gray-200 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-800 dark:bg-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-neutral dark:text-gray-200 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-800 dark:bg-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Acme Corp"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-neutral dark:text-gray-200 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-800 dark:bg-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="+966 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-neutral dark:text-gray-200 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-800 dark:bg-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder={
                          formType === 'consultation'
                            ? 'Tell us about your business and the challenges you\'re facing...'
                            : formType === 'demo'
                            ? 'Which solution are you interested in? What would you like to see in the demo?'
                            : 'How can we help you?'
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full btn-primary text-lg inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <FaPaperPlane className="ml-2" />
                        </>
                      )}
                    </button>

                    <p className="text-sm text-neutral-medium dark:text-gray-400 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
