import React from "react";
import logoImage from "../../assets/logo.png"; // Update the path to your actual logo file
import { Typography } from "@mui/material";

const Link = [
  { name: "Order Now", link: "#" },
  { name: "Locations", link: "#" },
  { name: "Menus", link: "#" },
  { name: "Catering", link: "#" },
  { name: "Careers", link: "#" },
  { name: "Other Stuff", link: "#" },
  { name: "Gift Cards", link: "#" },
];

export const ServicesSection = () => {
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
