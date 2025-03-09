import { Timeline } from '../effects/Timeline';

export default function Experience() {
    const data = [
        {
          title: '2025',
          content: (
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
          ),
        },
        {
          title: '2022',
          content: (
            <div>
            </div>
          ),
        },
        {
          title: '2020',
          content: (
            <div>
            </div>
          ),
        },
        {
          title: '2019',
          content: (
            <div>
            </div>
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
