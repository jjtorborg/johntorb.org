import { Timeline } from '../effects/Timeline';
import RenaissanceLogo from '../../public/RenaissanceLogo';
import ExperienceHeader from './ExperienceHeader';

export default function Experience() {
    const renaissanceLink = 'https://www.renaissance.com/';
    const logoClassName = 'h-6';

    const data = [
        {
            title: '2025',
            content: (
                <>
                    <ExperienceHeader
                        title='Software Engineer III'
                        logo={ <RenaissanceLogo className={logoClassName} /> }
                        logoLink={renaissanceLink}
                    />

                    <ul className='list-disc'>
                        <li>
                            Coming soon...
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: (
                <>
                    2024
                    <br/>
                    <br/>
                    2022
                </>
            ),
            content: (
                <>
                    <ExperienceHeader
                        title='Software Engineer II'
                        logo={ <RenaissanceLogo className={logoClassName} /> }
                        logoLink={renaissanceLink}
                    />

                    <ul className='list-disc'>
                        <li>
                            Conceptualized and developed a web service from scratch that integrated acquired company
                            apps and data into a seamless UI.
                        </li>
                        <li>
                            Designed a data ingestion pipeline supporting automatic daily updates for 39.6M users.
                        </li>
                        <li>
                            Implemented a teacher-facing frontend application providing actionable, data-driven
                            recommendations to support their students, which grew to 100K DAU (Daily Active Users).
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: (
                <>
                    2021
                    <br/>
                    <br/>
                    2020
                </>
            ),
            content: (
                <>
                    <ExperienceHeader
                        title='Software Engineer I'
                        logo={ <RenaissanceLogo className={logoClassName} /> }
                        logoLink={renaissanceLink}
                    />

                    <ul className='list-disc'>
                        <li>
                            Implemented an improved global user preference store, optimizing data retrieval and storage
                            mechanisms, significantly reducing average load times and improving scalability.
                        </li>
                        <li>
                            Upgraded backend API microservices to the latest platform versions, modifying outdated
                            implementations as needed, and leading testing to ensure system stability and consistency.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: '2019',
            content: (
                <>
                    <ExperienceHeader
                        title='Software Engineering Intern'
                        logo={ <RenaissanceLogo className={logoClassName} /> }
                        logoLink={renaissanceLink}
                    />

                    <ul className='list-disc'>
                        <li>
                            Enhanced the company's repository filtering tool by adding additional filtering parameters and daily
                            repository list refreshes, streamlining the identification of relevant repositories.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: '2018',
            content: (
                <>
                    <ExperienceHeader
                        title='Software Engineering Intern'
                        logo={ <RenaissanceLogo className={logoClassName} /> }
                        logoLink={renaissanceLink}
                    />

                    <ul className='list-disc'>
                        <li>
                            Created a developer tool to filter company repositories by framework/version and team ownership,
                            helping identify projects with dependencies nearing the end of their LTS and plan upgrades effectively.
                        </li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <div id='experience'>
            <h1 className='mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl md:pt-32 md:text-7xl font-bold'>
                Experience
            </h1>
            <div className='w-full'>
                <Timeline data={data} />
            </div>
        </div>
    )
}
