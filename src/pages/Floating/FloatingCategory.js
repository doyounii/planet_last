import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import IncomeStyle from "./Float.module.css";
import TopNav from "../../components/FloatingPart/TopNav";
import Dashboard from "../../components/FloatingPart/Dashboard";
import SelectCategory from "../../components/FloatingPart/SelectCategory";

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

function FloatingCategory() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav process={3} total={4} />

      <Dashboard value={1} />

      <Content title="해당하는 카테고리를 선택해주세요"></Content>

      <SelectCategory></SelectCategory>
    </div>
  );
}

export default FloatingCategory;
