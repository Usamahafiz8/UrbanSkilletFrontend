import React from "react";
import logoImage from "../../assets/logo.png"; // Update the path to your actual logo file
import { Typography } from "@mui/material";

const Link = [
  { name: "Host a Fundraiser", link: "#" },
  { name: "Our Ethos", link: "#" },
  { name: "Food & Partners", link: "#" },
  { name: "Become A Lounger", link: "#" },
  { name: "Purchase Gift Cards", link: "#" },
  
];

export const UsefullLinksSection = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        width: "100%",
        alignItems: "center",
        padding: "16px",
      }}
    >
      {Link.map((button, index) => (
        <Typography key={index} href={button.link}>
          {button.name}
        </Typography>
      ))}
    </div>
  );
};
