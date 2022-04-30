import React, { useState, useEffect, useRef } from "react";
import SelectEcoStyle from "./SelectEco.module.css";
import { IoClose } from "react-icons/io5";

function SelectTag({ submitFunc }) {
  const outSideRef = useRef(null);
  const array = [
    { id: 101, tag: "친환경", isEco: true },
    { id: 102, tag: "반환경", isEco: false },
    { id: 103, tag: "일반", isEco: "etc" },
  ];
  //선택한 태그(0 또는 환경 태그 이름(친환경/반환경/일반))
  const [selectedTag, setSelectedTag] = useState(0);
  // 태그 이름
  const [text, setText] = useState("");
  //태그 미입력 시 문구 띄우기
  const [request, setRequest] = useState(false);

  //여백 클릭 시 저장 진행
  useEffect(() => {
    function handleClickOutside(event) {
      if (outSideRef.current && !outSideRef.current.contains(event.target)) {
        console.log("click");
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
    console.log(text);
    if (text.length !== 0 && selectedTag !== 0) {
      //텍스트/태그 둘 다 있으면 저장
      submitFunc(text, selectedTag);
    } else {
      //아니면 뭐 달라고 띄우기
      setRequest(true);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };

  const checkHandler = ({ target }) => {
    console.log(target);
    if (target.value === selectedTag) {
      setSelectedTag(0);
    } else {
      setSelectedTag(target.value);
    }
  };

  return (
    <section>
      <div ref={outSideRef} className={SelectEcoStyle.tag}>
        <div className={SelectEcoStyle.coment1}>태그 직접 추가</div>
        <form className={SelectEcoStyle.inputMemo} onSubmit={addTag}>
          <input
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
        {request && (
          <div className={SelectEcoStyle.coment3}>환경 태그를 선택해주세요</div>
        )}
      </div>
    </section>
  );
}

export default SelectTag;
