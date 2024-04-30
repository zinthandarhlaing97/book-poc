import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, useTheme } from "@mui/material";

const Logo = ({ height = 32 }: { height?: number }) => {
  const theme = useTheme();

  return (
    <Box
      component={Link}
      href="/"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height,
      }}
    >
      <Image
        src={"/next.svg"}
        alt="Logo"
        priority={true}
        loading="eager"
        width={0}
        height={0}
        sizes="100vw"
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default Logo;
