import './Style.css';
import React, { Component } from 'react'
import Button from '../../Components/Button/Index';
import Swiper from '../../Components/Swiper/Index';
import Header from '../../Components/Header/Index';
export default class SectionHome extends Component {
  render() {
    return (
      <section id="Home" mypage="Home" className="Home">
        <Header/>
       <div className="container">
         <div><Swiper/></div> 
        <div className="description">
          <h1> <span>مطعم </span> حلب </h1>
          <h2>أهلا وسهلا بزبائننا الكرام</h2>
          <p>انضموا إلينا لتستمتعوا بمأكولات لذيذة وجلسات ممتعة. نحن في انتظار زيارتكم<span>😊🍴</span></p>
          <Button name1="عرض قائمة الطعام" href="#Menu" ></Button>
        </div>
        
       </div>
      </section>
    )
  }
}
