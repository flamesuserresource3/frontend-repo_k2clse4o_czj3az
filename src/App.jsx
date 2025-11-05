import React from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import FeatureOverview from './components/FeatureOverview';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <ValueProps />
      <FeatureOverview />
      <Testimonials />

      <section className="py-16 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to launch your first agent?</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Start with a template, connect your knowledge, and publish an agent aligned to your brand.
          </p>
          <div className="mt-6">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md bg-purple-600 hover:bg-purple-500 px-6 py-3"
            >
              Get started free
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black/90 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60">
          <span>© {new Date().getFullYear()} Consultant Agents Platform</span>
          <div className="flex items-center gap-4">
            <a href="#value" className="hover:text-white">Benefits</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
