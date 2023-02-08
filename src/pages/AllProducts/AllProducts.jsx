import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import "./AllProducts.scss";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import { Button, Grid, Hidden } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import { makeRequest } from "../../makeRequest";
import ShareIcons from "../../components/shareIcons/ShareIcons";
import NotFound from "./NotFound";
import Filter from "../../Comman/Filter/Filter";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";


const AllProducts = ({ type }) => {

    var {catId, subCatId} = useParams();

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [filter, setFilter] = React.useState({ sort: '', price: '', categoryId: '', maxPrice: '', subCategoryId: [] });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getUrl = (filter) => {
    let mainUrl = `/products?populate=*`
    let subUrl = ``
    if (filter.sort != '' && filter.categoryId == undefined && filter.maxPrice == 0) {
      return mainUrl + `&sort=price:${filter.sort}`
    }
    else if (filter.categoryId > 0 && filter.sort === '' && filter.maxPrice == 0) {
      return mainUrl + `&[filters][categories][id]=${filter.categoryId}${filter.subCategoryId.map((item) => `&[filters][sub_categories][id][$in]=${item}`)}`
    }
    else if (filter.categoryId == undefined && filter.sort === '' && filter.maxPrice != 0) {
      return mainUrl + `&[filters][price][$lt]=${filter.maxPrice}`
    }
    else if (filter.sort != '' && filter.categoryId > 0 && filter.maxPrice == 0) {
      return mainUrl + `&sort=price:${filter.sort}&[filters][categories][id]=${filter.categoryId}${filter.subCategoryId.map((item) => `&[filters][sub_categories][id][$in]=${item}`)}`
    }
    else if (filter.sort != '' && filter.categoryId == undefined && filter.maxPrice != 0) {
      return mainUrl + `&sort=price:${filter.sort}&[filters][price][$lt]=${filter.maxPrice}`
    }
    else if (filter.categoryId > 0 && filter.maxPrice != 0 && filter.sort === '') {
      return mainUrl + `&[filters][categories][id]=${filter.categoryId}${filter.subCategoryId.map((item) => `&[filters][sub_categories][id][$in]=${item}`)}&[filters][price][$lt]=${filter.maxPrice}`
    }
    else if (filter.categoryId > 0 && filter.sort != '' && filter.maxPrice == 0) {
      return mainUrl + `&[filters][categories][id]=${filter.categoryId}${filter.subCategoryId.map((item) => `&[filters][sub_categories][id][$in]=${item}`)}&sort=price:${filter.sort}`
    }
    else if (filter.maxPrice != 0 && filter.sort === '' && filter.categoryId == undefined) {
      return mainUrl + `&[filters][price][$lt]=${filter.maxPrice}&sort=price:${filter.sort}`
    }
    else if (filter.maxPrice != 0 && filter.categoryId > 0 && filter.sort === '') {
      return mainUrl + `&[filters][price][$lt]=${filter.maxPrice}&[filters][categories][id]=${filter.categoryId}${filter.subCategoryId.map((item) => `&[filters][sub_categories][id][$in]=${item}`)}`
    }
    else if (filter.sort != '' && filter.categoryId > 0 && filter.maxPrice > 0) {
      return mainUrl + `&sort=price:${filter.sort}&[filters][categories][id]=${filter.categoryId}${filter.subCategoryId.map((item) => `&[filters][sub_categories][id][$in]=${item}`)}&[filters][price][$lt]=${filter.maxPrice}`
    }
    else if (!isNaN(catId) && subCatId != undefined) {
      return mainUrl + `&[filters][categories][id]=${catId}&[filters][sub_categories][id][$eq]=${subCatId}`
    }
    else if (!isNaN(catId) && subCatId === undefined) {
      return mainUrl + `&[filters][categories][id]=${catId}`
    }
    else {
      return mainUrl
    }

  }

  const fetchAllProduct = async () => {
    try {
      setLoading(true);
      let url = getUrl(filter)
      let apiUrl = url.replaceAll(',', '')
      console.log("-----------cccccccccccc--------",apiUrl)
      await makeRequest.get(apiUrl).then((_res) => {
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

  }, [page, filter,catId, subCatId]);

  const toggleDrawer = () => {
    setOpen(!open)
  };

  const applyFilter = (sort, categoryId, maxPrice, subCategoryId) => {
    setFilter({ ...filter, sort: sort, categoryId: categoryId, maxPrice: maxPrice, subCategoryId: subCategoryId })
    setPage(0)
    setOpen(!open);
  }
  return (
    <div className="featuredProducts">
      <div className="top">
        <center><h1>{type} products</h1></center>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p> */}
      </div>
      <Grid item sm={12} >
        {/* <Button color="inherit" onClick={toggleDrawer} > */}
        <Typography className="FilterText" align="right" onClick={toggleDrawer}>  Filter <FilterListIcon /></Typography>

        {/* </Button> */}
      </Grid>
      <Grid item sm={12}>
        <Filter open={open} applyFilter={applyFilter} toggleDrawer={toggleDrawer} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <div className="bottom">
            {error
              ? "Something went wrong!"
              : loading
                ? "loading"
                : data?.length > 0 ? data?.map((item) => <Card item={item} key={item.id} />) : <center><NotFound /></center>}
          </div>
        </Grid>
      </Grid>
      <ShareIcons />

    </div>
  );
};

export default AllProducts;
