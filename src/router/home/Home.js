import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Home.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import img1 from '../../assets/Screenshot 2024-11-20 172244.png'
import img2 from '../../assets/Screenshot 2024-11-20 172316.png'
import img3 from '../../assets/Screenshot 2024-11-20 172335.png'
import img4 from '../../assets/Screenshot 2024-11-20 172350.png'
import img5 from '../../assets/Screenshot 2024-11-20 172409.png'
import img6 from '../../assets/Screenshot 2024-11-20 172422.png'
import img7 from '../../assets/Screenshot 2024-11-20 172438.png'
import img8 from '../../assets/Screenshot 2024-11-20 172451.png'
import img9 from '../../assets/Screenshot 2024-11-20 172505.png'

// import required modules
import { Scrollbar } from 'swiper/modules';
function Home() {
  
  return (
    <div>
       <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='img1'  src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img1'  src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='img1' src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='img1' src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='img1' src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img1'  src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img1'  src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img1'  src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img1'  src={img9} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home