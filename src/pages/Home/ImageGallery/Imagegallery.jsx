import React from 'react';
import img1 from '../../../images/mask-group3@2x.png'
import img2 from '../../../images/mask-group4@2x.png'
import img3 from '../../../images/Image-01.jpg'
import img4 from '../../../images/mask-group6@2x.png'
import img5 from '../../../images/mask-group7@2x.png'
import img6 from '../../../images/Img0.6.jpeg'
import img7 from '../../../images/Img0.7.jpeg'
import img8 from '../../../images/Img0.8.jpeg'
import img9 from '../../../images/Img0.9.jpeg'
import { Grid, Typography } from '@mui/material';
import './imageGallery.scss'


const Imagegallery = ()=>{
    return(
        <Grid container spacing={2} justifyContent="center" >
            <Grid item sm={12} align="center">
                <Typography gutterBottom align="center" variant="h3" color='inherit' class="categoryHeading"><b>Category Fashion</b></Typography>
            </Grid>
            <Grid item container spacing={3}sm={12} style={{padding:50}}>
                <Grid item sm={12} md={6}>
                    <img src={img1} style={{ width: '100%' }}></img>
                </Grid>
                <Grid container spacing={3} item sm={12} md={6}>
                    <Grid item sm={12} md={6}>
                    <img src={img2} style={{width: '100%'}} /> 
                    </Grid>
                    <Grid item sm={12} md={6}>
                    <img src={img3} style={{width: '100%'}} /> 
                    </Grid>
                    <Grid item sm={12} md={6}>
                    <img src={img4} style={{width: '100%'}} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                    <img src={img5} style={{width: '100%'}} />
                    </Grid>
                </Grid>
                <Grid container spacing={3} item sm={12} md={12}>
                <Grid item sm={12} md={3}>
                    <img src={img6} style={{width: '100%'}} /> 
                    </Grid>
                    <Grid item sm={12} md={3}>
                    <img src={img7} style={{width: '100%'}} /> 
                    </Grid>
                    <Grid item sm={12} md={3}>
                    <img src={img8} style={{width: '100%'}} />
                    </Grid>
                    <Grid item sm={12} md={3}>
                    <img src={img9} style={{width: '100%'}} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Imagegallery;