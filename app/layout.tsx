import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const hwCigars = localFont({
  src: '../fonts/hw-cigars-regular.otf',
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio showcasing projects and work',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${hwCigars.variable}`}>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}