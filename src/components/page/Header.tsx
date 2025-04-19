'use client'

import Link from 'next/link';
import GitHubIcon from 'public/icons/GitHubIcon';
import LinkedInIcon from 'public/icons/LinkedInIcon';
import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='bg-(--alt-background) border-b border-(--alt-border) fixed top-0 w-screen flex flex-row z-10'>
            <HeaderTitle />

            {/* Desktop view */}
            <div className='hidden md:flex w-screen'>
                <HeaderLink text='About' />
                <HeaderLink text='Experience' />
                <HeaderLink text='Skills' />
                <HeaderLink text='Projects' />
                <HeaderLink text='Contact' />
                
                <div className='ml-auto flex items-center space-x-4 mr-6'>
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
                    ref={buttonRef}
                    className={`rounded-md group transition-colors duration-200 ease-in-out ${
                        isMenuOpen ? 'bg-(--alt-border)' : 'hover:bg-[#1e1e1e]'
                    }`}
                    style={{ padding: '7px', margin: '10px 13px' }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label='Open menu'
                >
                    <FaBars className='text-(--hoverable)' size={24} />
                </button>
                {isMenuOpen && (
                    <div 
                        className='absolute top-full mt-2 w-[150px] bg-(--alt-background) shadow-lg z-20 flex flex-col rounded-md border border-(--alt-border)'
                        style={{ right: '7px' }}
                        ref={menuRef}
                    >
                        <nav className='flex flex-col items-start p-4 space-y-2'>
                            <HeaderLink text='About' onClick={() => setIsMenuOpen(false)} />
                            <HeaderLink text='Experience' onClick={() => setIsMenuOpen(false)} />
                            <HeaderLink text='Skills' onClick={() => setIsMenuOpen(false)} />
                            <HeaderLink text='Projects' onClick={() => setIsMenuOpen(false)} />
                            <HeaderLink text='Contact' onClick={() => setIsMenuOpen(false)} />
                        </nav>

                        <div className='mt-2 flex justify-center space-x-4 p-4 border-t border-(--alt-border)'>
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

export function HeaderLink({ text, onClick }: { text: string; onClick?: () => void }) {
    return (
        <Link
            className={`px-[10px] py-[3px] mx-[2px] my-[12px] flex justify-center items-center rounded-[8px] text-(--hoverable) hover:bg-[#1e1e1e] hover:text-(--foreground) transition-colors duration-200 ease-in-out`}
            href={`#${text.toLowerCase()}`}
            onClick={onClick}
        >
            {text}
        </Link>
    );
}