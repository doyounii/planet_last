import React, { useState, useEffect } from "react";
import SelectEcoStyle from "./SelectEco.module.css";
import AddEcoTag from "./AddEcoTag";
import FloatingButton from "../buttons/FloatingButton";
import { AiFillPlusCircle } from "react-icons/ai";
// import "./Contents.css";

const array = [
  { id: 1, tag: "친환경 제품 구매", eco: "G" },
  { id: 2, tag: "비건식당 방문", eco: "G" },
  { id: 3, tag: "다회용기 사용", eco: "G" },
  { id: 4, tag: "장바구니 / 개인가방 사용", eco: "G" },
  { id: 5, tag: "중고거래 / 나눔 / 기부", eco: "G" },
  { id: 6, tag: "일회용품 사용", eco: "R" },
  { id: 7, tag: "비닐봉투 소비", eco: "R" },
  { id: 8, tag: "식자재 낭비", eco: "R" },
  { id: 9, tag: "기타", eco: "N" },
];

function SelectEnvir({ sendData, propData, buttons }) {
  const [counter, setCounter] = useState(10);
  const [show, setShow] = useState(false);
  const [tagArr, setTagArr] = useState(array);
  const [selectedEco, setSelectedEco] = useState(new Set());
  const [selectedNeco, setSelectedNeco] = useState(new Set());
  const [selectedEtc, setSelectedEtc] = useState(new Set());
  const [disabled, setDisabled] = useState(true);

  function addTag() {
    setShow((show) => !show);
  }

  useEffect(() => {
    // if (propData.ecoTag.length > 0) {
    //   propData.ecoTag.map((data) => {
    //     if (data.id > 9) {
    //       submitFunc(data.tag, data.eco);
    //       setShow(false);
    //     }
    //     checkedItemHandler(data, true);
    //   });
    // }
  }, []);

  const checkedItemHandler = (item, isChecked) => {
    if (item.eco === "N") {
      if (isChecked) {
        selectedEtc.add(item);
        setSelectedEtc(selectedEtc);
      } else if (!isChecked && selectedEtc.has(item)) {
        selectedEtc.delete(item);
        setSelectedEtc(selectedEtc);
      }
    } else if (item.eco === "G") {
      if (isChecked) {
        selectedEco.add(item);
        setSelectedEco(selectedEco);
      } else if (!isChecked && selectedEco.has(item)) {
        selectedEco.delete(item);
        setSelectedEco(selectedEco);
      }
    } else {
      if (isChecked) {
        selectedNeco.add(item);
        setSelectedNeco(selectedNeco);
      } else if (!isChecked && selectedNeco.has(item)) {
        selectedNeco.delete(item);
        setSelectedNeco(selectedNeco);
      }
    }
    if (
      selectedEco.size !== 0 ||
      selectedNeco.size !== 0 ||
      selectedEtc.size !== 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    if (!buttons) {
      sendData([selectedEco, selectedNeco, selectedEtc]);
    }
  };
  const submitFunc = (value, eco) => {
    if (value !== "취소") {
      let tempArr = tagArr.concat();
      let ecoTag = eco === "친환경" ? "G" : eco === "반환경" ? "R" : "N";
      tempArr.push({ id: counter, tag: value, eco: ecoTag });
      setCounter(counter + 1);
      setTagArr(tempArr);
    }

    addTag();
  };
  const onClickHandler = (btnType) => {
    switch (btnType) {
      case "취소":
        setShow(false);
        break;
      case "다음":
        break;
      default:
        sendData({
          btnType: btnType,
          data: [selectedEco, selectedNeco, selectedEtc],
        });
        break;
    }
  };

  return (
    <>
      <section className={`select-eco-container ${show ? "move" : ""}`}>
        <div className="select-eco-tag-container">
          {tagArr.map((item, idx) => {
            return (
              <SelectButton
                key={idx}
                item={item}
                onSelect={checkedItemHandler}
              />
            );
          })}
          <AiFillPlusCircle
            className={`select-eco-plus-circle ${
              show ? "pluswhite" : "plusgrey"
            }`}
            onClick={addTag}
          ></AiFillPlusCircle>
        </div>

        {show && <AddEcoTag submitFunc={submitFunc} btn={buttons} />}
      </section>

      {buttons && !show ? (
        <>
          <FloatingButton
            className="select-eco-btn"
            onClick={onClickHandler}
            disabled={disabled}
            prev={"뒤로"}
            next={"완료"}
          />
          <div className="memo-skip-btn" onClick={() => onClickHandler("다음")}>
            넘어갈래요
          </div>
        </>
      ) : null}
    </>
  );
}

SelectEnvir.defaultProps = {
  buttons: true,
};

export function SelectButton({ item, onSelect, check }) {
  const [checked, setChecked] = useState(check);

  const checkHandler = ({ target }) => {
    setChecked(!checked);
    onSelect(item, !target.checked);
  };

  return (
    <button
      className={`${SelectEcoStyle.sbutton} ${
        item.eco === "G"
          ? SelectEcoStyle.eco
          : item.eco === "R"
          ? SelectEcoStyle.neco
          : SelectEcoStyle.etc
      } ${checked ? SelectEcoStyle.checked : SelectEcoStyle.nchecked}`}
      key={item.id}
      checked={checked}
      value={item.tag}
      onClick={(e) => checkHandler(e)}
    >
      {item.tag}
    </button>
  );
}

export default SelectEnvir;
