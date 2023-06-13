// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SharedLayot } from "../SharedLayout";

const Home = lazy(() => import("../../pages/Home"));
const Products = lazy(() => import("../../pages/Products"));
// const Materials = lazy(() => import("../../pages/Materials"));
const Orders = lazy(() => import("../../pages/Orders"));
const ProductDetails = lazy(() => import("../../pages/ProductDetails"));

const NotFound = lazy(() => import("../../pages/NotFound"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayot />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />

          {/* <Route path="/materials" element={<Materials />} /> */}
          <Route path="/orders" element={<Orders />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;