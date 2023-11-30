import React from "react";

import Adds from "../../assets/png/catering202308141.png";
import Image from "next/image";

const SideAdd = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Image
        src={Adds}
        alt="Logo"
        style={{
          height: "100%",
        }}
      />
    </div>
  );
};

export default SideAdd;
