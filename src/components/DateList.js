import React, { useState, useEffect } from "react";
import { format, subMonths, isSameMonth } from "date-fns";
import styled from "styled-components";

function DateList({ 
    getDate, 
    selectedValue,
    onChange}) {

  const [currentMonth, setCurrentMonth] = useState(getDate); //new Date()
  const [selectedDate, setSelectedDate] = useState(selectedValue);
  
  useEffect(() => {
    setCurrentMonth(getDate);
  }, [getDate]);

  const yNmFormat = "yyyy년 M월";
  const dateFormat = "yyyy-M";

  const onMonthClickHandle = (date) => { //date값이 yyyy년 M월으로 넘어감
    // if (!isSameMonth(date, currentMonth.getMonth() + 1)) {
    //   setCurrentMonth(date);
    // }
    console.log(new Date(format(date, dateFormat)));
    //포맷을 바꾸자
    // onChange(date);
    // setSelectedDate(date);
  };

  const dates = 
   [
    format(currentMonth, yNmFormat),
    format(subMonths(currentMonth, 1), yNmFormat),
    format(subMonths(currentMonth, 2), yNmFormat), 
    format(subMonths(currentMonth, 3), yNmFormat), 
    format(subMonths(currentMonth, 4), yNmFormat), 
    format(subMonths(currentMonth, 5), yNmFormat), 
    format(subMonths(currentMonth, 6), yNmFormat), 
    format(subMonths(currentMonth, 7), yNmFormat), 
    format(subMonths(currentMonth, 8), yNmFormat), 
   ];

  const listItem = dates.map((date) =>
    <li onClick={() => {onMonthClickHandle(date)}}>
        {date}
    </li>
  );

  return (
    <StyledDateHeader>
        <div className="datelist-title">월 선택하기</div>
        
        <div className="col list-item">
            {listItem}
        </div>
    </StyledDateHeader>
  );
}

DateList.defaultProps = {
  goBack: false,
};

const StyledDateHeader = styled.div`
  li {
    list-style: none;
    padding-left: 0px;
    width: 100%;
    padding: 6%;
    color: rgba(180, 182, 184, 1);
    font-size: 16px;
  }

  li:hover {
      background: rgba(20, 27, 39, 1);
  }

  .datelist-title {
    position: relative;
    width: 30%;
    font-family: Pretendard;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    left: 35%;
    margin-top: 1%;
  }

  .list-item {
      margin-top: 7%;
  }

  .col {
    margin: 10;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }
`;

export default DateList;
