'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Detect scroll to toggle translucent dark navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = ['hero', 'projects', 'showreel', 'services', 'process', 'about', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'Showreel', href: '#showreel', id: 'showreel' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-main-bg/90 backdrop-blur-md border-b border-border-gray/70 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-main-bg/80 via-main-bg/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Typographic Logo */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 text-primary-text hover:text-white transition-colors"
          >
            {/* Animated Red Accent Indicator */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-neon-red opacity-75 duration-1000" />
              <span className="relative inline-flex rounded-sm h-3 w-3 bg-neon-red shadow-glow-red" />
            </span>

            <span className="font-display font-black text-lg sm:text-xl tracking-tighter uppercase flex items-center">
              <span>FRAME</span>
              <span className="text-neon-red mx-0.5 group-hover:scale-125 transition-transform duration-300">//</span>
              <span>SHIFT</span>
            </span>

            <span className="hidden xl:inline-block text-[10px] uppercase font-mono tracking-widest text-secondary-text/70 pl-2 border-l border-border-gray">
              STUDIO
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-card-bg/60 border border-border-gray/50 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white bg-dark-muted/80'
                      : 'text-secondary-text hover:text-primary-text hover:bg-dark-muted/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-[2px] bg-neon-red rounded-full shadow-glow-red" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-1.5 px-4 lg:px-5 py-2 rounded-full text-xs lg:text-sm font-semibold tracking-wider text-white bg-neon-red hover:bg-red-600 shadow-glow-red transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="#contact"
              className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider text-white bg-neon-red shadow-glow-red"
            >
              TALK ↗
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-secondary-text hover:text-primary-text bg-card-bg/80 border border-border-gray/60 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-neon-red" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-main-bg/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-24 pb-8 px-6">
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-secondary-text/60 mb-4 px-2">
              NAVIGATION
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between p-3.5 rounded-xl text-lg font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-card-bg text-neon-red border border-neon-red/30 pl-5'
                      : 'text-primary-text hover:bg-card-bg/50 hover:pl-5'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-secondary-text">
                    0{navLinks.indexOf(link) + 1}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="space-y-4 pt-6 border-t border-border-gray/50">
            <Link
              href="#contact"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-neon-red text-white font-bold tracking-wider text-sm shadow-glow-red"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="text-center text-xs font-mono text-secondary-text/70">
              {SITE_CONFIG.contact.displayEmail}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

