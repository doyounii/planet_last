import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Category.css";
import { FaChevronLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { message } from "antd";
import axios from "axios";
import { format, isSameMonth, endOfMonth } from "date-fns";
import { useQueryClient, useQuery, useMutation } from "react-query";

const emoji = {
  급여: "💰",
  용돈: "👛",
  식비: "🌭",
  교통: "🚗",
  문화생활: "🎬",
  생필품: "✏️",
  마트: "🛒",
  교육: "📚",
  통신: "📱",
  "의료/건강": "🏥",
  "경조사/회비": "💵",
  가전: "🛏",
  공과금: "🧾",
  기타: "💬",
};

const userId = window.localStorage.getItem("userId");

const fetchData = async (userId) => {
  const response = await axios.get(
    `https://xn--lj2bx51av9j.xn--yq5b.xn--3e0b707e:8080/api/statistics/expenditure/2022/${format(
      new Date(),
      "M"
    )}/category/ecoG,`,
    { headers: { userId: userId } }
  );
  const data = await response.data;
  return data;
};

const fetchData2 = async (userId) => {
  const response = await axios.get(
    `https://xn--lj2bx51av9j.xn--yq5b.xn--3e0b707e:8080/api/statistics/expenditure/2022/${format(
      new Date(),
      "M"
    )}/category/ecoR,`,
    { headers: { userId: userId } }
  );
  const data2 = await response.data;
  return data2;
};

function Category() {
  const history = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [message, setMessage] = useState([]);
  const [message2, setMessage2] = useState([]);
  const [loading, setloading] = useState(true);
  const [exType, setExType] = useState("");
  const [count, setCount] = useState(0);
  const [percent, setPercent] = useState(0);

  const nowMFormat = "M";
  const userId = window.localStorage.getItem("userId");
  const queryClient = useQueryClient();

  const results = useQuery({
    queryKey: "category",
    queryFn: () => fetchData(userId, currentMonth),
    enabled: !!userId,
    staleTime: 1000 * 5 * 60, // 5분
    cacheTime: Infinity, // 제한 없음
  });

  const results2 = useQuery({
    queryKey: "category2",
    queryFn: () => fetchData2(userId, currentMonth),
    enabled: !!userId,
    staleTime: 1000 * 5 * 60, // 5분
    cacheTime: Infinity, // 제한 없음
  });

  useEffect(() => {
    if (results.status === "success") {
      const messages = queryClient.getQueryData("category");
      setMessage(messages);
    }
  }, [queryClient, results]);

  useEffect(() => {
    if (results2.status === "success") {
      const messages = queryClient.getQueryData("category2");
      setMessage2(messages);
    }
  }, [queryClient, results2]);

  const renderexTypeList = (ecodata, message) => {
    let renderexTypeList = [];

    if (message.length !== 0 || message2.length !== 0) {
      if (ecodata.name === "eco") {
        for (let i = 0; i < message.length; i++) {
          renderexTypeList.push(
            // <Link
            //   to={`/detail`}
            //   state={{
            //     exType: message[i].exType,
            //     emoji: message[i].emoji,
            //     // count: message[i].count,
            //     ecodata: ecodata.name,
            //   }}
            // >
            <div className="category-box">
              <p className="emoji">{emoji[message[i].exType]} </p>
              <h2>
                {message[i].exType}
                {" | "}
                {message[i].percent}%
              </h2>
              <IoIosArrowForward className="detail-icon" />
              <h1 className="count">{message[i].count}개</h1>
            </div>
            // </Link>
          );
        }
      } else {
        for (let i = 0; i < message2.length; i++) {
          renderexTypeList.push(
            // <Link
            //   to={`/detail`}
            //   state={{
            //     exType: message2[i].exType,
            //     emoji: message2[i].emoji,
            //     // count: message2[i].count,
            //     ecodata: ecodata.name,
            //     // memo: expendData[i].memo,
            //   }}
            // >
            <div className="category-box">
              <p className="emoji">{emoji[message2[i].exType]} </p>
              <h2>
                {message2[i].exType}
                {" | "}
                {message2[i].percent}%
              </h2>
              <IoIosArrowForward className="detail-icon" />
              <h1 className="count">{message2[i].count}개</h1>
            </div>
            // </Link>
          );
        }
      }
    }

    return <div>{renderexTypeList}</div>;
  };

  // const fetchData = async () => {
  //   const response = await fetch(
  //     `/statistics/ecoCountsDetail/2022/3`,
  //     //${format(new Date(), "M")}
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   setMessage(data.tagList);
  //   setloading(false);
  // };

  // const fetchData2 = async () => {
  //   const response = await fetch(
  //     `/statistics/noEcoCountsDetail/2022/3`,
  //     //${format(new Date(), "M")}
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   const data2 = await response.json();
  //   setMessage2(data2.tagList);
  //   console.log(data2);
  //   setloading(false);
  // };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   // fetchData();
  //   // fetchData2();
  //   setMessage(data);
  //   setMessage2(data2);
  //   setloading(false);
  // }, []);

  console.log(message);
  console.log(message2);
  const ecodata = useLocation().state;

  useEffect(() => {
    if (results.status === "success") {
      setloading(false);
    }
  }, [results.status]);

  useEffect(() => {
    if (results2.status === "success") {
      setloading(false);
    }
  }, [results2.status]);

  if (results.status === "loading" || results2.status === "loading")
    return (
      <div
        style={{
          width: "100vw",
          color: "#636E75",
          textAlign: "center",
          marginTop: "40vh",
        }}
      >
        로딩중...
      </div>
    );
  if (results.status === "error" || results2.status === "error")
    return (
      <div
        style={{
          width: "100vw",
          color: "#636E75",
          textAlign: "center",
          marginTop: "40vh",
        }}
      >
        문제가 발생했습니다. 잠시 후에 다시 시도해주세요.
      </div>
    );

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

// const data = {
//   tagList: [
//     ["식비", 50, 6],
//     ["기타", 17, 2],
//     ["생필품", 17, 2],
//     ["급여", 17, 2],
//   ],
// };
// const data2 = {
//   tagList: [
//     ["식비", 50, 3],
//     ["급여", 17, 1],
//     ["기타", 17, 1],
//     ["생필품", 17, 1],
//   ],
// };

const data = [
  {
    exType: "식비",
    count: 4,
    percent: 80,
  },
  {
    exType: "생필품",
    count: 1,
    percent: 20,
  },
];

const data2 = [
  {
    exType: "식비",
    count: 5,
    percent: 80,
  },
  {
    exType: "급여",
    count: 1,
    percent: 20,
  },
];
