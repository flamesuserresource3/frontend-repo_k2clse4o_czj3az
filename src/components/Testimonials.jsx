import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Asha — Leadership Coach',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    agentUrl: '#',
    quote:
      'My digital twin now qualifies discovery calls and books meetings while reflecting my exact frameworks.'
  },
  {
    name: 'Marco — GTM Consultant',
    video: 'https://www.youtube.com/embed/oHg5SJYRHA0',
    agentUrl: '#',
    quote:
      'We launched a client-facing agent in a week. Templates and versioning made it dead simple.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Video testimonials</h2>
          <div className="hidden md:flex items-center gap-1 text-yellow-300">
            <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
            <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
            <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
            <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
            <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={t.video}
                  title={t.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <p className="text-white/80">“{t.quote}”</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-white/60">{t.name}</span>
                  <a
                    href={t.agentUrl}
                    className="text-sm text-purple-300 hover:text-purple-200"
                  >
                    View their agent →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
