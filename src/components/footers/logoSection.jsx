import React from "react";
import logoImage from "../../assets/png/logo.png";
import TwitterIcon from "../../assets/svg/twitterIcon";
import YoutubeIcon from "../../assets/svg/youtubeIcon";
import FacebookIcon from "../../assets/svg/facebookIcon";
import InstagramIcon from "../../assets/svg/InstagramIcon";
import TicktokIcon from "../../assets/svg/ticktok";

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
      <img
        src={logoImage}
        alt="Logo"
        style={{ height: "80px", width: "80px" }}
      />
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
