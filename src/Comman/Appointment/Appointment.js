import React from "react";
import Slider from "../Slider/Slider";
import img1 from '../../images/5-1.jpg'
import img2 from '../../images/5-2.jpg'
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

const Appointment = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const sliderData = [
        {
            image: img1,
            heading: "",
            btnTitle:"Book Now",
            url:'contact-us'
        },
        {
            image: img2,
            heading: "",
            btnTitle:"Book Now",
            url:'contact-us'
        },
    ];
    const handleClick = (e, title) => {
        navigate("/contact-us")
       
    }

    return (
        <Grid container spacing={2} className={classes.groomContainer}>
            {/* <Grid item xs={12} md={4} className={classes.viewProduct}>

                <ViewProductCard title="BOOK AN APPOINTMENT" submit={handleClick} btnTitle="BOOK NOW" desc="We are available for online as well as in-store appointments "/>
            </Grid>
            <Grid item xs={12} md={8}>
                <Slider sliderData={sliderData} />
            </Grid> */}
             <Hidden only={['xs', 'sm']}>
                <Grid item xs={12} md={4} className={classes.viewProduct}>
                    <ViewProductCard title="BOOK AN APPOINTMENT" submit={handleClick} btnTitle="BOOK NOW" desc="We are available for online as well as in-store appointments "/>
                </Grid>
            </Hidden>
            <Grid item xs={12} md={8}>
                <Slider sliderData={sliderData}  />
            </Grid>
            <Hidden mdUp>
                <Grid item xs={12} md={4} className={classes.viewProduct}>
                    <ViewProductCard title="BOOK AN APPOINTMENT" submit={handleClick} btnTitle="BOOK NOW" desc="We are available for online as well as in-store appointments "/>
                </Grid>
            </Hidden>
        </Grid>
    )
};

export default Appointment;