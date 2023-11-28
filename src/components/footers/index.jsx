import { Grid } from "@mui/material";
import React from "react";
import { LogoSection } from "./logoSection";
import { ServicesSection } from "./ServicesSection";
import { UsefullLinksSection } from "./UsefullLinks";
import { CopyRight } from "./copyRight";
import SubNewsPaper from "./subcribeNewspaper";

export const Footers = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ECD8B8", padding: "30px 20px 0px 20px" }}>
        <Grid container >
          <Grid item xs={12} sm={12} lg={4.5} md={4.5} xl={4.5}>
            <LogoSection />
          </Grid>
          <Grid item xs={12} sm={12} lg={2} md={2} xl={2}>
            <ServicesSection />
          </Grid>
          <Grid item xs={12} sm={12} lg={2} md={2} xl={2}>
            <UsefullLinksSection />
          </Grid>
          <Grid item xs={12} sm={12} lg={3.5} md={3.5} xl={3.5}>
          <SubNewsPaper/>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
          <CopyRight/>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
