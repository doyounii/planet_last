import React, { useState, useEffect } from "react";
import { format, isSameMonth } from "date-fns";
import Footer from "../../components/Footer/Footer";
import DateHeader from "../../components/DateHeader";
import Calendar from "../../components/CalendarPart/CalendarBody";
import DetailList from "../../components/CalendarPart/DetailList";
import Quote from "../../components/CalendarPart/Quote";
import EcoDay from "../../components/CalendarPart/EcoDay";
import { InfoModal } from "../../components/CalendarPart/Modal";
import "../../components/CalendarPart/Calendar.css";

import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function CalendarPage() {
  const dateFormat = "yyyy-MM-dd";
  const [loading, setloading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setposition] = useState(0);

  const [message, setMessage] = useState({});
  const [daysData, setDaysData] = useState([]);
  const [anniversary, setAnniversary] = useState([]);
  const [quote, setquote] = useState("");
  const [isMonthView, setIsMonthView] = useState(true);
  let errors = null;

  const fetchData = async (date) => {
    const response = await fetch(
      `calendar/user1@naver.com/${format(date, "yyyy")}/${format(date, "M")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
        errors = error;
      });
    const data = await response.json();
    setMessage(data.calendarDto);
    setquote(data.content);

    setDaysData(data.calendarDto.calendarDayDtos);

    setAnniversary(data.anniversaryList);
    setloading(false);
  };

  useEffect(() => {
    // setMessage(data.calendarDto);
    // setDaysData(data.calendarDto.calendarDayDtos);
    // setquote(data.content);
    // setAnniversary(data.anniversaryList);
    // setloading(false);
    fetchData(currentDate);
  }, [currentDate]);

  const changeDate = (date) => {
    setSelectedDate(date);
    if (!isSameMonth(date, currentDate)) {
      setCurrentDate(date);
    }
  };
  const openModal = (e) => {
    setposition(e.clientY);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const changeWeekMonth = () => {
    setIsMonthView(!isMonthView);
  };

  const renderMiddleBar = () => {
    let nEco = message.sumOfNoneEcoCount; //받아올 데이터
    let eco = message.sumOfEcoCount;
    return (
      <div className="calendar-info">
        <span className="neco">● {nEco}</span>
        <span className="eco">● {eco}</span>
        <span className="eco-day-circle">●</span>
        <span className="eco-day">환경 기념일</span>
        <AiOutlineQuestionCircle
          className="eco-info"
          onClick={(e) => openModal(e)}
        />
        <span className="calendar-toggle" onClick={() => changeWeekMonth()}>
          {isMonthView ? "월" : "주"}
        </span>
        <IoIosArrowForward
          className={`calendar-toggle-icon ${isMonthView ? "fold" : ""}`}
          onClick={() => changeWeekMonth()}
        />
      </div>
    );
  };

  if (loading) return <div style={{ color: "white" }}>로딩중..</div>;
  if (errors !== null)
    return <div style={{ color: "white" }}>에러가 발생했습니다.</div>;

  if (!loading)
    return (
      <div className="calendarPage" style={{ marginBottom: "100px" }}>
        <DateHeader
          getDate={currentDate}
          sendDate={(date) => setCurrentDate(date)}
        />
        <div className={`cald ${!isMonthView ? "move" : ""}`}>
          <Quote value={quote} />
          <div className={`month-info`}>
            <div className="month-cost">
              <div className="month-type">수입</div>
              <div className="month-total">{message.totalMonthIncome}원</div>
            </div>
            <div className="month-cost">
              <div className="month-type">지출</div>
              <div className="month-total">
                {message.totalMonthExpenditure}원
              </div>
            </div>
          </div>

          {isModalOpen && (
            <InfoModal
              className={position}
              onClose={closeModal}
              maskClosable={true}
              visible={true}
              children={isMonthView}
            ></InfoModal>
          )}

          {renderMiddleBar()}
          <Calendar
            monthView={isMonthView}
            events={daysData}
            ecoEvents={anniversary}
            selectedValue={selectedDate}
            currentValue={currentDate}
            onChange={changeDate}
          />
          {anniversary.find(
            (x) => x[0] === format(selectedDate, dateFormat)
          ) && (
              <EcoDay
                value={anniversary.find(
                  (x) => x[0] === format(selectedDate, dateFormat)
                )}
              />
            )}
          <DetailList value={selectedDate} />
        </div>
        <Footer activeMenu="calendar">
          <div>달력</div>
        </Footer>
      </div>
    );
}

export default CalendarPage;

const data = {
  anniversaryList: [
    ["2022-03-03", "어쩌구저쩌구의 날"],
    ["2022-03-13", "뭐뭐뭐뭐의 날"],
    ["2022-03-17", "호롤롤로의 날"],
    ["2022-03-24", "병아리의 날"],
  ],
  calendarDto: {
    sumOfEcoCount: 29,
    sumOfNoneEcoCount: 12,
    totalMonthIncome: 0,
    totalMonthExpenditure: 265277,
    calendarDayDtos: [
      {
        date: "2022-03-01",
        incomeDays: 1234,
        ecoCount: 0,
        noneEcoCount: 0,
        expenditureDays: 0,
      },
      {
        date: "2022-03-17",
        incomeDays: 1234,
        ecoCount: 6,
        noneEcoCount: 0,
        expenditureDays: 222,
      },
      {
        date: "2022-03-20",
        incomeDays: 0,
        ecoCount: 1,
        noneEcoCount: 1,
        expenditureDays: 2000,
      },
      {
        date: "2022-03-23",
        incomeDays: 0,
        ecoCount: 3,
        noneEcoCount: 6,
        expenditureDays: 19600,
      },
      {
        date: "2022-03-24",
        incomeDays: 0,
        ecoCount: 4,
        noneEcoCount: 2,
        expenditureDays: 8400,
      },
      {
        date: "2022-03-25",
        incomeDays: 0,
        ecoCount: 5,
        noneEcoCount: 0,
        expenditureDays: 7000,
      },
      {
        date: "2022-03-26",
        incomeDays: 0,
        ecoCount: 16,
        noneEcoCount: 3,
        expenditureDays: 561872,
      },
      {
        date: "2022-03-28",
        incomeDays: 0,
        ecoCount: 0,
        noneEcoCount: 0,
        expenditureDays: 3333,
      },
      {
        date: "2022-03-29",
        incomeDays: 0,
        ecoCount: 0,
        noneEcoCount: 0,
        expenditureDays: 3333,
      },
      {
        date: "2022-03-30",
        incomeDays: 0,
        ecoCount: 0,
        noneEcoCount: 0,
        expenditureDays: 3333,
      },
      {
        date: "2022-03-31",
        incomeDays: 0,
        ecoCount: 0,
        noneEcoCount: 0,
        expenditureDays: 3333,
      },
    ],
  },
  content:
    "자연과 가까울수록 병은 멀어지고, 자연과 멀수록 병은 가까워진다. - 요한 볼프강 폰 괴테",
};
