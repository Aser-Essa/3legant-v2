import { createBrowserRouter } from "react-router";
import AppLayout from "../../pages/layouts/AppLayout";
import NotFound from "../../pages/NotFound";
import { PATHS } from "./paths";
import Home from "../../pages/Home";
import PurchaseFlowLayout from "../../pages/layouts/PurchaseFlowLayout";
import ProfileLayout from "../../pages/layouts/ProfileLayout";
import { lazyLoad } from "./utils";
import AuthLayout from "../../pages/layouts/AuthLayout";

export const routes = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      {
        path: PATHS.shop,
        lazy: () => lazyLoad("../../pages/Shop", "./loaders/shopLoader"),
      },
      {
        path: PATHS.productPage,
        lazy: () => lazyLoad("../../pages/Product", "./loaders/productLoader"),
      },
      {
        path: PATHS.blogs,
        lazy: () => lazyLoad("../../pages/Blogs", "./loaders/blogsLoader"),
      },
      {
        path: PATHS.blogPage,
        lazy: () => lazyLoad("../../pages/Blog", "./loaders/blogLoader"),
      },
      {
        path: PATHS.contactUs,
        lazy: () => lazyLoad("../../pages/ContactUs"),
      },
      {
        Component: PurchaseFlowLayout,
        children: [
          {
            path: PATHS.cart,
            lazy: () => lazyLoad("../../pages/Cart", "./loaders/cartLoader"),
          },
          {
            path: PATHS.checkOut,
            lazy: () => lazyLoad("../../pages/CheckOut"),
          },
          {
            path: PATHS.orderComplete,
            lazy: () => lazyLoad("../../pages/OrderComplete"),
          },
        ],
      },
      {
        Component: ProfileLayout,
        path: PATHS.profile.root,
        children: [
          {
            index: true,
            lazy: () =>
              lazyLoad("../../pages/Profile", "./loaders/profileLoader"),
          },
          {
            path: PATHS.profile.address,
            lazy: () =>
              lazyLoad("../../pages/Address", "./loaders/addressLoader"),
          },
          {
            path: PATHS.profile.orders,
            lazy: () =>
              lazyLoad(
                "../../pages/OrdersHistory",
                "./loaders/ordersHistoryLoader",
              ),
          },
          {
            path: PATHS.profile.wishlist,
            lazy: () =>
              lazyLoad("../../pages/Wishlist", "./loaders/wishlistLoader"),
          },
        ],
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: PATHS.auth.signin,
        lazy: async () => {
          const Signin = await import("../../pages/SignIn");
          return { Component: Signin.default };
        },
      },
      {
        path: PATHS.auth.signup,
        lazy: async () => {
          const Signup = await import("../../pages/SignUp");
          return { Component: Signup.default };
        },
      },
    ],
  },
  { path: "*", Component: NotFound },
]);
