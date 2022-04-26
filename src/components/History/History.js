import React from "react";
import HistoryStyle from "./History.module.css";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

function HistorySample() {
  const navigate = useNavigate();

  return (
    //홈 화면으로 이동
    <button
      className={HistoryStyle.goBackBtn}
      onClick={() => {
        navigate("/#");
      }}
    >
      <IoCloseOutline className="icon" size="25" color="white" opacity="0.6" />
    </button>
  );
}

export default HistorySample;
