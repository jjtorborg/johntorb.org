'use client'

import Link from 'next/link';
import GitHubIcon from '../../public/icons/GitHubIcon';
import LinkedInIcon from '../../public/icons/LinkedInIcon';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='bg-[#0e0e0e] border-b border-[#2d2d2d] fixed top-0 w-screen flex flex-row z-10'>
            <HeaderTitle />

            {/* Desktop view */}
            <div className='hidden md:flex w-screen'>
                <HeaderLink text='About' />
                <HeaderLink text='Experience' />
                <HeaderLink text='Skills' />
                <HeaderLink text='Projects' />
                <HeaderLink text='Contact' />
                
                <div className='ml-auto flex items-center space-x-4 mr-5'>
                    <Link
                        href='https://github.com/jjtorborg'
                    >
                        <GitHubIcon />
                    </Link>
                    <Link
                        href='https://www.linkedin.com/in/john-torborg-b5838a149'
                    >
                        <LinkedInIcon />
                    </Link>
                </div>
            </div>

            {/* Mobile view */}
            <div className='md:hidden w-screen flex justify-end'>
                <button
                    className='p-4'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label='Open menu'
                >
                    <FaBars className='text-(--hoverable)' size={24} />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-full right-0 mt-2 w-[200px] bg-[#0e0e0e] shadow-lg z-20 flex flex-col rounded-md border border-[#2d2d2d]'>
                        <nav className='flex flex-col items-start p-4 space-y-2'>
                            <HeaderLink text='About' />
                            <HeaderLink text='Experience' />
                            <HeaderLink text='Skills' />
                            <HeaderLink text='Projects' />
                            <HeaderLink text='Contact' />
                        </nav>

                        <div className='mt-2 flex justify-center space-x-4 p-4 border-t border-[#2d2d2d]'>
                            <Link href='https://github.com/jjtorborg'>
                                <GitHubIcon />
                            </Link>
                            <Link href='https://www.linkedin.com/in/john-torborg-b5838a149'>
                                <LinkedInIcon />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export function HeaderTitle() {
    return (
        <Link
            className='whitespace-nowrap mr-0 px-[20px] py-[5px] text-[32px]'
            href='#home'
        >
            JT
        </Link>
    );
}

export function HeaderLink({ text }: { text: string }) {
    return (
        <Link
            className={`px-[10px] py-[3px] mx-[2px] my-[12px] flex justify-center items-center rounded-[8px] text-(--hoverable) hover:bg-[#1e1e1e] hover:text-(--foreground) transition-colors duration-200 ease-in-out`}
            href={`#${text.toLowerCase()}`}
        >
            {text}
        </Link>
    );
}