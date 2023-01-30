import { useMediaQuery } from "react-responsive";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import useFetch from "../../../hooks/useFetch";
import Ncard from "../TrendingSlider/Ncard";
import SliderCard from "./SliderCard";
import "./Styles.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);



 function Newslider() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id][$eq]=${1}`
      );
  return (<> 
      <center>
    <div style={{width: "80%",marginBottom: 80}}>
    <div className="top" style={{ textAlign: "center" }}>
        <h1 style={{ paddingBottom: "50px", fontWeight: "700", paddingTop: "50px" }}>Must Have</h1>

        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse.</p> */}
      </div>
      <Swiper  style={{perspective:1800}}
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={4}
        grabCursor={true}
        //slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 900,
          modifier: 1,
        }}
        // pagination={{
        //   clickable: true
        // }}
         className="mySwiper"
      >
        
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : 
          <>
            {data?.map((item, i) => 
            <SwiperSlide>
                {/* <SliderCard item={item} key={item.id} isTabletOrMobile={isTabletOrMobile}/> */}
                <Ncard item={item} key={item.id} isTabletOrMobile={isTabletOrMobile} />
            </SwiperSlide>
            )}
            
          </>
          }
      </Swiper>
    </div>
      </center>
    </>
  );
}
export default Newslider;
