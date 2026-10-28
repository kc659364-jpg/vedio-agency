import Link from 'next/link';
import { ArrowLeft, Film } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-main-bg text-primary-text flex flex-col items-center justify-center px-4 relative overflow-hidden bg-film-grain">
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 bg-neon-red/10 rounded-full blur-3xl pointer-events-none -top-10 -right-10" />
      <div className="absolute w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none -bottom-10 -left-10" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-gray bg-card-bg/80 text-neon-red text-xs font-mono mb-6">
          <Film className="w-3.5 h-3.5 animate-pulse" />
          <span>FRAME 404 // MISSING SEQUENCE</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-primary-text mb-4">
          LOST <span className="text-neon-red">CUT.</span>
        </h1>

        <p className="text-secondary-text text-sm sm:text-base mb-8 leading-relaxed">
          The requested reel or scene has been cut from the final timeline. Let&apos;s return to the master sequence.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-neon-red hover:bg-red-600 text-white font-medium text-sm transition-all duration-300 shadow-glow-red hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO THE REEL</span>
        </Link>
      </div>

      <div className="absolute bottom-8 text-xs font-mono text-secondary-text/60">
        {SITE_CONFIG.name} — {SITE_CONFIG.tagline}
      </div>
    </div>
  );
}

