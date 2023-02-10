import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Navigation } from "../Navigation/Navigation";

export const SharedLayot = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<div>Зачекайте поки завантажаться дані...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
