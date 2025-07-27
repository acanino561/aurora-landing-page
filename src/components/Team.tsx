import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Lead Developer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Full-stack developer with 10+ years of experience in cutting-edge technologies.',
    specialties: ['React', 'Node.js', 'AI/ML']
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO & AI Specialist',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'AI researcher and engineer passionate about creating intelligent solutions.',
    specialties: ['Python', 'TensorFlow', 'Data Science']
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Mobile Developer',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Mobile development expert with a focus on cross-platform solutions.',
    specialties: ['React Native', 'Flutter', 'iOS/Android']
  },
  {
    name: 'Emily Davis',
    role: 'DevOps Engineer',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Cloud infrastructure specialist ensuring scalable and secure deployments.',
    specialties: ['AWS', 'Docker', 'Kubernetes']
  }
];

const Team = () => {
  return (
    <section id="team" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience in cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-slate-700 group-hover:border-emerald-400 transition-colors duration-300"
                />
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {member.name}
              </h3>

              <p className="text-emerald-400 font-medium mb-4">
                {member.role}
              </p>

              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.specialties.map((specialty, specialtyIndex) => (
                  <span
                    key={specialtyIndex}
                    className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full text-xs"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <button className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <Linkedin size={18} />
                </button>
                <button className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <Twitter size={18} />
                </button>
                <button className="text-slate-400 hover:text-white transition-colors duration-300">
                  <Github size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;