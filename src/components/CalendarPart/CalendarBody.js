import React, { useState, useEffect } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isSameMonth,
  startOfMonth,
  endOfMonth,
  subDays,
  getWeekOfMonth,
} from "date-fns";
import "./Calendar.css";
import { InfoModal } from "./Modal";
import { Sliders } from "./Sliders";
import Quote from "./Quote";
import EcoDay from "./EcoDay";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function RenderWeekName() {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="days row">
      {weeks.map((dayName) => (
        <div className="col col-center" key={dayName}>
          {dayName}
        </div>
      ))}
    </div>
  );
}

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

function CalendarBody({ value, onChange }) {
  const [loading, setloading] = useState(true);
  const [currentDate, setCurrentDate] = useState(value);
  const [selectedDate, setSelectedDate] = useState(value);
  const [isMonthView, setIsMonthView] = useState(true);
  const [currentMonth, setCurrentMonth] = useState([]);
  const [prevMonth, setPrevMonth] = useState([]);
  const [nextMonth, setnextMonth] = useState([]);

  const [animation, setanimation] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setposition] = useState(0);

  const [message, setMessage] = useState({});
  const [daysData, setDaysData] = useState([]);
  const [anniversary, setAnniversary] = useState([]);
  const [quote, setquote] = useState("");

  let errors = null;

  const ecoColor = (item) =>
    item > 5 ? "eco4" : item >= 4 ? "eco3" : item >= 1 ? "eco2" : "eco1";

  const fetchData = async () => {
    fetch(
      `calendar/user1@naver.com/${format(currentDate, "yyyy")}/${format(
        currentDate,
        "M"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((data) => {
        setMessage(data.calendarDto);
        setquote(data.content);
        setDaysData(data.calendarDto.calendarDayDtos);
        setAnniversary(data.anniversaryList);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        errors = error;
      });
  };
  console.log(daysData);

  useEffect(() => {
    setCurrentMonth(renderCells());
  }, []);

  useEffect(() => {
    setMessage(data.calendarDto);
    setDaysData(data.calendarDto.calendarDayDtos);
    setquote(data.content);
    setAnniversary(data.anniversaryList);
    setloading(false);
    // fetchData();
  }, [currentDate]);

  const dateFormat = "yyyy-MM-dd";

  const openModal = (e) => {
    setposition(e.clientY);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentDate(subMonths(currentDate, 1));
    }
    if (btnType === "next") {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };

  const changeWeekMonth = () => {
    if (isMonthView) {
      setanimation("closeAnimation");
    } else {
      setanimation("openAnimation");
    }
    setTimeout(() => {
      setIsMonthView(!isMonthView);
      setanimation("");
    }, 500);
  };

  const onDateClickHandle = (day) => {
    if (!isSameMonth(day, currentDate)) {
      setCurrentDate(day);
    }
    onChange(day);
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const yNmFormat = "yyyy년 M월";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <IoIosArrowForward
            className="icon"
            onClick={() => changeMonthHandle("prev")}
          />
        </div>
        <div className="col col-center">
          <span>{format(currentDate, yNmFormat)}</span>
        </div>
        <div className="col col-end">
          <IoIosArrowForward
            className="icon"
            onClick={() => changeMonthHandle("next")}
          />
        </div>
      </div>
    );
  };

  const renderMiddleBar = () => {
    let nEco = message.sumOfNoneEcoCount; //받아올 데이터
    let eco = message.sumOfEcoCount;
    return (
      <div className="calendar-info">
        <div className="neco">● {nEco}</div>
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

  const pushCells = (startDate) => {
    const dayFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dayFormat); // "d"
      const dayStr = format(day, dateFormat); // "yyyy-MM-dd"
      const cloneDay = day;
      let daily = {};
      let ex_cost = 0;
      let in_cost = 0;
      let eco_count = 0;

      if (
        daysData &&
        daysData.length > 0 &&
        isSameMonth(cloneDay, currentDate)
      ) {
        daily = daysData.find((x) => x.date === dayStr);
        if (daily !== undefined) {
          in_cost = daily.incomeDays;
          ex_cost = daily.expenditureDays;
          eco_count = daily.ecoCount;
        }
      }
      const cellStyle =
        isMonthView && !isSameMonth(day, currentDate)
          ? "disabled"
          : isSameDay(day, new Date())
          ? "today"
          : ex_cost === 0 && in_cost === 0
          ? "empty"
          : ecoColor(eco_count);

      days.push(
        <div
          className={`col cell ${isSameDay(day, selectedDate) && "selected"}`}
          key={dayStr}
          onClick={() => {
            onDateClickHandle(cloneDay);
          }}
        >
          {anniversary.find((x) => x[0] === dayStr) && (
            <div className="eco-day-circle">●</div>
          )}
          <div className={`number ${cellStyle}`}>{formattedDate}</div>
          {ex_cost !== 0 && (
            <div className={`detail-cost ex-day`}>
              -{ex_cost.toLocaleString()}
            </div>
          )}

          {in_cost !== 0 && (
            <div className={`detail-cost in-day`}>
              +{in_cost.toLocaleString()}
            </div>
          )}
        </div>
      );
      day = addDays(day, 1);
    }

    rows.push(
      <div className="row" key={subDays(day, 1)}>
        {days}
      </div>
    );

    return rows;
  };

  const renderCells = () => {
    const startDate = startOfWeek(startOfMonth(currentDate)); //해당 달의 첫 일요일(전달 포함)
    const endDate = endOfWeek(endOfMonth(currentDate)); //해당 달의 마지막 토요일(다음달 포함)

    const rows = [];
    let day = startDate;

    while (day <= endDate) {
      rows.push(pushCells(day));
      day = addDays(day, 7);
    }

    if (isMonthView) {
      return rows;
    } else {
      return <Sliders index={getWeekOfMonth(selectedDate) - 1}>{rows}</Sliders>;
    }
  };

  if (loading) return <div style={{ color: "white" }}>로딩중..</div>;
  if (errors !== null)
    return <div style={{ color: "white" }}>에러가 발생했습니다.</div>;

  return (
    <div className="calendar">
      {renderHeader()}
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
        <RenderWeekName />
        <div className="body">{renderCells()}</div>

        {anniversary.find((x) => x[0] === format(selectedDate, dateFormat)) && (
          <EcoDay
            value={anniversary.find(
              (x) => x[0] === format(selectedDate, dateFormat)
            )}
          />
        )}
      </div>
    </div>
  );
}

export default CalendarBody;
