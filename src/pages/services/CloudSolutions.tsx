import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cloud, Shield, Zap, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudSolutions = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Architecture',
      description: 'Deploy across AWS, Azure, and GCP for maximum reliability and performance.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security with encryption, compliance, and access controls.'
    },
    {
      icon: Zap,
      title: 'Auto-Scaling',
      description: 'Automatically scale resources based on demand to optimize costs and performance.'
    },
    {
      icon: BarChart,
      title: 'Monitoring & Analytics',
      description: 'Comprehensive monitoring and analytics for optimal cloud resource management.'
    }
  ];

  const technologies = [
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'
  ];

  const projects = [
    {
      title: 'E-commerce Infrastructure',
      description: 'Scalable cloud infrastructure handling millions of transactions daily.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Data Lake Solution',
      description: 'Enterprise data lake with real-time processing and analytics capabilities.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Microservices Platform',
      description: 'Container-based microservices architecture with CI/CD pipelines.',
      image: 'https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/"
            className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Cloud className="text-emerald-400" size={32} />
              <h1 className="text-4xl md:text-6xl font-bold">Cloud Solutions</h1>
            </div>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Build scalable, secure, and cost-effective cloud infrastructure that grows with your business.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8"
              >
                <feature.icon className="text-emerald-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Technologies We Use</h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-emerald-400/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Sample Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Sample Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's design and implement a cloud strategy that reduces costs and improves performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/"
                className="border border-slate-600 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800/50 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CloudSolutions;