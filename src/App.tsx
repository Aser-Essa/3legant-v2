import { RouterProvider } from "react-router";
import { routes } from "./app/router/routes";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
