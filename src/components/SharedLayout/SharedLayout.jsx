import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Box } from "@mui/material";

import { Header } from "components/Header";
import { Loader } from "components/Loader";
import { Footer } from "components/Footer";

export const SharedLayot = () => {
  return (
    // <Box
    // sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    // >
    //   <Header />
    //   <main
    //   style={{
    //     flex: 1,
    //   }}
    //   >
    //     <Suspense fallback={<Loader />}>
    //       <Outlet />
    //     </Suspense>
    //   </main>
    //   <Footer />
    // </Box>

    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};
