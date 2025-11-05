import React from 'react';
import { Shield, Database, Settings, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Shield,
    title: 'Client-grade privacy',
    desc: 'Control what your agent knows and shares. Safe by design with clear audit trails.'
  },
  {
    icon: Database,
    title: 'Guided knowledge base',
    desc: 'Provide frameworks, playbooks, and examples with versioning to track iterations.'
  },
  {
    icon: Settings,
    title: 'Configurable behavior',
    desc: 'Compose tone, constraints, allowed tools, and service flows tailored to your practice.'
  },
  {
    icon: Users,
    title: 'Built for consultants',
    desc: 'Digital twins for your brand, client-ready agents, and outreach use-cases included.'
  }
];

export default function ValueProps() {
  return (
    <section id="value" className="relative py-20 bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Why consultants & coaches choose us</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Everything you need to launch your first agent — from knowledge curation to deployment and analytics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <item.icon className="h-6 w-6 text-purple-300" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
