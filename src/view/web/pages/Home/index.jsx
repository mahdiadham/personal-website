import { lazy, Suspense } from "react";
import Loading from "../../../../components/Loading/Loading";

const Intro = lazy(() => import("./components/Intro/Intro"));

const Home = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Intro />
            </Suspense>
        </>
    );
}

export default Home;