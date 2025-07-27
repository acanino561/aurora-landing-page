import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Brain, 
  ChefHat, 
  Clock, 
  Users, 
  Star,
  Download,
  ArrowRight,
  Zap
} from 'lucide-react';

const SousShowcase = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recipes',
      description: 'Generate personalized recipes based on your preferences, dietary restrictions, and available ingredients.'
    },
    {
      icon: ChefHat,
      title: 'Kitchen Assistant',
      description: 'Step-by-step cooking guidance with smart timers and technique tips from professional chefs.'
    },
    {
      icon: Clock,
      title: 'Meal Planning',
      description: 'Intelligent meal planning that considers your schedule, nutrition goals, and cooking skill level.'
    },
    {
      icon: Users,
      title: 'Family-Friendly',
      description: 'Adapt recipes for different family sizes and accommodate multiple dietary preferences.'
    }
  ];

  const stats = [
    { number: '1K+', label: 'Active Users' },
    { number: '100K+', label: 'Recipes Generated' },
    { number: '4.8', label: 'App Store Rating' },
    { number: '100%', label: 'User Satisfaction' }
  ];

  return (
    <section id="sous" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/10 to-slate-900" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-400/10 border border-emerald-400/30 rounded-full px-6 py-3 mb-8">
            <Zap className="text-emerald-400" size={20} />
            <span className="text-emerald-400 font-medium">Flagship Product</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Meet{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Sous
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Your AI-powered kitchen companion that transforms cooking from a chore into a delightful experience. 
            Generate personalized recipes, get expert guidance, and discover your culinary creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - App mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-[600px] bg-slate-800 rounded-[3rem] border-8 border-slate-700 shadow-2xl">
              {/* Phone screen */}
              <div className="absolute inset-4 rounded-[2rem] overflow-hidden">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-sm flex items-center justify-between px-6 text-white text-sm z-10">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm" />
                    <div className="w-4 h-2 bg-white rounded-sm" />
                    <div className="w-6 h-2 bg-white rounded-sm" />
                  </div>
                </div>
                
                {/* App content */}
                <div className="h-full">
                  <img
                    src="/Untitled design (10).png"
                    alt="Sous App Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full" />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-emerald-400/20 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-4"
            >
              <Brain className="text-emerald-400" size={24} />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-blue-400/20 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-4"
            >
              <ChefHat className="text-blue-400" size={24} />
            </motion.div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Cooking?
            </h3>
            <p className="text-slate-300 mb-8">
              Join hundreds of thousands of home cooks who've discovered the joy of AI-assisted cooking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <motion.button
                onClick={() => window.open('https://apps.apple.com/us/app/sous-ai-recipe-assistant/id6747099098', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 bg-slate-900 text-white px-6 py-4 rounded-2xl hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  📱
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </motion.button>

              <motion.button
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.sous&pcampaignid=web_share', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 bg-slate-900 text-white px-6 py-4 rounded-2xl hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  📲
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </motion.button>
            </div>
            
            <div className="text-slate-400 text-sm">
              Free download • Premium features available
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SousShowcase;