'use client';

import Image from 'next/image';
import { Eye, ShieldCheck, Flame, Compass } from 'lucide-react';
import { AGENCY_STATS, AGENCY_VALUES } from '@/data/services';
import { SITE_CONFIG } from '@/lib/config';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-main-bg overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-neon-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-gray bg-card-bg text-neon-red text-xs font-mono uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>STUDIO PROFILE</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-white leading-tight">
            SMALL STUDIO.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red via-rose-400 to-accent-orange">
              BIG SCREEN ENERGY.
            </span>
          </h2>
        </div>

        {/* Studio Philosophy & Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-28">
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-black text-primary-text leading-snug">
              We operate at the volatile intersection of cinematic art direction and digital attention economics.
            </h3>

            <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
              Founded in {SITE_CONFIG.foundedYear}, <strong className="text-white">FRAME//SHIFT</strong> was built to
              counteract the sea of uninspired corporate video content. We are a tight-knit collective of
              cinematographers, directors, colorists, and motion animators who treat every project as a bespoke piece of cinema.
            </p>

            <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
              We don&apos;t maintain bloated agency layers, endless account reps, or convoluted approval chains.
              You collaborate directly with the creators holding the cameras and driving the edit suites.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border-gray/50">
              {AGENCY_VALUES.map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-card-bg/60 border border-border-gray/60 space-y-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: val.accent }} />
                  <h4 className="font-bold text-white text-xs sm:text-sm tracking-wide">{val.title}</h4>
                  <p className="text-secondary-text text-xs leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border-gray bg-card-bg shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
                alt="Cinema Camera Rig on Location"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Camera Spec Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-secondary-text space-y-1">
                <div className="text-white font-bold flex items-center justify-between">
                  <span>CINEMA PRODUCTION RIG</span>
                  <span className="text-neon-red">READY // REC</span>
                </div>
                <div>ARRI ALEXA MINI LF • ANAMORPHIC T1.8</div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Studio Metrics (Clearly labeled as illustrative demo metrics) */}
        <div className="pt-12 border-t border-border-gray/60">
          <div className="text-[11px] font-mono uppercase tracking-widest text-secondary-text/70 mb-8 text-center">
            [ DEMO STUDIO SHOWCASE METRICS ]
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {AGENCY_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card-bg/40 border border-border-gray/50 hover:border-border-gray transition-colors"
              >
                <div
                  className="font-display font-black text-4xl sm:text-6xl tracking-tight mb-2"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-mono text-secondary-text tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

