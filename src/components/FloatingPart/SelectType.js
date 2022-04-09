import React, { useState } from "react";
import SelectTypeStyle from "./SelectType.module.css";
import { Link, useLocation } from "react-router-dom";
import IncomeStyle from "../../pages/Floating/Float.module.css";

function SelectType() {
  const [type, setType] = useState("");
  const [emoji, setEmoji] = useState("");
  const [show1, setShow1] = useState(false);
  const date = useLocation().state.date;
  const price = useLocation().state.price;

  function handleButton(e, value) {
    setType(value.type);
    setEmoji(value.emoji);
    setShow1((show1) => !show1);
  }
  console.log(show1);

  const contentArr = [
    { type: "카드", emoji: "💳" },
    { type: "은행", emoji: "🏦" },
    { type: "현금", emoji: "💵" },
  ]; //&#128179; , &#127974; ,&#128181;

  return (
    <section className={SelectTypeStyle.type}>
      <div className={SelectTypeStyle.typeContainer}>
        {contentArr.map((value, idx) => {
          return (
            <button
              key={idx}
              className={` ${SelectTypeStyle.type_box} ${
                type === value.type && show1
                  ? SelectTypeStyle.type_box_clicked
                  : ""
              }`}
              onClick={(e) => handleButton(e, value)}
            >
              <p>{value.emoji}</p>
              <div className={SelectTypeStyle.type_box_text}>{value.type}</div>
            </button>
          );
        })}
      </div>

      <div className={SelectTypeStyle.bottomBtn3}>
        <Link to="/FloatingPrice">
          <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
        </Link>
        <Link to="/FloatingCategory" state={{ date, price, type }}>
          <button
            disabled={!show1 ? true : false}
            className={IncomeStyle.bottomBtnActive}
          >
            다음
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SelectType;
