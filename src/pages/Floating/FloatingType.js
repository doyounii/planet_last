import React, { Component } from 'react';
import IncomeStyle from './Float.module.css';
import TopNav1_2 from '../../components/FloatingPart/TopNav/TopNav1_2';
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
      <TopNav1_2></TopNav1_2>

      <Dashboard></Dashboard>

      <Content title="자산을 선택해주세요"></Content>

      <SelectType></SelectType>

    </div>
  );
}

export default FloatingType;
