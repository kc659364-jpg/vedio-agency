'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Play } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import { gsap, ScrollTrigger } from '@/lib/animations';
import ThreeDVisual from '@/components/ui/ThreeDVisual';

export default function Hero({ onOpenShowreel }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const bottomBarRef = useRef(null);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  // GSAP Entrance Animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.1 } });

      // Staggered title words
      tl.from('.hero-badge', {
        opacity: 0,
        y: -15,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          '.hero-line',
          {
            opacity: 0,
            y: 45,
            stagger: 0.18,
            duration: 1.2,
          },
          '-=0.4'
        )
        .from(
          subtextRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.9,
          },
          '-=0.7'
        )
        .from(
          ctaGroupRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          '-=0.6'
        )
        .from(
          bottomBarRef.current,
          {
            opacity: 0,
            duration: 1,
          },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-main-bg bg-film-grain"
    >
      {/* Background Cinematic Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={SITE_CONFIG.heroVideos.poster}
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
          >
            <source src={SITE_CONFIG.heroVideos.primary} type="video/mp4" />
            <source src={SITE_CONFIG.heroVideos.fallback} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${SITE_CONFIG.heroVideos.poster})` }}
          />
        )}

        {/* Cinematic Gradient & Dark Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-main-bg via-main-bg/75 to-main-bg/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-main-bg via-transparent to-main-bg/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80" />

        {/* Ambient Subtle Red and Sky Blue Glow Accents */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-neon-red/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-accent-blue/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Floating 3D Wireframe Visual (Desktop / Tablet) */}
      <div className="absolute right-4 lg:right-16 top-1/4 z-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 pointer-events-none opacity-80">
        <ThreeDVisual className="w-full h-full" />
      </div>

      {/* Hero Main Content Box */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-12 flex-1 flex flex-col justify-center">
        {/* Top Status & Est Badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border-gray/70 bg-card-bg/70 backdrop-blur-md w-fit mb-6 sm:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green shadow-glow-green" />
          </span>
          <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-secondary-text">
            INDEPENDENT CREATIVE STUDIO — {SITE_CONFIG.estLabel}
          </span>
        </div>

        {/* Oversized Cinematic Typography */}
        <div ref={headlineRef} className="space-y-1 sm:space-y-2 mb-6 sm:mb-8 select-none">
          <div className="hero-line font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.9] text-white">
            WE MAKE
          </div>
          <div className="hero-line font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.9] flex items-center gap-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red via-red-500 to-rose-400 text-neon-glow-red">
              SCROLLING
            </span>
          </div>
          <div className="hero-line font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.9] text-white flex items-center">
            <span>STOP</span>
            <span className="text-neon-red inline-block animate-pulse">.</span>
          </div>
        </div>

        {/* Supporting Narrative */}
        <p
          ref={subtextRef}
          className="text-secondary-text text-sm sm:text-lg max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10 text-balance"
        >
          We turn ambitious ideas into cinematic visuals, scroll-stopping content, and unforgettable
          brand stories. Powered by precision cinematography and modern kinetic motion.
        </p>

        {/* Hero CTAs */}
        <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-neon-red hover:bg-red-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-glow-red hover:scale-105 active:scale-95"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            onClick={onOpenShowreel}
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full bg-card-bg/80 hover:bg-dark-muted border border-border-gray hover:border-neon-red/60 text-primary-text font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="w-7 h-7 rounded-full bg-neon-red/20 group-hover:bg-neon-red text-neon-red group-hover:text-white flex items-center justify-center transition-colors">
              <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
            </span>
            <span>WATCH SHOWREEL</span>
          </button>
        </div>
      </div>

      {/* Bottom Information Bar & Scroll Indicator */}
      <div
        ref={bottomBarRef}
        className="relative z-10 w-full border-t border-border-gray/40 bg-secondary-bg/40 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-secondary-text">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-red" />
            <span className="tracking-widest uppercase">
              STRATEGY / PRODUCTION / POST-PRODUCTION
            </span>
          </div>

          <Link
            href="#showreel"
            className="group flex items-center gap-2.5 text-secondary-text hover:text-white transition-colors"
          >
            <span className="tracking-widest uppercase text-[11px]">SCROLL TO EXPLORE</span>
            <div className="w-5 h-8 rounded-full border border-border-gray flex items-start justify-center p-1">
              <span className="w-1 h-2 bg-neon-red rounded-full animate-bounce" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

