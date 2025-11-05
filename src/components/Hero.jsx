import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-purple-300" />
          <span className="text-sm text-purple-100">Launch your first AI Agent in minutes</span>
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
          The platform for Consultants & Coaches to build powerful AI Agents
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
          Create digital twins, client-facing agents, and outreach automations — all in one place. Templates, guidance, and analytics included.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 transition-colors"
          >
            <Rocket className="h-5 w-5" />
            Get Started
          </a>
          <a
            href="#testimonials"
            className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 transition-colors"
          >
            See success stories
          </a>
        </div>
      </div>
    </section>
  );
}
