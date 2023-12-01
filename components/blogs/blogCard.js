import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Uheading2 from "../uHeading/Uheadings";

const BlogCard = ({ blog }) => {
  const { Topis, Date, chips, Details } = blog;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          // Add your image source here
          // image="/static/images/cards/contemplative-reptile.jpg"
          alt="Blog Image"
        />
        <CardContent>
          <Chip label={chips} Filled /> {Date}
          <Uheading2>{Topis}</Uheading2>
        </CardContent>
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
