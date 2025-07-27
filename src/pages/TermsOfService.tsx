import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Scale, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
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
              <Scale className="text-emerald-400" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-slate-400 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert prose-emerald max-w-none">
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <FileText className="text-emerald-400" size={24} />
                <span>Acceptance of Terms</span>
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  By accessing and using Aurora Technologies' services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Services Description</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Aurora Technologies provides software development services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Web application development</li>
                  <li>Mobile application development</li>
                  <li>AI and machine learning solutions</li>
                  <li>Blockchain applications</li>
                  <li>Cloud solutions and infrastructure</li>
                  <li>Data engineering services</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
              <div className="space-y-4 text-slate-300">
                <p>As a client, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to requests for information in a timely manner</li>
                  <li>Make payments according to agreed terms</li>
                  <li>Respect intellectual property rights</li>
                  <li>Use our services in compliance with applicable laws</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Payment terms will be specified in individual project agreements. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Invoices are due within 30 days of receipt</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Work may be suspended for overdue accounts</li>
                  <li>All prices are in USD unless otherwise specified</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Upon full payment, clients receive ownership of custom-developed code and assets created specifically for their project. Aurora Technologies retains rights to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>General methodologies and know-how</li>
                  <li>Reusable components and frameworks</li>
                  <li>Pre-existing intellectual property</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <AlertTriangle className="text-yellow-400" size={24} />
                <span>Limitation of Liability</span>
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Aurora Technologies' liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages. Services are provided "as is" without warranties.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Either party may terminate services with written notice. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All outstanding invoices become immediately due</li>
                  <li>Work completed to date will be delivered upon payment</li>
                  <li>Confidential information must be returned or destroyed</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  These terms are governed by the laws of Pennsylvania, United States. Any disputes will be resolved in the courts of Philadelphia, PA.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  For questions about these Terms of Service, contact us at:
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

export default TermsOfService;