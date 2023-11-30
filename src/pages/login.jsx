import { Grid } from "@mui/material";
import React from "react";
import LoginForms from "../components/forms/loginForms";
import SideAdd from "../components/adds/SideAdd";

const LoginPage = () => {
  return (
    <Grid container>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <LoginForms />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <SideAdd />
      </Grid>   
    </Grid>
  );
};

export default LoginPage;
