import { Grid } from "@mui/material";
import React from "react";
import ContactUsForm from "../components/forms/contactUsForm";
import SideAdd from "../components/adds/SideAdd";
import UTopBanner from "../components/banners/uTopBanner";

const ContactUs = () => {
  return (
    <Grid container item style={{padding:"12px 0px"}} >
        <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
        <UTopBanner  backgroundImage={""} text={"dsfj"} />
        </Grid>
      <Grid xl={8} lg={8} md={8} sm={12} xs={12} style={{padding:"40px 12px "}}>
        <ContactUsForm/>
      </Grid>
      <Grid xl={4} lg={4} md={4} sm={0} xs={0}> <SideAdd/> </Grid>
    </Grid>
  );
};

export default ContactUs;
