import React, { useState, useEffect } from "react";
import { useQueries, useQueryClient } from "react-query";
import { format, isSameMonth, subMonths, addMonths, parseISO } from "date-fns";
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

const fetchData = async (date) => {
  const response = await axios.get(
    `https://플랜잇.웹.한국:8080/calendar/${format(date, "yyyy")}/${format(
      date,
      "M"
    )}`
  );
  const data = await response.data;

  return data;
};

const fetchDetailData = async (day) => {
  const date = parseISO(day);

  const response = await axios.get(
    `https://플랜잇.웹.한국:8080/calendar/${format(date, "yyyy")}/${format(
      date,
      "M"
    )}/${format(date, "d")}`
  );
  const data = await response.data;

  return data;
};

function CalendarPage() {
  const dateFormat = "yyyy-MM-dd";
  const queryClient = useQueryClient();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setposition] = useState(0);

  const [message, setMessage] = useState({});
  const [daysData, setDaysData] = useState([]);
  const [anniversary, setAnniversary] = useState([]);
  const [quote, setquote] = useState("");
  const [isMonthView, setIsMonthView] = useState(true);

  const months = [
    subMonths(currentDate, 1),
    currentDate,
    addMonths(currentDate, 1),
  ];

  const results = useQueries(
    months.map((m) => {
      return {
        queryKey: ["calnedarData", format(m, "yyyy-M")],
        queryFn: () => fetchData(m),
      };
    })
  );

  const details = useQueries(
    daysData.map((data) => {
      return {
        queryKey: ["detailData", data.date],
        queryFn: () => fetchDetailData(data.date),
      };
    })
  );

  useEffect(() => {
    if (results[1].status === "success") {
      const getData = queryClient.getQueryData([
        "calnedarData",
        format(currentDate, "yyyy-M"),
      ]);

      setMessage(getData.calendarDto);
      setquote(getData.content);
      setDaysData(getData.calendarDto.calendarDayDtos);
      setAnniversary(getData.anniversaryList);
    }
  }, [currentDate, results[1].status]);

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
        <span className="neco-cal-circle">● {nEco}</span>
        <span className="eco-cal-circle">● {eco}</span>
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

  if (results[1].status === "loading")
    return <div style={{ color: "white" }}>로딩중..</div>;
  if (results[1].status === "error")
    return <div style={{ color: "white" }}>에러가 발생했습니다.</div>;

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
            <div className="month-total">{message.totalMonthExpenditure}원</div>
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
        {anniversary.find((x) => x[0] === format(selectedDate, dateFormat)) && (
          <EcoDay
            value={anniversary.find(
              (x) => x[0] === format(selectedDate, dateFormat)
            )}
          />
        )}

        {daysData.find(
          (data) => data.date === format(selectedDate, dateFormat)
        ) ? (
          <DetailList value={selectedDate} />
        ) : (
          <div style={{ color: "white", textAlign: "center" }}>내역 없음</div>
        )}
      </div>
      <Footer activeMenu="calendar">
        <div>달력</div>
      </Footer>
    </div>
  );
}

export default CalendarPage;
