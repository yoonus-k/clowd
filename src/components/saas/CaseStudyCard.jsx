import { motion } from 'framer-motion';
import { FaQuoteLeft, FaPlay, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-accent/10 transition-all duration-300"
    >
      {/* Customer Header */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            {caseStudy.logo ? (
              <img 
                src={caseStudy.logo} 
                alt={caseStudy.customer}
                className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                {caseStudy.customer.charAt(0)}
              </div>
            )}
            <div>
              <h4 className="text-lg font-bold text-neutral dark:text-white">
                {caseStudy.customer}
              </h4>
              <p className="text-sm text-neutral-medium dark:text-gray-400">
                {caseStudy.industry}
              </p>
            </div>
          </div>
          {caseStudy.video && (
            <button className="w-10 h-10 rounded-full bg-accent hover:bg-accent-dark text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
              <FaPlay className="text-sm ml-0.5" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Challenge */}
        <div className="mb-6">
          <div className="text-xs font-semibold text-red-600 dark:text-red-400 mb-2 uppercase tracking-wide">
            The Challenge
          </div>
          <p className="text-sm text-neutral-medium dark:text-gray-400 leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-6">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
            The Solution
          </div>
          <p className="text-sm text-neutral-medium dark:text-gray-400 leading-relaxed">
            {caseStudy.solution}
          </p>
        </div>

        {/* Results Grid */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 mb-6">
          <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-3 uppercase tracking-wide">
            Proven Results
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(caseStudy.results).map(([key, value]) => (
              <div key={key}>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {value}
                </div>
                <div className="text-xs text-neutral-medium dark:text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        {caseStudy.quote && (
          <div className="relative mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <FaQuoteLeft className="absolute top-4 left-4 text-accent/20 text-2xl" />
            <p className="text-sm italic text-neutral-medium dark:text-gray-300 pl-8 leading-relaxed">
              "{caseStudy.quote}"
            </p>
            {caseStudy.author && (
              <div className="mt-3 pl-8">
                <div className="text-xs font-semibold text-neutral dark:text-white">
                  {caseStudy.author.name}
                </div>
                <div className="text-xs text-neutral-medium dark:text-gray-400">
                  {caseStudy.author.title}
                </div>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <Link
          to={`/case-studies/${caseStudy.id}`}
          className="inline-flex items-center text-accent hover:text-accent-dark font-semibold text-sm transition-colors group"
        >
          Read Full Case Study
          <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
