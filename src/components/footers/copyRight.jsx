import React from "react";
import Uheading2 from "../uHeading/Uheadings";

export const CopyRight = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop:"10px",
      }}
    >
      <Uheading2
        styles={{
          fontSize: "12px",
          fontWeight: "200",
        }}
      >
        © 2023 Checkers - Rally’s. All rights reserved.
      </Uheading2>
    </div>
  );
};
