import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Statistics.css";
import { IoIosArrowForward } from "react-icons/io";
import DonutChart from "../../components/StatisticsPart/DonutChart";
import LineGraph from "../../components/StatisticsPart/LineGraph";
import Eco from "../../components/StatisticsPart/Part2/EcoExpend";

import DateHeader from "../../components/DateHeader";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import { EcoBarChart } from "../../components/StatisticsPart/Part2/EcoBarChart";
import { InfoModal } from "../../components/CalendarPart/Modal";
import Footer from "../../components/Footer/Footer";

function StatisticsMain() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setposition] = useState(0);
  const [message, setMessage] = useState(0);
  const [ecoTagCounts, setEcoTagCounts] = useState([]);
  const [noecoTagCounts, setnoEcoTagCounts] = useState([]);
  const [loading, setloading] = useState(true);

  const nowMFormat = "M";

  const containerStyle = {
    backgroundImage: "url(img/main_bg.png)",
    width: "100vw",
    height: "30%",
  };

  const onchangeDate = (date) => {
    setCurrentMonth(date);
  };
  const openModal = (e) => {
    setposition(e.clientY);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchData = async () => {
    const response = await fetch(
      `/statistics/2022/${format(new Date(), "M")}`,
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
    setnoEcoTagCounts(data.noecoTagCounts);
    setloading(false);
  };

  useEffect(() => {
    // fetchData();
    setMessage(data);
    setEcoTagCounts(data.ecoTagCounts);
    setnoEcoTagCounts(data.noEcoTagCounts);
    setloading(false);
  }, []);
  if (loading) return <div>loading...</div>;

  const ecoDifference = Math.abs(message.ecoDifference);
  const noEcoDifference = Math.abs(message.noEcoDifference);
  return (
    <div className="statistic-main">
      <DateHeader getDate={currentMonth} sendDate={onchangeDate} />
      <div className="stat-main-contents">
        <Link to="/StatisticsView">
          <div className="month-box">
            <div className="month-breakdown">
              <p>{format(currentMonth, nowMFormat)}월 내역</p>
              <IoIosArrowForward className="box-icon" />
            </div>

            <div className="month-breakdown">
              <p>수입</p>
              <h1>{message.incomeTotal.toLocaleString()}원</h1>
            </div>

            <div className="month-breakdown">
              <p>지출</p>
              <h1>{message.expenditureTotal.toLocaleString()}원</h1>
            </div>
          </div>
        </Link>

        <div className="line-box"></div>

        <div className="tag-graph-box" style={containerStyle}>
          <h1>
            친환경 별자리 관측소 <img src="img/scope.png" alt="scope" />
            &nbsp;
            <AiOutlineQuestionCircle
              className="eco-info"
              onClick={(e) => openModal(e)}
            />
          </h1>
          {isModalOpen && (
            <InfoModal
              className={position}
              onClose={closeModal}
              maskClosable={true}
              visible={true}
              children={true}
            ></InfoModal>
          )}
          <p>지난달 이맘때보다</p>
          <h2>
            친환경 태그가 <b style={{ color: "#00C982" }}>{ecoDifference}개</b>{" "}
            {message.ecoDifference >= 0 ? "늘고" : "줄고"}
          </h2>
          <h2>
            친환경 태그가{" "}
            <b style={{ color: "#00C982" }}>{noEcoDifference}개</b>{" "}
            {message.noEcoDifference >= 0 ? "늘었어요" : "줄었어요"}
          </h2>

          <LineGraph dataset={message.ecoCount}></LineGraph>
        </div>

        <div className="line-box"></div>

        <div className="chart-graph-box">
          <h1>{message.userName}님의 지출은 건강한가요?</h1>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#07D4A9" }}>
              <span>●</span> {message.nowEcoCount}
            </p>
            <p style={{ color: "#3A4556" }}>
              <b style={{ color: "#566479" }}>●</b> {message.nowNoneEcoCount}
            </p>
          </div>
          <div className="donut-chart">
            <DonutChart percentage={message.percentage} />
          </div>
        </div>
        <div className="line-box"></div>

        <Link
          to="/EcoCategory"
          state={{
            name: "eco",
          }}
        >
          <div className="expend-box">
            <h1>어떤 친환경 지출을 했을까요? 👍</h1>
            <IoIosArrowForward className="box-icon" />
          </div>
        </Link>
        <div className="chart">
          <EcoBarChart barData={message.ecoTagCounts} name="eco"></EcoBarChart>
        </div>
        {message.ecoTagCounts.length < 2 ? (
          <div className="statistics-box">
            <p
              style={{
                marginBottom: "60px",
                marginTop: "0px",
                fontFamily: "Pretendard",
                height: "52px",
                textAlign: "center",
                color: "#939393",
              }}
            >
              이번달 지출이 없습니다
            </p>
          </div>
        ) : (
          <Eco name="eco"></Eco>
        )}

        <div className="line-box"></div>

        <Link
          to="/EcoCategory"
          state={{
            name: "neco",
          }}
        >
          <div className="expend-box">
            <h1>어떤 반환경 지출을 했을까요? 👎</h1>
            <IoIosArrowForward className="box-icon" />
          </div>
        </Link>
        <div className="chart">
          <EcoBarChart
            barData={message.noEcoTagCounts}
            name="neco"
          ></EcoBarChart>
        </div>
        {message.noEcoTagCounts.length < 2 ? (
          <div className="statistics-box">
            <p
              style={{
                "margin-bottom": "60px",
                "margin-top": "0px",
                "font-family": "Pretendard",
                height: "52px",
                "text-align": "center",
                color: "#939393",
              }}
            >
              이번달 지출이 없습니다
            </p>
          </div>
        ) : (
          <Eco name="neco"></Eco>
        )}
      </div>
      <Footer activeMenu="statistics">
        <div>통계</div>
      </Footer>
    </div>
  );
}

export default StatisticsMain;

const data = {
  userName: "사용자1",
  incomeTotal: 102000,
  expenditureTotal: 549000,
  ecoDifference: -6,
  noEcoDifference: 3,
  ecoCount: {
    3: 5,
    4: 12,
    5: 22,
    6: 34,
    7: 46,
    8: 55,
  },
  nowEcoCount: 12,
  nowNoneEcoCount: 4,
  percentage: 0.0,
  ecoTagCounts: [
    // ["식비", 6],
    // ["급여", 2],
    // ["기타", 2],
    // ["생필품", 2],
    ["더보기", 0],
  ],
  noEcoTagCounts: [
    ["식비", 3],
    ["기타", 1],
    ["생필품", 1],
    ["급여", 1],
    ["더보기", 0],
  ],
};
