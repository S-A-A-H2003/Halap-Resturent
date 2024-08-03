import './Style.css';
import React, { Component } from 'react'
import SectionHome from '../../Sections/SectionHome/Index';
import SectionMenu from '../../Sections/SectionMenu/Index';
import SectionWhoWe from '../../Sections/SectionWhoWe/Index';
import SectionContentUs from '../../Sections/SectionContentUs/Index';
export default class Page1 extends Component {
  render() {
    return (
      <div>
        <SectionHome/>
        <SectionMenu/>
        <SectionWhoWe/>
        <SectionContentUs/>
      </div>
    )
  }
}
