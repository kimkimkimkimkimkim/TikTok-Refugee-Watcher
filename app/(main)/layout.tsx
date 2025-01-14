import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tiktok-refugee.com'),
  title: {
    default: 'TikTok Refugee Crisis Hub',
    template: '%s | TikTok Refugee Crisis Hub'
  },
  description: 'Your comprehensive source for TikTok refugee updates, featuring breaking news about the digital refugee movement, analysis, and refugee community stories.',
  keywords: ['TikTok', 'Digital Refugees', 'TikTok Refugees', 'Content Creation', 'Digital Migration', 'Xiaohongshu', 'RedNote', 'Platform Transition', 'Social Media Refugees'],
  authors: [{ name: 'TikTok Refugee Crisis Hub Team' }],
  creator: 'TikTok Refugee Crisis Hub Team',
  publisher: 'TikTok Refugee Crisis Hub',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tiktok-refugee.com',
    siteName: 'TikTok Refugee Crisis Hub',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TikTok Refugee Crisis Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Refugee Crisis Hub',
    description: 'Stay informed about the TikTok platform transition',
    images: ['/twitter-image.png'],
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <a href="/" className="text-xl font-bold text-[#fe2c55] hover:text-[#69c9d0] transition-colors">
                  TikTok Refugee Crisis Hub 🌐
                </a>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://twitter.com/share?url=https://tiktok-refugee.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111111] hover:text-[#fe2c55] transition-colors"
                  >
                    Share 🔄
                  </a>
                </div>
              </nav>
            </div>
          </header>

          <main className="flex-grow">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <aside className="md:col-span-1">
                  <Navigation />
                </aside>

                {/* Main Content */}
                <main className="md:col-span-3">
                  {children}
                </main>
              </div>
            </div>
          </main>

          <footer className="bg-gray-50 border-t border-gray-200 py-8">
            <div className="container mx-auto px-4">
              <div className="text-center text-gray-600">
                <p className="mb-2">
                  Supporting the TikTok refugee community with latest updates and resources
                </p>
                <p className="text-sm">
                  {new Date().getFullYear()} TikTok Refugee Crisis Hub. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
