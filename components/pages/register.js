import { Button, Grid } from "@mui/material";
import React from "react";
import SideAdd from "../adds/SideAdd";
import CreateUserForms from "../forms/createForm";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const RegisterPage = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <Grid
      container
      sx={{
        height: "100vh",
      }}
    >
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
        <CreateUserForms />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <SideAdd />
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
