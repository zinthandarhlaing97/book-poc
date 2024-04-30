import React from "react";
import { SxProps, Typography } from "@mui/material";

type TextProps = {
  text: string;
  sx?: SxProps;
  onClick?: () => void;
};

const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ text, sx, onClick, ...props }, ref) => (
    <Typography
      {...props}
      ref={ref}
      sx={{
        fontSize: 14,
        wordBreak: "break-word",
        color: "text.primary",
        ...sx,
      }}
      onClick={onClick}
    >
      {text}
    </Typography>
  )
);

export default Text;
