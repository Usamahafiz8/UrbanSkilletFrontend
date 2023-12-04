import { Grid } from "@mui/material";
import React from "react";

const MultiGrid = () => {
  return (
    <Grid container justifyContent={"space-between"} rowGap={1}>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        backgroundColor={"green"}
        borderRadius={2}
        sx={{ minHeight: "160px", padding: "24px" }}
      >
        Adds
      </Grid>
      <Grid
        item
        xl={5.9}
        lg={5.9}
        md={5.9}
        sm={12}
        xs={12}
        backgroundColor={"pink"}
        borderRadius={2}
        sx={{ minHeight: "80px", padding: "24px" }}
      >
        Adds
      </Grid>
      <Grid
        item
        xl={5.9}
        lg={5.9}
        md={5.9}
        sm={12}
        xs={12}
        backgroundColor={"red"}
        borderRadius={2}
        sx={{ minHeight: "80px", padding: "24px" }}
      >
        Adds
      </Grid>
    </Grid>
  );
};

const AddSection = () => {
  return (
    <Grid container justifyContent={"center"} padding={"24px"} gap={1}>
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        sm={12}
        xs={12}
        backgroundColor={"red"}
        borderRadius={2}
        sx={{ minHeight: "240px", padding: "24px" }}
      >
        Adds
      </Grid>
      <Grid item xl={7} lg={7} md={7} sm={12} xs={12} borderRadius={8}>
        <MultiGrid />
      </Grid>
    </Grid>
  );
};

export default AddSection;
