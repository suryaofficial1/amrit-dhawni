import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import "./Styles.css";


const DynamicSlider = ()=>{
    // const [users, setUsers] = useState([]);
     const [offsetRadius, setOffsetRadius] = useState(2);
    // const { data, loading, error } = useFetch(
    //     `/products?populate=*`
    //   );

    const [users, setUsers] = useState([]);

    const f = async () => {
        const res = await fetch(`https://amrit-dawani.onrender.com/api/products?populate=*&[filters][categories][id][$eq]=${1}`);
        const json = await res.json();
        setUsers(json.data);

    }; 
       
    React.useEffect(() => {
        f();
    }, []);
   
    var result = users.length > 0 ? users?.map(user => ({ key: user.id, content: <img src={user?.attributes?.img?.data?.attributes?.url} alt="1" /> })):'';

    return (
         <div style={{ width: "80%", height: "500px", margin: "0px auto 230px auto" }}>
         {/* <div style={{ width: "80%", height: "500px", marginBottom: 80 }}> */}
             <div className="top" style={{ textAlign: "center" }}>
        <h1 style={{ paddingBottom: "20px", fontWeight: "700", paddingTop: "45px" }} class="mustHaveHeading">Must Have</h1>

        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse.</p> */}
      </div>
            <Carousel
                slides={result}
                showNavigation='true'
                offsetRadius={offsetRadius}
                // animationConfig={config}
            >
            </Carousel>
        </div>

      );

}

export default DynamicSlider;