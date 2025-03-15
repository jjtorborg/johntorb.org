'use client'

import { useState, useEffect } from 'react';
import { headerFont } from '../app/fonts';
import { Tabs } from './Tabs';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <header className={`header ${headerFont.className}`}>
            <h1 className='header__title'>
                {isScrolled ? 'JT' : 'JOHN TORBORG'}
            </h1>
            <Tabs tabs={
                [
                  { title: 'About', value: 'About' },
                  { title: 'Experience', value: 'Experience' },
                  { title: 'Projects', value: 'Projects' },
                  { title: 'Contact', value: 'Contact' },
                ]
            } />
        </header>
    )
}