import React from "react";
import { Button } from "@mui/material";

const BlackButton = ({ color, ...props }) => {
  const buttonStyles = {
    maxWidth: "350px",
    style: {
      backgroundColor: color || "#000",
      color: color || "#fff",
    },
  };

  return <Button {...buttonStyles} {...props} />;
};

export default BlackButton;
