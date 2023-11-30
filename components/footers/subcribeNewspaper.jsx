import React from "react";
import GooglePlayIcon from "../../assets/svg/googlePlayIcon";
import ApplePlayIcon from "../../assets/svg/applePlayIcon";
import Uheading1 from "../uHeading/uHeading1";
import { Button, TextField } from "@mui/material";
import Uheading2 from "../uHeading/Uheadings";
import UTextfield1 from "../uTextfield/uTextfield1";

const SubNewsPaper = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "right",
        gap: "12px",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "right",
          gap: "12px",
        }}
      >
        <ApplePlayIcon />
        <GooglePlayIcon />
      </div>
      <Uheading1 styles={{ color: "#B75F2D", textAlign: "end" }}>
        Join Rewards & <br />
        Go Mobile with the App
      </Uheading1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "right",
          gap: "12px",
          
        }}
      >
        <UTextfield1 variant='standard' fullWidth label="Mobile Phone" />

        <Button
          variant="contained"
          color="error"
          style={{ fontWeight: 700, width: "30%", height: "30px" }}
        >
          Submit
        </Button>
      </div>
      <Uheading2 styles={{ fontSize: "8px", textAlign: "end" }}>
        *By entering your mobile number, you agree to the program Mobile Terms
        and Privacy Policy . Msg&Data rates may apply. To opt out, text STOP to
        88001.
      </Uheading2>
    </div>
  );
};

export default SubNewsPaper;
