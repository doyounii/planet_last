import React, { useState } from "react";
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
              <h1>780,120원</h1>
            </div>

            <div className="month-breakdown">
              <p>지출</p>
              <h1>50,120원</h1>
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
            친환경 태그가 <b style={{ color: "#00C982" }}>5개</b> 늘었어요
          </h2>

          <LineGraph></LineGraph>
        </div>

        <div className="line-box"></div>

        <div className="chart-graph-box">
          <h1>수빈님의 지출은 건강한가요?</h1>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#07D4A9" }}>
              <span>●</span> 11
            </p>
            <p style={{ color: "#3A4556" }}>
              <b style={{ color: "#566479" }}>●</b> 13
            </p>
          </div>
          <div className="donut-chart">
            <DonutChart />
          </div>
        </div>
        <div className="line-box"></div>

        <Link to="/EcoCategory" name="eco">
          <div className="expend-box">
            <h1>어떤 친환경 지출을 했을까요? 👍</h1>
            <IoIosArrowForward className="box-icon" />
          </div>
        </Link>
        <div className="chart">
          <EcoBarChart name="eco"></EcoBarChart>
        </div>
        <Eco name="eco"></Eco>

        <div className="line-box"></div>

        <Link to="/EcoCategory" name="neco">
          <div className="expend-box">
            <h1>어떤 반환경 지출을 했을까요? 👎</h1>
            <IoIosArrowForward className="box-icon" />
          </div>
        </Link>
        <div className="chart">
          <EcoBarChart name="neco"></EcoBarChart>
        </div>
        <Eco name="neco"></Eco>
      </div>
      <Footer activeMenu="statistics">
        <div>통계</div>
      </Footer>
    </div>
  );
}

export default StatisticsMain;
