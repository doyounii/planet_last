import React, { useState, useEffect } from "react";
import FloatingButton from "../buttons/FloatingButton";
// import "./Contents.css";
import { useOutSideRef } from "../OutsideRef";
import { isValid, format, parseISO } from "date-fns";
import DateHeader from "../DateHeader";
import Calendar from "../CalendarPart/CalendarBody";
import { Modal } from "../CalendarPart/Modal";

function DatePrice({ propDate, propPrice, sendData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState(propDate);
  const [price, setPrice] = useState(propPrice);
  const [focus, setFocus] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const refs = useOutSideRef();
  const { ref, up } = refs;

  useEffect(() => {
    if (price.length !== 0) setDisabled(false);
  }, []);

  const onChange = (e) => {
    setPrice(e.target.value);
    if (e.target.value.length !== 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  console.log(focus);

  const onClickHandler = (btnType) => {
    sendData({ btnType: btnType, date: date, price: price });
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFocus(false);
  };
  return (
    <div
      className={`shared-container date-price-container ${up ? "move" : ""}`}
    >
      <p className={`date-text ${focus ? "moveup" : ""}`}>언제 받으셨나요?</p>
      <div
        ref={ref}
        className={`input-data input-date ${up && focus ? "moveup" : ""}`}
        onClick={() => {
          setFocus(true);
          setIsModalOpen(true);
        }}
      >
        <input
          className="input-date-read"
          value={format(date, "yy.MM.dd")}
          readOnly
        />
      </div>

      {isModalOpen && (
        <Modal
          onClose={closeModal}
          maskClosable={true}
          visible={false}
          closable={true}
          background={"#202632"}
        >
          <p className="modify-modal-title">날짜</p>
          <DateHeader getDate={date} sendDate={(date) => setDate(date)} />
          <Calendar
            selectedValue={date}
            currentValue={date}
            onChange={(date) => setDate(date)}
          />
        </Modal>
      )}

      <p className="price-text">얼마 받으셨나요?</p>
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

      <FloatingButton
        className={`date-btn-container ${up ? "move" : ""}`}
        onClick={onClickHandler}
        disabled={disabled}
      />
    </div>
  );
}

export default DatePrice;
