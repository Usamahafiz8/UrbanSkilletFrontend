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
import useIsMobile800 from "../../mobileView/mobileView800";

const SocialMediaIcons = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap: "20px",
    }}
  >
    <FacebookIcon />
    <TwitterIcon />
    <InstagramIcon />
    <YoutubeIcon />
    <TicktokIcon />
  </div>
);

const FollowUp = () => {
  const Ismobile = useIsMobile800();
  return (
    <div
      style={{
        padding: Ismobile ? "16px 0px " : "24px 50px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: Ismobile ? "column" : "row",
        alignItems: "center",
        textAlign: "center",
        justifyContent: Ismobile ? "center" : "space-between",
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
            fontSize: Ismobile ? "2em" : "48px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          FOLLOW US
        </Uheading3>
        <SocialMediaIcons />
      </div>
      <div
        style={{
          marginTop: Ismobile ? "20px" : "0",

          display: "flex",
          justifyContent: "center",
          gap: Ismobile ? "8px" : "24px",
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
            width={80}
            height={80}
            style={{
              borderRadius: "50%",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FollowUp;
