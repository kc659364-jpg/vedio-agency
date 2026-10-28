import './globals.css';
import { SITE_CONFIG } from '@/lib/config';

export const metadata = {
  title: `${SITE_CONFIG.name} — Independent Video Production & Motion Studio`,
  description: `${SITE_CONFIG.tagline} ${SITE_CONFIG.description}`,
  keywords: [
    'Video Production',
    'Commercial Production',
    'Motion Graphics',
    'Music Videos',
    'Cinematography',
    'Color Grading',
    'Brand Films',
    'Reels Production',
    'Creative Studio',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: 'https://frameshift-demo.studio',
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.heroVideos.poster,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Cinematic Video Studio`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.heroVideos.poster],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  themeColor: '#151515',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-main-bg text-primary-text antialiased selection:bg-neon-red selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

