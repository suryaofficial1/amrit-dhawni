
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Slider.scss";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: theme.spacing(4.5),
        fontFamily:"Roboto Thin",
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(3),
        }
    },

    viewMoreBtn: {
        padding: theme.spacing(1.2, 5, 1.2, 5),
        border: "1.5px solid",
        borderRadius: 10,
        fontFamily: "Poppins",
        backgroundColor: "transparent",
        fontWeight: "bolder",
        display: "inlineBlock",
        cursor: "pointer",
        transitionDuration: "0.4s",
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0.8, 2.5, 0.8, 2.5),
        }
    }
}));


const ViewProductCard = (props) => {
    const classes = useStyles();
    return (
        <Grid container item sm={12} spacing={2} direction="column" align="center" >
            <Grid item sm={12} display="flex" direction="column">
                <Typography className={classes.title} color="inherit">{props.title}</Typography>
            </Grid>
            {props.desc && <Grid item sm={12} display="flex" direction="column">
                <Typography variant="body1" style={{ paddingLeft: 35, paddingRight: 35 }}>{props.desc}</Typography>
            </Grid>}
            <Grid item sm={12} display="flex" direction="column">
                  <button className={classes.viewMoreBtn}
                    onClick={(e) => props.submit(e, props.btnTitle)}> {props.btnTitle} </button>
            </Grid>
        </Grid>
    )
};

export default ViewProductCard;