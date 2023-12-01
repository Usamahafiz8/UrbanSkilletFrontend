import React from "react";
import Image from "next/image";
import logo from "../../../assets/png/logo.png";
import BURGER from "../../../assets/png/BURGER.png";
import { Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const Logo = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    style={{
      width: "7em",
      height: "7em",
    }}
  />
);

const MainHeadBaner = () => {
  return (
    <div
      style={{
        backgroundColor: "#E6730A",
        height: "9em",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 50px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Logo src={logo} alt="Logo" />
        <Typography
          style={{
            color: "white",
            fontSize: "4em",
            fontWeight: "800",
            lineHeight: "24px",
          }}
        >
          Order Now
        </Typography>
        <FastfoodIcon
          style={{
            color: "white",
            width: "50px",
            height: "50px",
          }}
        />
      </div>
      <div>
        <Logo src={BURGER} alt="Burger" />
      </div>
    </div>
  );
};

export default MainHeadBaner;
