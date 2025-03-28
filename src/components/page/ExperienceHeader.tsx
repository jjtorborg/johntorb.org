import React from "react";

interface ExperienceHeaderProps {
    title: string;
    logo?: React.ReactNode;
}

export default function ExperienceHeader({ title, logo }: ExperienceHeaderProps) {
    return (
        <div className='flex flex-row items-center space-x-4 pb-4'>
            <h1 className='text-xl font-bold'>
                {title}
            </h1>
            <div>
                -
            </div>
            {logo}
        </div>
    );
}
