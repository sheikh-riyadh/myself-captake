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
import Wishlist from "../pages/Main/Wishlist/Wishlist";
import Reviews from "../pages/Main/Reviews/Reviews";
import DashboardLayout from "../layout/Dashboard/DashboardLayout";
import Address from "../pages/Dashboard/Address/Address";
import EditProfile from "../pages/Dashboard/EditProfile/EditProfile";
import Feedback from "../pages/Dashboard/Feedback/Feedback";
import Cart from "../pages/Dashboard/DashboardCart/DashboardCart";
import Review from "../pages/Dashboard/Review/Review";
import Order from "../pages/Dashboard/Order/Order";
import Report from "../pages/Dashboard/Report/Report";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";

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
        path: "cart",
        element: <Wishlist />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "store/:id",
        element: <Store />,
      },
      {
        path: "single-store/:id",
        element: <SingleShopHome />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardHome />,
          },
          {
            path: "address",
            element: <Address />,
          },
          {
            path: "edit-profile",
            element: <EditProfile />,
          },
          {
            path: "feedback",
            element: <Feedback />,
          },
          {
            path: "my-cart",
            element: <Cart />,
          },
          {
            path: "my-reviews",
            element: <Review />,
          },
          {
            path: "order",
            element: <Order />,
          },
          {
            path: "my-report",
            element: <Report />,
          },
          {
            path: "wishlist",
            element:  <Cart />,
          },
        ],
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
