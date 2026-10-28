// Central Configuration for FRAME//SHIFT
export const SITE_CONFIG = {
  name: 'FRAME//SHIFT',
  legalName: 'FRAME SHIFT Creative Motion Studios',
  tagline: 'WE MAKE SCROLLING STOP.',
  description: 'Independent Video Production & Motion Studio specializing in commercial films, music videos, cinematic reels, and high-impact brand storytelling.',
  foundedYear: '2021',
  estLabel: 'EST. 2021',
  location: 'Global / Remote & On-Location',
  status: 'Available for Select Projects (Q2/Q3 2026)',
  
  // Contact details (Configurable placeholders)
  contact: {
    email: 'hello@frameshift-demo.studio',
    displayEmail: 'hello@frameshift.studio',
    whatsapp: '+1-555-0199', // Demo number
    whatsappUrl: 'https://wa.me/15550199?text=Hi%20FRAME//SHIFT%20team,%20I%20have%20a%20project%20in%20mind.',
    calendlyUrl: 'https://calendly.com',
    address: 'Metropolis Studio Hub • Brooklyn & Worldwide',
  },

  socials: [
    { name: 'Instagram', label: '@frameshift.studio', url: 'https://instagram.com' },
    { name: 'Vimeo', label: 'vimeo.com/frameshift', url: 'https://vimeo.com' },
    { name: 'YouTube', label: 'youtube.com/@frameshift', url: 'https://youtube.com' },
    { name: 'X / Twitter', label: '@frameshift_io', url: 'https://x.com' },
    { name: 'LinkedIn', label: 'linkedin.com/company/frameshift', url: 'https://linkedin.com' },
  ],

  // Brand Color Palette tokens
  colors: {
    neonRed: '#FF3838',
    neonGreen: '#6DAA3F',
    accentBlue: '#63B8F4',
    accentOrange: '#FFA500',
    mutedDark: '#262626',
    borderGray: '#454545',
    cardBg: '#222222',
    mainBg: '#151515',
    secondaryBg: '#1C1C1C',
    primaryText: '#F5F5F5',
    secondaryText: '#A7A7A7',
  },

  // Navigation Items
  navigation: [
    { name: 'Home', href: '#hero' },
    { name: 'Work', href: '#projects' },
    { name: 'Showreel', href: '#showreel' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ],

  // Hero Video Sources
  // High-performance cinematic royalty-free videos with reliable streaming CDNs
  heroVideos: {
    // Primary video: High-energy cinematic film production & camera motion
    primary: 'https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4',
    // Fallback video: Cinematic neon city lights & motion
    fallback: 'https://assets.mixkit.co/videos/preview/mixkit-night-sky-with-stars-at-a-calm-lake-time-lapse-40134-large.mp4',
    // High-resolution dark aesthetic poster
    poster: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1920&auto=format&fit=crop',
    // Local video instructions:
    // To use a local MP4 file, place it in /public/videos/hero.mp4 and change primary to '/videos/hero.mp4'
  },

  // Showreel Video
  showreel: {
    title: 'FRAME//SHIFT — 2026 OFFICIAL SHOWREEL',
    duration: '01:48',
    category: 'Commercial & Music Direction Reel',
    description: 'A relentless compilation of our commercial cinematography, high-framerate kinetic cuts, brand films, and visual effects crafted across 12 countries.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Safe demo MP4
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1920&auto=format&fit=crop',
  },
};

