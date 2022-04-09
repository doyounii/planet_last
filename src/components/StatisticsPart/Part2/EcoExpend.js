import React from "react";
import { Link } from "react-router-dom";
import "./EcoExpend.css";

const EcoExpendData = [
  {
    emoji: "🛒",
    exType: "마트",
    count: "120개",
    color: "#00c982",
  },
  {
    emoji: "🚗",
    exType: "교통",
    count: "80개",
    color: "#1466FE",
  },
  {
    emoji: "🎬",
    exType: "문화생활",
    count: "50개",
    color: "#083FA5",
  },
  {
    emoji: "💬",
    exType: "기타",
    count: "30개",
    color: "#728EC6",
  },
  {
    emoji: "🛒",
    exType: "교육",
    count: "10개",
    color: "#C7D2E8",
  },
  {
    emoji: "💵",
    exType: "경조사/회비",
    count: "4개",
    color: "#C7D2E8",
  },
  {
    emoji: "🏥",
    exType: "의료/건강",
    count: "3개",
    color: "#C7D2E8",
  },
  {
    emoji: "🛏",
    exType: "가전",
    count: "2개",
    color: "#C7D2E8",
  },
  {
    emoji: "📱",
    exType: "통신",
    count: "1개",
    color: "#C7D2E8",
  },
  {
    emoji: "✏️",
    exType: "생필품",
    count: "0개",
    color: "#C7D2E8",
    ncolor: "#8593B1",
  },
  {
    emoji: "📚",
    exType: "교육",
    count: "0개",
    color: "#C7D2E8",
  },
  {
    emoji: "🧾",
    exType: "공과금",
    count: "0개",
    color: "#C7D2E8",
  },
];

const NEcoExpendData = [
  {
    emoji: "🛒",
    exType: "마트",
    count: "120개",
    color: "#8593B1",
  },
  {
    emoji: "🚗",
    exType: "교통",
    count: "80개",
    color: "#667492",
  },
  {
    emoji: "🎬",
    exType: "문화생활",
    count: "50개",
    color: "#475572",
  },
  {
    emoji: "💬",
    exType: "기타",
    count: "30개",
    color: "#728EC6",
    ncolor: "#303B51",
  },
  {
    emoji: "🛒",
    exType: "교육",
    count: "10개",
    color: "#8593B1",
  },
  {
    emoji: "💵",
    exType: "경조사/회비",
    count: "4개",
    color: "#8593B1",
  },
  {
    emoji: "🏥",
    exType: "의료/건강",
    count: "3개",
    color: "#8593B1",
  },
  {
    emoji: "🛏",
    exType: "가전",
    count: "2개",
    color: "#8593B1",
  },
  {
    emoji: "📱",
    exType: "통신",
    count: "1개",
    color: "#8593B1",
  },
  {
    emoji: "✏️",
    exType: "생필품",
    count: "0개",
    color: "#8593B1",
  },
  {
    emoji: "📚",
    exType: "교육",
    count: "0개",
    color: "#8593B1",
  },
  {
    emoji: "🧾",
    exType: "공과금",
    count: "0개",
    color: "#8593B1",
  },
];

const renderExpendList = (props) => {
  let renderExpendList = [];

  if (props.name === "eco") {
    for (let i = 0; i < 4; i++) {
      renderExpendList.push(
        <div>
          <div
            className="day-breakdown-box-icon"
            style={{ color: EcoExpendData[i].color }}
          >
            ● {EcoExpendData[i].emoji}
          </div>
          <h1>{EcoExpendData[i].exType}</h1>
          <h2>{EcoExpendData[i].count}</h2>
          <p></p>
        </div>
      );
    }
  } else {
    for (let i = 0; i < 4; i++) {
      renderExpendList.push(
        <div>
          <div
            className="day-breakdown-box-icon"
            style={{ color: NEcoExpendData[i].color }}
          >
            ● {NEcoExpendData[i].emoji}
          </div>
          <h1>{NEcoExpendData[i].exType}</h1>
          <h2>{NEcoExpendData[i].count}</h2>
          <p></p>
        </div>
      );
    }
  }

  return <div>{renderExpendList}</div>;
};
function EcoExpend(props) {
  if (props.name === "eco") {
    return (
      <div className="statistics-box">
        <div className="day-box">
          <div className="day-breakdown-box">
            <p>
              지출 카테고리 <span>태그개수</span>
            </p>
            {renderExpendList(props)}
            <Link
              to="/EcoCategory"
              state={{
                name: "eco",
              }}
            >
              <div className="more">
                <h1 style={{ color: "#C7D2E8" }}>● 더보기 5개</h1>
                <h2>2개</h2>
              </div>
            </Link>
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
            {renderExpendList(props)}
            <Link
              to="/EcoCategory"
              state={{
                name: "neco",
              }}
            >
              <div className="more">
                <h1 style={{ color: "#C7D2E8" }}>● 더보기 10개</h1>
                <h2>2개</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EcoExpend;
