import React, { useState } from "react";
import "./Modify.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import HistorySample from "../../components/History/HistoryBack";
import { format } from "date-fns";
import { FiEdit3 } from "react-icons/fi";

import DateHeader from "../../components/DateHeader";
import Calendar from "../../components/CalendarPart/CalendarBody";
import { Modal } from "../../components/CalendarPart/Modal";
import SelectType from "../../components/FloatingPart/SelectType";

function StatisticsModify() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setmode] = useState("");

  const [mdate, setMDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState("");
  const [type, setType] = useState({ type: "", emoji: "" });
  const [cate, setCate] = useState({ type: "", emoji: "" });
  const [memo, setMemo] = useState("");
  const [disabled, setDisabled] = useState(true);

  const setArticle = (stype) => {
    let article = null;
    switch (stype) {
      case "date":
        article = (
          <>
            <p className="modify-modal-title">날짜</p>
            <DateHeader getDate={date} sendDate={(date) => setMDate(date)} />
            <Calendar
              selectedValue={date}
              currentValue={mdate}
              onChange={(date) => setDate(date)}
            />
          </>
        );
        break;
      case "type":
        article = (
          <>
            <p className="modify-modal-title">자산</p>
            <SelectType
              propType={type}
              type={0}
              buttons={false}
              sendData={(data) => {
                setType(data);
                closeModal();
                setDisabled(false);
              }}
            />
          </>
        );
        break;
      case "cate":
        article = (
          <>
            <p className="modify-modal-title">분류</p>
            <SelectType
              propType={cate}
              type={2}
              buttons={false}
              sendData={(data) => {
                setCate(data);
                closeModal();
              }}
            />
          </>
        );
        break;
      default:
        break;
    }
    return article;
  };

  const openModal = (stype) => {
    setmode(stype);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="modify-container">
      <div className="modify-header">
        <HistorySample />
        <span className="modify-header-title">식비</span>
        <RiDeleteBin6Line className="modify-header-delete" />
      </div>
      <div className="modify-title">
        <p className="modify-content-title">커피 테이크아웃</p>
        <FiEdit3 className="modify-edit-title-icon" />
      </div>
      <div className="modify-detail-block">
        {isModalOpen && (
          <Modal
            onClose={closeModal}
            maskClosable={true}
            visible={false}
            closable={true}
            background={"#202632"}
          >
            {setArticle(mode)}
          </Modal>
        )}
        <div className="modify-detail">
          <p className="modify-detail-title">날짜</p>
          <input
            className="modify-detail-value"
            value={format(date, "yy년 MM월 dd일")}
            onClick={() => openModal("date")}
            readOnly
          />
        </div>

        <div className="modify-detail">
          <p className="modify-detail-title">자산</p>
          <input
            className="modify-detail-value"
            value={type.type}
            onClick={() => openModal("type")}
            readOnly
          />
        </div>

        <div className="modify-detail">
          <p className="modify-detail-title">금액</p>
          <input
            className="modify-detail-value price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="modify-detail">
          <p className="modify-detail-title">분류</p>
          <input
            className="modify-detail-value"
            value={cate.type}
            onClick={() => openModal("cate")}
            readOnly
          />
        </div>

        <div className="modify-detail">
          <p className="modify-detail-title">태그</p>
          {/* 태그는 어떻게 받아올지 모르겠음 .. */}
          <div className="modify-tag">다회용기 사용</div>
          <div className="modify-tag">비닐봉투 소비</div>
        </div>

        <div className="modify-detail">
          <p className="modify-detail-title">메모</p>
          <input
            className="modify-detail-value"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        </div>
      </div>

      <button disabled={disabled} className="modify-save-btn">
        저장
      </button>
    </div>
  );
}

export default StatisticsModify;
