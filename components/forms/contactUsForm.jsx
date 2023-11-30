import React from "react";
import { Button, Grid, TextField } from "@mui/material";

const ContactUsForm = () => {
  const fields = [
    { label: "Your first Name", Size: "5.9" },
    { label: "Your Last Name", Size: "5.9" },
    { label: "Email", Size: "5.9" },
    { label: "Phone", Size: "5.9" },
    { label: "Company Name", Size: "12" },
    { label: "Town / City", Size: "12" },
    { label: "State", Size: "12" },
    { label: "Zip Code", Size: "12" },
    { label: "Address", Size: "12" },
    { label: "Desciption", Size: "12" },
  ];

  return (
    <Grid container gap={2}>
      {fields.map((field) => (
        <Grid
          key={field.id}
          item
          xl={field.Size}
          lg={field.Size}
          md={12}
          sm={12}
          xs={12}
        >
          <TextField fullWidth label={field.label} variant="outlined" />
        </Grid>
      ))}
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Button variant="contained" fullWidth>Submit </Button>
      </Grid>
    </Grid>
  );
};

export default ContactUsForm;
