import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from '../components/effects/Toaster';
import { Space_Grotesk } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://johntorb.org'),
    title: 'John Torborg | Full Stack Developer',
    description: 'I am a full stack software developer with 5 years of experience building enterprise-scale web services.',
    applicationName: 'John Torborg',
    keywords: ['John Torborg', 'portfolio', 'personal', 'website', 'developer', 'designer', 'engineer', 'software'],
    icons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '192x192',
            url: '/favicon/web-app-manifest-192x192.png'
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '512x512',
            url: '/favicon/web-app-manifest-512x512.png'
        },
        {
            rel: 'apple-touch-icon',
            url: '/favicon/apple-icon.png'
        },
        {
            rel: 'icon',
            type: 'image/x-icon',
            url: '/favicon/favicon.ico'
        }
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={spaceGrotesk.className}>
                <Analytics />
                <SpeedInsights />
                <Toaster position="bottom-center" richColors/>
                {children}
            </body>
        </html>
    );
}
