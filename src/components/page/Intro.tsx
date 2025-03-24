'use client';

import { cn } from '../../lib/utils';
import { Boxes } from '../effects/Boxes';
import { TypewriterEffectSmooth } from '../effects/Typewriter';

export default function Intro() {
    const nameClass = `${cn('md:text-8xl text-xl relative z-2 font-bold')}`;
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

    const titleClass = `${cn('md:text-4xl text-xl relative z-2')}`;
    const titleClassBlue = `${cn('md:text-4xl text-xl relative z-2 text-blue-500')}`;
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
        <div className='flex items-center justify-center w-screen'>
            <div className='h-200 w-400 relative overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg'>
                <div className='absolute inset-0 w-full h-full bg-black z-2 [mask-image:radial-gradient(var(--radial-gradient-stops))] pointer-events-none'
                    style={{ '--radial-gradient-stops': 'transparent 0%, black 80%' } as React.CSSProperties}
                />
                <Boxes />
                <TypewriterEffectSmooth words={name} />
                <TypewriterEffectSmooth words={title} />
            </div>
        </div>
    );
}