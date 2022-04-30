import React from "react";
import HistoryStyle from "./ToHome.module.css";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

function HistoryToHome() {
  const navigate = useNavigate();

  return (
    //홈 화면으로 이동
    <button
      className={HistoryStyle.goHomeBtn}
      onClick={() => {
        console.log("clicked!!");
        navigate("/", { replace: true });
      }}
    >
      <IoCloseOutline className="icon" size="25" color="white" opacity="0.6" />
    </button>
  );
}

export default HistoryToHome;
