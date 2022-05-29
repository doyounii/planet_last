import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Modify.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import HistorySample from "../../components/History/HistoryBack";
import { format } from "date-fns";
import { FiEdit3 } from "react-icons/fi";

import DateHeader from "../../components/DateHeader";
import Calendar from "../../components/CalendarPart/CalendarBody";
import { Modal } from "../../components/CalendarPart/Modal";
import SelectType from "../../components/FloatingPart/SelectType";
import SelectEco from "../../components/FloatingPart/SelectEco";

function StatisticsModify() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setmode] = useState("");
  const data = useLocation().state;

  const [mdate, setMDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState("");
  const [type, setType] = useState({ type: "", emoji: "" });
  const [cate, setCate] = useState({ type: "", emoji: "" });
  const [memo, setMemo] = useState("");
  const [ecoList, setEcoList] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const fetchData = () => {
    if (data.item.income) {
      fetch(`/income/${data.item.id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "user1@naver.com",
          in_cost: parseInt(price),
          date: format(date, "yyyy-MM-dd"),
          inType: cate.type,
          inWay: type.type,
          memo: memo,
        }),
      });
    } else {
      fetch(`/expenditure/${data.item.id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "user1@naver.com",
          ex_cost: parseInt(price),
          date: format(date, "yyyy-MM-dd"),
          exType: cate.type,
          exWay: type.type,
          memo: memo,
          ecoDetail: ["친환경 제품 구매", "일회용품 사용", "기타"],
          userAdd: ["샤워 오래함"],
          eco: ["R"],
        }),
      });
    }
  };

  // fetch(`/income/new`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify({
  //     in_way: filter,
  //     in_type: cate,
  //     in_cost: price,
  //     memo: text,
  //     date:
  //       "20" +
  //       date.slice(0, 2) +
  //       "-" +
  //       date.slice(3, 5) +
  //       "-" +
  //       date.slice(6, 8),
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     if (response.token) {
  //       localStorage.setItem("wtw-token", response.token);
  //     }
  //   });

  useEffect(() => {
    console.log(data);
    if (data !== null) {
      const item = data.item;

      setDate(data.date);
      setPrice(item.cost);
      setType({ type: item.way, emoji: "" });
      setCate({ type: item.type, emoji: "" });
      setMemo(item.memo);
      if (item.ecoList !== null) setEcoList(item.ecoList);
    }
  }, [data]);

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
      case "eco":
        article = (
          <>
            <p className="modify-modal-title">태그</p>
            <SelectEco />
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
        <span className="modify-header-title">{cate.type}</span>
        <RiDeleteBin6Line className="modify-header-delete" />
      </div>
      <div className="modify-title">
        <p className="modify-content-title">
          {memo !== null || memo !== "" ? memo : cate}
        </p>
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
          <input
            className="modify-detail-value"
            value={
              ecoList.length !== 0 &&
              ecoList.map((value) => {
                return value.ecoDetail;
              })
            }
            onClick={() => openModal("eco")}
            readOnly
          />
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

      <button
        disabled={disabled}
        className="modify-save-btn"
        onClick={fetchData}
      >
        저장
      </button>
    </div>
  );
}

export default StatisticsModify;
