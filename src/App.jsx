import { RouterProvider } from "react-router";
import { routers } from "./router/routers.jsx";

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
