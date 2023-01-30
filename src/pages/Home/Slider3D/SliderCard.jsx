import React from "react";
import { Link } from "react-router-dom";

const SliderCard = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`} >
          <img src={item?.attributes?.img?.data?.attributes?.url}alt="" style={{ height:600, width:350}}/>
    </Link>
  );
};

export default SliderCard;
