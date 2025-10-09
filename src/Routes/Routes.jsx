import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import axios from "axios";
import Apps from "../Pages/Apps/Apps";
import Details from "../Pages/Details/Details";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => await axios("/data.json"),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: async () => await axios("/data.json"),
      },
      {
        path: "apps/:id",
        Component: Details,
        loader: async () => await axios("/data.json"),
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
