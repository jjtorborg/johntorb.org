import type { Metadata } from 'next';
import './globals.css';
import { DM_Mono } from 'next/font/google';

export const font = DM_Mono({
  weight: ['300'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'John Torborg | Full Stack Developer',
  description: 'Personal portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
