import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.jsx";
import Casual from "../pages/Casual.jsx";

export const routers = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/casual", Component: Casual },
]);
