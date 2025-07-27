import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, Settings, Info } from 'lucide-react';

const CookiePolicy = () => {
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
              <Cookie className="text-emerald-400" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
            </div>
            <p className="text-slate-400 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert prose-emerald max-w-none">
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Info className="text-emerald-400" size={24} />
                <span>What Are Cookies</span>
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <div className="space-y-4 text-slate-300">
                <p>Aurora Technologies uses cookies for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Performance Cookies:</strong> Collect information about website performance</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              <div className="space-y-6 text-slate-300">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Session Cookies</h3>
                  <p>These are temporary cookies that expire when you close your browser. They help us maintain your session while you navigate our website.</p>
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Persistent Cookies</h3>
                  <p>These cookies remain on your device for a set period or until you delete them. They help us remember your preferences for future visits.</p>
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Third-Party Cookies</h3>
                  <p>We may use third-party services like Google Analytics that place their own cookies on your device to help us analyze website traffic.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Settings className="text-emerald-400" size={24} />
                <span>Managing Cookies</span>
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>You can control and manage cookies in several ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                  <li>Opt-out tools: Use third-party opt-out tools for analytics cookies</li>
                  <li>Privacy settings: Adjust your privacy settings on our website</li>
                </ul>
                <p className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 text-yellow-200">
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Browser-Specific Instructions</h2>
              <div className="space-y-4 text-slate-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Chrome</h3>
                    <p className="text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Firefox</h3>
                    <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Safari</h3>
                    <p className="text-sm">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Edge</h3>
                    <p className="text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please check this page periodically for updates.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;