import React from "react";
import Uheading3 from "../../uHeading/uHeading3";
import FacebookIcon from "../../../assets/svg/facebookIcon";
import TwitterIcon from "../../../assets/svg/twitterIcon";
import InstagramIcon from "../../../assets/svg/InstagramIcon";
import YoutubeIcon from "../../../assets/svg/youtubeIcon";
import TicktokIcon from "../../../assets/svg/ticktok";
import Image from "next/image";
import handmade from "../../../assets/png/handmade.png";
import greenhome from "../../../assets/png/greenhome.png";
import gultenfri from "../../../assets/png/gultenfri.png";
import hallal from "../../../assets/png/hallal.png";

const SocialMediaIcons = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap: "36px",
    }}
  >
    <FacebookIcon />
    <TwitterIcon />
    <InstagramIcon />
    <YoutubeIcon />
    <TicktokIcon />
  </div>
);

const LogoImages = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "4em",
      alignItems: "center",
    }}
  >
    {[
      { src: handmade, alt: "Handmade" },
      { src: greenhome, alt: "Green Home" },
      { src: gultenfri, alt: "Gluten-Free" },
      { src: hallal, alt: "Halal" },
    ].map((logo, index) => (
      <Image
        key={index}
        src={logo.src}
        alt={logo.alt}
        style={{
          width: "8em",
          height: "8em",
        }}
      />
    ))}
  </div>
);

const FollowUp = () => {
  return (
    <div
      style={{
        padding: "0 50px",
        backgroundColor: "white",
        height: "10em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Uheading3
          styles={{
            color: "#683112",
            fontSize: "3em",
            fontWeight: "600",
          }}
        >
          FOLLOW US
        </Uheading3>
        <SocialMediaIcons />
      </div>
      <LogoImages />
    </div>
  );
};

export default FollowUp;
