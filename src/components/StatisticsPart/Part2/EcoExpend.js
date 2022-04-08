import React from "react";
import "./EcoExpend.css";

const expendData = [
  {
    eomji: "🛒",
    exType: "마트",
    count: "120개",
    color: "#00c982",
    ncolor: "#8593B1",
  },
  {
    eomji: "🚗",
    exType: "교통",
    count: "80개",
    color: "#1466FE",
    ncolor: "#667492",
  },
  {
    eomji: "🎬",
    exType: "문화생활",
    count: "50개",
    color: "#083FA5",
    ncolor: "#475572",
  },
  {
    eomji: "💬",
    exType: "기타",
    count: "30개",
    color: "#728EC6",
    ncolor: "#303B51",
  },
  {
    eomji: "🛒",
    exType: "교육",
    count: "10개",
    color: "#C7D2E8",
    ncolor: "#8593B1",
  },
  {
    eomji: "💵",
    exType: "경조사/회비",
    count: "4개",
    color: "#C7D2E8",
    ncolor: "#8593B1",
  },
  {
    eomji: "🏥",
    exType: "의료/건강",
    count: "3개",
    color: "#C7D2E8",
    ncolor: "#8593B1",
  },
  {
    eomji: "🛏",
    exType: "가전",
    count: "2개",
    color: "#C7D2E8",
    ncolor: "#8593B1",
  },
  {
    eomji: "📱",
    exType: "통신",
    count: "1개",
    color: "#C7D2E8",
    ncolor: "#8593B1",
  },
  {
    eomji: "✏️",
    exType: "생필품",
    count: "0개",
    color: "#C7D2E8",
    ncolor: "#8593B1",
  },
  {
    eomji: "📚",
    exType: "교육",
    count: "0개",
    color: "#C7D2E8",
    ncolor: "#8593B1",
  },
  {
    eomji: "🧾",
    exType: "공과금",
    count: "0개",
    color: "#C7D2E8",
    ncolor: "#8593B1",
  },
];
function EcoExpend(props) {
  if (props.name === "eco") {
    return (
      <div className="statistics-box">
        <div className="day-box">
          <div className="day-breakdown-box">
            <p>
              지출 카테고리 <span>태그개수</span>
            </p>
            {expendData.map((data) => {
              return (
                <>
                  <div
                    className="day-breakdown-box-icon"
                    style={{ color: data.color }}
                  >
                    ● {data.eomji}
                  </div>
                  <h1>{data.exType}</h1>
                  <h2>{data.count}</h2>
                  <p></p>
                </>
              );
            })}

            <div className="more">
              <h1 style={{ color: "#C7D2E8" }}>● 더보기 5개</h1>
              <h2>2개</h2>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="statistics-box">
        <div className="day-box">
          <div className="day-breakdown-box">
            <p>
              지출 카테고리 <span>태그개수</span>
            </p>
            {expendData.map((data) => {
              return (
                <>
                  <div
                    className="day-breakdown-box-icon"
                    style={{ color: data.ncolor }}
                  >
                    ● {data.eomji}
                  </div>
                  <h1>{data.exType}</h1>
                  <h2>{data.count}</h2>
                  <p></p>
                </>
              );
            })}

            <div className="more">
              <h1 style={{ color: "#C7D2E8" }}>● 더보기 10개</h1>
              <h2>2개</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EcoExpend;
