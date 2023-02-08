import React from "react";
import Slider from "../Slider/Slider";
// import img1 from '../../images/3-1.jpg'
// import img2 from '../../images/3-2.jpg'
import img3 from '../../images/3-3.jpg'
import img4 from '../../images/3-4.jfif'
import { Grid, Hidden, makeStyles } from "@material-ui/core";
import ViewProductCard from "../Slider/ViewProductCard";
import { useNavigate } from "react-router-dom";

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

const BridesWear = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const sliderData = [
        // {
        //     image: img1,
        //     heading: "LEHNGA SET'S",
        //     btnTitle: "Shop Now"
        // },
        // {
        //     image: img2,
        //     heading: "LEHNGA SET'S",
        //     btnTitle: "Shop Now"
        // },
        {
            image: img3,
            heading: "Lehnga Set's",
            btnTitle: "Shop Now",
            url:'/'
        },
        {
            image: img4,
            heading: "Cocktail Gown's",
            btnTitle: "Shop Now",
            url:'/'
        },
    ];
    const handleClick = (e, title) => {
        navigate("/allproducts")
       
    }

    return (
        <Grid container spacing={2} className={classes.groomContainer}>
            <Hidden only={['xs', 'sm']}>
                <Grid item xs={12} md={4} className={classes.viewProduct}>
                    <ViewProductCard title="BRIDE'S WEAR" submit={handleClick} btnTitle="View More" />
                </Grid>
            </Hidden>
            <Grid item xs={12} md={8}>
                <Slider sliderData={sliderData} />
            </Grid>
            <Hidden mdUp>
                <Grid item xs={12} md={4} className={classes.viewProduct}>
                    <ViewProductCard title="BRIDE'S WEAR" submit={handleClick} btnTitle="View More" />
                </Grid>
            </Hidden>
        </Grid>
    )
};

export default BridesWear;