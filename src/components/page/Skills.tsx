import { CardHover } from '../effects/CardHover';
import AngularIcon from '../../public/icons/AngularIcon';
import JSIcon from '../../public/icons/JSIcon';
import NextJsIcon from '../../public/icons/NextJsIcon';
import ReactIcon from '../../public/icons/ReactIcon';
import TSIcon from '../../public/icons/TSIcon';
import TailwindIcon from '../../public/icons/TailwindIcon';
import NodeJsIcon from '../../public/icons/NodeJsIcon';
import HTMLIcon from '../../public/icons/HTMLIcon';
import CssIcon from '../../public/icons/CSSIcon';
import CSharpIcon from '../../public/icons/CSharpIcon';
import PythonIcon from '../../public/icons/PythonIcon';
import PowershellIcon from '../../public/icons/PowerShellIcon';
import BashIcon from '../../public/icons/BashIcon';
import DockerIcon from '../../public/icons/DockerIcon';
import SQLIcon from '../../public/icons/SQLIcon';
import PostgreSqlIcon from '../../public/icons/PostgreSQLIcon';
import MongoDbIcon from '../../public/icons/MongoDBIcon';
import RedisIcon from '../../public/icons/RedisIcon';
import GraphQLIcon from '../../public/icons/GraphQLIcon';
import TerraformIcon from '../../public/icons/TerraformIcon';
import AWSIcon from '../../public/icons/AWSIcon';
import SnowflakeIcon from '../../public/icons/SnowflakeIcon';
import HasuraIcon from '../../public/icons/HasuraIcon';
import NewRelicIcon from '../../public/icons/NewRelicIcon';
import LaunchDarklyIcon from '../../public/icons/LaunchDarklyIcon';
import DotNetIcon from '../../public/icons/DotNetIcon';
import ConcourseIcon from '../../public/icons/ConcourseIcon';
import JenkinsIcon from '../../public/icons/JenkinsIcon';

export default function Skills() {
    return (
        <div id='skills'>
            <h1 className='mx-auto max-w-5xl px-8 pt-20 text-2xl md:pt-32 md:text-7xl font-bold'>
                Skills
            </h1>
            {/* <h2 className='mx-auto max-w-5xl px-12 pb-8 pt-10 text-lg md:text-2xl font-bold'>
                Frontend */}
                <div className='max-w-5xl mx-auto px-8'>
                    <CardHover items={[...frontendSkills, ...backendSkills]} gridKey='skills' />
                </div>
            {/* </h2> */}
        </div>
    )
}

export const frontendSkills = [
    {
        title: 'TypeScript',
        icon: <TSIcon />,
        link: 'https://www.typescriptlang.org/',
    },
    {
        title: 'JavaScript',
        icon: <JSIcon />,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        title: 'HTML',
        icon: <HTMLIcon />,
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        title: 'CSS',
        icon: <CssIcon />,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        title: 'React',
        icon: <ReactIcon />,
        link: 'https://reactjs.org/',
    },
    {
        title: 'Next.js',
        icon: <NextJsIcon />,
        link: 'https://nextjs.org/',
    },
    {
        title: 'Tailwind CSS',
        icon: <TailwindIcon />,
        link: 'https://tailwindcss.com/',
    },
    {
        title: 'Angular',
        icon: <AngularIcon />,
        link: 'https://angular.dev/',
    },
    {
        title: 'Node.js',
        icon: <NodeJsIcon />,
        link: 'https://nodejs.org/',
    }
];

export const backendSkills = [
    {
        title: 'C#',
        icon: <CSharpIcon />,
        link: 'https://dotnet.microsoft.com/en-us/languages/csharp'
    },
    {
        title: 'Python',
        icon: <PythonIcon />,
        link: 'https://www.python.org/'
    },
    {
        title: 'PowerShell',
        icon: <PowershellIcon />,
        link: 'https://learn.microsoft.com/en-us/powershell/'
    },
    {
        title: 'Bash',
        icon: <BashIcon />,
        link: 'https://www.gnu.org/software/bash/'
    },
    {
        title: 'Docker',
        icon: <DockerIcon />,
        link: 'https://www.docker.com/'
    },
    {
        title: 'SQL',
        icon: <SQLIcon />,
        link: 'https://www.w3schools.com/sql/'
    },
    {
        title: 'PostgreSQL',
        icon: <PostgreSqlIcon />,
        link: 'https://www.postgresql.org/'
    },
    {
        title: 'MongoDB',
        icon: <MongoDbIcon />,
        link: 'https://www.mongodb.com/'
    },
    {
        title: 'Redis',
        icon: <RedisIcon />,
        link: 'https://redis.io/'
    },
    {
        title: 'GraphQL',
        icon: <GraphQLIcon />,
        link: 'https://graphql.org/'
    },
    {
        title: 'Terraform',
        icon: <TerraformIcon />,
        link: 'https://www.terraform.io/'
    },
    {
        title: 'AWS',
        icon: <AWSIcon />,
        link: 'https://aws.amazon.com/'
    },
    {
        title: 'Snowflake',
        icon: <SnowflakeIcon />,
        link: 'https://www.snowflake.com/en/'
    },
    {
        title: 'Hasura',
        icon: <HasuraIcon />,
        link: 'https://hasura.io/'
    },
    {
        title: 'New Relic',
        icon: <NewRelicIcon />,
        link: 'https://newrelic.com/'
    },
    {
        title: 'LaunchDarkly',
        icon: <LaunchDarklyIcon />,
        link: 'https://launchdarkly.com/'
    },
    {
        title: '.NET',
        icon: <DotNetIcon />,
        link: 'https://dotnet.microsoft.com/en-us/'
    },
    {
        title: 'Concourse',
        icon: <ConcourseIcon />,
        link: 'https://concourse-ci.org/'
    },
    {
        title: 'Jenkins',
        icon: <JenkinsIcon />,
        link: 'https://www.jenkins.io/'
    }
];
