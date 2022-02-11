import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNav from '../../components/FloatingPart/TopNav';
import Dashboard from '../../components/FloatingPart/Dashboard';
import SelectType from '../../components/FloatingPart/SelectType';


//Content
class Content extends Component {
  render(){
    return(
      <article>
        <p>{this.props.title}</p>
        <h2>{this.props.desc}</h2>
      </article>
    );
  }
}

function FloatingType() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav></TopNav>

      <Dashboard></Dashboard>

      <Content title="자산을 선택해주세요"></Content>

      <SelectType></SelectType>

  
      
     

    </div>
  );
}

export default FloatingType;
