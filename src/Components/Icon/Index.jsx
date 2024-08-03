import './Style.css';
import React, { Component } from 'react'
import img2 from '../../Asset/Img/facebook_4494475.png';
import img3 from '../../Asset/Img/instagram_2111463.png';
import img4 from '../../Asset/Img/whatsapp_3670051.png';
export default class Icon extends Component {
  render() {
    return (
      <div className="icon">
      <a href="https://www.facebook.com/profile.php?id=100090998525382" target='self'><img src={img2} alt=""></img></a>
      <a href="https://instagram.com/halap_restaurant?igshid=OGQ5ZDc2ODk2ZA" target='self'><img src={img3} alt=""></img></a>
      <img src={img4} alt=""></img>
    </div>
    )
  }
}
