'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import { FEATURED_PROJECTS } from '@/data/projects';

export default function FeaturedProjects({ onSelectProject, onPlayVideo }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-main-bg overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-neon-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-24 pb-8 border-b border-border-gray/50">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-gray bg-card-bg/70 text-neon-red text-xs font-mono uppercase tracking-widest mb-4">
              <span>SELECTED WORK / 2024—2026</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-white leading-tight">
              BUILT TO BE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-text to-secondary-text">
                REMEMBERED.
              </span>
            </h2>
          </div>

          <p className="text-secondary-text text-sm sm:text-base max-w-md leading-relaxed">
            We don’t produce wallpaper content. Every frame is engineered with intention, rhythm,
            and distinct visual grammar designed to stay with the viewer long after playback ends.
          </p>
        </div>

        {/* Editorial Project Grid: 2 columns on desktop with staggered rhythm, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {FEATURED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;
            const isHovered = hoveredId === project.id;

            return (
              <div
                key={project.id}
                className={`group relative flex flex-col ${isEven ? 'md:mt-12' : ''}`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Visual Card Container */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative cursor-pointer rounded-2xl overflow-hidden border border-border-gray bg-card-bg transition-all duration-500 ease-out group-hover:border-opacity-100 group-hover:scale-[1.01]"
                  style={{
                    borderColor: isHovered ? project.accent : '#454545',
                    boxShadow: isHovered ? `0 0 30px -5px ${project.accent}33` : 'none',
                  }}
                >
                  {/* Card Thumbnail / Aspect container */}
                  <div className={`relative ${project.aspect} w-full overflow-hidden bg-black`}>
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-black/30 group-hover:opacity-60 transition-opacity" />

                    {/* Project Number Badge (Top Left) */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono font-bold tracking-widest text-white">
                      FS // {project.number}
                    </div>

                    {/* Year & Category Badge (Top Right) */}
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-wider text-secondary-text">
                      {project.year}
                    </div>

                    {/* Hover Quick Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/40 backdrop-blur-[2px]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-lg hover:bg-neutral-200 transition-all transform hover:scale-105"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>CASE STUDY</span>
                      </button>

                      {project.videoUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onPlayVideo(project.videoUrl, `${project.title} — ${project.subtitle}`);
                          }}
                          className="px-4 py-2 rounded-full bg-neon-red text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-glow-red hover:bg-red-600 transition-all transform hover:scale-105"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>WATCH PREVIEW</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary-text mb-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: project.accent }}
                        />
                        <span>{project.category}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <div
                          className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center transition-all duration-300 group-hover:rotate-45"
                          style={{
                            borderColor: isHovered ? project.accent : '#454545',
                            backgroundColor: isHovered ? `${project.accent}15` : 'transparent',
                          }}
                        >
                          <ArrowUpRight
                            className="w-5 h-5 text-secondary-text group-hover:text-white transition-colors"
                            style={{ color: isHovered ? project.accent : undefined }}
                          />
                        </div>
                      </div>

                      <p className="text-secondary-text text-xs sm:text-sm mt-1.5 line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Bottom Deliverables Strip */}
                    <div className="mt-5 pt-4 border-t border-border-gray/50 flex flex-wrap gap-2 text-[11px] font-mono text-secondary-text/80">
                      {project.deliverables.slice(0, 3).map((item, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-secondary-bg">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

