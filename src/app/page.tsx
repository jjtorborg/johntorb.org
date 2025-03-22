import Header from "../components/Header";
import About from "../components/About";
import { Intro } from "../components/Intro";

export default function Home() {
    return (
        <main className="home">
            <Header />
            <Intro />
            <About />
        </main>
    )
}