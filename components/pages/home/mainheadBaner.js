import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../assets/png/logo.png";
import BURGER from "../../../assets/png/BURGER.png";
import { Typography, Button } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import BlackButton from "../../uButtons/blackButton";
import PlaceIcon from "@mui/icons-material/Place";
import useIsMobile800 from "../../mobileView/mobileView800";

const Logo = ({ src, alt, width, height }) => (
  <Image src={src} alt={alt} width={width} height={height} />
);

const MainHeadBaner = () => {
  const isMobile = useIsMobile800();

  return (
    <>
      {isMobile ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "8px",
            }}
          >
            <BlackButton
              fullWidth
              variant="contained"
              startIcon={<FastfoodIcon />}
            >
              Order Now
            </BlackButton>

            <Button
              variant="contained"
              startIcon={<PlaceIcon />}
              color="error"
              size="small"
              fullWidth
            >
              Order Location
            </Button>
          </div>
        </div>
      ) : (
        <>
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
              <Logo src={logo} alt="Logo" width={70} height={70} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    color: "white",
                    fontSize: "clamp(2em, 5vw, 4em)",
                    fontWeight: "800",
                    lineHeight: "1.2",
                    transition: "color 0.3s ease",
                    cursor: "pointer",
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
            </div>
            <div>
              <Logo src={BURGER} alt="Burger" width={70} height={70} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainHeadBaner;
