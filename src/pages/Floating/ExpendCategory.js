import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNAv2_3 from '../../components/FloatingPart/TopNav/TopNAv2_3';
import Dashboard2 from '../../components/FloatingPart/Dashboard2';
import SelectExpendCategory from '../../components/FloatingPart/SelectExpendCategory';



function ExpendCategory() {
  return (
    <div className={IncomeStyle.container}>
      <TopNAv2_3></TopNAv2_3>

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
