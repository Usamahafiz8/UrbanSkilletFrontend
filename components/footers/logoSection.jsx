import React from "react";
import logoImage from "../../assets/png/logo.png";
import TwitterIcon from "../../assets/svg/twitterIcon";
import YoutubeIcon from "../../assets/svg/youtubeIcon";
import FacebookIcon from "../../assets/svg/facebookIcon";
import InstagramIcon from "../../assets/svg/InstagramIcon";
import TicktokIcon from "../../assets/svg/ticktok";
import Image from "next/image";

export const LogoSection = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Image src={logoImage} alt="Logo" width={80} height={80} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <YoutubeIcon />
        <TicktokIcon />
      </div>
    </div>
  );
};
