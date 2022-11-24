import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Courses, Testimonials, Pricing } from "../screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "courses",
    element: <Courses />,
  },
  {
    path: "testimonials",
    element: <Testimonials />,
  },
  {
    path: "pricing",
    element: <Pricing />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
