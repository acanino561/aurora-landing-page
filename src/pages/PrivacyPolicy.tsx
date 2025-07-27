import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Shield className="text-emerald-400" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-slate-400 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert prose-emerald max-w-none">
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Eye className="text-emerald-400" size={24} />
                <span>Information We Collect</span>
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  At Aurora Technologies, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fill out our contact forms</li>
                  <li>Request information about our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p>
                  This may include your name, email address, phone number, company information, and project details.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Lock className="text-emerald-400" size={24} />
                <span>How We Use Your Information</span>
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our services and updates</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect our rights and prevent fraud</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With service providers who assist us in operating our website and conducting business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <div className="space-y-4 text-slate-300">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your personal information</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p><strong>Email:</strong> support@auroratechnologies.xyz</p>
                  <p><strong>Phone:</strong> (717) 219-4561</p>
                  <p><strong>Address:</strong> Philadelphia, PA</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300"
              >
                Back to Top
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;