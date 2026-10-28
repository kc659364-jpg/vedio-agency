'use client';

import { CREATIVE_PROCESS_STEPS } from '@/data/services';
import { Layers } from 'lucide-react';

export default function CreativeProcess() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-secondary-bg overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-gray bg-card-bg text-accent-blue text-xs font-mono uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>HOW WE OPERATE</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter uppercase text-white leading-tight">
            THE PRODUCTION
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-sky-400 to-teal-400">
              TIMELINE.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-secondary-text">
            From initial creative tension to theatrical delivery. A structured, transparent workflow
            engineered to keep productions on schedule and on brief.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Subtle connected line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-red via-accent-blue to-neon-green -translate-y-1/2 z-0 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {CREATIVE_PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-card-bg border border-border-gray hover:border-white/40 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Number & Phase Tag */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-white/40 group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase border border-border-gray/50"
                      style={{ color: step.accent }}
                    >
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-secondary-text text-xs sm:text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-border-gray/50 space-y-1.5">
                  <div className="text-[10px] font-mono text-secondary-text/70 uppercase tracking-widest mb-2">
                    KEY OUTPUTS
                  </div>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="text-xs text-primary-text flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.accent }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

