import { Button, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import Burgerlayer from "../../../assets/png/BURGER.png";
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

const MonthBurgerBaner = () => {
  return (
    <Grid
      container
      sx={{
        background: "linear-gradient(180deg, #AF2000 0%, #E6730A 100%)",
        boxShadow: "0px 4px 51px 0px #FFE000 inset",
        width: "100%",
        height: "100%",
        padding: "16px",
      }}
    >
      <GridItem>
        <Uheading3
          styles={{
            color: "#FFE000", // Adjusted text color for better contrast
            fontSize: "5em",
            fontWeight: "600",
            textDecoration: "underline",
            lineHeight: "1em",
          }}
        >
          BURGER STORE
        </Uheading3>
        <Uheading3
          styles={{
            lineHeight: "2em",
            color: "#FFF", // Adjusted text color for better contrast
            fontSize: "3em",
            fontWeight: "600",
          }}
        >
          OF THE MONTH
        </Uheading3>

        <Button
          variant="contained"
          style={{
            width: "150px",
          }}
          color="error"
        >
          Order Now
        </Button>
      </GridItem>
      <GridItem flexDirection="row" padding="0">
        <BannerImage src={Burgerlayer} alt="Logo" width="20em" height="20em" />
      </GridItem>
    </Grid>
  );
};

export default MonthBurgerBaner;
