import React, { Component, useState } from 'react';
import IncomeStyle from './Float.module.css';
import { Link } from 'react-router-dom';
import TopNav from '../../components/FloatingPart/TopNav';
import Dashboard from '../../components/FloatingPart/Dashboard';
import IncomeDate from '../../components/FloatingPart/IncomeDate';
import InputDateStyle from "../../components/FloatingPart/InputDate.module.css";

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
  const [price, setprice] = useState("");
  const [disabled, setdisabled] = useState(true);
  const [date, setData] = useState("");

  const handlePriceValue = (e) => {
    console.log(price);
    setprice(e.target.value);
    setdisabled(price.length === 0 ? true : false);
  };

  return (
    <div className={IncomeStyle.container}>
      <TopNav></TopNav>
      <Dashboard></Dashboard>

      <Content title="언제 받으셨나요?"></Content>

      <Link to="/FloatingDate" style={{ textDecoration: 'none' }}>
        <h1><IncomeDate></IncomeDate></h1>
      </Link>

      <Content title="얼마 받으셨나요?"></Content>
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
        <Link to={"/FloatingType"} state={{ date, price }}>
          <button className={IncomeStyle.bottomBtnActive}
          disabled={price.length !== 0 ? false : true}>다음</button>
        </Link>
      </div>
    </div>
  );
}

export default FloatingPage1;
