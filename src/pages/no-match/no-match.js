// import React, { Component } from "react";
// import MetaTags from 'react-meta-tags';
// import './No-match.css'
// /**
//  * Content of Signup screen.
//  */
// class NoMatch extends Component {
//     constructor(props) {
//         super(props);

//     }
//     render() {
//         return (
//             <div class="container">
// 				<MetaTags>
//                     <title>EzyPeazy - 404 Page not found</title>
//                 </MetaTags>
//                 <div class="row">
//                     <div class="col-md-12">
//                         <div class="error-template">
//                             <h1>
//                                 Oops!</h1>
//                             <h2>
//                                 404 Not Found</h2>
//                             <div class="error-details">
//                                 Sorry, this page no more exists in our system!
//                 </div>
//                             <div class="error-actions">
//                                 <a href="javascript:void(0)" onClick={(e)=>{this.props.history.push("/");}}>
//                                     <i class="fa fa-home" aria-hidden="true"></i> Take Me Home
//                                 </a><br />
//                                 <a href="javascript:void(0)" onClick={(e)=>{this.props.history.push("/contact-us");}}>
//                                 <i class="fa fa-envelope" aria-hidden="true"></i> Contact Support
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         );
//     }
// }

// export default NoMatch;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import errorImg from '../../images/error.png'
import { Button } from '@material-ui/core';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  imageContainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '40%',
    height: '40%',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  backButton: {
    textAlign: 'center',
    color:"white",
    background: "linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)"  },
}));

 function NoMatch() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = (e, title) => {
    navigate("/")  
  }
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.imageContainer}>
        <Image
          src={errorImg}
          aspectRatio={(16 / 9)}
          disableSpinner
          className={classes.image}
        />
      </Grid>
      <Grid item xs={12} className={classes.textContainer}>
        <Button onClick={handleClick} className={classes.backButton}><ReplyIcon /> Back Home</Button>
      </Grid>
    </Grid>
  );
}
export default NoMatch

