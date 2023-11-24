import { Grid } from "@mui/material";
import React from "react";
import { LogoSection } from "./logoSection";
import { ServicesSection } from "./ServicesSection";
import { UsefullLinksSection } from "./UsefullLinks";
import { CopyRight } from "./copyRight";


export const Footers = () => {
  return (
    <div style={{ backgroundColor: "#ECD8B8" }}>
      <Grid container>
        <Grid item xs={12} sm={12} lg={4} md={4} xl={4}>
          <LogoSection/>
        </Grid>
        <Grid item xs={12} sm={12} lg={2.5} md={2.5} xl={2.5}>
          <ServicesSection/>
        </Grid>
        <Grid item xs={12} sm={12} lg={2.5} md={2.5} xl={2.5}>
          <UsefullLinksSection/>
        </Grid>
        <Grid item xs={12} sm={12} lg={3} md={3} xl={3}>
          search
        </Grid>
      </Grid>
      <CopyRight/>
    </div>
  );
};
