import { Typography } from "@mui/material";
import React from "react";
const Uheading3 = ({ children, styles }) => {
  return (
    <Typography
      style={{
        fontSize: "18px",
        fontWeight: "600",
        ...styles,
      }}
    >
      {children}
    </Typography>
  );
};
export default Uheading3;
