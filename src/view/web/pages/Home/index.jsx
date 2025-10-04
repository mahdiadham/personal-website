import LazyLoad from "react-lazyload";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";

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
        </>
    );
}

export default Home;