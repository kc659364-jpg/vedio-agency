'use client';

import { useState } from 'react';
import { Film, Smartphone, Music2, Sparkles, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/services';

const iconMap = {
  Film: Film,
  Smartphone: Smartphone,
  Music2: Music2,
  Sparkles: Sparkles,
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-main-bg overflow-hidden">
      {/* Background ambient subtle color washes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-green/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-gray bg-card-bg/70 text-neon-green text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE DO</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-white leading-tight">
            FROM FIRST FRAME
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-teal-400 to-accent-blue">
              TO FINAL CUT.
            </span>
          </h2>

          <p className="mt-4 text-secondary-text text-sm sm:text-base leading-relaxed max-w-xl">
            We handle the full creative continuum. Whether scripting a 60-second national commercial
            or editing a 15-second viral hook, our standard of visual excellence remains uncompromising.
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Film;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-2xl p-8 sm:p-10 bg-card-bg border border-border-gray transition-all duration-300 ease-out flex flex-col justify-between hover:-translate-y-1"
                style={{
                  borderColor: isHovered ? service.accent : '#454545',
                  boxShadow: isHovered ? `0 0 35px -5px ${service.accent}25` : 'none',
                }}
              >
                {/* Top Row: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-white/30 group-hover:text-white transition-colors duration-300">
                      {service.number}
                    </span>

                    <div
                      className="w-12 h-12 rounded-xl border border-border-gray flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: isHovered ? `${service.accent}15` : 'transparent',
                        borderColor: isHovered ? service.accent : '#454545',
                        color: isHovered ? service.accent : '#A7A7A7',
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Accent Line */}
                  <div className="space-y-3 mb-4">
                    <div
                      className="w-10 h-1 rounded-full transition-all duration-300 group-hover:w-20"
                      style={{ backgroundColor: service.accent }}
                    />
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-primary-text font-medium text-sm sm:text-base leading-snug">
                      {service.headline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-secondary-text text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-border-gray/50">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-secondary-text">
                        <Check className="w-3.5 h-3.5 shrink-0" style={{ color: service.accent }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tags and Action Link */}
                <div className="flex items-center justify-between pt-4 border-t border-border-gray/40">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-secondary-bg text-[10px] font-mono text-secondary-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider transition-colors hover:underline"
                    style={{ color: service.accent }}
                  >
                    <span>BRIEF US</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

