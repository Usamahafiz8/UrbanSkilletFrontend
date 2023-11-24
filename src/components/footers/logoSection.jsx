import React from "react";
import logoImage from "../../assets/logo.png"; // Update the path to your actual logo file
import { ButtonGroup, Button } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

export const LogoSection = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        width: "100%",
        alignItems: "center",
        padding:"16px"
      }}
    >
      <img
        src={logoImage}
        alt="Logo"
        style={{ height: "80px", width: "80px" }}
      />
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>Three</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};
