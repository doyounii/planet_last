import React, { useState, useEffect } from "react";
import FloatingButton from "../buttons/FloatingButton";
// import "./Contents.css";
import { useOutSideRef } from "../OutsideRef";
import { isValid, format, parseISO } from "date-fns";

function DatePrice({ propDate, propPrice, sendData }) {
  const [date, setDate] = useState(propDate);
  const [price, setPrice] = useState(propPrice);
  const [focus, setFocus] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const refs = useOutSideRef();
  const { ref, up } = refs;

  const onChange = (e) => {
    switch (e.target.name) {
      case "date":
        let temp = "20" + e.target.value.replace(/\./gi, "-");

        if (e.target.value.indexOf(".") !== e.target.value.lastIndexOf(".")) {
          setDate(e.target.value);
        }
        if (isValid(parseISO(temp))) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
        break;
      case "price":
        setPrice(e.target.value);
        if (price.length !== 0) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
        break;
      default:
        break;
    }
  };

  const onClickHandler = (btnType) => {
    switch (btnType) {
      case "다음":
        if (focus) {
          setFocus(false);
          if (price.length === 0) setDisabled(true);
        } else {
          sendData({ btnType: btnType, date: date, price: price });
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
