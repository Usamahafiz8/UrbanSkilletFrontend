import React from "react";
import { UperBar } from "./uperBar";
import MainNavbar from "./navbar";
import useIsMobile from "../mobileView";
import MobileView from "./mobileView";

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <MobileView />
      ) : (
        <>
          <UperBar />
          <MainNavbar />
        </>
      )}
    </>
  );
};

export default Navbar;
