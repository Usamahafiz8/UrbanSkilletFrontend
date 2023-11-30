import { Button, Grid } from "@mui/material";
import React from "react";
import { useRouter } from 'next/router';  
import LoginForms from "../forms/loginForms";
import SideAdd from "../adds/SideAdd";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const LoginPage = () => {
  const router = useRouter();  

  const handleBackToHome = () => {
    router.push('/');  
  };

  return (
    <Grid container>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        style={{
          padding: "24px",
        }}
      >
        <Button startIcon={<ArrowBackIosIcon />} onClick={handleBackToHome}>
          Back to Home
        </Button>
        <LoginForms />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <SideAdd />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
