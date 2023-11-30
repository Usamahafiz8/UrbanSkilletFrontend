import { Button, TextField } from "@mui/material";
import React from "react";
import logoImage from "../../assets/png/logo.png";
import Uheading1 from "../uHeading/uHeading1";

const commonStyles = {
  maxWidth: "350px",
};

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

const CreateUserForms = () => {
  const renderTextField = (label, type = "text", required = true) => (
    <TextField
      key={label}
      label={label}
      fullWidth
      required={required}
      type={type}
      style={commonStyles}
    />
  );

  return (
    <div style={styles}>
      <img src={logoImage} alt="Logo" style={{ width: "100px", height: "100px" }} />
      <Uheading1>Create Account</Uheading1>
      {renderTextField("Full Name")}
      {renderTextField("Email", "email")}
      {renderTextField("Phone Number", "tel")}
      {renderTextField("Password", "password")}
      {renderTextField("Confirm Password", "password")}
      <Button variant="contained" fullWidth style={commonStyles}>
        Login
      </Button>
    </div>
  );
};

export default CreateUserForms;
