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

const WelcomePage = lazy(() => import("../../pages/WelcomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
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
    <b>Refreshing user...</b>
  ) : (
    // тут ставимо лоадер
    <>
      <Suspense
        fallback={
          <div>Зачекайте поки завантажаться дані...</div>
          //  тут також лоадер
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <PablicRoute redirectTo="/products" component={<WelcomePage />} />
            }
          />
          <Route
            path="/login"
            element={
              <PablicRoute redirecTo="/products" component={<LoginPage />} />
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
