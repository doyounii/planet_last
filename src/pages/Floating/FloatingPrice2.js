import React, { Component, useState } from "react";
import IncomeStyle from "./Float.module.css";
import { Link, useLocation } from "react-router-dom";
import TopNav2 from "../../components/FloatingPart/TopNav2";
import Dashboard2 from "../../components/FloatingPart/Dashboard2";
import InputDateStyle from "../../components/FloatingPart/InputDate.module.css";

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

function FloatingPrice2() {
  const [price, setprice] = useState("");
  const [disabled, setdisabled] = useState(true);
  const date = useLocation().state.date;

  const handlePriceValue = (e) => {
    console.log(price);
    setprice(e.target.value);
    setdisabled(price.length === 0 ? true : false);
  };

  const fetchFunc = () => {
    //백엔드로 데이터 보내기
    fetch("/api/expenditure/yui12@gmail.com/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        cost: price,
        date:
          "20" +
          date.slice(0, 2) +
          "-" +
          date.slice(3, 5) +
          "-" +
          date.slice(6, 8),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.token) {
          localStorage.setItem("wtw-token", response.token);
        }
      });
  };

  return (
    <div className={IncomeStyle.container}>
      <TopNav2></TopNav2>
      <Dashboard2></Dashboard2>

      <Content title="언제 쓰셨나요?"></Content>

      <Link to="/FloatingDate2" style={{ textDecoration: "none" }}>
        <h1>{date}</h1>
      </Link>

      <Content title="얼마 쓰셨나요?"></Content>

      <div className={InputDateStyle.inputPrice}>
        <input
          id="inputPrice"
          type="text"
          placeholder="0원"
          onChange={(e) => handlePriceValue(e)}
        />
      </div>

      <div className={IncomeStyle.bottomBtn2}>
        <button className={IncomeStyle.bottomBtnDisabled}>뒤로</button>
        <Link to="/ExpendType" state={{ date, price }}>
          <button
            className={IncomeStyle.bottomBtnActive}
            disabled={price.length !== 0 ? false : true}
          >
            다음
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FloatingPrice2;
