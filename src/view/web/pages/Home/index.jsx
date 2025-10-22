import LazyLoad from "react-lazyload";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolios from "./components/Portfolios/Portfolios";
import Contact from "./components/Contact/Contact";

const Home = () => {
    return (
        <>
            <LazyLoad once={true} height={300}>
                <section>
                    <Intro />
                </section>
            </LazyLoad>
            <LazyLoad once={true} height={300}>
                <section>
                    <About />
                </section>
            </LazyLoad>
            <LazyLoad once={true} height={300}>
                <section>
                    <Skills />
                </section>
            </LazyLoad>
            <LazyLoad once={true} height={300}>
                <section>
                    <Portfolios />
                </section>
            </LazyLoad>
            <LazyLoad once={true} height={300}>
                <section>
                    <Contact />
                </section>
            </LazyLoad>
        </>
    );
}

export default Home;