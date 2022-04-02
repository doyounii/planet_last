import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale'
import "react-datepicker/dist/react-datepicker.css";

function CalendarModal() {
  const [startDate, setStartDate] = useState(new Date());
  
  const todayCal = () => {
    const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    
    const calPrevBtn = {
      height: "25px",
      width: "25px",
      margin: 0,
      padding: 0,
      paddingRight: 7.5,
      position: "absolute",
      left: "5%",
      top: "17%",
      background: "transparent",
    }

    const calNextBtn = {
      height: "25px",
      width: "25px",
      margin: 0,
      padding: 0,
      paddingRight: 3.5,
      position: "absolute",
      left: "85%",
      top: "17%",
      background: "transparent",
    }

    return(
      <DatePicker
        dateFormat="yy.MM.dd" 
        selected={startDate} 
        onChange={date => setStartDate(date)}
        disabledKeyboardNavigation
        locale={ko}
        minDate={new Date()}
        placeholderText="Weeks start on Monday"
        popperModifiers={{
          preventOverflow: { enabled: true }
        }}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button style={calPrevBtn} type="button" onClick={decreaseMonth}>
              {<FaAngleLeft
                style={{
                  color: "#000000",
                }}
               />}
            </button>

            <div style={{
              fontFamily: "pretendard",
              fontSize: "17px",
              color: "#000000",
            }}>
              {date.getFullYear()}년 {months[date.getMonth()]}
            </div>

            <button style={calNextBtn} type="button" onClick={increaseMonth}>
              {<FaAngleRight
                style={{
                  color: "#000000",
                }}
               />}
            </button>
          </div>
        )}
      />
    );
  };

  return (
    todayCal()
  );
};

export default CalendarModal;
