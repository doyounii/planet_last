import React, { useState, useEffect } from "react";
import FloatingButton from "../buttons/FloatingButton";
// import "./Contents.css";
import { useOutSideRef } from "../OutsideRef";

function DatePrice({ propDate, propPrice, sendData }) {
  const [inputs, setInputs] = useState({ date: propDate, price: propPrice });
  const [focus, setFocus] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const refs = useOutSideRef();
  const { ref, up } = refs;

  const { date, price } = inputs;

  useEffect(() => {
    if (focus) {
      if (date.length === 8) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    } else {
      if (price.length !== 0) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [focus, date, price]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickHandler = (btnType) => {
    switch (btnType) {
      case "다음":
        if (focus) {
          setFocus(false);
        } else {
          sendData({ btnType: btnType, values: inputs });
        }
        break;
      case "뒤로":
        if (focus) {
          setFocus(false);
        }
        break;
      default:
        break;
    }
  };
  return (
    <div
      className={`shared-container date-price-container ${up ? "move" : ""}`}
    >
      <p className={`${up && focus ? "moveup" : ""}`}>언제 받으셨나요?</p>
      <div
        ref={ref}
        className={`input-data input-date ${up && focus ? "moveup" : ""}`}
        onClick={() => setFocus(true)}
      >
        <input
          id="inputDate"
          name="date"
          type="text"
          value={date}
          placeholder="00.00.00"
          onChange={onChange}
        />
      </div>
      {!focus && (
        <>
          <p>얼마 받으셨나요?</p>
          <div ref={ref} className="input-data input-price">
            <input
              id="inputPrice"
              name="price"
              type="number"
              value={price}
              placeholder="0원"
              onChange={onChange}
            />
          </div>
        </>
      )}

      <FloatingButton
        className={`date-btn-container ${up ? "move" : ""}`}
        onClick={onClickHandler}
        disabled={disabled}
      />
    </div>
  );
}

export default DatePrice;
