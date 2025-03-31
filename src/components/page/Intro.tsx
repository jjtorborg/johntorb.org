'use client';

import { cn } from '../../lib/utils';
import { Boxes } from '../effects/Boxes';
import { TypewriterEffectSmooth } from '../effects/Typewriter';

export default function Intro() {
    const nameClass = 'md:text-8xl text-4xl relative z-2 font-bold';
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

    const titleClass = 'md:text-4xl text-base relative z-2';
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
        <div className='flex items-center justify-center'>
            <div className='md:h-200 md:w-400 h-175 w-200 relative overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg'>
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