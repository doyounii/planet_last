import React from "react";
import styled from "styled-components";
import { BsBoxArrowUpRight, BsWindowSidebar } from "react-icons/bs";
import { RiShareBoxLine } from "react-icons/ri";

const StyledEco = styled.div`
  .eco-day-box {
    width: 90%;
    margin: 5%;
    border-radius: 13px;
    background: rgba(255, 255, 255, 0.05);
    padding: 15px;
    font-size: 13px;
  }

  .eco-day {
    font-weight: 600;
    color: #00b978;
  }
  .gotobrowser {
    width: 15px;
    height: 15px;
    color: #63676f;
    float: right;
  }
`;

function EcoDay() {
  let ecoDay = "세계 오존층 보호의 날";
  const onClickLink = () => {
    window.open(
      `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${ecoDay}`,
      "_blank"
    );
  };
  return (
    <div className="eco-day-container">
      <StyledEco>
        <div className="eco-day-box">
          <span className="eco-text">오늘은 </span>
          <span className="eco-day">{ecoDay}</span>
          <span className="eco-text">이에요!</span>
          <RiShareBoxLine className="gotobrowser" onClick={onClickLink} />
        </div>
      </StyledEco>
    </div>
  );
}

export default EcoDay;