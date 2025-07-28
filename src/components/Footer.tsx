import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-xl border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Zap className="text-emerald-400" size={32} />
                <div className="absolute inset-0 bg-emerald-400/20 blur-lg rounded-full" />
              </div>
              <span className="text-white font-bold text-xl">Aurora Technologies</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              Building the future of software with cutting-edge technology. 
              We transform ideas into reality and improve lives worldwide.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: Twitter, href: 'https://twitter.com/sousappai' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: 'https://github.com/AuroraBuilds' },
                { icon: Mail, href: 'mailto:support@auroratechnologies.xyz' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile Apps',
                'AI & Machine Learning',
                'Cloud Solutions',
                'Data Engineering',
                'Blockchain Applications'
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#' },
                { name: 'Sous App', href: '#sous' },
                { name: 'Contact', href: '#contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Aurora Technologies. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-emerald-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;