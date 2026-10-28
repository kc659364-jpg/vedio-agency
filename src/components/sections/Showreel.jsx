'use client';

import Image from 'next/image';
import { Play, Sparkles, Clock, Film } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function Showreel({ onPlayShowreel }) {
  const { showreel } = SITE_CONFIG;

  return (
    <section id="showreel" className="relative py-24 sm:py-32 bg-secondary-bg overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-gray bg-card-bg/80 text-neon-red text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE VISUAL EXPERIENCE</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-white leading-tight">
            NOT JUST CONTENT.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red via-rose-500 to-accent-blue">
              A FEELING.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-secondary-text max-w-xl">
            Watch our official studio showreel—a raw sequence of commercial cinematography,
            precision camera tracking, and sound-reactive post-production.
          </p>
        </div>

        {/* Cinematic Video Showcase Frame */}
        <div className="relative group max-w-5xl mx-auto">
          {/* Neon Border Glow effect */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-neon-red/40 via-accent-blue/30 to-neon-green/30 opacity-40 group-hover:opacity-100 blur-xl transition-all duration-700" />

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border-gray bg-black shadow-2xl">
            {/* Aspect Ratio Video Container */}
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={showreel.poster}
                alt={showreel.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Ambient Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Large Functional Custom Play Button */}
              <button
                onClick={() => onPlayShowreel(showreel.videoUrl, showreel.title)}
                className="absolute inset-0 m-auto w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-neon-red/90 group-hover:bg-neon-red text-white flex items-center justify-center shadow-glow-red transition-all duration-300 transform group-hover:scale-110 active:scale-95 focus:outline-none"
                aria-label={`Play ${showreel.title}`}
              >
                <Play className="w-8 h-8 sm:w-12 sm:h-12 fill-current translate-x-1" />
              </button>

              {/* Bottom Metadata Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-wrap items-end justify-between gap-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary-text mb-2">
                    <Film className="w-3.5 h-3.5 text-neon-red" />
                    <span>{showreel.category}</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {showreel.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card-bg/90 border border-border-gray text-xs font-mono text-white">
                  <Clock className="w-3.5 h-3.5 text-neon-red" />
                  <span>{showreel.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Caption */}
        <div className="mt-8 text-center text-xs font-mono text-secondary-text/80 max-w-lg mx-auto">
          {showreel.description}
        </div>
      </div>
    </section>
  );
}

