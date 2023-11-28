import React from "react";
import { Typography } from "@mui/material";
import Uheading1 from "../uHeading/uHeading1";
import Uheading2 from "../uHeading/Uheadings";

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
  
      }}
    >
      <Uheading1>Our Services</Uheading1>
      {Link.map((button, index) => (
        <Uheading2 key={index} href={button.link}>
          {button.name}
        </Uheading2>
      ))}
    </div>
  );
};
