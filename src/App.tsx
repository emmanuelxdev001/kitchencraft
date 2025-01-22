import { RouterProvider } from "react-router-dom";
import mainRouter from "./router/router";

const App = () => {
  return (
    <div className="">
      <RouterProvider router={mainRouter} />
    </div>
  );
};

export default App;