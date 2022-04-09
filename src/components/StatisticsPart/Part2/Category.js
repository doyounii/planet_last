import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from "react-router-dom";
import './Category.css';
import { FaChevronLeft } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";


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


const renderexTypeList = (ecodata) => {
  let renderexTypeList = [];

  if (ecodata.name === "eco") {
    for (let i = 0; i < expendData.length; i++) {
      renderexTypeList.push(
        <Link to={`/detail`}
          state={{
            exType: expendData[i].exType,
            emoji: expendData[i].emoji,
            count: expendData[i].count,
            ecodata: ecodata.name,
          }}
        >
          <div className='category-box'>
            <p className='emoji'>{expendData[i].emoji} {" "}{expendData[i].exType}</p>
            <IoIosArrowForward className="detail-icon" />
            <h1 className='count'>{expendData[i].count}</h1>
          </div>

        </Link>
      )
    }
  } else {
    for (let i = 0; i < expendData.length; i++) {
      renderexTypeList.push(
        <Link to={`/detail`}
          state={{
            exType: expendData[i].exType,
            emoji: expendData[i].emoji,
            count: expendData[i].count,
            ecodata: ecodata.name,
            memo: expendData[i].memo,
          }}
        >

          <div className='category-box'>
            <p className='emoji'>{expendData[i].emoji} {" "}{expendData[i].exType}</p>
            <IoIosArrowForward className="detail-icon" />
            <h1 className='count'>{expendData[i].count}</h1>
          </div>


        </Link>
      )
    }
  }

  return <div>{renderexTypeList}</div>;
}

function Category() {
  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ecodata = useLocation().state;

  if (ecodata.name === "eco") {
    return (
      <div className='container'>
        <div className='header'>
          <FaChevronLeft
            className="forwardArrow"
            onClick={() => {
              history(-1);
            }}
          />
          <h1 className='cateGory'>친환경 지출 카테고리</h1>
          <h1 className='title'>지출 카테고리별 소비</h1>
        </div>
        {renderexTypeList(ecodata)}
      </div>
    )
  } else {
    return (
      <div className='container'>
        <div className='header'>
          <FaChevronLeft
            className="forward-arrow"
            onClick={() => {
              history(-1);
            }}
          />
          <h1 className='cateGory'>반환경 지출 카테고리</h1>
          <h1 className='title'>지출 카테고리별 소비</h1>
        </div>
        {renderexTypeList(ecodata)}
      </div>
    )
  }

}

export default Category