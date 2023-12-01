import { Button, Grid } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import LoginForms from "../forms/loginForms";
import SideAdd from "../adds/SideAdd";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Adds from "../../assets/png/catering202308141.png";
import Image from "next/image";
import CreateUserForms from "../forms/createForm";
import CustomButton2 from "../uButtons/button2";
const LoginPage = () => {
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
        sx={{
          padding: "24px",
        }}
      >
        <CustomButton2
          startIcon={<ArrowBackIosIcon />}
          onClick={handleBackToHome}
        >
          Back to Home
        </CustomButton2>

        <CreateUserForms />
      </Grid>
      <Grid
        item
        right={0}
        position={"fixed"}
        xl={6}
        lg={6}
        md={6}
        sm={0}
        xs={0}
        sx={{
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Image
          src={Adds}
          alt="Logo"
          style={{
            width: "100%",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
