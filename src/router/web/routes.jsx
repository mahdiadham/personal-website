import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";

const Home = lazy(() => import("../../view/web/pages/Home"));
const MainLayout = lazy(() => import("../../layouts/web/Main/MainLayout"));
const _404 = lazy(() => import("../../view/errors/404/_404"));

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: "/404",
        element: <_404 />
    },
    {
        path: "*",
        element: <Navigate to="/404" replace />
    }
]);

export default routes;
