import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Globe, 
  Brain, 
  Coins, 
  Cloud, 
  Database,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge frameworks and optimized for performance.',
    features: ['React/Next.js', 'TypeScript', 'Progressive Web Apps', 'SEO Optimization']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.',
    features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Optimization']
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence to automate processes and gain insights.',
    features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Custom AI Models']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to ensure your applications perform at their best.',
    features: ['AWS/Azure/GCP', 'Microservices', 'DevOps', 'Auto-scaling']
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Robust data pipelines and analytics solutions to turn your data into actionable insights.',
    features: ['Big Data Processing', 'Real-time Analytics', 'Data Warehousing', 'ETL Pipelines']
  },
  {
    icon: Coins,
    title: 'Blockchain Applications',
    description: 'Decentralized applications and smart contracts that leverage blockchain technology for transparency and security.',
    features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Web3 Integration']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We offer comprehensive software development services to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className="relative mb-6">
                <service.icon className="text-emerald-400 group-hover:text-blue-400 transition-colors duration-300" size={48} />
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span className="text-slate-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="flex items-center space-x-2 text-emerald-400 hover:text-blue-400 transition-colors duration-300 group">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;