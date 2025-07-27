import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}

Project Details:
${formData.message}

---
This message was sent from the Aurora Technologies contact form.
    `);

    const mailtoLink = `mailto:support@auroratechnologies.xyz?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch and let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center">
                    <Mail className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a href="mailto:support@auroratechnologies.xyz" className="text-white hover:text-emerald-400 transition-colors">
                      support@auroratechnologies.xyz
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center">
                    <Phone className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <a href="tel:+17172194561" className="text-white hover:text-blue-400 transition-colors">
                      (717) 219-4561
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white">Philadelphia, PA</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Why Choose Aurora Technologies?
              </h3>
              <ul className="space-y-3">
                {[
                  'Cutting-edge technology expertise',
                  'Agile development methodology',
                  '24/7 support and maintenance',
                  'Transparent communication',
                  'On-time delivery guarantee'
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Start Your Project
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="text-emerald-400 mx-auto mb-4" size={64} />
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-300">Your email client should have opened with your message. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting 
                        ? 'bg-slate-600 text-slate-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-emerald-400 to-blue-500 text-white hover:shadow-lg hover:shadow-emerald-400/25'
                    }`}
                  >
                    <Send size={20} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </motion.button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;