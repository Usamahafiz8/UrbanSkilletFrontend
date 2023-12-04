import { Grid, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import Burgerlayer from "../../../assets/png/Burgerlayer.png";
import CustomButton1 from "../../uButtons/button1";
import Uheading3 from "../../uHeading/uHeading3";
import useIsMobile900 from "../../mobileView/mobileView900";

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
  const theme = useTheme();
  const ismobile = useIsMobile900();
  return (
    <div style={{}}>
      <Grid
        container
        sx={{
          backgroundColor: "#ECD8B8",
          width: "100%",
          height: "100%",
          padding: ismobile ? "0px " : "0px 50px",
        }}
      >
        <Grid
          item
          md={6}
          lg={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignItems: ismobile ? "center" : "left",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Uheading3
            styles={{
              color: "#683112",
              fontSize: ismobile ? "36px" : "72px  ",
              fontWeight: "600",
            }}
          >
            BURGER STORE
          </Uheading3>
          <Uheading3
            styles={{
              color: "#D28100",
              fontSize: ismobile ? "24px" : "36px",
              fontWeight: "600",
            }}
          >
            Over 5 Exclusive Offers
          </Uheading3>
          <Uheading3
            styles={{
              color: "#000",
              fontSize: ismobile ? "12px" : "24px",
              fontWeight: "400",
            }}
          >
            100% grass-fed, Sustainably raised, Certified Humane, GMO- free,
            Antibiotic Free.
          </Uheading3>
          <CustomButton1>Order Now</CustomButton1>
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // alignItems: flexDirection === "column" ? "left" : "center",
            gap: "16px",
          }}
          flexDirection="row"
          padding="0"
        >
          <BannerImage
            src={Burgerlayer}
            alt="Logo"
            width={ismobile ? "270px" : "350px"}
            height={ismobile ? "350px" : "450px"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainBanner;
