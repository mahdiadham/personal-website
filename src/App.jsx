import { useRoutes } from "react-router";
import { routes } from "./router/web/routes";
import Header from "./layouts/web/header";

const App = () => {
  const router = useRoutes(routes);

  return (
    <>
      <Header />
      <main className="mt-35">
        {router}
      </main>
    </>
  );
}

export default App;