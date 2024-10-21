'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaChartLine, FaCog } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    { icon: <FaRocket />, title: 'Innovative Solutions', description: 'Cutting-edge technology to propel your business forward' },
    { icon: <FaChartLine />, title: 'Boost Efficiency', description: 'Streamline operations and increase productivity' },
    { icon: <FaCog />, title: 'Custom Integration', description: 'Tailored solutions that fit seamlessly into your workflow' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-100">
            Empowering Businesses with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"> Innovative Technology</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            We help businesses streamline operations and boost efficiency through cutting-edge solutions.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image 
              src="/Images/Hero image place holder.webp"  
              alt="Innovative Technology Solutions" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-yellow-400 mr-4">{features[activeFeature].icon}</div>
                  <h3 className="text-2xl font-semibold text-white">{features[activeFeature].title}</h3>
                </div>
                <p className="text-blue-200">{features[activeFeature].description}</p>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center space-x-4">
              {features.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeFeature ? 'bg-yellow-400' : 'bg-blue-200'}`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-10 py-4 rounded-full text-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
