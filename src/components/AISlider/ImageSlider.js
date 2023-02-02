import React, { useState, useEffect } from "react";
import img1 from '../../images/3-1.jpg'
import img2 from '../../images/3-2.jpg'
import img3 from '../../images/3-3.jpg'

const images = [
    {
      src: img1,
      alt: "Image 1",
      title: "Image 1 Title",
    },
    {
      src: img2,
      alt: "Image 2",
      title: "Image 2 Title",
    },
    {
      src: img3,
      alt: "Image 3",
      title: "Image 3 Title",
    },
  ];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="image-slider">
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
      <h3 className="image-title">{images[currentIndex].title}</h3>
      <button className="prev-btn" onClick={handlePrevClick}>
        {"<"}
      </button>
      <button className="next-btn" onClick={handleNextClick}>
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;
