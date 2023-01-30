import React from "react";
import Slider from "../Slider/Slider";
import img1 from '../../images/2-1.jpg'
import img2 from '../../images/2-2.jpg'
import { Grid, makeStyles } from "@material-ui/core";
import ViewProductCard from "../Slider/ViewProductCard";

const useStyles = makeStyles((theme) => ({
  groomContainer: {
      marginTop: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(3),
      }
  },
  viewProduct: {
      margin: "auto",
  }
}));

const GroomsWear = () => {
  const classes = useStyles();
  const sliderData = [
    {
      image: img1,
      heading: "Sherwani's",
      btnTitle:"Shop Now"
    },
    {
      image: img2,
      heading: "Sherwani's",
      btnTitle:"Shop Now"
    },
  ];

  const handleClick = (e, title) => {
    console.log("e ->", e + "title-.", title)
  }


  return (
    <Grid container spacing={2} className={classes.groomContainer}>
      <Grid item xs={12} md={8}>
        <Slider sliderData={sliderData} />
      </Grid>
      <Grid item xs={12} md={4} className={classes.viewProduct}>
        <ViewProductCard title="GROOM'S WEAR" submit={handleClick} btnTitle="View More" />
      </Grid>
    </Grid>
  )
};

export default GroomsWear;