import { lazy, Suspense } from "react";
import { Navigate } from "react-router";
import { IoStatsChart, IoHome } from "react-icons/io5";
import Loading from "../../components/Loading/Loading";

const Home = lazy(() => import("../../view/web/pages/Home"));
const _404 = lazy(() => import("../../view/errors/404/_404"));

export const routes = [
    {
        path: "/",
        title: "home",
        icon: <IoHome size={18} />,
        element:
            <Suspense fallback={<Loading />}>
                <Home />
            </Suspense>
    },
    {
        path: '/404',
        element:
            <Suspense fallback={<Loading />}>
                <_404 />
            </Suspense>
    },
    {
        path: '*',
        element: <Navigate to="/404" replace />
    }
];