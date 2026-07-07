import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolios from "./components/Portfolios/Portfolios";
import Contact from "./components/Contact/Contact";

const Home = () => {
    return (
        <>
            <section>
                <Intro />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Skills />
            </section>
            <section>
                <Portfolios />
            </section>
            <section>
                <Contact />
            </section>
        </>
    );
}

export default Home;