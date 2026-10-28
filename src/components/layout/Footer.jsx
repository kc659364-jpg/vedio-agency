'use client';

import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Film, Heart } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-main-bg text-secondary-text border-t border-border-gray/60 overflow-hidden">
      {/* Top subtle neon red glow divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-red/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-border-gray/40">
          {/* Brand & Studio Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="#hero"
              className="inline-flex items-center gap-2 font-display font-black text-2xl text-white tracking-tighter"
            >
              <span>FRAME</span>
              <span className="text-neon-red">//</span>
              <span>SHIFT</span>
            </Link>

            <p className="text-xs sm:text-sm text-secondary-text max-w-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-secondary-text/70">
              <span className="w-2 h-2 rounded-full bg-neon-green" />
              <span>{SITE_CONFIG.status}</span>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              INDEX
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-neon-red transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              CHANNELS
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SITE_CONFIG.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-1 text-secondary-text hover:text-white transition-colors group"
                  >
                    <span>{social.name}</span>
                    <span className="text-xs font-mono text-secondary-text/60 group-hover:text-neon-red flex items-center gap-1">
                      {social.label}
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-secondary-text/70">
          <div className="flex items-center gap-2">
            <span suppressHydrationWarning>© {currentYear} {SITE_CONFIG.name}.</span>
            <span>ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">DEMO PRODUCTION STUDIO</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-gray hover:border-neon-red hover:text-white transition-all duration-300"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-neon-red" />
          </button>
        </div>
      </div>
    </footer>
  );
}

