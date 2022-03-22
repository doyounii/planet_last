import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNav1_4 from '../../components/FloatingPart/TopNav/TopNav1_4';
import Dashboard from '../../components/FloatingPart/Dashboard';
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

function FloatingMemo() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav1_4></TopNav1_4>

      <Content title="남기고 싶은 메모를 작성해주세요"></Content>

      <SelectMemo></SelectMemo>

    </div>
  );
}

export default FloatingMemo;
