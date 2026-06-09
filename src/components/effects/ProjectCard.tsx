'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FiGithub, FiExternalLink, FiImage } from 'react-icons/fi';

export type ProjectChip = {
    label: string;
    icon?: React.ReactNode;
};

export type Project = {
    title: string;
    description: string;
    image?: string;
    repoLink: string;
    liveLink?: string;
    chips: ProjectChip[];
};

export function ProjectCard({ project }: { project: Project }) {
    const [imageError, setImageError] = useState(false);
    const showImage = !!project.image && !imageError;
    const screenshotLink = project.liveLink ?? project.repoLink;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='group flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-(--alt-background) transition-colors duration-300 ease-in-out hover:border-blue-500'
        >
            <Link
                href={screenshotLink}
                target='_blank'
                aria-label={`Open ${project.title}`}
                className='relative block aspect-16/10 w-full overflow-hidden bg-black'
            >
                <div className='absolute inset-0 bg-linear-to-br from-[#141414] to-black' />
                {showImage ? (
                    <Image
                        src={project.image as string}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        sizes='(max-width: 768px) 100vw, 50vw'
                        className='object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]'
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className='absolute inset-0 flex flex-col items-center justify-center gap-2 text-(--hoverable)'>
                        <FiImage size={32} />
                        <span className='text-sm'>Screenshot coming soon</span>
                    </div>
                )}
            </Link>

            <div className='flex flex-1 flex-col p-5'>
                <div className='flex items-start justify-between gap-3'>
                    <Link
                        href={project.repoLink}
                        target='_blank'
                        className='text-xl font-bold transition-colors duration-200 ease-in-out hover:text-blue-500'
                    >
                        {project.title}
                    </Link>
                    <div className='flex shrink-0 items-center gap-3 pt-1 text-(--hoverable)'>
                        <Link
                            href={project.repoLink}
                            target='_blank'
                            aria-label={`${project.title} source code on GitHub`}
                            className='transition-colors duration-200 ease-in-out hover:text-(--foreground)'
                        >
                            <FiGithub size={20} />
                        </Link>
                        {project.liveLink && (
                            <Link
                                href={project.liveLink}
                                target='_blank'
                                aria-label={`${project.title} live site`}
                                className='transition-colors duration-200 ease-in-out hover:text-(--foreground)'
                            >
                                <FiExternalLink size={20} />
                            </Link>
                        )}
                    </div>
                </div>

                <p className='mt-2 text-sm leading-relaxed text-(--hoverable)'>
                    {project.description}
                </p>

                <div className='mt-auto flex flex-wrap gap-2 pt-5'>
                    {project.chips.map((chip) => (
                        <span
                            key={chip.label}
                            className='inline-flex items-center gap-1.5 rounded-full border border-(--alt-border) bg-black/40 px-3 py-1 text-xs text-(--foreground)'
                        >
                            {chip.icon && (
                                <span className='flex h-[18px] w-[18px] items-center justify-center'>
                                    {chip.icon}
                                </span>
                            )}
                            {chip.label}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
