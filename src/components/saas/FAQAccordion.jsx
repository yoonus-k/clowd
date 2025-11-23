import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle, FaCreditCard, FaPlug, FaHeadset, FaLock } from 'react-icons/fa';

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const defaultFAQs = faqs || [
    {
      category: 'Technical',
      icon: FaPlug,
      questions: [
        {
          question: 'How long does implementation take?',
          answer: 'Most implementations are completed within 10-15 minutes. Our team provides a quick setup call to get you started, and you can begin using the platform immediately after.'
        },
        {
          question: 'Do I need technical knowledge to use this?',
          answer: 'No technical knowledge required. Our platform is designed for business users with an intuitive interface. We provide comprehensive documentation and video tutorials to help you get started.'
        },
        {
          question: 'Can I integrate with my existing systems?',
          answer: 'Yes! We offer integrations with major platforms including Qlub, Foodics, Shopify, and more. Custom integrations can be arranged for enterprise customers.'
        }
      ]
    },
    {
      category: 'Pricing & Billing',
      icon: FaCreditCard,
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and local payment methods in Saudi Arabia including Mada, Apple Pay, and STC Pay.'
        },
        {
          question: 'Can I cancel anytime?',
          answer: 'Yes, you can cancel your subscription at any time with no penalties or cancellation fees. Your service will remain active until the end of your current billing period.'
        },
        {
          question: 'Do you offer volume discounts?',
          answer: 'Yes! Multi-branch and enterprise customers receive significant volume discounts. Contact our sales team for a custom quote based on your needs.'
        }
      ]
    },
    {
      category: 'Support & Training',
      icon: FaHeadset,
      questions: [
        {
          question: 'What kind of support do you provide?',
          answer: '24/7 support via WhatsApp, phone, and email. Enterprise customers get a dedicated account manager and priority response times (< 30 minutes).'
        },
        {
          question: 'Do you provide training for my team?',
          answer: 'Yes! We offer live training sessions, recorded tutorials, and comprehensive documentation. Training is included in all plans at no extra cost.'
        },
        {
          question: 'What if I need custom features?',
          answer: 'Enterprise customers can request custom features and integrations. Our development team works closely with you to build exactly what you need.'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: FaLock,
      questions: [
        {
          question: 'Is my data secure?',
          answer: 'Absolutely. We use enterprise-grade SSL encryption, comply with GDPR, and follow Saudi data protection laws. All data is stored in secure, redundant servers with regular backups.'
        },
        {
          question: 'Where is my data stored?',
          answer: 'Data is stored in secure cloud servers with redundant backups. Saudi customers can opt for local data storage within Saudi Arabia to comply with data residency requirements.'
        },
        {
          question: 'Do you have an SLA?',
          answer: 'Yes, we guarantee 99.9% uptime with our Service Level Agreement. Enterprise customers can request custom SLAs with higher guarantees and compensation terms.'
        }
      ]
    }
  ];

  const categoryColors = {
    'Technical': 'blue',
    'Pricing & Billing': 'green',
    'Support & Training': 'purple',
    'Security & Compliance': 'red'
  };

  const colorMap = {
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500' },
    green: { bg: 'bg-green-100 dark:bg-green-900/20', text: 'text-green-600 dark:text-green-400', border: 'border-green-500' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/20', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500' },
    red: { bg: 'bg-red-100 dark:bg-red-900/20', text: 'text-red-600 dark:text-red-400', border: 'border-red-500' }
  };

  return (
    <section className="section-padding bg-neutral-light dark:bg-gray-950 border-y dark:border-gray-900">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral dark:text-white mb-6">
            Got <span className="text-accent">Questions?</span> We've Got Answers
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-300">
            Everything you need to know about our product and billing
          </p>
        </motion.div>

        <div className="space-y-8">
          {defaultFAQs.map((categoryGroup, catIndex) => {
            const Icon = categoryGroup.icon;
            const colors = colorMap[categoryColors[categoryGroup.category]] || colorMap.blue;

            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className={`flex items-center space-x-3 mb-4 ${colors.text}`}>
                  <Icon className="text-2xl" />
                  <h3 className="text-xl font-display font-bold">{categoryGroup.category}</h3>
                </div>

                {/* Questions */}
                <div className="space-y-3">
                  {categoryGroup.questions.map((faq, qIndex) => {
                    const globalIndex = `${catIndex}-${qIndex}`;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={qIndex}
                        className="bg-white dark:bg-black border-2 dark:border-gray-800 rounded-xl overflow-hidden hover:border-accent dark:hover:border-accent transition-all duration-300"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <div className="flex items-start space-x-4 flex-1">
                            <FaQuestionCircle className={`${colors.text} text-xl flex-shrink-0 mt-1`} />
                            <span className="font-semibold text-neutral dark:text-white text-lg">
                              {faq.question}
                            </span>
                          </div>
                          <FaChevronDown
                            className={`${colors.text} text-xl flex-shrink-0 ml-4 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pl-16">
                                <p className="text-neutral-medium dark:text-gray-400 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-accent to-blue-500 dark:from-accent/90 dark:to-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <FaHeadset className="text-5xl mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Still Have Questions?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Our team is here to help 24/7. Get in touch via WhatsApp, phone, or email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <FaHeadset className="mr-2" />
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm border border-white/30"
            >
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQAccordion;
