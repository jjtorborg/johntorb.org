import { CardHover } from '../effects/CardHover';

export default function Skills() {
    return (
        <div id='skills'>
            <h1 className='mx-auto max-w-5xl px-8 pt-20 text-2xl md:pt-32 md:text-7xl font-bold'>
                Skills
            </h1>
            <h2 className='mx-auto max-w-5xl px-12 pb-8 pt-10 text-lg md:text-2xl font-bold'>
                Frontend
                <div className='max-w-5xl mx-auto px-8'>
                    <CardHover items={frontendSkills} gridKey='frontend' />
                </div>
            </h2>
            <h2 className='mx-auto max-w-5xl px-12 pb-8 pt-10 text-lg md:text-2xl font-bold'>
                Backend
                <div className='max-w-5xl mx-auto px-8'>
                    <CardHover items={frontendSkills} gridKey='backend' />
                </div>
            </h2>
        </div>
    )
}

export const frontendSkills = [
    {
        title: 'JavaScript',
        icon: '',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        title: 'TypeScript',
        icon: '',
        link: 'https://www.typescriptlang.org/',
    },
    {
        title: 'React',
        icon: '',
        link: 'https://reactjs.org/',
    },
    {
        title: 'Next.js',
        icon: '',
        link: 'https://nextjs.org/',
    },
    {
        title: 'Tailwind CSS',
        icon: '',
        link: '1',
    },
    {
        title: 'Tailwind CSS',
        icon: '',
        link: '2',
    },
    {
        title: 'Tailwind CSS',
        icon: '',
        link: '3',
    },
    {
        title: 'Tailwind CSS',
        icon: '',
        link: '4',
    },
    {
        title: 'Tailwind CSS',
        icon: '',
        link: '5',
    },
    {
        title: 'Node.js',
        icon: '',
        link: 'https://nodejs.org/',
    }
]