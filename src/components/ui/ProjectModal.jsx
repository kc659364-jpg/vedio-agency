'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, Play, CheckCircle2, ArrowUpRight, Film } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose, onPlayVideo }) {
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsPlayingInline(false);
      return;
    }

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

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-lg overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-card-bg border border-border-gray/80 rounded-2xl overflow-hidden shadow-2xl my-auto text-primary-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-secondary-text hover:text-white hover:bg-black/90 transition-all border border-border-gray/50 focus:outline-none"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Banner */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
          {isPlayingInline && project.videoUrl ? (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-black/30" />

              {/* Play Button Overlay */}
              <button
                onClick={() => {
                  if (onPlayVideo && project.videoUrl) {
                    onPlayVideo(project.videoUrl, `${project.title} — ${project.subtitle}`);
                  } else {
                    setIsPlayingInline(true);
                  }
                }}
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neon-red/90 hover:bg-neon-red text-white flex items-center justify-center shadow-glow-red transition-transform hover:scale-110 active:scale-95 group-hover:opacity-100"
                aria-label={`Play preview video for ${project.title}`}
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
              </button>
            </>
          )}

          {/* Accent Color Strip */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ backgroundColor: project.accent || '#FF3838' }}
          />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-gray/60 pb-6">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-secondary-text mb-1">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
                {project.duration && (
                  <>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </>
                )}
              </div>
              <h2
                id="project-modal-title"
                className="text-2xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-3"
              >
                <span>{project.title}</span>
                <span className="text-sm font-normal text-secondary-text tracking-normal">
                  // {project.subtitle}
                </span>
              </h2>
            </div>

            {project.client && (
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase text-secondary-text/70 block">
                  CLIENT
                </span>
                <span className="text-sm font-semibold text-primary-text">
                  {project.client}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-secondary-text">
              CREATIVE DIRECTION & ARCHITECTURE
            </h4>
            <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Deliverables / Services */}
          {project.deliverables && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-secondary-text">
                SERVICES DELIVERED
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-primary-text bg-secondary-bg/80 border border-border-gray/50 rounded-lg px-3.5 py-2"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: project.accent || '#FF3838' }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Quote */}
          {project.quote && (
            <div className="p-4 rounded-xl bg-dark-muted/60 border-l-4 border-neon-red text-sm italic text-secondary-text">
              {project.quote}
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border-gray/60">
            <div className="text-xs font-mono text-secondary-text flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-neon-red" />
              <span>PROJECT CODE: FS-{project.id.toUpperCase()}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg border border-border-gray hover:bg-dark-muted text-xs sm:text-sm font-medium transition-colors"
              >
                CLOSE
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-neon-red hover:bg-red-600 text-white text-xs sm:text-sm font-semibold shadow-glow-red transition-all"
              >
                <span>REQUEST SIMILAR PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

