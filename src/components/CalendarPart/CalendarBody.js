import React, { useState, useEffect } from "react";
import {
  format,
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
import { Sliders } from "./Sliders";

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

function CalendarBody({
  monthView,
  events,
  ecoEvents,
  selectedValue,
  currentValue,
  onChange,
}) {
  const [currentDate, setCurrentDate] = useState(currentValue);
  const [selectedDate, setSelectedDate] = useState(selectedValue);
  const [isMonthView, setIsMonthView] = useState(monthView);

  const [daysData, setDaysData] = useState([]);
  const [anniversary, setAnniversary] = useState([]);
  const [quote, setquote] = useState("");

  let errors = null;

  const ecoColor = (item) =>
    item > 7
      ? "eco4"
      : item >= 5
      ? "eco3"
      : item >= 3
      ? "eco2"
      : item === 0
      ? ""
      : "eco1";

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
    setDaysData(events);
  }, [events]);
  useEffect(() => {
    setAnniversary(ecoEvents);
  }, [ecoEvents]);

  useEffect(() => {
    setIsMonthView(monthView);
  }, [monthView]);

  useEffect(() => {
    setCurrentDate(currentValue);
  }, [currentValue]);

  const dateFormat = "yyyy-MM-dd";

  const onDateClickHandle = (day) => {
    if (!isSameMonth(day, currentDate)) {
      setCurrentDate(day);
    }
    onChange(day);
    setSelectedDate(day);
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

  return (
    <div className="calendars">
      <RenderWeekName />
      <div className="body">{renderCells()}</div>
    </div>
  );
}

CalendarBody.defaultProps = {
  monthView: true,
  ecoEvents: [],
};

export default CalendarBody;
