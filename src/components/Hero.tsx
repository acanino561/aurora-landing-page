import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
        >
          Building the{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Future
          </span>{' '}
          of Software
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          We specialize in creating innovative software solutions that leverage 
          cutting-edge technology to transform ideas into reality and improve lives worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('sous')}
            className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800/50 transition-all duration-300"
          >
            View Sous App
          </motion.button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Code,
              title: 'Custom Development',
              description: 'Tailored solutions built with modern technologies'
            },
            {
              icon: Rocket,
              title: 'Rapid Deployment',
              description: 'Fast, efficient delivery without compromising quality'
            },
            {
              icon: Sparkles,
              title: 'Innovation First',
              description: 'Cutting-edge tech to solve complex challenges'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300"
            >
              <feature.icon className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;