import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Importing styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetch from "../../../hooks/useFetch";
 import Card from "../TrendingSlider/Ncard";
import { useMediaQuery } from "react-responsive";
import '../TrendingSlider/Slider.css';



const NewSliderMobile = () => { 
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${1}`
  );


  if (isTabletOrMobile) {
    return (
      <>
        {/* <div className="top" style={{ textAlign: "center", width: "60%", justifyContent:"center"}}>
            <h1 style={{ paddingBottom: "20px", fontSize: "35px", paddingTop:"40px", fontWeight: "700" }}>Trending outfit of the week</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Quis ipsum.</p>
          </div> */}
        <div className="top" style={{ textAlign: "center" }}>
          <h1  class="trendingHeading" style={{ paddingBottom: "5px", fontWeight: "700", paddingTop: "30px" }}>Must have</h1>

          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse.</p> */}
        </div>
        <Swiper
          modules={[Navigation]}
          className="mySwiper"
          navigation={true}
          loopFillGroupWithBlank={true}
          slidesPerView={1}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}
        >
          {error
            ? "Something went wrong!"
            : loading
              ? "loading"
              :
              <>
                {data?.map((item, i) =>
                  <SwiperSlide>
                    <Card item={item} key={item.id} isTabletOrMobile={isTabletOrMobile} />
                  </SwiperSlide>
                )}

              </>
          }
        </Swiper>
      </>
    )
  }
  
};

export default NewSliderMobile;
