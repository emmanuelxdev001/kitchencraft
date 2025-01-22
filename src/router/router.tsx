import About from '@/Pages/About';
import Contact from '@/Pages/ContactUS';
import Home from '@/Pages/Home';
import { createBrowserRouter } from 'react-router-dom';

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default mainRouter;
