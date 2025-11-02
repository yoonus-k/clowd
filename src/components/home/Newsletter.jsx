import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="section-padding bg-neutral-light dark:bg-black transition-colors duration-300 border-t dark:border-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary to-primary-light dark:from-gray-950 dark:to-gray-900 p-12 rounded-2xl shadow-2xl dark:shadow-accent/10 border dark:border-gray-900">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Stay Ahead of the Curve
              </h2>
              <p className="text-xl text-gray-200">
                Get the latest insights on AI, automation, and business transformation delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-lg text-neutral dark:bg-black dark:text-white dark:border dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    'Subscribing...'
                  ) : status === 'success' ? (
                    '✓ Subscribed!'
                  ) : (
                    <>
                      Subscribe
                      <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </button>
              </div>
              
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent text-center mt-4 font-semibold"
                >
                  🎉 Thank you for subscribing!
                </motion.p>
              )}
            </form>

            <p className="text-gray-300 dark:text-gray-400 text-sm text-center mt-6">
              Join 1,000+ business leaders staying informed. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
