import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item,isTabletOrMobile }) => {
  if(isTabletOrMobile){
  return (

    <Link className="link" to={`/product/${item.id}`}>
     <div style={{width:'90%',padding:20,display: "inline-block"}}>
      <img 
      style={{objectFit:'cover',height:'100%',width:'100%'}}
      src={item.attributes?.img?.data?.attributes?.url}
      alt=""
      className="mainImg"
      />
       </div>
      </Link>

  )}
  return (


    <Link className="link" to={`/product/${item.id}`}>
      <div className="carde">
        <div className="imageg">
          {/* {item?.attributes.isNew && <span>New Season</span>} */}
          <img src={item?.attributes?.img?.data?.attributes?.url}
            alt=""
            className="mainImg"
          />
          {/* <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.product_images?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          /> */}
        </div>
        {/* <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div> */}
      </div>
    </Link>
  );
};

export default Card;
