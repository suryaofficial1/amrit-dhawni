import React from "react";
import Slider from "../Slider/Slider";
// import img1 from '../../images/4-1.jpg'
import img2 from '../../images/4-2.jpg'
import { Grid, makeStyles } from "@material-ui/core";
import ViewProductCard from "../Slider/ViewProductCard";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    groomContainer: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0.7),
        }
    },
    viewProduct: {
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(5),
        }
    }

}));

const Shoes = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const sliderData = [
        // {
        //     image: img1,
        //     heading: "Bandhgalas",
        //     btnTitle:"Shop Now"
        // },
        {
            image: img2,
            heading: "FOOTWEAR",
            btnTitle:"Shop Now",
            url:'/allproducts/2'
        },
    ];
    const handleClick = (e, title) => {
        navigate("/allproducts/2")  
      }

    return (
        <Grid container spacing={2} className={classes.groomContainer}>
            <Grid item xs={12} md={8}>
                <Slider sliderData={sliderData} />

            </Grid>
            <Grid item xs={12} md={4} className={classes.viewProduct}>
                <ViewProductCard title="FOOTWEAR" submit={handleClick} btnTitle="View More" />
            </Grid>
        </Grid>
    )
};

export default Shoes;