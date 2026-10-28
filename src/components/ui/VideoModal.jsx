'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoUrl, title = 'Video Player' }) {
  const videoRef = useRef(null);

  // Handle escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Pause video when closed
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-card-bg border border-border-gray rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-gray/70 bg-secondary-bg/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-neon-red animate-pulse shadow-glow-red" />
            <h3 className="text-sm sm:text-base font-semibold text-primary-text tracking-wide truncate max-w-md">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-secondary-text hover:text-white hover:bg-dark-muted transition-colors focus:outline-none"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Bottom Status bar */}
        <div className="px-6 py-3 bg-secondary-bg/60 text-xs text-secondary-text flex items-center justify-between font-mono">
          <span>FRAME//SHIFT CINEMA PLAYBACK</span>
          <span>PRESS ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}

