import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Space_Grotesk } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://johntorb.org'),
    title: 'John Torborg | Full Stack Developer',
    description: 'Welcome to my personal portfolio website.',
    applicationName: 'John Torborg',
    keywords: ['John Torborg', 'portfolio', 'personal', 'website', 'developer', 'designer', 'engineer', 'software'],
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
                {children}
            </body>
        </html>
    );
}
