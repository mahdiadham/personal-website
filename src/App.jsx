import { useRoutes } from "react-router";
import { routes } from "./router/web/routes";
import Header from "./layouts/web/header";
import Footer from "./layouts/web/Footer";

const App = () => {
  const router = useRoutes(routes);

  return (
    <>
      <Header />
      <main>
        {router}
      </main>
      <Footer />
    </>
  );
}

export default App;