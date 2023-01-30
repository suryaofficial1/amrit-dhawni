import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import FilterListIcon from '@mui/icons-material/FilterList';
import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import "./AllProducts.scss";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import { makeRequest } from "../../makeRequest";
import ShareIcons from "../../components/shareIcons/ShareIcons";
import NotFound from "./NotFound";
import Filter from "../../Comman/Filter/Filter";
import img2 from '../../images/5-2.jpg'
import img1 from '../../images/shoes.jpg'


const useStyles = makeStyles((theme) => ({
    mainProdContainer: {
        marginTop: theme.spacing(9),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(0, 2, 0, 2)
    },
    cardContainer: {
        border: "1px solid grey"
    },
    imageContainer: {
        width: 200,
        height: theme.spacing(32),
        border: "3px solid #b78e4f",
        overflow: "hidden",
        position: "relative",

    },
    mainImage: {
        width: "100%",
        height: "100%",
        objectFit: "fill"
    }
}));

function ShowProducts() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(null);
    const [page, setPage] = React.useState(0);
    const [filter, setFilter] = React.useState({ sort: '', price: '', category: '', maxPrice: '' });
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    // return api url
    const getUrl = (filter) => {
        let mainUrl = `/products?populate=*`
        if (filter.sort != '' && filter.category == undefined && filter.maxPrice == 0) {
            return mainUrl + `&sort=price:${filter.sort}`
        } else if (filter.category > 0 && filter.sort === '' && filter.maxPrice == 0) {
            return mainUrl + `&[filters][categories][id]=${filter.category}`
        } else if (filter.category == undefined && filter.sort === '' && filter.maxPrice != 0) {
            return mainUrl + `&[filters][price][$lt]=${filter.maxPrice}`
        } else if (filter.sort != '' && filter.category > 0 && filter.maxPrice == 0) {
            return mainUrl + `&sort=price:${filter.sort}&[filters][categories][id]=${filter.category}`
        } else if (filter.sort != '' && filter.category == undefined && filter.maxPrice != 0) {
            return mainUrl + `&sort=price:${filter.sort}&[filters][price][$lt]=${filter.maxPrice}`
        } else if (filter.category > 0 && filter.maxPrice != 0 && filter.sort === '') {
            return mainUrl + `&[filters][categories][id]=${filter.category}&[filters][price][$lt]=${filter.maxPrice}`
        } else if (filter.category > 0 && filter.sort != '' && filter.maxPrice == 0) {
            return mainUrl + `&[filters][categories][id]=${filter.category}&sort=price:${filter.sort}`
        } else if (filter.maxPrice != 0 && filter.sort === '' && filter.category == undefined) {
            return mainUrl + `&[filters][price][$lt]=${filter.maxPrice}&sort=price:${filter.sort}`
        } else if (filter.maxPrice != 0 && filter.category > 0 && filter.sort === '') {
            return mainUrl + `&[filters][price][$lt]=${filter.maxPrice}&[filters][categories][id]=${filter.category}`
        } else if (filter.sort != '' && filter.category > 0 && filter.maxPrice > 0) {
            return mainUrl + `&sort=price:${filter.sort}&[filters][categories][id]=${filter.category}&[filters][price][$lt]=${filter.maxPrice}`
        }
        else {
            return mainUrl
        }
    }

    const fetchAllProduct = async () => {
        try {
            setLoading(true);
            const url = getUrl(filter)
            await makeRequest.get(url).then((_res) => {
                if (_res.status === 200) {
                    setLoading(false);
                    setData(_res.data.data);
                    setPage(1)
                }
            })
        } catch (err) {
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchAllProduct()

    }, [page, filter]);

    const toggleDrawer = () => {
        setOpen(!open)
    };

    const applyFilter = (sort, category, maxPrice) => {
        setFilter({ ...filter, sort: sort, category: category, maxPrice: maxPrice })
        setPage(0)
        setOpen(!open);
    }
    const singleProduct = () => {
        return (<Grid container spacing={0} className={classes.cardContainer}>

            <Grid item sm={12} className={classes.imageContainer}>
                <img src={img1} alt="" className={classes.mainImage} />
            </Grid>
            <Grid item sm={12} >
                <Typography gutterBottom variant='subtitle1'>Title Title</Typography>
                <Typography gutterBottom variant='subtitle1'>$120000</Typography>
            </Grid>

        </Grid>

        )
    }
    return (
        <div className={classes.mainProdContainer}>
            <Grid container spacing={2} justifyContent='center' alignContent='center'>
                <Grid item sm={12} align="right">
                    <Button variant="outlined" onClick={toggleDrawer}>
                        Filter <FilterListIcon />
                    </Button>
                    <Grid item sm={12}>
                        <Filter open={open} applyFilter={applyFilter} toggleDrawer={toggleDrawer} />
                    </Grid>
                </Grid>
                <Grid item sm={12} >
                    <Grid container item spacing={2} justifyContent='center' alignContent='center'>
                        <Grid item sm={12} >
                            {singleProduct()}
                        </Grid>
                        {/* <Grid item sm={2} >
                            {singleProduct()}
                        </Grid>
                        <Grid item sm={2} >
                            {singleProduct()}
                        </Grid>
                        <Grid item sm={2} >
                            {singleProduct()}
                        </Grid>
                        <Grid item sm={2} >
                            {singleProduct()}
                        </Grid>
                        <Grid item sm={2} >
                            {singleProduct()}
                        </Grid>
                        <Grid item sm={2} >
                            {singleProduct()}
                        </Grid> */}
                    </Grid>

                </Grid>
            </Grid>
        </div >
    )
}

export default ShowProducts