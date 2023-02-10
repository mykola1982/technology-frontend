// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import ProductDetails from "../../pages/ProductDetails";
import Products from "../../pages/Products";
import { SharedLayot } from "../SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayot />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
