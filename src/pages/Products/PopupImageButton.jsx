import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Grid
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import clothSizeChart from '../../images/SIzeChart.jpeg'
import ShoesSizeChart from '../../images/ShoesSizeChart.jfif'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white"
    }
  }
}));

const  PopupImageButton =(props) =>{
    const classes = useStyles();
    const sizeChartFilter = props.data?.attributes?.categories?.data[0]?.id
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <Button onClick={() => setShowPopup(true)} className={classes.button}>Size Chart</Button>
            <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
                <DialogTitle>
                    <Grid container justify="space-between">
                        <Grid item>Image</Grid>
                        <Grid item>
                            <IconButton
                                aria-label="close"
                                onClick={() => setShowPopup(false)}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <img
                        src={sizeChartFilter == 1 ? clothSizeChart :ShoesSizeChart}
                        alt="popup image"
                        style={{ width: "100%" }}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default PopupImageButton;