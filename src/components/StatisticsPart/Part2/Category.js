import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Category.css";
import { FaChevronLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { message } from "antd";

const expendData = [
  {
    emoji: "🛒",
    exType: "마트",
    count: "120개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "🚗",
    exType: "교통",
    count: "80개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "🎬",
    exType: "문화생활",
    count: "50개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "💬",
    exType: "기타",
    count: "30개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "📚",
    exType: "교육",
    count: "10개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "💵",
    exType: "경조사/회비",
    count: "4개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "🏥",
    exType: "의료/건강",
    count: "3개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "🛏",
    exType: "가전",
    count: "2개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "📱",
    exType: "통신",
    count: "1개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "✏️",
    exType: "생필품",
    count: "0개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "🌭",
    exType: "식비",
    count: "0개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "🧾",
    exType: "공과금",
    count: "0개",
    memo: "엽떡 사먹음",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "다회용기 사용",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "중고거래/나눔/기부",
        etcMemo: null,
      },
    ],
  },
];

const emojiList = (ecoTagCounts) => {
  switch (ecoTagCounts) {
    case "식비":
      return <h1>🌭</h1>;
    case "교통":
      return <h1>🚗</h1>;
    case "문화생활":
      return <h1>🎬</h1>;
    case "생필품":
      return <h1>✏️</h1>;
    case "마트":
      return <h1>🛒</h1>;
    case "교육":
      return <h1>📚</h1>;
    case "통신":
      return <h1>📱</h1>;
    case "의료/건강":
      return <h1>🏥</h1>;
    case "경조사/회비":
      return <h1>💵</h1>;
    case "가전":
      return <h1>🛏</h1>;
    case "공과금":
      return <h1>🧾</h1>;
    default:
      return <h1>💬</h1>;
  }
};

const emojiList2 = (noEcoTagCounts) => {
  switch (noEcoTagCounts) {
    case "식비":
      return <h1>🌭왜 안됨</h1>;
    case "교통":
      return <h1>🚗</h1>;
    case "문화생활":
      return <h1>🎬</h1>;
    case "생필품":
      return <h1>✏️</h1>;
    case "마트":
      return <h1>🛒</h1>;
    case "교육":
      return <h1>📚</h1>;
    case "통신":
      return <h1>📱</h1>;
    case "의료/건강":
      return <h1>🏥</h1>;
    case "경조사/회비":
      return <h1>💵</h1>;
    case "가전":
      return <h1>🛏</h1>;
    case "공과금":
      return <h1>🧾</h1>;
    default:
      return <h1>💬</h1>;
  }
};

const renderexTypeList = (ecodata, message) => {
  let renderexTypeList = [];

  if (ecodata.name === "eco") {
    for (let i = 0; i < message.length; i++) {
      renderexTypeList.push(
        <Link
          to={`/detail`}
          state={{
            exType: expendData[i].exType,
            emoji: expendData[i].emoji,
            count: expendData[i].count,
            ecodata: ecodata.name,
          }}
        >
          <div className="category-box">
            <p className="emoji">
              {expendData[i].emoji} {message[i][0]}
              {" | "}
              {message[i][1]}%
            </p>
            <IoIosArrowForward className="detail-icon" />
            <h1 className="count">{message[i][2]}개</h1>
          </div>
        </Link>
      );
    }
  } else {
    for (let i = 0; i < message.length; i++) {
      renderexTypeList.push(
        <Link
          to={`/detail`}
          state={{
            exType: expendData[i].exType,
            emoji: expendData[i].emoji,
            count: expendData[i].count,
            ecodata: ecodata.name,
            memo: expendData[i].memo,
          }}
        >
          <div className="category-box">
            <p className="emoji">
              {expendData[i].emoji} {message[i][0]}
              {" | "}
              {message[i][1]}%
            </p>
            <IoIosArrowForward className="detail-icon" />
            <h1 className="count">{message[i][2]}개</h1>
          </div>
        </Link>
      );
    }
  }

  return <div>{renderexTypeList}</div>;
};

function Category() {
  const history = useNavigate();
  const [message, setMessage] = useState([]);
  const [message2, setMessage2] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      `/statistics/ecoCountsDetail/2022/3`,
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
    setMessage(data.tagList);
    setloading(false);
  };

  const fetchData2 = async () => {
    const response = await fetch(
      `/statistics/noEcoCountsDetail/2022/3`,
      //${format(new Date(), "M")}
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data2 = await response.json();
    setMessage2(data2.tagList);
    console.log(data2);
    setloading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
    fetchData2();
    // setMessage(data.tagList);
    // setMessage2(data2.tagList);
    // setloading(false);
  }, []);

  console.log(message);
  console.log(message2);
  const ecodata = useLocation().state;

  if (loading) return <div>loading...</div>;
  if (ecodata.name === "eco") {
    return (
      <div className="container">
        <div className="header">
          <FaChevronLeft
            className="forwardArrow"
            onClick={() => {
              history(-1);
            }}
          />
          <h1 className="cateGory">친환경 지출 카테고리</h1>
          <h1 className="title">지출 카테고리별 소비</h1>
        </div>
        {renderexTypeList(ecodata, message)}
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="header">
          <FaChevronLeft
            className="forward-arrow"
            onClick={() => {
              history(-1);
            }}
          />
          <h1 className="cateGory">반환경 지출 카테고리</h1>
          <h1 className="title">지출 카테고리별 소비</h1>
        </div>
        {renderexTypeList(ecodata, message2)}
      </div>
    );
  }
}

export default Category;

const data = {
  tagList: [
    ["식비", 50, 6],
    ["기타", 17, 2],
    ["생필품", 17, 2],
    ["급여", 17, 2],
  ],
};
const data2 = {
  tagList: [
    ["식비", 50, 3],
    ["급여", 17, 1],
    ["기타", 17, 1],
    ["생필품", 17, 1],
  ],
};
