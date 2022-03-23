import React, { Component } from "react";
import { Link } from "react-router-dom";
import IncomeStyle from "./Float.module.css";
import TopNav from "../../components/FloatingPart/TopNav";
import SelectEnvir from "../../components/FloatingPart/SelectEnvir";

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

function ExpendLast() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav process={2} total={5} />

      <Content title="해당하는 항목이 있나요?"></Content>

      <SelectEnvir></SelectEnvir>

      <div className={IncomeStyle.bottomBtn3}>
        <button className={IncomeStyle.bottomBtnDisabled}>뒤로</button>
        <Link to="/">
          <button className={IncomeStyle.bottomBtnActive}>완료</button>
        </Link>
      </div>
    </div>
  );
}

export default ExpendLast;
