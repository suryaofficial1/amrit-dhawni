import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import ShareIcons from "../../components/shareIcons/ShareIcons";
import useFetch from "../../hooks/useFetch";
import { addToCart } from "../../redux/cartReducer";
import PopupImageButton from "../Products/PopupImageButton";
import "./Product.scss";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  useEffect(() => {
  }, [data, error])

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const renderForMobile = () => (

    <div className="left" style={{ flexDirection: "column" }}>
      <div className="container-main-img">
        <div className="main-img-mob">
          <img
            src={selectedImg.startsWith("img") ?  data?.attributes[selectedImg]?.data?.attributes?.url:selectedImg}
            alt=""
          />
        </div>
      </div>
      
        {/* <div
          className="flex"
          style={{ flexDirection: "row", justifyContent: "space-evenly" }}
        >
          {data?.attributes?.images?.data?.map((item, index) => { return <img className="img-mob" src={item.attributes.url} alt="" onClick={(e) => setSelectedImg(item.attributes.url)} /> })}
          <div>
        <img
          className="img-mob"
          src={data?.attributes?.img?.data?.attributes?.url}
          alt="product-image"
          onClick={(e) => setSelectedImg("img")}
        />
        </div>
        <div>
        <img
          className="img-mob"
          src={data?.attributes?.img2?.data?.attributes?.url}
          alt=""
          onClick={(e) => setSelectedImg("img2")}
        />
        </div>
        </div> */}
        <Grid container spacing={2}>
          {data?.attributes?.images?.data?.map((item, index) => { return <Grid item sm={4}>  <img className="img-mob" src={item.attributes.url} alt="" onClick={(e) => setSelectedImg(item.attributes.url)} /> </Grid>})}
          
          <Grid item sm={4}>
          <img
          className="img-mob"
          src={data?.attributes?.img?.data?.attributes?.url}
          alt="product-image"
          onClick={(e) => setSelectedImg("img")}
        />
          </Grid>
          <Grid item sm={4}>
          <img
          className="img-mob"
          src={data?.attributes?.img2?.data?.attributes?.url}
          alt=""
          onClick={(e) => setSelectedImg("img2")}
        />
          </Grid>
          
        </Grid>

    </div>
  );
  const renderForDesktop = () => (
    <>
      <div className="images">
        {data?.attributes?.images?.data?.map((item, index) => { return <img src={item.attributes.url} alt="" onClick={(e) => setSelectedImg(item.attributes.url)} /> })}
        <img
          src={data?.attributes?.img?.data?.attributes?.url}
          alt=""
          onClick={(e) => setSelectedImg("img")}
        />
        <img
          src={data?.attributes?.img2?.data?.attributes?.url}
          alt=""
          onClick={(e) => setSelectedImg("img2")}
        />
      </div>
      <div className="mainImg">
        <img
          src={selectedImg.startsWith("img") ?  data?.attributes[selectedImg]?.data?.attributes?.url:selectedImg}
          alt=""
        />
      </div>
    </>
  );
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            {isTabletOrMobile ? renderForMobile() : renderForDesktop()}
          </div>
          <div className="right" >
            {/* <h1 class="productTitle">{data?.attributes?.title}</h1> */}
            <Typography gutterBottom align="center" class="productTitle" color='inherit' >{data?.attributes?.title}</Typography>
            <span className="price">₹{data?.attributes?.price}</span>

            <div style={{display:"flex", gap:20}}>

              <label htmlFor="size" style={{ marginRight: 10 }}>Select Size</label >
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Select a size</option>
                {data != null ? Object.keys(data?.attributes?.Size?.size).map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                )) : ''}
              </select>
              <div > <PopupImageButton data={data}/></div>
            </div>

            <p>{data?.attributes?.desc}</p>
            <div className="quantity" style={{ paddingLeft: 5 }}>
              <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              <div class="quantityCenter"> <b> {quantity}</b></div>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            {/* <div className="links"  style={{ paddingLeft:55 }}>
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div> */}
            {/* <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div> */}
            {/* </div> */}
            <div className="info" >
              {/* <span>Vendor: Polo</span> */}
              {/* <span>Product Type: T-Shirt</span> */}
              {/* <span>Tag: T-Shirt, Women, Top</span> */}
            </div>
            <hr />
            <div className="info">
              <span>{data?.attributes?.description}</span>
              <span>{data?.attributes?.desc}</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
          <ShareIcons />
        </>
      )}
    </div>
  );
};

export default Product;