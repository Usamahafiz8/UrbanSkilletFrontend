import { Button, TextField } from "@mui/material";
import React from "react";
import logoImage from "../../assets/png/logo.png";
import Uheading1 from "../uHeading/uHeading1";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  gap: "16px",
  padding: "50px 0px ",
};

const LoginForms = () => {
  return (
    <div>
      {/* <Button variant="outlined" startIcon={<ArrowBackIosIcon />}>
        Back to home
      </Button> */}
      <div
        style={{
          ...styles,
        }}
      >
        <img
          src={logoImage}
          ArrowBackIosIcon
          alt="Logo"
          style={{ width: "100px", height: "100px" }}
        />
        <Uheading1>Welcome Back, Login</Uheading1>
        <TextField
          label="Email"
          fullWidth
          required
          style={{ maxWidth: "350px" }}
        />
        <TextField
          label="Password"
          fullWidth
          required
          style={{ maxWidth: "350px" }}
        />
        <Button variant="contained" fullWidth style={{ maxWidth: "350px" }}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginForms;
