import './Style.css';
import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../Asset/Img/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate.jpg';
import img2 from '../../Asset/Img/side-view-lula-kebab-with-onion-herbs-sumakh-grilled-vegetables-lavash-white-plate.jpg';
import img3 from '../../Asset/Img/azerbaijani-lule-kebab-lavash-bread-with-onion-green-salad.jpg';
import img4 from '../../Asset/Img/chicken-skewers-with-slices-apples-chili.jpg';
import img5 from '../../Asset/Img/grilled-chicken-with-pepper-tomato.jpg';
import img6 from '../../Asset/Img/lule-kebab-with-onions-pickles.jpg';
export default class Button extends Component {
  render() {
    return (
      <div className="swiper1">
         <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
       
      >
        <SwiperSlide><img src={img1} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={img2} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={img3} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={img4} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={img5} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={img6} alt=""></img></SwiperSlide>

      </Swiper>
     </div>
    )
  }
}


