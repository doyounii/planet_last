import React, { Component } from "react";
import { Link } from "react-router-dom";
import IncomeStyle from "./Float.module.css";
import TopNav from "../../components/FloatingPart/TopNav";
import Dashboard from "../../components/FloatingPart/Dashboard";
import SelectExpendType from "../../components/FloatingPart/SelectExpendType";

//Content
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

function ExpendType() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav process={2} total={5} />

      <Dashboard value={2} />

      <Content title="자산을 선택해주세요"></Content>

      <SelectExpendType></SelectExpendType>
    </div>
  );
}

export default ExpendType;
