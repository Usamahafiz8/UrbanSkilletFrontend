import React from "react";
import { Button } from "@mui/material";

const UpperNavbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "9px",
        gap:"16px",
        fontWeight:600
      }}
      >
      <Button
        style={{
          fontWeight:600,
          color: "black",
          textDecoration: "underline", // Add underline
          marginLeft: "10px", // Add margin between the buttons
        }}
      >
        LOGIN
      </Button>
      <Button
        variant="outlined"
        style={{
          fontWeight:600,
          borderRadius: "34px",
          color: "black",
          borderColor: "black"
        }}
      >
        SIGN UP
      </Button>
    </div>
  );
};

export default UpperNavbar;
