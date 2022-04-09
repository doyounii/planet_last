import React, { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import IncomeStyle from "./Float.module.css";
import TopNav from "../../components/FloatingPart/TopNav";
import HistorySample from "../../components/History/History";
import Dashboard from "../../components/FloatingPart/Dashboard";
import InputDateStyle from "../../components/FloatingPart/InputDate.module.css";

function Content({ title }) {
  return (
    <article>
      <p>{title}</p>
    </article>
  );
}
function IncomeLanding() {
  const [date, setDate] = useState(format(new Date(), "yy.MM.dd"));
  const [price, setprice] = useState("");
  const [activeDate, setActiveDate] = useState(false);
  const [disabled, setdisabled] = useState(true);

  const handlePriceValue = (e) => {
    console.log(price);
    setprice(e.target.value);
    setdisabled(e.target.value.length === 0 ? true : false);
  };

  const handleDateValue = (e) => {
    setDate(e.target.value);
  };
  // 일단 스트링으로 보내고 마지막 패치할 때 slice하기
  // console.log(format(parseISO(date), "yyyy-MM-dd"));

  return (
    <div className={IncomeStyle.container}>
      <div className={IncomeStyle.closeBtn}>
        <HistorySample />
      </div>
      <TopNav process={1} total={4} />
      <Dashboard value={1} />
      <Content title="언제 받으셨나요?" />
      <div
        className={InputDateStyle.inputPrice}
        onClick={() => setActiveDate(!activeDate)}
      >
        <input
          id="inputDate"
          type="text"
          value={date}
          onChange={(e) => handleDateValue(e)}
        />
      </div>

      {/* 현재 날짜 선택 중이면 얼마 받았는지는 안보이게, 버튼도 따로 동작 */}
      {!activeDate ? (
        <>
          <Content title="얼마 받으셨나요?" />

          <div className={InputDateStyle.inputPrice}>
            <input
              id="inputPrice"
              type="number"
              value={price}
              placeholder="0원"
              onChange={(e) => handlePriceValue(e)}
            />
          </div>
          <div className={IncomeStyle.bottomBtn}>
            <button className={IncomeStyle.bottomBtnDisabled}>뒤로</button>
            <Link to={"/incomeType"} state={{ date, price }}>
              <button
                className={IncomeStyle.bottomBtnActive}
                disabled={disabled}
              >
                다음
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className={IncomeStyle.bottomBtn}>
          <button className={IncomeStyle.bottomBtnDisabled}>뒤로</button>
          <button
            onClick={() => setActiveDate(!activeDate)}
            className={IncomeStyle.bottomBtnActive}
            disabled={date.length === 8 ? false : true}
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
}

export default IncomeLanding;
