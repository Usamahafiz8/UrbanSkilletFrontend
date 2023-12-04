import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Uheading2 from "../uHeading/Uheadings";
import Image from "next/image";
import Adds from "../../assets/png/catering202308141.png";

const BlogCard = ({ blog }) => {
  const { Topis, Date, chips, Details } = blog;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Image
          src={Adds}
          alt="Logo"
          style={{
            width: "100%",
            height: "100%",
          }}
        />

        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "24px 0px",
            gap: "8px",
          }}
        >
          <Chip
            sx={{
              height: "24px",
            }}
            label={chips}
            color="error" // Set the background color to red
            variant="filled" // Make the chip filled
          />
          {Date}
        </CardContent>
        <Uheading2>
          <b>{Topis}</b>
        </Uheading2>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          explore more
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
