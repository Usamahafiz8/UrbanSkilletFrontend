import React from "react";
import logoImage from "../../assets/png/logo.png";
import MobileSlider from "./mobileSlider";
import Image from "next/image";

const MobileView = () => {
  return (
    <header
      style={{
        height: "50px",
        display: "flex",
        alignItems: "center",
        padding: "0px 24px ",
        justifyContent: "space-between",
      }}
    >
      <Image
        src={logoImage}
        style={{
          width: "2em",
          height: "2em",
        }}
      />

      <div>
        <MobileSlider />
      </div>
    </header>
  );
};

export default MobileView;
