import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './Category.css';
import { FaChevronLeft } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";


const expendData = [
  {
    eomji: "🛒",
    exType: "마트",
    count: "120개",
  },
  {
    eomji: "🚗",
    exType: "교통",
    count: "80개",
  },
  {
    eomji: "🎬",
    exType: "문화생활",
    count: "50개",
  },
  {
    eomji: "💬",
    exType: "기타",
    count: "30개",
  },
  {
    eomji: "🛒",
    exType: "교육",
    count: "10개",
  },
  {
    eomji: "💵",
    exType: "경조사/회비",
    count: "4개",
  },
  {
    eomji: "🏥",
    exType: "의료/건강",
    count: "3개",
  },
  {
    eomji: "🛏",
    exType: "가전",
    count: "2개",
  },
  {
    eomji: "📱",
    exType: "통신",
    count: "1개",
  },
  {
    eomji: "✏️",
    exType: "생필품",
    count: "0개",
  },
  {
    eomji: "📚",
    exType: "교육",
    count: "0개",
  },
  {
    eomji: "🧾",
    exType: "공과금",
    count: "0개",
  },

];

function Category(props) {
  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (props.name === "eco") {
    return (
      <div className='container'>
        <div className='header'>
          <FaChevronLeft
            className="forward-arrow"
            onClick={() => {
              history(-1);
            }}
          />
          <h1 className='category'>친환경 카테고리</h1>
          <h1 className='title'>지출 카테고리별 소비</h1>
        </div>

        {expendData.map((data) => {
          return (
            <>
              <div className='category-box'>
                <p className='emoji'>{data.eomji} {" "}{data.exType}</p>
                <IoIosArrowForward className="detail-icon" />
                <h1 className='count'>{data.count}</h1>
              </div>

            </>
          )
        })}
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
          <h1 className='category'>반환경 카테고리</h1>
          <h1 className='title'>지출 카테고리별 소비</h1>
        </div>

        {expendData.map((data) => {
          return (
            <>
              <div className='category-box'>
                <p className='emoji'>{data.eomji} {" "}{data.exType}</p>
                <IoIosArrowForward className="detail-icon" />
                <h1 className='count'>{data.count}</h1>
              </div>

            </>
          )
        })}
      </div>
    )
  }

}

export default Category