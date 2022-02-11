import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNav2 from '../../components/FloatingPart/TopNav2';
import SelectEnvir from '../../components/FloatingPart/SelectEnvir';

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

function ExpendLast() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav2></TopNav2>

      <Content title="해당하는 항목이 있나요?"></Content>

      <SelectEnvir></SelectEnvir>

      <div className={IncomeStyle.bottomBtn3}>
      <Link to="/ExpendMemo">
        <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
        </Link>
        <Link to="/">
          <button className={IncomeStyle.bottomBtnActive}>완료</button>
        </Link>
      </div>


    </div>
  );
}

export default ExpendLast;
