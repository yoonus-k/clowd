import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useParams, Navigate } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaBook, FaLightbulb, FaCode, FaCopy, FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { getDocBySlug, docsCategories } from '../data/docsData';

const DocDetail = () => {
  const { slug } = useParams();
  const doc = getDocBySlug(slug);
  const [copiedCode, setCopiedCode] = useState(null);

  if (!doc) {
    return <Navigate to="/docs" replace />;
  }

  const category = docsCategories.find(c => c.id === doc.category);

  const copyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'Intermediate': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    'Advanced': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${category.color} text-white overflow-hidden pt-32 pb-20`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/docs"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Documentation
            </Link>

            <div className="flex items-center space-x-3 mb-4">
              <category.icon className="text-3xl" />
              <span className="text-white/80">{category.name}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {doc.title}
            </h1>

            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              {doc.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className={`px-4 py-2 rounded-full font-semibold ${difficultyColors[doc.difficulty]}`}>
                {doc.difficulty}
              </span>
              <span className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaClock className="mr-2" />
                {doc.readTime} read
              </span>
              <span className="text-white/80">
                Last updated: {doc.lastUpdated}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom max-w-4xl">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose dark:prose-invert max-w-none mb-12"
          >
            <p className="text-xl text-neutral dark:text-gray-300 leading-relaxed">
              {doc.content.intro}
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {doc.content.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="scroll-mt-32"
                id={`section-${idx}`}
              >
                <h2 className="text-3xl font-bold text-neutral dark:text-white mb-4 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 bg-accent text-white rounded-lg mr-3 text-lg">
                    {idx + 1}
                  </span>
                  {section.title}
                </h2>

                <p className="text-lg text-neutral-medium dark:text-gray-400 mb-6 leading-relaxed">
                  {section.content}
                </p>

                {/* Code Block */}
                {section.code && (
                  <div className="relative bg-gray-900 dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-800">
                    <div className="flex items-center justify-between bg-gray-800 px-6 py-3 border-b border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <button
                        onClick={() => copyCode(section.code, idx)}
                        className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === idx ? (
                          <>
                            <FaCheck className="mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <FaCopy className="mr-2" />
                            Copy Code
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-6 overflow-x-auto">
                      <code className="text-sm text-gray-300 font-mono">
                        {section.code}
                      </code>
                    </pre>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tips Section */}
          {doc.content.tips && doc.content.tips.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-2xl p-8"
            >
              <div className="flex items-center text-blue-600 dark:text-blue-400 mb-4">
                <FaLightbulb className="text-2xl mr-3" />
                <h3 className="text-2xl font-bold">Pro Tips</h3>
              </div>
              <ul className="space-y-3">
                {doc.content.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-neutral dark:text-gray-300">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Next Steps */}
          {doc.content.nextSteps && doc.content.nextSteps.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-neutral dark:text-white mb-6 flex items-center">
                <FaBook className="mr-3 text-accent" />
                Next Steps
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {doc.content.nextSteps.map((nextDocId, idx) => {
                  // In real implementation, fetch next doc details
                  return (
                    <Link
                      key={idx}
                      to={`/docs/${nextDocId}`}
                      className="flex items-center bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:border-accent hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center text-white text-xl mr-4 flex-shrink-0`}>
                        <FaBook />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-neutral dark:text-white group-hover:text-accent transition-colors capitalize">
                          {nextDocId.replace(/-/g, ' ')}
                        </div>
                        <div className="text-sm text-neutral-medium dark:text-gray-400">
                          Continue learning
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Was this helpful?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us know how we can improve our documentation or ask questions to our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link
                to="/docs"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Browse More Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DocDetail;
