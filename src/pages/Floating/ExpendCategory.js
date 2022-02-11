import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNav2 from '../../components/FloatingPart/TopNav2';
import Dashboard2 from '../../components/FloatingPart/Dashboard2';
import SelectExpendCategory from '../../components/FloatingPart/SelectExpendCategory';


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

function ExpendCategory() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav2></TopNav2>

      <Dashboard2></Dashboard2>

      <SelectExpendCategory></SelectExpendCategory>

      <div className={IncomeStyle.bottomBtn3}>
        <Link to="/ExpendType">
        <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
        </Link>
        <Link to="/ExpendMemo">
          <button className={IncomeStyle.bottomBtnActive}>다음</button>
        </Link>
      </div>
    </div>
  );
}

export default ExpendCategory;
