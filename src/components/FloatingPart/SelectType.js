import React, { useEffect, useState } from "react";
// import "./Contents.css";
import FloatingButton from "../buttons/FloatingButton";
const asset = [
  { type: "카드", emoji: "💳" },
  { type: "은행", emoji: "🏦" },
  { type: "현금", emoji: "💵" },
];
const incomeType = [
  { type: "급여", emoji: "💰" },
  { type: "용돈", emoji: "👛" },
  { type: "기타", emoji: "💬" },
];
const expendType = [
  { type: "식비", emoji: "🌭" },
  { type: "교통", emoji: "🚗" },
  { type: "문화생활", emoji: "🎬" },
  { type: "생필품", emoji: "✏️" },
  { type: "마트", emoji: "🛒" },
  { type: "교육", emoji: "📚" },
  { type: "통신", emoji: "📱" },
  { type: "의료/건강", emoji: "🏥" },
  { type: "경조사/회비", emoji: "💵" },
  { type: "가전", emoji: "🛏" },
  { type: "공과금", emoji: "🧾" },
  { type: "기타", emoji: "💬" },
];

const allCategory = [asset, incomeType, expendType];
const textSet = [
  "자산을 선택해 주세요",
  "카테고리를 선택해 주세요",
  "해당하는 카테고리를 선택해 주세요",
];

function SelectType({ propType, type, sendData, buttons }) {
  const [selected, setSelected] = useState({ type: "", emoji: "" });
  const [disabled, setDisabled] = useState(true);
  const array = allCategory[type];
  const text = textSet[type];

  useEffect(() => {
    const data = array.find((x) => x.type === propType.type);
    if (data !== undefined) {
      setSelected(propType);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [propType, array]);

  function handleButton(value) {
    if (value.type === selected.type) {
      setSelected({ type: "" });
      if (!buttons) sendData("");
      setDisabled(true);
    } else {
      setSelected(value);
      if (!buttons) sendData(value);
      setDisabled(false);
    }
  }

  const onClickHandler = (btnType) => {
    if (sendData) {
      sendData({ btnType: btnType, value: selected });
    }
  };

  return (
    <>
      <section className={`shared-container type-container wrap${type}`}>
        <p className="floating-type-text">{text}</p>
        <div className="type">
          {array.map((value, idx) => {
            return (
              <button
                key={idx}
                className={`type-box ${
                  selected.type === value.type ? "type-box-clicked" : ""
                }`}
                onClick={() => handleButton(value)}
              >
                <p className="type-box-emoji">{value.emoji}</p>
                <p className="type-box-text">{value.type}</p>
              </button>
            );
          })}
        </div>
      </section>
      {buttons && (
        <FloatingButton onClick={onClickHandler} disabled={disabled} />
      )}
    </>
  );
}

SelectType.defaultProps = {
  propType: { type: "", emoji: "" },
  buttons: true,
};

export default SelectType;
