import { Inter, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  preload: true,
});

export const hwCigars = localFont({
  src: '../../fonts/hw-cigars-regular.otf',
  display: 'swap',
  variable: '--font-serif',
  preload: true,
});

export const fontVariables = `${inter.variable} ${jetbrainsMono.variable} ${hwCigars.variable}`;