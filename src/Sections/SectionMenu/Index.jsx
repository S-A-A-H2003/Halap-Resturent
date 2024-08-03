import Food from '../../Components/Food/Index';
import './Style.css';
import React, { Component } from 'react'
import img1 from '../../Asset/Img/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate.jpg';
import img2 from '../../Asset/Img/side-view-lula-kebab-with-onion-herbs-sumakh-grilled-vegetables-lavash-white-plate.jpg';
import img3 from '../../Asset/Img/azerbaijani-lule-kebab-lavash-bread-with-onion-green-salad.jpg';
import img4 from '../../Asset/Img/chicken-skewers-with-slices-apples-chili.jpg';
import img5 from '../../Asset/Img/grilled-chicken-with-pepper-tomato.jpg';
import img6 from '../../Asset/Img/lule-kebab-with-onions-pickles.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default class SectionMenu extends Component {
  render() {
    return (
      <section id="Menu" mypage="Menu" className="Menu">
        <h2>قائمة الطعام</h2>
        <div className="contienar">
        <Swiper
   
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      
      >
      
        <SwiperSlide>
          <Food url={img1} name="كبدة" price="55"/>
        </SwiperSlide>
        <SwiperSlide>
           <Food url={img2} name="كباب" price="60"/>
        </SwiperSlide>
        <SwiperSlide>
         <Food url={img3} name="فليه" price="75"/>
        </SwiperSlide>
        <SwiperSlide>
          <Food url={img4} name="شيش طاووط" price="40"/>
        </SwiperSlide>
        <SwiperSlide>
           <Food url={img5} name="مسحب" price="40"/>
        </SwiperSlide>
        <SwiperSlide>
          <Food url={img6} name=" كباب تركي" price="32"/>
        </SwiperSlide>
      </Swiper>
  
        </div>
      
      </section>
    )
  }
}
