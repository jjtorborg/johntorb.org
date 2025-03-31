import Link from 'next/link';
import React from 'react';

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
            <div className='flex flex-col group relative mt-2 md:mt-0 w-fit'>
                <Link
                    href={logoLink || '#'}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block'
                >
                    {logo}
                </Link>
                <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-(--foreground) rounded-full transition-transform duration-300 origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100`} />
            </div>
        </div>
    );
}
