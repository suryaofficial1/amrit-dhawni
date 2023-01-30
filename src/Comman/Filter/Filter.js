import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CloseIcon from '@material-ui/icons/Close';
import { padding } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 500,
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
             width: "100%",
        }

    },
    fullList: {
        width: 'auto',
    },
    close: {
        margin: theme.spacing(5)
    },
    divider: {
        height: 4,
        background: "#fff",
        width: "100%",
        padding: theme.spacing(0, 2, 0, 3),
        marginBottom: theme.spacing(5)
    },
    prodCat: {
        paddingLeft: "48px !important"
    },
    appBtn:{
        marginTop:theme.spacing(6)
    }

}));

function Filter(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const [priceSlid, setPriceSlid] = useState(false);
    const [sortingActive, setSortingActive] = useState(false);
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(0);
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState();

    const { data, loading, error } = useFetch(
        `/categories?*`
    );

    // const props.toggleDrawer = () => {
    //     setOpen(!open)
    // };
    const prodCategoryActive = () => {
        setActive(!active)
    };
    const priceCategoryActive = () => {
        setPriceSlid(!priceSlid)
    };
    const sortingCategoryActive = () => {
        setSortingActive(!sortingActive)
    };

    const onInputChange = (e) => {
        setSort(e.target.value)
    }
    const onCategoryChange = (e, val) => {
        setCategory(e.target.value)
    }
    const onPriceChange = (e) => {
        setMaxPrice(e.target.value)
    }


    const list = () => (<div style={{ background: "hwb(0deg 90% 8%)", height: "100%" }}>
        <Grid container spacing={2} className={classes.list}>
            <Grid item xs={12} className={classes.close}>
                <Typography variant='h4' align="right" onClick={props.toggleDrawer}><CloseIcon fontSize='large' /></Typography>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item xs={12} onClick={prodCategoryActive} >
                <Grid container item xs={12}>
                    <Grid item xs={6} >
                        <Typography component="span" variant='subtitle1' float="left">Product Categories</Typography>
                    </Grid>
                    <Grid item xs={6} align="right">
                        <Typography float="right" component="span" align="center" justify="right" variant='subtitle1'>{active ? "—" : "+"} </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {active && <Grid item xs={12} >
                {data && data?.map((item) => (<FormControl component="fieldset" name="method-of-order" >
                    <RadioGroup onClick={(e) => { onCategoryChange(e, 'category') }} value={category}>
                        <FormControlLabel checked={category == item.id} value={item.id} control={<Radio size="small" />} label={item?.attributes?.title} />
                    </RadioGroup>
                </FormControl>
                ))}
            </Grid>}
            <Grid item xs={12} onClick={priceCategoryActive} >
                <Grid container item xs={12}>
                    <Grid item xs={6} >
                        <Typography component="span" variant='subtitle1' float="left">Filter by price</Typography>
                    </Grid>
                    <Grid item xs={6} align="right">
                        <Typography float="right" component="span" align="center" justify="right" variant='subtitle1'>{priceSlid ? "—" : "+"} </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {priceSlid && <Grid item xs={12}>
                <div style={{ padding: 3, width: "40%", height: 30, background: "#f1f3f6", boxShadow: "hwb(0deg 80% 13%) 0px 2px 4px 0px", borderRadius: "4%", marginBottom: -5, marginTop: 10 }}><center>₹0</center></div>
                <input
                    type="range"
                    min={0}
                    max={150000}
                    onChange={(e) => onPriceChange(e)}
                />
                <div style={{ padding: 3, width: "40%", height: 30, background: "#f1f3f6", boxShadow: "0 2px 4px 0 hsl(0deg 0% 100% / 50%)", borderRadius: "4%", marginTop: -13 }}><center>₹{maxPrice}</center></div>
            </Grid>}

            <Grid item xs={12} onClick={sortingCategoryActive} >
                <Grid container item xs={12}>
                    <Grid item xs={6} >
                        <Typography component="span" variant='subtitle1' float="left">Sort by</Typography>
                    </Grid>
                    <Grid item xs={6} align="right">
                        <Typography float="right" component="span" align="center" justify="right" variant='subtitle1'>{sortingActive ? "—" : "+"} </Typography>
                    </Grid>
                </Grid>
            </Grid>
            { sortingActive &&  <Grid item xs={12}>
        <FormControl component="fieldset" name="method-of-order" >
          <RadioGroup onClick={(e) => { onInputChange(e, 'radio') }} value={sort}>

            <FormControlLabel value="asc" control={<Radio size="small" />} label="Price (Lowest first)" />
            <FormControlLabel value="desc" control={<Radio size="small" />} label="Price (Highest first)" />
          </RadioGroup>
        </FormControl>
      </Grid>}

      <Grid item xs={12} className={classes.appBtn}>
        <Button variant="contained" color="primary"
          onClick={() => props.applyFilter(sort,category,maxPrice)}
        >Apply</Button>
      </Grid>
        </Grid>
    </div>
    );

    return (
        <div>
            {/* <Button onClick={props.toggleDrawer}>Filter</Button> */}
            <SwipeableDrawer
                anchor="right"
                open={props.open}
                onClose={props.toggleDrawer}
                onOpen={props.toggleDrawer}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
}
export default Filter