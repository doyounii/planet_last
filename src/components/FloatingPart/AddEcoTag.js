import React, { useState, useEffect, useRef } from "react";
import SelectEcoStyle from "./SelectEco.module.css";
import { IoClose } from "react-icons/io5";
import FloatingButton from "../buttons/FloatingButton";

function SelectTag({ submitFunc, btn }) {
  const outSideRef = useRef(null);
  const array = [
    { id: 101, tag: "친환경", isEco: true },
    { id: 102, tag: "반환경", isEco: false },
    { id: 103, tag: "일반", isEco: "etc" },
  ];
  const [selectedTag, setSelectedTag] = useState(0);
  const [text, setText] = useState("");
  //태그 미입력 시 문구 띄우기
  const [request, setRequest] = useState(false);
  const [disabled, setDisabled] = useState(true);

  //여백 클릭 시 저장 진행
  useEffect(() => {
    function handleClickOutside(event) {
      if (outSideRef.current && !outSideRef.current.contains(event.target)) {
        addTag(event);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  //저장하는 함수
  const addTag = (e) => {
    e.preventDefault();
    if (text.length !== 0 && selectedTag !== 0) {
      submitFunc(text, selectedTag);
    } else {
      setRequest(true);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.target.value.length !== 0 && selectedTag !== 0) setDisabled(false);
    else setDisabled(true);
  };

  const onReset = () => {
    setText("");
  };

  const checkHandler = ({ target }) => {
    if (target.value === selectedTag) {
      setSelectedTag(0);
      setRequest(true);
      setDisabled(true);
    } else {
      setSelectedTag(target.value);
      setRequest(false);
      if (text !== 0) setDisabled(false);
    }
  };
  const onClickHandler = (btnType) => {
    switch (btnType) {
      case "취소":
        submitFunc("취소", "취소");
        break;
      case "다음":
        if (text.length !== 0 && selectedTag !== 0) {
          submitFunc(text, selectedTag);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div ref={outSideRef} className={SelectEcoStyle.addTagContainer}>
      <div className={SelectEcoStyle.coment1}>태그 직접 추가</div>
      <form className={SelectEcoStyle.inputMemo} onSubmit={addTag}>
        <input
          className={SelectEcoStyle.inputName}
          id="inputMemo"
          name="tagName"
          type="text"
          placeholder="내용을 입력하세요"
          onChange={handleChange}
          value={text}
        />
        <IoClose onClick={onReset} className={SelectEcoStyle.close}></IoClose>
      </form>

      <div className={SelectEcoStyle.coment2}>어떤 지출인가요?</div>

      <div className={SelectEcoStyle.selectTag}>
        {array.map((item) => {
          return (
            <button
              className={`${SelectEcoStyle.sbutton} ${
                item.isEco !== "etc"
                  ? item.isEco
                    ? SelectEcoStyle.eco
                    : SelectEcoStyle.neco
                  : SelectEcoStyle.etc
              } ${
                selectedTag === item.tag
                  ? SelectEcoStyle.checked
                  : SelectEcoStyle.nchecked
              }`}
              key={item.id}
              value={item.tag}
              onClick={(e) => checkHandler(e)}
            >
              {item.tag}
            </button>
          );
        })}
      </div>
      {btn && (
        <FloatingButton
          onClick={onClickHandler}
          disabled={disabled}
          prev={"취소"}
          next={"다음"}
        />
      )}
      {request && (
        <div className={SelectEcoStyle.coment3}>환경 태그를 선택해주세요</div>
      )}
    </div>
  );
}

SelectTag.defaultProps = {
  btn: true,
};

export default SelectTag;
