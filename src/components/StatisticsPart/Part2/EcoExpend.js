import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EcoExpend.css";

const EcoExpendColor = [
  "#00C982", "#1466FE", "#083FA5", "#728EC6"
]
const NEcoExpendColor = [
  "#8593B1", "#667492", "#475572", "#303B51"
]

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

  const emojiList = (ecoTagCounts) => {

    switch (ecoTagCounts) {
      case "식비":
        return <h1>🌭</h1>
      case "교통":
        return <h1>🚗</h1>
      case "문화생활":
        return <h1>🎬</h1>
      case "생필품":
        return <h1>✏️</h1>
      case "마트":
        return <h1>🛒</h1>
      case "교육":
        return <h1>📚</h1>
      case "통신":
        return <h1>📱</h1>
      case "의료/건강":
        return <h1>🏥</h1>
      case "경조사/회비":
        return <h1>💵</h1>
      case "가전":
        return <h1>🛏</h1>
      case "공과금":
        return <h1>🧾</h1>
      default:
        return <h1>💬</h1>

    }
  }

  const emojiList2 = (noEcoTagCounts) => {
    switch (noEcoTagCounts) {
      case "식비":
        return <h1>🌭</h1>
      case "교통":
        return <h1>🚗</h1>
      case "문화생활":
        return <h1>🎬</h1>
      case "생필품":
        return <h1>✏️</h1>
      case "마트":
        return <h1>🛒</h1>
      case "교육":
        return <h1>📚</h1>
      case "통신":
        return <h1>📱</h1>
      case "의료/건강":
        return <h1>🏥</h1>
      case "경조사/회비":
        return <h1>💵</h1>
      case "가전":
        return <h1>🛏</h1>
      case "공과금":
        return <h1>🧾</h1>
      default:
        return <h1>💬</h1>
    }
  }

  console.log(ecoTagCounts)
  const renderExpendList = (props, message) => {
    let renderExpendList = [];

    if (message.length !== 0) {
      if (props.name === "eco") {
        for (let i = 0; i < ecoTagCounts.length - 1 && i < 4; i++) {
          renderExpendList.push(
            <div>
              <div
                className="day-breakdown-box-icon"
                style={{ color: EcoExpendColor[i] }}
              >
                ●{emojiList(ecoTagCounts[i][0])}
              </div>
              <h1>{ecoTagCounts[i][0]}</h1>
              <h2>{ecoTagCounts[i][1]}개</h2>
              <p></p>
            </div>
          );
        }
      } else {
        for (let i = 0; i < noEcoTagCounts.length - 1 && i < 4; i++) {
          renderExpendList.push(
            <div>
              <div
                className="day-breakdown-box-icon"
                style={{ color: NEcoExpendColor[i] }}
              >
                ●{emojiList2(noEcoTagCounts[i][0])}
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
      `/statistics/2022/3`,
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
                <h1 style={{ color: "#C7D2E8" }}>●</h1>
                <h1>더보기</h1>
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
                <h1 style={{ color: "#C7D2E8" }}>●</h1>
                <h1>더보기</h1>
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
  percentage: 67.0,
  ecoTagCounts: [["마트", 6], ["급여", 2], ["기타", 2], ["생필품", 2], ["더보기", 0], ["더보기", 0]],
  noEcoTagCounts: [["식비", 3], ["기타", 1], ["생필품", 1], ["급여", 1], ["더보기", 0]]
};