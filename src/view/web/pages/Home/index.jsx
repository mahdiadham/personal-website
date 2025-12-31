import LazyLoad from "react-lazyload";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolios from "./components/Portfolios/Portfolios";
import Contact from "./components/Contact/Contact";
import Header from "../../../../layouts/web/Header";
import Footer from "../../../../layouts/web/Footer";

const Home = () => {
    return (
        <>
            <LazyLoad once={true} height={300}>
                <section>
                    <Header />
                </section>
            </LazyLoad>
            <main>
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
            </main>
            <LazyLoad once={true} height={300}>
                <section>
                    <Footer />
                </section>
            </LazyLoad>
        </>
    );
}

export default Home;