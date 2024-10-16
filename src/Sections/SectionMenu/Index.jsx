import Food from '../../Components/Food/Index';
import './Style.css';
import React, { Component } from 'react'
import img1 from '../../Asset/Img/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate.jpg';
import img2 from '../../Asset/Img/side-view-lula-kebab-with-onion-herbs-sumakh-grilled-vegetables-lavash-white-plate.jpg';
import img3 from '../../Asset/Img/azerbaijani-lule-kebab-lavash-bread-with-onion-green-salad.jpg';
import img4 from '../../Asset/Img/chicken-skewers-with-slices-apples-chili.jpg';
import img5 from '../../Asset/Img/grilled-chicken-with-pepper-tomato.jpg';
import img6 from '../../Asset/Img/lule-kebab-with-onions-pickles.jpg';
export default class SectionMenu extends Component {
  render() {
    return (
      <section id="Menu" mypage="Menu" className="Menu">
        <div className="">
          <h2>قائمة الطعام</h2>
          <div className="contienar">
            <Food url={img1} name="كبدة" price="55"/>
            <Food url={img2} name="كباب" price="60"/>
            <Food url={img3} name="فليه" price="75"/>
            <Food url={img4} name="شيش طاووط" price="40"/>
            <Food url={img5} name="مسحب" price="40"/>
            <Food url={img6} name=" كباب تركي" price="32"/>
          </div>
        </div>
      </section>
    )
  }
}
