import Link from 'next/link';
import React from 'react';

interface ExperienceHeaderProps {
    title: string;
    logo?: React.ReactNode;
    logoLink?: string;
}

export default function ExperienceHeader({ title, logo, logoLink }: ExperienceHeaderProps) {
    return (
        <div className='flex flex-row items-center space-x-4 pb-4'>
            <h1 className='text-xl font-bold'>
                {title}
            </h1>
            <div>
                -
            </div>
            <div className='flex flex-col group relative'>
                <Link
                    href={logoLink || '#'}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block'
                >
                    {logo}
                </Link>
                <span className='absolute left-0 -bottom-1 h-[2px] w-full bg-white rounded-full transition-transform duration-300 origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100' />
            </div>
        </div>
    );
}
