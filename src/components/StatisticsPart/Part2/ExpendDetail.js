import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Category.css";
import axios from "axios";
import { FaChevronLeft } from "react-icons/fa";
import { useQueryClient, useQuery, useMutation } from "react-query";

const userId = window.localStorage.getItem("userId");

const fetchData = async (userId) => {
  // const response = await axios.get(
  //   `https://xn--lj2bx51av9j.xn--yq5b.xn--3e0b707e:8080/api/statistics/expenditure/2022/${format(
  //     new Date(),
  //     "M"
  //   )}/{category}/ecoG,`,
  //   { headers: { userId: userId } }
  // );
  // const data = await response.data;
  return data;
};

const fetchData2 = async (userId) => {
  // const response = await axios.get(
  //   `https://xn--lj2bx51av9j.xn--yq5b.xn--3e0b707e:8080/api/statistics/expenditure/2022/${format(
  //     new Date(),
  //     "M"
  //   )}/{category}/ecoR,`,
  //   { headers: { userId: userId } }
  // );
  // const data = await response.data;
  return data2;
};

function ExpendDetail() {
  const cateGoryData = useLocation().state;

  console.log(data);
  const history = useNavigate();
  const [message, setMessage] = useState([]);
  const [message2, setMessage2] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let exType;
  if (data.exType === "마트") {
    exType = 0;
  } else if (data.exType === "교통") {
    exType = 1;
  } else if (data.exType === "문화생활") {
    exType = 2;
  } else if (data.exType === "기타") {
    exType = 3;
  } else if (data.exType === "교육") {
    exType = 4;
  } else if (data.exType === "경조사/회비") {
    exType = 5;
  } else if (data.exType === "의료/건강") {
    exType = 6;
  } else if (data.exType === "가전") {
    exType = 7;
  } else if (data.exType === "통신사") {
    exType = 8;
  } else if (data.exType === "생필품") {
    exType = 9;
  } else if (data.exType === "식비") {
    exType = 10;
  } else if (data.exType === "공과금") {
    exType = 11;
  }

  const renderEcoExpendList = () => {
    let renderEcoExpendList = [];

    if (data.ecodata === "eco") {
      for (let i = 0; i < data[exType].ecoList.length; i++) {
        renderEcoExpendList.push(
          <div className="dateDetail">
            <p style={{ color: "#00C982" }}>●</p>
            <p>sfdf {data[exType].memo}</p>
            <p>{data[exType].ecoList[i].ecoDetail}</p>
          </div>
        );
      }
    } else {
      for (let i = 0; i < data[exType].ecoList.length; i++) {
        renderEcoExpendList.push(
          <div className="dateDetail">
            <p style={{ color: "#566479" }}>●</p>
            <p>{data[exType].memo} </p>
            {data[exType].ecoList[i].ecoDetail}
          </div>
        );
      }
    }
    return <div>{renderEcoExpendList}</div>;
  };
  if (data.ecodata === "eco") {
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
        </div>
        <div className="detailType">
          {data.emoji} {data.exType}
          <p>{data.count}</p>
          <h1>총 지출 금액 원</h1>
        </div>
        <div className="line-box"></div>

        {/* {renderEcoExpendList(data.ecodata)} */}
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="header">
          <FaChevronLeft
            className="forwardArrow"
            onClick={() => {
              history(-1);
            }}
          />
          <h1 className="cateGory">반환경 지출 카테고리</h1>
        </div>
        <div className="detailType">
          {data.emoji} {data.exType}
          <p>{data.count}</p>
          <h1>총 지출 금액 원</h1>
        </div>
        <div className="line-box"></div>
        {/* {renderEcoExpendList(data.ecodata)} */}
      </div>
    );
  }
}

export default ExpendDetail;

const data2 = {
  eco: "R",
  exType: "식비",
  totalExpenditure: 48200,
  countEx: 5,
  typeDetailList: [
    {
      date: "2022-09-02",
      detailDtoList: [
        {
          type: "식비",
          way: "카드",
          id: 154,
          cost: 2900,
          memo: "Namoo에서 빵 사먹음",
          ecoList: [
            {
              eco: "R",
              ecoDetail: "일회용품 사용",
              userAdd: null,
            },
          ],
          income: false,
        },
      ],
    },
    {
      date: "2022-09-04",
      detailDtoList: [
        {
          type: "식비",
          way: "카드",
          id: 158,
          cost: 22500,
          memo: "혜림이랑 피자 먹음🍕",
          ecoList: [
            {
              eco: "R",
              ecoDetail: "일회용품 사용",
              userAdd: null,
            },
            {
              eco: "R",
              ecoDetail: "비닐봉투 소비",
              userAdd: null,
            },
          ],
          income: false,
        },
      ],
    },
  ],
};

const data = {
  eco: "G",
  exType: "식비",
  totalExpenditure: 48200,
  countEx: 5,
  typeDetailList: [
    {
      date: "2022-09-02",
      detailDtoList: [
        {
          type: "식비",
          way: "카드",
          id: 154,
          cost: 2900,
          memo: "Namoo에서 빵 사먹음",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "일회용품 사용",
              userAdd: null,
            },
          ],
          income: false,
        },
      ],
    },
    {
      date: "2022-09-04",
      detailDtoList: [
        {
          type: "식비",
          way: "카드",
          id: 158,
          cost: 22500,
          memo: "혜림이랑 피자 먹음🍕",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "일회용품 사용",
              userAdd: null,
            },
            {
              eco: "G",
              ecoDetail: "비닐봉투 소비",
              userAdd: null,
            },
          ],
          income: false,
        },
      ],
    },
  ],
};
