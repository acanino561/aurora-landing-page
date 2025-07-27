import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'HealthTech AI Platform',
    description: 'AI-powered healthcare platform that analyzes medical data to provide personalized treatment recommendations.',
    image: 'https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
    category: 'Healthcare'
  },
  {
    title: 'FinTech Mobile App',
    description: 'Secure mobile banking application with real-time transactions and advanced fraud detection.',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain'],
    category: 'Finance'
  },
  {
    title: 'Smart City IoT Dashboard',
    description: 'Real-time monitoring dashboard for smart city infrastructure with predictive analytics.',
    image: 'https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'IoT', 'PostgreSQL', 'Docker'],
    category: 'Smart City'
  },
  {
    title: 'E-Learning Platform',
    description: 'Interactive online learning platform with AI-powered personalized learning paths.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Django', 'Redis', 'WebRTC'],
    category: 'Education'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover some of our recent work that showcases our expertise in cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-400/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-emerald-400 hover:text-blue-400 transition-colors duration-300">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </button>
                    <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-300">
                      <Github size={16} />
                      <span>Code</span>
                    </button>
                  </div>
                  
                  <ArrowRight className="text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-2 transition-all duration-300" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;