import { RouterProvider } from "react-router";
import routes from "./router/web/routes";

const App = () => {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;