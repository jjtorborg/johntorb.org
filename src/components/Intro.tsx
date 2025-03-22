"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { TypewriterEffectSmooth } from "./TypewriterEffect";

export function Intro() {
    const name = [{ text: 'John', className: `${cn("md:text-4xl text-xl text-white relative z-2")}` }, { text: 'Torborg', className: `${cn("md:text-4xl text-xl text-white relative z-2")}` }];
    // const words = [{ text: 'Full' }, { text: 'Stack' }, { text: 'Developer' }];

    return (
        <div className="flex items-center justify-center w-screen">
            <div className="h-96 w-400 relative overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-black z-2 [mask-image:radial-gradient(var(--radial-gradient-stops))] pointer-events-none"
                    style={{ "--radial-gradient-stops": "transparent 0%, black 80%" } as React.CSSProperties}
                />
                <Boxes />
                <h1 className={cn("md:text-4xl text-xl text-white relative z-2")}>
                    {/* <TypewriterEffectSmooth words={name} /> */}
                    John Torborg
                </h1>
                <p className="text-center mt-2 text-neutral-300 relative z-2">
                    Full Stack Developer
                </p>
            </div>
        </div>
    );
}

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
    const rows = new Array(150).fill(1);
    const cols = new Array(100).fill(1);
    // let colors = [
    //     "#ffffff",
    // ];
    // const getRandomColor = () => {
    //     return colors[Math.floor(Math.random() * colors.length)];
    // };

    return (
        <div
            style={{
                transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
            }}
            className={cn(
                "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
                className,
            )}
            {...rest}
        >
            {rows.map((_, i) => (
                <motion.div
                    key={`row` + i}
                    className="relative h-5 w-10 border-l border-[#27272a]"
                >
                    {cols.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: '#ffffff', //`${getRandomColor()}`,
                                transition: { duration: 0 },
                            }}
                            animate={{
                                transition: { duration: 2 },
                            }}
                            key={`col` + j}
                            className="relative h-5 w-10 border-t border-r border-[#27272a]"
                        >
                            {j % 2 === 0 && i % 2 === 0 ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m6-6H6"
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
