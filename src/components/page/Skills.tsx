import { CardHover } from '../effects/CardHover';
import AngularIcon from '../../public/icons/angular_icon';

export default function Skills() {
    return (
        <div id='skills'>
            <h1 className='mx-auto max-w-5xl px-8 pt-20 text-2xl md:pt-32 md:text-7xl font-bold'>
                Skills
            </h1>
            {/* <h2 className='mx-auto max-w-5xl px-12 pb-8 pt-10 text-lg md:text-2xl font-bold'>
                Frontend */}
                <div className='max-w-5xl mx-auto px-8'>
                    <CardHover items={frontendSkills} gridKey='frontend' />
                </div>
            {/* </h2> */}
        </div>
    )
}

export const frontendSkills = [
    {
        title: 'JavaScript',
        icon: <AngularIcon />,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        title: 'TypeScript',
        icon: <AngularIcon />,
        link: 'https://www.typescriptlang.org/',
    },
    {
        title: 'HTML',
        icon: <AngularIcon />,
        link: '2',
    },
    {
        title: 'React',
        icon: <AngularIcon />,
        link: 'https://reactjs.org/',
    },
    {
        title: 'Next.js',
        icon: <AngularIcon />,
        link: 'https://nextjs.org/',
    },
    {
        title: 'Tailwind CSS',
        icon: <AngularIcon />,
        link: '1',
    },
    {
        title: 'Angular',
        icon: <AngularIcon />,
        link: '3',
    },
    {
        title: 'Node.js',
        icon: <AngularIcon />,
        link: 'https://nodejs.org/',
    }
]