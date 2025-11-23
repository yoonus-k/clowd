import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';

// Predefined Q&A data
const chatData = [
  {
    question: "What services does Clowd offer?",
    answer: "Clowd offers two types of AI services: 1) Custom AI Solutions - tailored implementations including Document Processing, Supply Chain Intelligence, Demand Forecasting, Customer Service AI, and Financial Intelligence. 2) AI Products - 17+ ready-to-use SaaS tools across Marketing, E-commerce, Finance, Operations, and Industry verticals with 14-day free trials."
  },
  {
    question: "How can AI help my business?",
    answer: "AI can reduce operational costs by 40%, process data 10x faster, and operate 24/7. Our solutions help you automate repetitive tasks, gain predictive insights, improve customer satisfaction, and make data-driven decisions in real-time."
  },
  {
    question: "What is the pricing?",
    answer: "Our pricing is customized based on your specific needs and scale. We offer flexible plans that grow with your business. Schedule a free consultation to discuss your requirements and receive a tailored quote."
  },
  {
    question: "How long does implementation take?",
    answer: "Implementation typically takes 2-8 weeks depending on the complexity and scope of your project. We provide full support throughout the process, including training, testing, and ongoing maintenance."
  },
  {
    question: "Do you provide support?",
    answer: "Yes! We provide 24/7 technical support, dedicated account management, regular system updates, and comprehensive training for your team. Our goal is to ensure your success every step of the way."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We implement enterprise-grade security with end-to-end encryption, comply with GDPR and industry standards, and conduct regular security audits. Your data privacy and security are our top priorities."
  },
  {
    question: "Can I schedule a demo?",
    answer: "Yes! We'd love to show you how our AI solutions can transform your business. Click on 'Schedule Consultation' or visit our Contact page to book a free 15-minute demo with our team."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including Finance, Healthcare, Retail, Manufacturing, Logistics, and more. Our AI solutions are customizable to fit the unique needs of any industry."
  },
  {
    question: "What's the difference between AI Solutions and AI Products?",
    answer: "AI Solutions are custom-built implementations tailored specifically to your company's unique needs and workflows. AI Products are ready-to-use SaaS applications that you can start using immediately with a 14-day free trial. Solutions are for deep integration, Products are for quick deployment."
  }
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! 👋 I\'m your Clowd AI assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestAnswer = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Find the best matching question
    let bestMatch = null;
    let highestScore = 0;

    chatData.forEach(item => {
      const questionWords = item.question.toLowerCase().split(' ');
      const inputWords = input.split(' ');
      
      let score = 0;
      inputWords.forEach(word => {
        if (word.length > 3 && questionWords.some(qWord => qWord.includes(word) || word.includes(qWord))) {
          score++;
        }
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    });

    if (highestScore > 0) {
      return bestMatch.answer;
    }

    // Default response if no match found
    return "I'm here to help! For specific inquiries, please feel free to schedule a consultation with our team, or try asking about our services, pricing, implementation, support, security, or demo options.";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: findBestAnswer(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    // Auto-send after a brief delay
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const quickQuestions = [
    "What services does Clowd offer?",
    "How can AI help my business?",
    "Can I schedule a demo?"
  ];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-dark text-black p-4 rounded-full shadow-2xl shadow-accent/30 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <FaComments size={24} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white dark:bg-gray-950 rounded-2xl shadow-2xl dark:shadow-accent/20 border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent dark:from-gray-900 dark:to-gray-800 text-white p-4 flex items-center justify-between border-b dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent dark:bg-accent/20 rounded-full flex items-center justify-center">
                  <FaRobot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Clowd AI Assistant</h3>
                  <p className="text-xs text-gray-200 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-accent text-black rounded-br-none'
                        : 'bg-white dark:bg-gray-900 text-neutral dark:text-white border border-gray-200 dark:border-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs mt-1 opacity-60">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-3 rounded-2xl rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {messages.length === 1 && (
                <div className="space-y-2 mt-4">
                  <p className="text-xs text-neutral-medium dark:text-gray-400 text-center mb-2">Quick questions:</p>
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left p-2 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent dark:hover:border-accent transition-colors duration-200 text-neutral dark:text-gray-300"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent text-neutral dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-accent hover:bg-accent-dark disabled:bg-gray-300 dark:disabled:bg-gray-700 text-black disabled:text-gray-500 p-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed"
                  whileHover={{ scale: inputValue.trim() ? 1.1 : 1 }}
                  whileTap={{ scale: inputValue.trim() ? 0.95 : 1 }}
                >
                  <FaPaperPlane size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
