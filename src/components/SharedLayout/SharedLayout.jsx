import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Header } from "../Header";
import { Loader } from "../Loader";

export const SharedLayot = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
