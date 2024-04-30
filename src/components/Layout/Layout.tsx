import { Box } from "@mui/material";
import React from "react";
import BackToTop from "./BackToTop";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background.default",
        overflowX: "hidden",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, md: 4 },
        }}
      >
        {children}
      </Box>

      <BackToTop />
    </Box>
  );
};

export default Layout;
