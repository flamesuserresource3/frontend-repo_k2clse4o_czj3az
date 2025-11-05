import React, { useEffect, useState } from 'react';
import { Layers, Database, Upload, FileText, BarChart3, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Database,
    title: 'Knowledge base with versioning',
    desc: 'Upload frameworks, refine over time, and track versions for every client engagement.'
  },
  {
    icon: Layers,
    title: 'Agent space & templates',
    desc: 'Start from expert-built templates or define how your agent behaves from scratch.'
  },
  {
    icon: FileText,
    title: 'Service flows',
    desc: 'Offer flows beyond chat — audits, discovery, qualification, and more.'
  },
  {
    icon: Upload,
    title: 'Brand personalization',
    desc: 'Logo, colors, tone of voice and embeds to match your website and social profiles.'
  },
  {
    icon: Settings,
    title: 'Test & deploy versions',
    desc: 'Spin up multiple versions, A/B test quality, then deploy the winner with one click.'
  },
  {
    icon: BarChart3,
    title: 'Insights & intent scoring',
    desc: 'See how users engage. Segment by high-intent scores and trigger follow-ups.'
  }
];

const templates = [
  { id: 'coach-discovery', name: 'Coaching Discovery Bot' },
  { id: 'consulting-qualification', name: 'Consulting Lead Qualifier' },
  { id: 'digital-twin', name: 'Founder Digital Twin' }
];

export default function FeatureOverview() {
  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    return localStorage.getItem('selectedTemplate') || templates[0].id;
  });

  useEffect(() => {
    localStorage.setItem('selectedTemplate', selectedTemplate);
  }, [selectedTemplate]);

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold">Everything to launch your first agent</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Pick a starting point, connect knowledge, adjust behavior, then test and deploy. You stay in control — we handle the heavy lifting.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                >
                  <f.icon className="h-6 w-6 text-purple-300" />
                  <h3 className="mt-3 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-semibold">Try a template</h4>
              <p className="mt-1 text-sm text-white/70">Your choice is remembered on this device.</p>

              <div className="mt-4 space-y-2">
                {templates.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTemplate(t.id)}
                    className={`w-full text-left rounded-md px-4 py-3 border transition ${
                      selectedTemplate === t.id
                        ? 'bg-purple-600/20 border-purple-500 text-white'
                        : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-md bg-black/40 border border-white/10 p-4">
                <p className="text-sm text-white/70">Selected:</p>
                <p className="mt-1 font-medium">
                  {templates.find((t) => t.id === selectedTemplate)?.name}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block rounded-md bg-purple-600 hover:bg-purple-500 px-4 py-2 text-sm"
                >
                  Use this template
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
