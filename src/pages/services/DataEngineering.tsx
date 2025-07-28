import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Database, BarChart, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataEngineering = () => {
  const features = [
    {
      icon: Database,
      title: 'Data Pipeline Architecture',
      description: 'Build robust ETL/ELT pipelines that handle massive data volumes efficiently.'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Process and analyze streaming data for immediate insights and decision-making.'
    },
    {
      icon: Zap,
      title: 'Big Data Processing',
      description: 'Handle petabyte-scale data processing with distributed computing frameworks.'
    },
    {
      icon: Shield,
      title: 'Data Governance',
      description: 'Implement data quality, security, and compliance frameworks for your organization.'
    }
  ];

  const technologies = [
    'Apache Spark', 'Kafka', 'Airflow', 'Snowflake', 'BigQuery', 'Databricks', 'dbt', 'Elasticsearch'
  ];

  const projects = [
    {
      title: 'Real-time Analytics Platform',
      description: 'Streaming data platform processing millions of events per second.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Data Warehouse Migration',
      description: 'Enterprise data warehouse modernization with cloud-native solutions.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'ML Data Pipeline',
      description: 'Automated data pipeline feeding machine learning models in production.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
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
              <Database className="text-emerald-400" size={32} />
              <h1 className="text-4xl md:text-6xl font-bold">Data Engineering</h1>
            </div>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Transform raw data into actionable insights with robust data pipelines and analytics infrastructure.
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
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's build the data infrastructure that will power your organization's growth and innovation.
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

export default DataEngineering;