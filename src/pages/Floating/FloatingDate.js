import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import IncomeStyle from "./Float.module.css";
import TopNav from "../../components/FloatingPart/TopNav";
import Dashboard from "../../components/FloatingPart/Dashboard";
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

function FloatingDate() {
  const todayTime = () => {
    let now = new Date(); //현재 날짜 및 시간
    let todayYear = now.getFullYear();
    let todayMonth = ("0" + (now.getMonth() + 1)).slice(-2);
    let todayDate = ("0" + now.getDate()).slice(-2);

    return todayYear + "." + todayMonth + "." + todayDate;
  };

  const [date, setDate] = useState(todayTime().slice(2, 10));
  const [disabled, setDisabled] = useState(false);

  const handleChange = ({ target: { value } }) => setDate(value);

  return (
    <div className={IncomeStyle.container_date}>
      <TopNav process={1} total={4} />

      <Dashboard value={1} />

      <Content title="언제 받으셨나요?"></Content>

      <form
        action="/FloatingPrice"
        method="post"
        className={IncomeStyle.container_date}
      >
        <div className={InputDateStyle.inputData}>
          <input
            type="text"
            name="inputD"
            value={date}
            onChange={handleChange}
          />
        </div>

        <div className={IncomeStyle.bottomBtn}>
          <button className={IncomeStyle.bottomBtnDisabled}>뒤로</button>
          <Link to={"/FloatingPrice"} state={{ date }}>
            <button
              type="submit"
              disabled={disabled}
              className={IncomeStyle.bottomBtnActive}
            >
              다음
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FloatingDate;
