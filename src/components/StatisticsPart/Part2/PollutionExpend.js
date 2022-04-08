import React from "react";
// import "../Statistics.css";

function PollutionExpend() {
  return (
    <div className="statistics-box">
      <div className="drop-box"></div>

      <div className="day-box">
        <div className="day-breakdown-box">
          <p>지출 카테고리</p>
          <p>태그개수</p>

          <div className="day-breakdown-box-icon" style={{ color: "#8593B1" }}>
            ● 🛒
          </div>
          <h1>마트</h1>
          <h2>120개</h2>
          <p></p>

          <div className="day-breakdown-box-icon" style={{ color: "#667492" }}>
            ● 🚗
          </div>
          <h1>교통</h1>
          <h2>80개</h2>
          <p></p>

          <div className="day-breakdown-box-icon" style={{ color: "#475572" }}>
            ● 🎬
          </div>
          <h1>문화생활</h1>
          <h2>50개</h2>
          <p></p>

          <div className="day-breakdown-box-icon" style={{ color: "#303B51" }}>
            ● 💬
          </div>
          <h1>기타</h1>
          <h2>30개</h2>
          <p></p>

          <div className="more">
            <h1 style={{ color: "#C7D2E8" }}>● 더보기 5개</h1>
            <h2>20개</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PollutionExpend;
