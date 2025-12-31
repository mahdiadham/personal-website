import { Suspense } from "react";
import { RouterProvider } from "react-router";
import routes from "./router/web/routes";
import Loading from "./components/Loading/Loading";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;