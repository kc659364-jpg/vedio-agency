'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Showreel from '@/components/sections/Showreel';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ProjectGallery from '@/components/sections/ProjectGallery';
import Services from '@/components/sections/Services';
import CreativeProcess from '@/components/sections/CreativeProcess';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import VideoModal from '@/components/ui/VideoModal';
import ProjectModal from '@/components/ui/ProjectModal';
import { SITE_CONFIG } from '@/lib/config';

export default function Home() {
  // Video Modal State
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoUrl: '',
    title: '',
  });

  // Project Detail Modal State
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  // Video Modal handlers
  const handleOpenShowreel = () => {
    setVideoModal({
      isOpen: true,
      videoUrl: SITE_CONFIG.showreel.videoUrl,
      title: SITE_CONFIG.showreel.title,
    });
  };

  const handlePlayVideo = (url, title) => {
    setVideoModal({
      isOpen: true,
      videoUrl: url,
      title: title || 'Video Player',
    });
  };

  const handleCloseVideoModal = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  // Project Modal handlers
  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setProjectModalOpen(false);
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero onOpenShowreel={handleOpenShowreel} />
        <Showreel onPlayShowreel={handlePlayVideo} />
        <FeaturedProjects
          onSelectProject={handleSelectProject}
          onPlayVideo={handlePlayVideo}
        />
        <ProjectGallery
          onSelectProject={handleSelectProject}
          onPlayVideo={handlePlayVideo}
        />
        <Services />
        <CreativeProcess />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Global Interactive Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideoModal}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
      />

      {/* Global Interactive Project Case Study Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        project={selectedProject}
        onClose={handleCloseProjectModal}
        onPlayVideo={handlePlayVideo}
      />
    </>
  );
}

