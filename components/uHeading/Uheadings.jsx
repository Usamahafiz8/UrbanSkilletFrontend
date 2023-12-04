import { Typography } from "@mui/material";
import React from "react";

const Uheading2 = ({ children, styles, weight }) => {
  return (
    <Typography
      sx={{
        fontSize: "13px",
        fontWeight: "400",
        marginBottom: "8px",
        ...styles,
      }}
    >
      {children}
    </Typography>
  );
};

export default Uheading2;
