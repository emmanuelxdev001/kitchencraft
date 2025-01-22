import About from '@/Pages/About';
import Contact from '@/Pages/Static/ContactUS';
import Home from '@/Pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import PrivacyPolicy from '../Pages/Static/PrivacyPolicy';
import Register from '@/Pages/Auth/Register/Register';
import Login from '@/Pages/Auth/Login/Login';
import Layout from '@/Layout/Layout';

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
  {
    path: "/policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "login/:token",
        element: <Login />,
      },
    ],
  },
]);

export default mainRouter;
