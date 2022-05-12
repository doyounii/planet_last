import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EcoExpend.css";

const EcoExpendData = [
  {
    emoji: "🛒",
    exType: "마트",
    count: "12개",
    color: "#00c982",
  },

  {
    emoji: "✏️",
    exType: "생필품",
    count: "7개",
    color: "#C7D2E8",
    ncolor: "#8593B1",
  },
  {
    emoji: "🎬",
    exType: "문화생활",
    count: "5개",
    color: "#083FA5",
  },
  {
    emoji: "📚",
    exType: "교육",
    count: "4개",
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
    emoji: "💬",
    exType: "기타",
    count: "3개",
    color: "#728EC6",
  },
  {
    emoji: "🚗",
    exType: "교통",
    count: "2개",
    color: "#1466FE",
  },

  {
    emoji: "🛏",
    exType: "가전",
    count: "1개",
    color: "#C7D2E8",
  },
  {
    emoji: "📱",
    exType: "통신",
    count: "1개",
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
    emoji: "🌭",
    exType: "식비",
    count: "14개",
    color: "#728EC6",
    ncolor: "#303B51",
  },
  {
    emoji: "🛒",
    exType: "마트",
    count: "12개",
    color: "#8593B1",
  },

  {
    emoji: "🚗",
    exType: "교통",
    count: "5개",
    color: "#667492",
  },
  {
    emoji: "✏️",
    exType: "생필품",
    count: "5개",
    color: "#8593B1",
  },
  {
    emoji: "🛏",
    exType: "가전",
    count: "2개",
    color: "#8593B1",
  },
];




function EcoExpend(props) {
  const [message, setMessage] = useState([]);
  const [loading, setloading] = useState(true);
  const [ecoTagCounts, setEcoTagCounts] = useState([]);
  const [noEcoTagCounts, setNoEcoTagCounts] = useState([]);
  useEffect(() => {
    // fetchData();
    setMessage(data);
    setEcoTagCounts(data.ecoTagCounts);
    setNoEcoTagCounts(data.noEcoTagCounts);
    setloading(false);

  }, []);

  const renderExpendList = (props, message) => {
    let renderExpendList = [];

    if (message.length !== 0) {
      if (props.name === "eco") {
        for (let i = 0; i < ecoTagCounts.length - 1; i++) {
          renderExpendList.push(
            <div>
              <div
                className="day-breakdown-box-icon"
                style={{ color: EcoExpendData[i].color }}
              >
                ● {EcoExpendData[i].emoji}
              </div>
              <h1>{ecoTagCounts[i][0]}</h1>
              <h2>{ecoTagCounts[i][1]}개</h2>
              <p></p>
            </div>
          );
        }
      } else {
        for (let i = 0; i < noEcoTagCounts.length - 1; i++) {
          renderExpendList.push(
            <div>
              <div
                className="day-breakdown-box-icon"
                style={{ color: NEcoExpendData[i].color }}
              >
                ● {NEcoExpendData[i].emoji}
              </div>
              <h1>{noEcoTagCounts[i][0]}</h1>
              <h2>{noEcoTagCounts[i][1]}개</h2>
              <p></p>
            </div>
          );
        }
      }
    }

    return <div>{renderExpendList}</div>;
  };

  const fetchData = async () => {
    const response = await fetch(
      `/statistics/user1@naver.com/2022/2`,
      //${format(new Date(), "M")}
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    setMessage(data);
    setEcoTagCounts(data.ecoTagCounts);
    setNoEcoTagCounts(data.noEcoTagCounts);
    setloading(false);
  };

  console.log(message);
  if (props.name === "eco") {
    return (
      <div className="statistics-box">
        <div className="day-box">
          <div className="day-breakdown-box">
            <p>
              지출 카테고리 <span>태그개수</span>
            </p>
            {renderExpendList(props, message)}
            <Link
              to="/EcoCategory"
              state={{
                name: "eco",
              }}
            >
              <div className="more">
                <h1 style={{ color: "#C7D2E8" }}>● 더보기</h1>
                {/* <h2>{ecoTagCounts[2][1]}개</h2> */}
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
            {renderExpendList(props, message)}
            <Link
              to="/EcoCategory"
              state={{
                name: "neco",
              }}
            >
              <div className="more">
                <h1 style={{ color: "#C7D2E8" }}>● 더보기</h1>
                {/* <h2>{noEcoTagCounts[2][1]}개</h2> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EcoExpend;

const data = {
  userName: "사용자1",
  incomeTotal: 102000,
  expenditureTotal: 549000,
  ecoDifference: 6,
  noEcoDifference: 3,
  ecoCount: { "3": 6, "4": 12 },
  nowEcoCount: 12,
  nowNoneEcoCount: 4,
  percentage: 55.0,
  ecoTagCounts: [["생필품", 2], ["경조사/회비", 2], ["마트", 2], ["더보기", 0]],
  noEcoTagCounts: [["마트", 1], ["생필품", 1], ["경조사/회비", 1], ["더보기", 0]]
};