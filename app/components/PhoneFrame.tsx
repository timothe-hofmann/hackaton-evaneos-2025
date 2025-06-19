"use client";
import { Box } from "@mui/material";
import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <Box
      sx={{
        width: 360,
        height: 720,
        backgroundImage:
          "url(https://raw.githubusercontent.com/picturepan2/devices.css/master/docs/assets/img/bg-iphone-14-pro.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 4,
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
}
