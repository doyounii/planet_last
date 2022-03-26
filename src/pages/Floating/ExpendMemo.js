import React, { Component } from "react";
import { Link } from "react-router-dom";
import IncomeStyle from "./Float.module.css";
import TopNav from "../../components/FloatingPart/TopNav";
import Dashboard from "../../components/FloatingPart/Dashboard";
import SelectExpendMemo from "../../components/FloatingPart/SelectExpendMemo";

class Content extends Component {
  render() {
    return (
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
      <TopNav process={4} total={5} />
      <Dashboard value={2} />

      <Content title="남기고 싶은 메모를 작성해주세요"></Content>

      <SelectExpendMemo></SelectExpendMemo>

      <div className={IncomeStyle.bottomBtn}>
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
