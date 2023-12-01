import React from "react";
import { Button } from "@mui/material";

const CustomButton2 = ({ color, ...props }) => {
  const buttonStyles = {
    maxWidth: "350px",
    style: {
      color: color || "#5A5A5A",
      borderColor: color || "#5A5A5A",
    },
  };

  return <Button {...buttonStyles} {...props} />;
};

export default CustomButton2;
