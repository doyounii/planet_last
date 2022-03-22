import React, { useState } from "react";
import SelectEnvirStyle from "./SelectEnvir.module.css";
import SelectTag from "./SelectTag";
import { AiFillPlusCircle } from "react-icons/ai";

const array = [
  { id: 1, tag: "친환경 제품 구매", isEco: true },
  { id: 2, tag: "비건식당 방문", isEco: true },
  { id: 3, tag: "다회용기 사용", isEco: true },
  { id: 4, tag: "장바구니 / 개인가방 사용", isEco: true },
  { id: 5, tag: "중고거래 / 나눔 / 기부", isEco: true },
  { id: 6, tag: "일회용품 사용", isEco: false },
  { id: 7, tag: "비닐봉투 소비", isEco: false },
  { id: 8, tag: "식자재 낭비", isEco: false },
  { id: 9, tag: "기타", isEco: "etc" }
];

function SelectEnvir() {
  const [counter, setCounter] = useState(10);
  const [show, setShow] = useState(false);
  const [tagArr, setTagArr] = useState(array);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [selectedNeco, setSelectedNeco] = useState(new Set());
  const [selectedEtc, setSelectedEtc] = useState(new Set());

  function addTag() {
    setShow((show) => !show);
  }

  const checkedItemHandler = (id, isEco, isChecked) => {
    if (isEco === "etc") {
      if (isChecked) {
        selectedEtc.add(id);
        setSelectedEtc(selectedEtc);
      } else if (!isChecked && selectedEtc.has(id)) {
        selectedEtc.delete(id);
        setSelectedEtc(selectedEtc);
      }
    } else if (isEco) {
      if (isChecked) {
        checkedItems.add(id);
        setCheckedItems(checkedItems);
      } else if (!isChecked && checkedItems.has(id)) {
        checkedItems.delete(id);
        setCheckedItems(checkedItems);
      }
    } else {
      if (isChecked) {
        selectedNeco.add(id);
        setSelectedNeco(selectedNeco);
      } else if (!isChecked && selectedNeco.has(id)) {
        selectedNeco.delete(id);
        setSelectedNeco(selectedNeco);
      }
    }
    console.log("check, ", checkedItems);
    console.log("selectedNeco, ", selectedNeco);
    console.log("selectedEtc, ", selectedEtc);
  };
  const submitFunc = (value, eco) => {
    let tempArr = tagArr.concat();
    let ecoTag = eco === "친환경" ? true : eco === "반환경" ? false : "etc";
    tempArr.push({ id: counter, tag: value, isEco: ecoTag });
    setCounter(counter + 1);
    setTagArr(tempArr);
    addTag();
  };

  return (
    <section>
      <div className={SelectEnvirStyle.selectContainer}>
        {tagArr.map((item, idx) => {
          return (
            <SelectButton
              className={SelectEnvirStyle.sbutton}
              key={idx}
              item={item}
              onSelect={checkedItemHandler}
            />
          );
        })}
        <AiFillPlusCircle
          className={`${SelectEnvirStyle.plusCircle} ${
            show ? SelectEnvirStyle.pluswhite : SelectEnvirStyle.plusgrey
          }`}
          onClick={addTag}
        ></AiFillPlusCircle>
      </div>

      <div className={SelectEnvirStyle.newTag}>
        {show ? <SelectTag submitFunc={submitFunc} /> : <div></div>}
      </div>
    </section>
  );
}

export function SelectButton({ item, onSelect }) {
  const [checked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!checked);
    onSelect(target.value, item.isEco, !target.checked);
  };

  return (
    <button
      className={`${SelectEnvirStyle.sbutton} ${
        item.isEco !== "etc"
          ? item.isEco
            ? SelectEnvirStyle.eco
            : SelectEnvirStyle.neco
          : SelectEnvirStyle.etc
      } ${checked ? SelectEnvirStyle.checked : SelectEnvirStyle.nchecked}`}
      key={item.id}
      checked={checked}
      value={item.id}
      onClick={(e) => checkHandler(e)}
    >
      {item.tag}
    </button>
  );
}

export default SelectEnvir;
