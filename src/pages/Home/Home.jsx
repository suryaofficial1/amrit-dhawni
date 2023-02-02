import React from 'react'
import Appointment from '../../Comman/Appointment/Appointment'
import BridesWear from '../../Comman/BridesWear/BridesWear'
import ImageSlider from '../../Comman/demoSlider/ImageSlider'
import GroomsWear from '../../Comman/GroomsWear/GroomsWear'
import Shoes from '../../Comman/Shoes/Shoes'
// import Slider from '../../Comman/Slider/oneSlider/Slider'
// import MansSlider from '../../Comman/GroomsWear/GroomsWear'
import Tuxedos from '../../Comman/tuxedos/Tuxedos'
import ShareIcons from '../../components/shareIcons/ShareIcons'
// import Slider from '../../components/Slider/Slider'
import img1 from '../../images/2-1.jpg'
import img2 from '../../images/2-2.jpg'
import "./Home.scss"

const Home = () => {
  
const sliderData = [
  {
    image: img1,
    title: "Sherwani's",
    btnTitle:"Shop Now"
  },
  {
    image: img2,
    title: "Sherwani's",
    btnTitle:"Shop Now"
  },
];
  return (
    <div className='home'>
      {/* Adding heading */}
      {/* <Heading text="Amrit Dawani" /> */}
      {/* <NewSlider /> */}

{/* <NewSlider /> */}
      {/* <Slider /> */}
     <div style={{ marginTop: 65}}> <Tuxedos /></div>  
      <GroomsWear />

      <BridesWear />

      <Shoes />

      <Appointment />
{/* <Slider /> */}





    {/* <Slider /> */}
    {/* <Antd /> */}
      {/* <HomePageSlider /> */}
      {/* <Slider /> */}
      {/* <Hidden only="xs">
        <Newslider />
      </Hidden>
      <Hidden smUp>
        <NewSliderMobile />
      </Hidden>
      <Shoeslide />
      <TrendingSlide />  */}
      {/* <Imagegallery /> */}
      <ShareIcons />
      {/* <ImageSlider images={sliderData} /> */}
    </div>
  )
}

export default Home