import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import SliderImg1 from '../../images/SliderImg1.jpg'
import SliderImg2 from '../../images/SliderImg2.jpg'
import SliderImg3 from '../../images/SliderImg3.jpg'
import SliderImg4 from '../../images/SliderImg4.jpg'
import SliderImg5 from '../../images/SliderImg5.jpg'
import img1 from '../../images/ALF1051.JPG'
import img2 from '../../images/ALF1464.JPG'
import img3 from '../../images/ALF1601.JPG'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const data = [
  //   "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="containerSlider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <div className="SliderImages">
          <center>
        <img src={img1} alt=""   />
        <img src={SliderImg2} alt=""  />
        <img src={img2} alt=""  />
        <img src={SliderImg4} alt=""  />
        <img src={SliderImg5} alt=""  />
        </center>
        </div>
      </div>
      <div className="SliderIcons">
        <div className="SliderIcon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="SliderIcon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
