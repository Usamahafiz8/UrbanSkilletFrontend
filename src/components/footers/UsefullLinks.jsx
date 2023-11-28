import React from "react";

import Uheading1 from "../uHeading/uHeading1";
import Uheading2 from "../uHeading/Uheadings";

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
 
      }}
    >
       <Uheading1>Useful Links</Uheading1>
      {Link.map((button, index) => (
        <Uheading2 key={index} href={button.link}>
          {button.name}
        </Uheading2>
      ))}
    </div>
  );
};
