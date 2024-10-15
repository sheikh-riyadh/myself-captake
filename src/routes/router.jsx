import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main/MainLayout";
import Home from "../pages/Main/Home/Home";
import Login from "../components/Main/Login/Login";
import SignUp from "../pages/Main/Login/SignUp";
import NotFound from "../pages/Main/NotFound/NotFound";
import SingleProduct from "../pages/Main/SingleProduct/SingleProduct";
import CreateShop from "../pages/Shop/CreateShop";
import Store from "../pages/Main/Store/Store";
import SingleShopHome from "../pages/Shop/SingleShopHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path:"store/:id",
        element:<Store/>
      },
      {
        path:"single-store/:id",
        element:<SingleShopHome/>
      },
    ],
  },
  {
    path: "sign-in",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "create-channel",
    element: <CreateShop />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
