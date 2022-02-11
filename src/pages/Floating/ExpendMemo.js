import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNav2_4 from '../../components/FloatingPart/TopNav/TopNav2_4';
import SelectMemo from '../../components/FloatingPart/SelectMemo';

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

function ExpendMemo() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav2_4></TopNav2_4>

      <Content title="남기고 싶은 메모를 작성해주세요"></Content>

      <SelectMemo></SelectMemo>

      <div className={IncomeStyle.bottomBtn3}>
      <Link to="/ExpendCategory">
        <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
        </Link>
        <Link to="/ExpendLast">
          <button className={IncomeStyle.bottomBtnActive}>다음</button>
        </Link>
      </div>


    </div>
  );
}

export default ExpendMemo;
