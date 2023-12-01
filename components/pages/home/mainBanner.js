import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import Burgerlayer from "../../../assets/png/Burgerlayer.png";
import CustomButton1 from "../../uButtons/button1";
import Uheading3 from "../../uHeading/uHeading3";

const GridItem = ({
  children,
  flexDirection = "column",
  padding = "0 0 0 50px",
}) => (
  <Grid
    item
    xl={6}
    lg={6}
    md={6}
    sm={12}
    xs={12}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: flexDirection === "column" ? "left" : "center",
      flexDirection: flexDirection,
      padding: padding,
      gap: "16px",
    }}
  >
    {children}
  </Grid>
);

const BannerImage = ({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    style={{
      width: width,
      height: height,
    }}
  />
);

const MainBanner = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#ECD8B8",
        width: "100%",
        height: "30em",
      }}
    >
      <GridItem>
        <Uheading3
          styles={{
            color: "#683112",
            fontSize: "5em",
            fontWeight: "600",
          }}
        >
          BURGER STORE
        </Uheading3>
        <Uheading3
          styles={{
            color: "#D28100",
            fontSize: "3em",
            fontWeight: "600",
          }}
        >
          Over 5 Exclusive Offers
        </Uheading3>
        <Uheading3
          styles={{
            color: "#000",
            fontSize: "1em",
            fontWeight: "400",
          }}
        >
          100% grass-fed, Sustainably raised, Certified Humane, GMO- free,
          Antibiotic Free.
        </Uheading3>
        <CustomButton1>Order Now</CustomButton1>
      </GridItem>
      <GridItem flexDirection="row" padding="0">
        <BannerImage src={Burgerlayer} alt="Logo" width="20em" height="30em" />
      </GridItem>
    </Grid>
  );
};

export default MainBanner;
