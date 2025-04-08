export default function About() {
    return (
        <div id='about'>
            <h1 className='mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl md:pt-32 md:text-7xl font-bold'>
                About Me
            </h1>
            <p className='relative mx-auto text-lg md:text-xl max-w-2xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl pt-4'>
                I am a full stack software developer based in <span className='text-blue-500'>St. Paul, MN</span>, with 5 years of experience working on enterprise-scale web services.
                I love building sleek, useful applications that solve real-world problems. 
            </p>
        </div>
    );
}