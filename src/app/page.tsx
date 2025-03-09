import Header from '../components/page/Header';
import About from '../components/page/About';
import Intro from '../components/page/Intro';
import Experience from '../components/page/Experience';
import Projects from '../components/page/Projects';
import Skills from '../components/page/Skills';

export default function Home() {
    return (
        <main>
            <Header />
            <Intro />
            <About />
            <Experience />
            <Skills />
            <Projects />
        </main>
    )
}