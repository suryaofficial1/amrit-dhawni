import { useState, useEffect } from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { sliderData } from "./slider-data";
import "./Slider.scss";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Link } from "react-router-dom";

const Slider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = props.sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    // console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    // console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
       auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
   
    <div className="sliderContainer">
          <KeyboardArrowLeftIcon color="inherit" className="arrow prev" onClick={prevSlide} />
          <KeyboardArrowRightIcon color="inherit" className="arrow next" onClick={nextSlide} />
          <div class="centerContainer">
          {props.sliderData.map((slide, index) => {
            return (
              <div className={index === currentSlide ? "slide current" : "slide"}
                key={index}>
                {index === currentSlide && (
                  <img src={slide.image} alt="slide" style={{ width: "100%" }} />
                )}
                <div class="centerTextTitle">
                  {slide.heading && <h2 className="imageTitle">{index === currentSlide ? slide.heading : ''}</h2>}
                  {index === currentSlide ?  <Link className="link" to={`${slide.url}`}> <button className="shopNowButton">  {slide.btnTitle} </button> </Link>: ''}
                </div>

              </div>
            )
          })}
          {/* <img src="https://i.ibb.co/58Mq6Mb/slide1.jpg" alt="Snow" style={{width:"100%"}}/>
          <div class="centerTextTitle">Centered</div> */}
          </div>
    </div>
  );
};

export default Slider;