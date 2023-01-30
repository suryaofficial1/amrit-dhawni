// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import ShareIcons from '../../components/shareIcons/ShareIcons';



// const Aboutus = () => {
//   return (
//     <Container>
//       <ShareIcons />
//       <Row className="justify-content-center">
//         <Col xs={15} md={12}>
//           <h1 className="text-center font-weight-bold">About Us</h1>
//           <p className="text-center text-black">
//             Amrit Dawani, an Indore-based fashion designer, specializes in couture for women’s and men’s wear. He started his label ‘The Q by Amrit Dawani’ in 2013. His design style can be described as a mix of contemporary silhouettes and finely detailed embroideries.
//             Amrit Dawani identifies as an artist, a couturier, and a designer who recreates the magic of hand-crafted techniques through concepts, structures, and images. His idea of fashion transcends products bringing new ideas to life, creating tools of confident self-expression, and an intellectual commitment to good taste.
//             He takes cues from his mother’s style statements to design his masterpieces. His brand combines the sophisticated elegance of handmade techniques with a Modern Indian grace that makes space for boundless creativity.
//           </p>
//           {/* <Link to="/allproducts">
//             <button style={{
//                 border: '3px solid black',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: 'transparent',
//                 color: 'black',
//                 padding: '10px 20px',
//                 cursor: 'pointer'
//             }}>
//                 Click me
//             </button>
//         </Link> */}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Aboutus;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7)
  },
  image: {
    maxWidth: "100%",
    height: "auto"
  },
  heading: {
    paddingBottom: theme.spacing(4),
    fontFamily: 'Roboto Condensed',
  },
  text: {
    padding: theme.spacing(2),
    fontFamily: 'Roboto Condensed',
    paddingBottom: theme.spacing(4),
    textAlign: 'left',
  }
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" align="center" className={classes.heading}>About Us</Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <Image
            src="https://images.pexels.com/photos/15114397/pexels-photo-15114397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            aspectRatio={16 / 9}
            disableSpinner
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.text}>
            {/* <Typography variant="h3" align="center">About Us</Typography> */}
            <Typography variant="body1">
              Amrit Dawani, an Indore-based fashion designer, specializes in
              couture for women’s and men’s wear. He started his label ‘The Q by
              Amrit Dawani’ in 2013. His design style can be described as a mix
              of contemporary silhouettes and finely detailed embroideries.{" "}
              <br /> <br />
              Amrit Dawani identifies as an artist, a couturier, and a designer
              who recreates the magic of hand-crafted techniques through
              concepts, structures, and images. His idea of fashion transcends
              products bringing new ideas to life, creating tools of confident
              self-expression, and an intellectual commitment to good taste. He
              takes cues from his mother’s style statements to design his
              masterpieces. His brand combines the sophisticated elegance of
              handmade techniques with a Modern Indian grace that makes space
              for boundless creativity.
            </Typography>
          </div>
  </Grid>

      </Grid>
    </div>
  );
}

export default AboutUs;