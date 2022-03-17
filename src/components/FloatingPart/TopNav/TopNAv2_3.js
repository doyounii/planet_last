import React, { Component } from 'react';
import TopNav from '../TopNav.module.css'
import { AiOutlineMinus } from 'react-icons/ai';
import HistorySample from '../../History/History';
//지출 상단바 
class TopNav2_3 extends Component {
    render() {
      return (
        <div className={TopNav.backBtn}>
            <HistorySample></HistorySample>
            <div className={TopNav.navBar2}>
            <li><AiOutlineMinus className="icon" size="40" color="white" /></li>
            <li><AiOutlineMinus className="icon" size="40" color="white" /></li>
            <li><AiOutlineMinus className="icon" size="40" color="white" /></li>
            <li><AiOutlineMinus className="icon" size="40" color="#566479" /></li>
            <li><AiOutlineMinus className="icon" size="40" color="#566479" /></li>
            </div>
        </div>
      );
    }
  }

  export default TopNav2_3;