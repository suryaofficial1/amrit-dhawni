import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "auto",
  },
  media: {
    height: 200,
  },
  slider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const images = [
  {
    url: "https://picsum.photos/id/10/300/200",
    title: "Image 1",
  },
  {
    url: "https://picsum.photos/id/20/300/200",
    title: "Image 2",
  },
  {
    url: "https://picsum.photos/id/30/300/200",
    title: "Image 3",
  },
];

const ImageSlider = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageClick = () => {
    console.log("Image clicked");
  };

  return (
    <div className={classes.slider}>
      <IconButton onClick={handlePrev}>
        <NavigateBeforeIcon />
      </IconButton>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={images[index].url}
          title={images[index].title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {images[index].title}
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleImageClick}
          >
            View
          </Button>
        </CardContent>
      </Card>
      <IconButton onClick={handleNext}>
        <NavigateNextIcon />
      </IconButton>
    </div>
  );
};

export default ImageSlider;
