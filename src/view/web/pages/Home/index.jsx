import LazyLoad from "react-lazyload";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

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
        </>
    );
}

export default Home;