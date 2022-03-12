import React, { Component } from 'react';
import TopNav from '../TopNav.module.css';
import { AiOutlineMinus } from 'react-icons/ai';
import HistorySample from '../../History/History';
//수입 상단바 
class TopNav1_4 extends Component {
    render() {
      return (
        <div className={TopNav.backBtn}>
            <HistorySample></HistorySample>
            <div className={TopNav.navBar}>
            <li><AiOutlineMinus className="icon" size="40" color="white" /></li>
            <li><AiOutlineMinus className="icon" size="40" color="white" /></li>
            <li><AiOutlineMinus className="icon" size="40" color="white" /></li>
            <li><AiOutlineMinus className="icon" size="40" color="white" /></li>
            </div>
        </div>
      );
    }
  }

  export default TopNav1_4;