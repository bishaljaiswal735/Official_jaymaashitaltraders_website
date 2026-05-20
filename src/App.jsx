import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import ContactPage from "./pages/Contact";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import CategoryProducts from "./pages/CategoryProducts";
import ScrollToTop from "./components/ScrollTop";

const withScroll = (element) => (
  <>
    <ScrollToTop />
    {element}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: withScroll(<Home />),
  },
  {
    path: "/product",
    element: withScroll(<Product />),
  },
  {
    path: "/product/category/:categorySlug",
    element: withScroll(<CategoryProducts />),
  },
  {
    path: "/product/:slug",
    element: withScroll(<ProductDetail />),
  },
  {
    path: "/pricing",
    element: withScroll(<Pricing />),
  },
  {
    path: "/contact",
    element: withScroll(<ContactPage />),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
