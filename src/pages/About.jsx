import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaHandshake, FaMapMarkerAlt, FaBullseye, FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation First',
      description: 'We stay at the cutting edge of AI technology to deliver solutions that actually work.',
    },
    {
      icon: FaBullseye,
      title: 'Results Driven',
      description: 'Every solution is designed for measurable impact and clear ROI.',
    },
    {
      icon: FaHandshake,
      title: 'Partnership Approach',
      description: 'We\'re not just vendors – we\'re your strategic technology partners.',
    },
    {
      icon: FaCogs,
      title: 'Practical Solutions',
      description: 'We build AI that integrates seamlessly and delivers value from day one.',
    },
  ];

  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary-dark dark:from-gray-950 dark:via-gray-900 dark:to-black text-white section-padding border-b dark:border-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Bridging the Gap Between <span className="text-accent">AI & Business</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                We're building the future of business operations, one intelligent solution at a time.
              </p>
              <div className="flex items-center space-x-3 text-accent">
                <FaMapMarkerAlt size={24} />
                <span className="text-xl font-semibold">Based in Jeddah, Saudi Arabia</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border dark:border-gray-800">
                <h3 className="text-2xl font-display font-bold mb-6">Our Mission</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  To empower businesses to operate smarter, faster, and leaner through intelligent automation. 
                  We're closing the gap between what AI can do and what businesses are actually leveraging.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white dark:bg-black border-t dark:border-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
                Our Story
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-neutral-medium dark:text-gray-300 leading-relaxed mb-6">
                Clowd was founded on a simple observation: while AI technology has made incredible advances, 
                most businesses struggle to leverage its potential. The result? Massive inefficiencies, 
                budget overruns, and lost opportunities.
              </p>
              <p className="text-lg text-neutral-medium dark:text-gray-300 leading-relaxed mb-6">
                We saw companies losing millions to operational inefficiencies that AI could solve. 
                We witnessed brilliant technology sitting on the shelf because it wasn't designed for 
                real-world business problems.
              </p>
              <p className="text-lg text-neutral-medium dark:text-gray-300 leading-relaxed mb-6">
                That's why we created Clowd – to build AI solutions that bridge this gap. Solutions that 
                understand business challenges, integrate seamlessly with existing systems, and deliver 
                measurable results from day one.
              </p>
              <p className="text-lg text-neutral-medium dark:text-gray-300 leading-relaxed">
                Founded in Jeddah, Saudi Arabia, we're committed to helping businesses across industries 
                harness the power of AI to transform their operations and achieve unprecedented growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-neutral-light dark:bg-black border-t dark:border-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              What We Do
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-3xl mx-auto">
              We create AI-driven solutions that solve real operational challenges across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                <FaRocket className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-display font-bold text-neutral dark:text-white mb-3">
                Agentic AI Systems
              </h3>
              <p className="text-neutral-medium dark:text-gray-300">
                Autonomous AI agents that handle complex tasks independently, learning and adapting in real-time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                <FaCogs className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-display font-bold text-neutral dark:text-white mb-3">
                AI Products (SaaS)
              </h3>
              <p className="text-neutral-medium dark:text-gray-300">
                Scalable subscription-based models that grow with your business needs and deliver continuous value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                <FaBullseye className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-display font-bold text-neutral dark:text-white mb-3">
                Custom Development
              </h3>
              <p className="text-neutral-medium dark:text-gray-300">
                Tailored AI solutions designed specifically for your unique business challenges and workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white dark:bg-black border-t dark:border-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl mb-4 shadow-lg dark:shadow-accent/20">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-display font-bold text-neutral dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-medium dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent dark:from-gray-950 dark:to-black text-white border-t dark:border-gray-900 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Ready to transform your business with AI? Let's talk about how we can help.
            </p>
            <Link to="/contact" className="bg-white dark:bg-accent text-primary dark:text-black hover:bg-gray-100 dark:hover:bg-accent/90 font-semibold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center text-lg">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
