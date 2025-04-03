import Link from 'next/link';
import React from 'react';
import ExternalLinkGlyph from '../../public/ExternalLinkGlyph';

interface ExperienceHeaderProps {
    title: string;
    logo?: React.ReactNode;
    logoLink?: string;
}

export default function ExperienceHeader({ title, logo, logoLink }: ExperienceHeaderProps) {
    return (
        <div className='flex flex-col md:flex-row md:items-center md:space-x-4 pb-4'>
            <h1 className='text-xl font-bold'>
                {title}
            </h1>
            <div className='hidden md:block'>
                -
            </div>
            <Link
                href={logoLink || '#'}
                target='_blank'
                rel='noopener noreferrer'
            >
                <div className='flex flex-row group relative mt-2 md:mt-0 w-fit'>
                    <div className='flex flex-col'>
                        {logo}
                        <span className={`relative top-0.5 h-[2px] w-full bg-(--foreground) rounded-full transition-transform duration-300 origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100`} />
                    </div>
                    <ExternalLinkGlyph className='fill-(--hoverable) group-hover:fill-(--foreground) transition-colors duration-300 ease-in-out'/>
                </div>
            </Link>
        </div>
    );
}
