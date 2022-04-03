import React from "react";
import IncomeStyle from "./FloatingButton.module.css";

function FloatingButton({ prev, next, onClick, disabled }) {
  const onClickHandler = (btnType) => {
    onClick(btnType);
  };
  return (
    <div className={IncomeStyle.bottomBtn}>
      <button
        className={`${IncomeStyle.bottomBtnActive} ${IncomeStyle.bottomBtndisabled}`}
        onClick={() => onClickHandler(prev)}
      >
        {prev}
      </button>
      <button
        disabled={disabled}
        className={IncomeStyle.bottomBtnActive}
        onClick={() => onClickHandler(next)}
      >
        {next}
      </button>
    </div>
  );
}
FloatingButton.defaultProps = {
  prev: "뒤로",
  next: "다음",
};

export default FloatingButton;
