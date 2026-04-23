import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import {
  ConsentGatedScripts,
  CookieConsentBanner,
  CookieConsentProvider,
  CookiePreferencesModal,
} from '@/components/consent'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Five Star Rated Insurance | Get Your Free Quote Today',
  description: 'Compare auto, home, business, commercial auto, and life insurance quotes from top carriers. Get personalized coverage in minutes with our Guided Quote Assistant.',
  keywords: 'insurance quotes, auto insurance, home insurance, life insurance, business insurance, commercial auto insurance',
}

export const viewport: Viewport = {
  themeColor: '#0A2A5E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <CookieConsentProvider>
          <ConsentGatedScripts />
          {children}
          <CookieConsentBanner />
          <CookiePreferencesModal />
        </CookieConsentProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
