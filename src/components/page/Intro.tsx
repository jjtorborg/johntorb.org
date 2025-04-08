'use client';

import React from 'react';
import { cn } from '../../lib/utils';
import { Boxes } from '../effects/Boxes';
import { TypewriterEffectSmooth } from '../effects/Typewriter';
import { motion } from 'framer-motion';

export default function Intro() {
    const nameClass = 'md:text-8xl text-4xl relative z-1 font-bold';
    const name = [
        {
            text: 'John',
            className: nameClass
        },
        {
            text: 'Torborg',
            className: nameClass
        }
    ];

    const titleClass = 'md:text-4xl text-base relative z-1';
    const titleClassBlue = `${cn(titleClass, 'text-blue-500')}`;
    const title = [
        {
            text: 'Full',
            className: titleClass
        },
        {
            text: 'Stack',
            className: titleClass
        }, 
        {
            text: 'Developer',
            className: titleClassBlue
        }
    ];

    return (
        <div className='flex items-center justify-center pt-[58px]'>
            <div className='md:h-200 md:w-400 h-175 w-200 relative overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg'>
                <div className='absolute inset-0 w-full h-full bg-black z-1 [mask-image:radial-gradient(var(--radial-gradient-stops))] pointer-events-none'
                    style={{ '--radial-gradient-stops': 'transparent 0%, black 80%' } as React.CSSProperties}
                />
                <Boxes />
                <TypewriterEffectSmooth words={name} />
                <TypewriterEffectSmooth words={title} />
                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    href='#about'
                    className='absolute bottom-4 z-2 flex items-center justify-center w-12 h-12 border-[3px] border-(--hoverable) bg-transparent text-(--hoverable) hover:border-blue-500 hover:text-blue-500 rounded-full transition-transform hover:scale-105 ease-in-out duration-300'
                >
                    <span style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>↓</span>
                </motion.a>
            </div>
        </div>
    );
}