import React, { Component } from "react";
import { Link } from "react-router-dom";
import IncomeStyle from "./Float.module.css";
import TopNav from "../../components/FloatingPart/TopNav";
import Dashboard from "../../components/FloatingPart/Dashboard";
import SelectMemo from "../../components/FloatingPart/SelectMemo";

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

function FloatingMemo() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav process={4} total={4} />
      <Dashboard value={1} />

      <Content title="남기고 싶은 메모를 작성해주세요"></Content>

      <SelectMemo></SelectMemo>
    </div>
  );
}

export default FloatingMemo;
