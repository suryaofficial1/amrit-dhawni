import { Grid, TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Drawer from '@mui/material/Drawer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from 'react-redux'
import Cart from '../Cart/Cart';
import { Woman } from '@mui/icons-material'
import { makeRequest } from '../../makeRequest';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        "& .MuiAccordionSummary-root-root:hover": {
            cursor: "default",
        }
    },
    mainContainer: {
        color: "black",
        background: "#fff"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        border: "none"
    },
    title: {
        flexGrow: 1,
        fontSize: 35,
        letterSpacing: 3,
        fontFamily: "Cardo",
        fontWeight: "bold",
        color: "#515151 !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: 20,
            letterSpacing: 2,
            fontFamily: "Cardo",
        },
    },
    menuContainer: {
        background: "#fff",
        color: grey[500],
        paddingLeft: "20px",
        marginTop: "50px",
        paddingRight: "20px",
        width: "450px"

    },
    smClose: {
        textAlign: "right",
        marginTop: "20px"
    },
    accordionDetails: {
        paddingLeft: 13
    },
    drawer: {
        width: "90%"
    }
}));

const StyleTypography = withStyles((theme) => ({
    root: {
        color: grey[500]
    },

}))(Typography)

function Header() {
    const classes = useStyles();
    const [state, setState] = React.useState({ top: false });
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = React.useState(false);
    const [subcategory, setSubcategory] = React.useState(null)
    const [error, setError] = React.useState(false);


    const products = useSelector((state) => state.cart.products);
    const categoryId = {
        mans: 1,
        Woman: 2
    }

    useEffect(() => {
        getSubCategory()

    }, []);
    const getSubCategory = async () => {
        try {
            setLoading(true);
            const url = `/sub-categories?[filters][categories][id][$eq]=1`
            await makeRequest.get(url).then((_res) => {
                if (_res.status === 200) {
                    setSubcategory(_res.data.data);
                    setLoading(false);
                }
            })
        } catch (err) {
            setError(true);
        }
        setLoading(false);
    };

    const showAllCate = () => {
        return (<>
            {subcategory != null ? subcategory?.map((category, index) => (<Grid item xs={12} >
                <StyleTypography>
                    {category.attributes.title}
                </StyleTypography>
            </Grid>
            )) : ''}
        </>)
    }
    const handleCard = () => {
        setOpen(!open)
    }
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };



    const closeDrawer = () => {
        setState({ top: false });
    }
    const list = (anchor) => (
        <Box
            role="presentation"
        >
            <div className={classes.smClose} onClick={closeDrawer}><ChevronLeftIcon fontSize="large" /></div>
            <Grid container spacing={3} className={classes.menuContainer} >
                <Grid item sm={12}>
                    <TextField
                        margin="dense"
                        variant="outlined"
                        label="Search..."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }} />
                </Grid>
                <Grid container spacing={2} item sm={12}>
                    <Grid item sm={12}>
                        <Accordion>
                            <Link onClick={closeDrawer} className="link" to="/">   <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <StyleTypography>Home</StyleTypography>
                            </AccordionSummary></Link>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Link onClick={closeDrawer} className="link" to="/allproducts/1"><StyleTypography>Mens wear</StyleTypography></Link>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3} item xs={12} className={classes.accordionDetails}>

                                    {showAllCate()}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Link onClick={closeDrawer} className="link" to="/allproducts"> <StyleTypography>Womens wear</StyleTypography></Link>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3} item xs={12} className={classes.accordionDetails}>
                                    <Grid item xs={12}>
                                        <StyleTypography>
                                            Womens wear category
                                        </StyleTypography>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Link onClick={closeDrawer} className="link" to="/allproducts/2"> <StyleTypography>Footwear</StyleTypography></Link>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={3} item xs={12} className={classes.accordionDetails}>
                                    <Grid item xs={12}>
                                        <Link onClick={closeDrawer} className="link" to="/allproducts/2">  <StyleTypography>
                                            Mens
                                        </StyleTypography></Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <StyleTypography>
                                            Womens
                                        </StyleTypography>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Link onClick={closeDrawer} className="link" to="/allproducts"> <StyleTypography>Ready To ship</StyleTypography></Link>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container item xs={12} spacing={2} className={classes.accordionDetails}>
                                    <Grid item xs={12}>
                                        <Link onClick={closeDrawer} className="link" to="/allproducts/1">  <StyleTypography>
                                            Mens
                                        </StyleTypography></Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <StyleTypography>
                                            Womens
                                        </StyleTypography>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Link onClick={closeDrawer} className="link" to="/about-us"> <StyleTypography>About us</StyleTypography></Link>
                            </AccordionSummary>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Link onClick={closeDrawer} className="link" to="/contact-us">  <StyleTypography>Contact us</StyleTypography></Link>
                            </AccordionSummary>
                        </Accordion>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );


    return (
        <div className={classes.root}>
            <AppBar className={classes.mainContainer}>
                <Toolbar>
                    <div >
                        {["left"].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer(anchor, true)} color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                    <Typography align="center" variant="h6" color="inherit" className={classes.title}>
                        <Link style={{ color: "#515151", fontFamily: "Cardo" }} to="/" >   Amrit Dawani </Link>
                    </Typography>
                    <div className="cartIcon" onClick={() => handleCard()}>
                        <ShoppingCartOutlinedIcon />
                        <span>{products.length}</span></div>
                </Toolbar>
            </AppBar>
            <div >{open && <Cart close={handleCard} />}</div>
        </div>
    );
}
export default Header