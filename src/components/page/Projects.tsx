import { ProjectCard, Project } from '../effects/ProjectCard';
import NextJsIcon from '../../../public/icons/skills/NextJsIcon';
import ReactIcon from '../../../public/icons/skills/ReactIcon';
import TSIcon from '../../../public/icons/skills/TSIcon';
import TailwindIcon from '../../../public/icons/skills/TailwindIcon';
import PostgreSqlIcon from '../../../public/icons/skills/PostgreSQLIcon';

const chipIconProps = { width: 18, height: 18 };

const projects: Project[] = [
    {
        title: 'TorbForms',
        description: 'A simple dynamic form creation and submission system.',
        image: '/projects/torbforms.png',
        repoLink: 'https://github.com/jjtorborg/TorbForms',
        liveLink: 'https://torbforms.vercel.app',
        chips: [
            { label: 'Next.js', icon: <NextJsIcon {...chipIconProps} /> },
            { label: 'React', icon: <ReactIcon {...chipIconProps} /> },
            { label: 'TypeScript', icon: <TSIcon {...chipIconProps} /> },
            { label: 'Tailwind CSS', icon: <TailwindIcon {...chipIconProps} /> },
            { label: 'PostgreSQL', icon: <PostgreSqlIcon {...chipIconProps} /> },
        ],
    },
    {
        title: 'johntorb.org',
        description: 'My personal portfolio website.',
        image: '/projects/johntorb-org.png',
        repoLink: 'https://github.com/jjtorborg/johntorb.org',
        liveLink: 'https://johntorb.org',
        chips: [
            { label: 'Next.js', icon: <NextJsIcon {...chipIconProps} /> },
            { label: 'React', icon: <ReactIcon {...chipIconProps} /> },
            { label: 'TypeScript', icon: <TSIcon {...chipIconProps} /> },
            { label: 'Tailwind CSS', icon: <TailwindIcon {...chipIconProps} /> },
            { label: 'Motion' },
        ],
    },
];

export default function Projects() {
    return (
        <div id="projects">
            <h1 className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-4xl md:pt-32 md:text-7xl font-bold">
                Projects
            </h1>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-8 pt-10 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
}
