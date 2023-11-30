import { Grid } from "@mui/material";
import React from "react";
import SideAdd from "../components/adds/SideAdd";
import CreateUserForms from "../components/forms/createForm";

const RegisterPage = () => {
  return (
    <Grid container>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
      <CreateUserForms/>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <SideAdd />
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
