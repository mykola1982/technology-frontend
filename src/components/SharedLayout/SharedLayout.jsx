import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Header } from "../Header";

export const SharedLayot = () => {
  return (
    <>
      <Header />

      <Suspense
        fallback={
          <div>Зачекайте поки завантажаться дані...</div>
          // тут також лоадер
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
