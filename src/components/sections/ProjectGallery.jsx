'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Grid } from 'lucide-react';
import { GALLERY_PROJECTS } from '@/data/projects';

export default function ProjectGallery({ onSelectProject, onPlayVideo }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'COMMERCIAL', 'MUSIC VIDEOS', 'REELS', 'BRAND FILMS'];

  const filteredProjects =
    activeCategory === 'ALL'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.galleryCategory === activeCategory);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-secondary-bg/80 border-t border-border-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Title & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-gray bg-card-bg/60 text-accent-blue text-xs font-mono uppercase tracking-widest mb-3">
              <Grid className="w-3.5 h-3.5" />
              <span>THE ARCHIVE / ALL FRAMES</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tighter uppercase text-white">
              PROJECT CATALOGUE
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 uppercase ${
                    isActive
                      ? 'bg-neon-red text-white shadow-glow-red font-bold'
                      : 'bg-card-bg text-secondary-text hover:text-white hover:bg-dark-muted border border-border-gray/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProject(item)}
              className="group relative cursor-pointer rounded-xl overflow-hidden bg-card-bg border border-border-gray/60 hover:border-neon-red/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-black/40 group-hover:opacity-40 transition-opacity" />

                {/* Play Button Trigger on Hover */}
                {item.videoUrl && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPlayVideo(item.videoUrl, `${item.title} — ${item.subtitle}`);
                    }}
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-neon-red/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-glow-red hover:scale-110"
                    aria-label={`Play ${item.title}`}
                  >
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </button>
                )}

                {/* Accent Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-mono tracking-wider text-secondary-text border border-white/10 uppercase">
                  {item.galleryCategory}
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base group-hover:text-neon-red transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-secondary-text text-xs line-clamp-1">{item.subtitle}</p>
                </div>

                <span className="text-xs font-mono text-secondary-text/70">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

