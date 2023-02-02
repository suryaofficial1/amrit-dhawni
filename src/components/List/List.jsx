import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const List = ({ subCats, maxPrice, sort }) => {
   const catId = parseInt(useParams().id);
  let { id } = useParams();

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}`
    //  ${subCats.map(
    //   (item) =>`&[filters][sub_categories][id][$eq]=${item}`
    // )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    // // `/products?populate=*&[filters][categories][id]=${catId} ${subCats.map(
    //   (item) =>`&[filters][sub_categories][id][$eq]=${item}`
    // )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
     
      {loading
        ? "loading"
        : data?.length > 0 ? data?.map((item) => <Card item={item} key={item.id} />) : ''}
    </div>
  );
};

export default List;
