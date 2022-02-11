import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNav1_3 from '../../components/FloatingPart/TopNav/TopNAv1_3';
import Dashboard from '../../components/FloatingPart/Dashboard';
import SelectCategory from '../../components/FloatingPart/SelectCategory';


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

function FloatingCategory() {

  const filter = useLocation();

  console.log(filter);

  return (
    <div className={IncomeStyle.container}>
      <TopNav1_3></TopNav1_3>

      <Dashboard></Dashboard>

      <Content title="해당하는 카테고리를 선택해주세요"></Content>

      <SelectCategory></SelectCategory>

      {filter.state}

      <div className={IncomeStyle.bottomBtn3}>
        <Link to="/FloatingType">
        <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
        </Link>
        <Link to="/FloatingMemo">
          <button className={IncomeStyle.bottomBtnActive}>다음</button>
        </Link>
      </div>
    </div>
  );
}

export default FloatingCategory;
