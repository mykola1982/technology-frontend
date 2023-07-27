// import logo from "./logo.svg";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { lazy, Suspense, useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SharedLayot } from "../SharedLayout";
import { PablicRoute } from "../../utils/Routes/PablicRoute";
import { PrivateRoute } from "../../utils/Routes/PrivateRoute";
import { useAuth } from "../../hooks";
import { refreshUser } from "../../redux/auth/authOperation";

import { Loader } from "../Loader/Loader";

const WelcomePage = lazy(() => import("../../pages/WelcomePage"));
const Products = lazy(() => import("../../pages/Products"));
const Materials = lazy(() => import("../../pages/Materials"));
const Orders = lazy(() => import("../../pages/Orders"));
const Users = lazy(() => import("../../pages/Users"));
const ProductDetails = lazy(() => import("../../pages/ProductDetails"));

const NotFound = lazy(() => import("../../pages/NotFound"));

function App() {
  const dispatch = useDispatch();
  const { token, isRefreshing } = useAuth();

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(refreshUser());
  }, [dispatch, token]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PablicRoute redirectTo="/products" component={<WelcomePage />} />
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/" component={<SharedLayot />} />
            }
          >
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
