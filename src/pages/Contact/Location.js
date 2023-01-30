import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
    paddingBottom: '20px'
  },
  section: {
    padding: theme.spacing(4),
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    // '&:hover': {
    //   backgroundColor: 'white',
    //   color: 'black',
    // },
  },
}));

const Location = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box className={classes.section}>
            <img
              src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600"
              alt="Section 1 Image"
              className={classes.image}
            />
            <Typography variant="h5" className={classes.heading} gutterBottom>
              Indore Office
            </Typography>
            <Typography variant="body1" className={classes.heading} gutterBottom>
                New Palasia, Indore (M.P.) 452001
            </Typography>
            <Button className={classes.button}>Get Direction</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.section}>
            <img
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Section 2 Image"
              className={classes.image}
            />
            <Typography variant="h5" gutterBottom>
              Bhopal Office
            </Typography>
            <Typography variant="body1" gutterBottom>
                , Bhopal (M.P.) 452001
            </Typography>
            <Button className={classes.button}>Get Direction</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Location;