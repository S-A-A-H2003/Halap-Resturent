import './Style.css';
import React, { Component } from 'react'
import img1 from '../../Asset/Img/Logo.png';
import img2 from '../../Asset/Img/menu.png';
import Icon from '../Icon/Index';
export default class Header extends Component { 
  state = {
      isopen:'close',
    }
    open=()=>{
      this.setState({isopen:'open'});
     
  }
  close=()=>{
    this.setState({isopen:'close'});
   
}


  render() {
 
    return (
      <header className= {this.state.isopen}>
        <Icon/>
        <div className="list">
          <ul>
            <li><a href="#Home">الرئيسية</a></li>
            <li><a href="#Menu">قائمةالطعام</a></li>
            <li><img src={img1} alt="حلب"></img></li>
            <li><a href="#WhoWe">من نحن </a></li>
            <li><a href="#ContentUs">تواصل معنا</a></li>
            <li className="close_menu" onClick={this.close}>×</li>
          </ul>
        </div>
        <div className="menu" onClick={this.open}><img src={img2} alt="+" ></img></div>
        
      </header>
    )
  }
}
