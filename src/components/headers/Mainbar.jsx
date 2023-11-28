import React from "react";
import { Button } from "@mui/material";
import logoImage from "../../assets/logo.png"
const commonButtonStyle = {
  color: "black",
  fontWeight: 800,
  fontSize:"15.875px",
  textTransfrom:"uppercase",
  lineHeight:"24px"
};

const buttonsData = [
  { name: "Menus", link: "#" },
  { name: "CATTERING", link: "#" },
  { name: "Careers", link: "#" },
  { name: "Other Stuff", link: "#" },
  { name: "Gifts Cards", link: "#" },
  { name: "Our App", link: "#" },
];

const MainNavbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#F4ECDF",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 50px",
        gap: "16px",
        fontWeight: 600,
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
    >   <img src={logoImage} alt="Logo" style={{width:"50px", height:"50px"}} />
      

      <div>
        {buttonsData.map((button, index) => (
          <Button
            key={index}
            variant="text"
            style={commonButtonStyle}
            href={button.link}
          >
            {button.name}
          </Button>
        ))}
      </div>
      <Button variant="contained" color="error"           style={{ fontWeight: 700,  height: "30px" }}>
        Open Your Urban Skillet
      </Button>
    </div>
  );
};

export default MainNavbar;
