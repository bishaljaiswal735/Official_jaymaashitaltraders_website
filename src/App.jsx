import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import ContactPage from "./pages/Contact";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
