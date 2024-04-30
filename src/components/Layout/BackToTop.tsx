import React, { useCallback } from "react";
import { Fab, Fade, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const BackToTop = () => {
  const trigger = useScrollTrigger();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Fade in={trigger}>
      <Fab
        color="primary"
        aria-label="Back to top"
        size="small"
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          zIndex: 999,
        }}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpOutlinedIcon />
      </Fab>
    </Fade>
  );
};

export default BackToTop;
