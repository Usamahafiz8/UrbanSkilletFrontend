import { Button, TextField } from "@mui/material";
import React from "react";
import logoImage from "../../assets/png/logo.png";
import Uheading1 from "../uHeading/uHeading1";
import Image from "next/image";
import Uheading2 from "../uHeading/Uheadings";
import Link from "next/link";
import CustomButton1 from "../uButtons/button1";

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
      <div
        style={{
          ...styles,
        }}
      >
        <Image src={logoImage} alt="Logo" width={"100vh"} height={"100vh"} />
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
        <CustomButton1>Login</CustomButton1>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Uheading2>Don't have an Account?</Uheading2>
          <Uheading2>
            <Link href={"/register"}>Register</Link>
          </Uheading2>
        </div>
      </div>
    </div>
  );
};

export default LoginForms;
