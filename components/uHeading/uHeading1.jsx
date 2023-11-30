import { Typography } from "@mui/material";
import React from "react";

const Uheading1 = ({ children, styles }) => {
  return (
    <Typography
      style={{
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "10px",
        ...styles,
      }}
    >
      {children}
    </Typography>
  );
};

export default Uheading1;
