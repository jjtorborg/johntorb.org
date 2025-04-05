'use client'

import { cn } from '../../lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

export const CardHover = ({
  items,
  className,
  gridKey
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    link: string;
  }[];
  className?: string;
  gridKey: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          target='_blank'
          key={item?.link}
          className='relative group block p-[3px] h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-blue-500 rounded-xl flex self-center justify-self-center z-0'
                layoutId={gridKey}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.45 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className='flex flex-row items-center group'>
              <div className='px-1 grayscale group-hover:fill-blue-500'>
                {item.icon}
              </div>
              <CardTitle className='px-3'>{item.title}</CardTitle>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-1',
        className
      )}
    >
      <div className='relative z-2'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn('tracking-wide text-base', className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'mt-8 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};
