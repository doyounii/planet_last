import React, { Component } from "react";
import IncomeStyle from "./Float.module.css";
import { Link } from "react-router-dom";
import HistorySample from "../../components/History/History";
import TopNav from "../../components/FloatingPart/TopNav";
import Dashboard from "../../components/FloatingPart/Dashboard";
import IncomeDate from "../../components/FloatingPart/IncomeDate";
import InputPrice from "../../components/FloatingPart/InputPrice";

//Content
class Content extends Component {
  render() {
    return (
      <article>
        <p>{this.props.title}</p>
        <h1>{this.props.desc}</h1>
      </article>
    );
  }
}

function FloatingPage2() {
  return (
    <div className={IncomeStyle.container}>
      <div className={IncomeStyle.closeBtn}>
        <HistorySample />
      </div>

      <TopNav process={1} total={5} className={IncomeStyle.navigation} />

      <Dashboard value={2} />

      <Content title="언제 쓰셨나요?" />

      <Link to="/FloatingDate2" style={{ textDecoration: "none" }}>
        <h1>
          <IncomeDate />
        </h1>
      </Link>

      <Content title="얼마 쓰셨나요?" />
      <InputPrice />
    </div>
  );
}

export default FloatingPage2;
