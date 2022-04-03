import React, { useState, useEffect } from "react";
import FloatingButton from "../buttons/FloatingButton";
import { CgClose } from "react-icons/cg";
import { useOutSideRef } from "../OutsideRef";

function Memo({ propType, sendData }) {
  const [memo, setMemo] = useState("");
  const [disabled, setDisabled] = useState(true);
  const refs = useOutSideRef();
  const { ref, up } = refs;

  const onClickHandler = (btnType) => {
    sendData({ btnType: btnType, memo: memo });
  };
  const handleChange = (e) => {
    if (e.target.value === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setMemo(e.target.value);
  };
  const onReset = () => {
    setMemo("");
  };
  return (
    <section className={`shared-container memo-container ${up ? "move" : ""}`}>
      남기고 싶은 메모를 작성해 주세요
      <div className="type">
        <div className={`type-box type-box-clicked`}>
          <p className="type-box-emoji">{propType.emoji}</p>
          <p className="type-box-text">{propType.type}</p>
        </div>
      </div>
      <div ref={ref} className="input-data input-memo">
        <input
          id="inputMemo"
          type="text"
          placeholder="ex) 스타벅스 아메리카노"
          onChange={handleChange}
          value={memo}
        />
        <CgClose onClick={onReset} className="close" />
      </div>
      <FloatingButton
        className={`memo-btn-container ${up ? "move" : ""}`}
        onClick={onClickHandler}
        disabled={disabled}
      />
      <div className="memo-skip-btn" onClick={() => onClickHandler("다음")}>
        넘어갈래요
      </div>
    </section>
  );
}

export default Memo;
