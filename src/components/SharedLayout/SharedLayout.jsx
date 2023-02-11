import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material/";

import { Navigation } from "../Navigation/Navigation";

export const SharedLayot = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="span">
            Технолог
          </Typography>
          <Typography variant="h1" color=""></Typography>

          <Navigation />
        </Toolbar>
      </AppBar>
      <Suspense fallback={<div>Зачекайте поки завантажаться дані...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
