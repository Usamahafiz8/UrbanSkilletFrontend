import React from "react";
import { Button } from "@mui/material";

const CustomButton1 = ({ color, ...props }) => {
  const buttonStyles = {
    maxWidth: "350px",
    backgroundColor: color || "#B75F2D", // Default color or use the provided color
  };

  return (
    <Button variant="contained" fullWidth style={buttonStyles} {...props} />
  );
};

export default CustomButton1;
