import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
    const [rows, setRows] = useState<number[]>([]);
    const [cols, setCols] = useState<number[]>([]);

    const calculateGrid = (rowCount: number, colCount: number) => {
        setRows(new Array(rowCount).fill(1));
        setCols(new Array(colCount).fill(1));
    };
    
    useEffect(() => {
        const rowCount = Math.min(150, Math.floor(window.innerWidth / 10));
        const colCount = Math.min(100, Math.floor(window.innerHeight / 10));

        calculateGrid(rowCount, colCount);
    }, []);

    const getColor = () => {
        const useWhite = true;

        if (useWhite) {
            return 'var(--foreground)';
        } else {
            return getRandomColor();
        }
    }

    const getRandomColor = () => {
        const colors = [
            'var(--blue-500)',
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div
            style={{
                transform: `skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
            }}
            className={cn(
                'absolute -translate-x-50 -translate-y-50 z-0 flex h-full w-full p-4',
                className,
            )}
            {...rest}
        >
            {rows.map((_, i) => (
                <motion.div
                    key={`row` + i}
                    className='relative h-5 w-10 border-l border-[#27272a] border-2'
                >
                    {cols.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: `${getColor()}`,
                                transition: { duration: 0 },
                            }}
                            animate={{
                                transition: { duration: 2 },
                            }}
                            key={`col` + j}
                            className='relative h-5 w-10 border-t border-r border-[#27272a] border-2'
                        >
                            {j % 2 === 0 && i % 2 === 0 ? (
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M12 6v12m6-6H6'
                                    />
                                </svg>
                            ) : null}
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export const Boxes = React.memo(BoxesCore);
