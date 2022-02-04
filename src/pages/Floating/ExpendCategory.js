import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNav from '../../components/FloatingPart/TopNav';
import Dashboard from '../../components/FloatingPart/Dashboard';
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
      <TopNav></TopNav>

      <Dashboard></Dashboard>

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
