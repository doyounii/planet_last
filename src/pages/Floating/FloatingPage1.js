import React, { Component, useState } from 'react';
import IncomeStyle from './Float.module.css';
import { Link } from 'react-router-dom';
import TopNav from '../../components/FloatingPart/TopNav';
import Dashboard from '../../components/FloatingPart/Dashboard';
import IncomeDate from '../../components/FloatingPart/IncomeDate';
import InputPrice from '../../components/FloatingPart/InputPrice';

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

function FloatingPage1() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav></TopNav>
      <Dashboard></Dashboard>

      <Content title="언제 받으셨나요?"></Content>

      <Link to="/FloatingDate" style={{ textDecoration: 'none' }}>
        <h1><IncomeDate></IncomeDate></h1>
      </Link>

      <Content title="얼마 받으셨나요?"></Content>
      {/*Input Box 클릭 시 키보드 팝업 + 하단 버튼 구현하기*/}
      <InputPrice></InputPrice>

    </div>
  );
}

export default FloatingPage1;
