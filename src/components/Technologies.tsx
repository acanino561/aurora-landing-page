import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', category: 'Frontend', color: 'from-blue-400 to-cyan-400' },
  { name: 'Next.js', category: 'Framework', color: 'from-slate-400 to-slate-600' },
  { name: 'TypeScript', category: 'Language', color: 'from-blue-500 to-blue-700' },
  { name: 'Node.js', category: 'Backend', color: 'from-green-400 to-green-600' },
  { name: 'Python', category: 'Language', color: 'from-yellow-400 to-blue-500' },
  { name: 'AWS', category: 'Cloud', color: 'from-orange-400 to-orange-600' },
  { name: 'Docker', category: 'DevOps', color: 'from-blue-400 to-blue-600' },
  { name: 'PostgreSQL', category: 'Database', color: 'from-blue-600 to-indigo-600' },
  { name: 'MongoDB', category: 'Database', color: 'from-green-500 to-green-700' },
  { name: 'TensorFlow', category: 'AI/ML', color: 'from-orange-500 to-red-500' },
  { name: 'Kubernetes', category: 'DevOps', color: 'from-blue-500 to-purple-500' },
  { name: 'GraphQL', category: 'API', color: 'from-pink-500 to-purple-500' },
  { name: 'Web3', category: 'Blockchain', color: 'from-purple-400 to-pink-500' },
  { name: 'Solidity', category: 'Blockchain', color: 'from-gray-400 to-gray-600' },
  { name: 'Ethereum', category: 'Blockchain', color: 'from-blue-400 to-purple-600' }
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-32 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We work with the latest and most powerful technologies to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                {tech.name.charAt(0)}
              </div>
              
              <h3 className="text-white font-semibold text-lg mb-2">
                {tech.name}
              </h3>
              
              <span className="text-slate-400 text-sm">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning, Always Evolving
            </h3>
            <p className="text-slate-300 mb-6">
              Technology moves fast, and so do we. We continuously update our skills 
              and adopt new technologies to stay ahead of the curve.
            </p>
            <button className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-400/25 transition-all duration-300">
              Discuss Your Tech Needs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;