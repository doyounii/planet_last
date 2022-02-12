import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNav2_2 from '../../components/FloatingPart/TopNav/TopNav2_2 ';
import Dashboard2 from '../../components/FloatingPart/Dashboard2';
import SelectExpendType from '../../components/FloatingPart/SelectExpendType';

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

function ExpendType() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav2_2></TopNav2_2>

      <Dashboard2></Dashboard2>

      <Content title="자산을 선택해주세요"></Content>

      <SelectExpendType></SelectExpendType>

      


    </div>
  );
}

export default ExpendType;
