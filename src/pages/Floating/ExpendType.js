import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNav2 from '../../components/FloatingPart/TopNav2';
import Dashboard2 from '../../components/FloatingPart/Dashboard2';
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

function ExpendType() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav2></TopNav2>

      <Dashboard2></Dashboard2>

      <Content title="자산을 선택해주세요"></Content>

      <SelectType></SelectType>

      <div className={IncomeStyle.bottomBtn3}>
        <Link to="">
        <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
        </Link>
        <Link to="/ExpendCategory">
          <button className={IncomeStyle.bottomBtnActive}>다음</button>
        </Link>
      </div>


    </div>
  );
}

export default ExpendType;
