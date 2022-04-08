import React, { useState, useEffect } from "react";
import { format, subMonths, addMonths } from "date-fns";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

function DateHeader({ getDate, sendDate }) {
  const [currentMonth, setCurrentMonth] = useState(getDate);
  useEffect(() => {
    setCurrentMonth(getDate);
  }, [getDate]);

  const yNmFormat = "yyyy년 M월";

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
      sendDate(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
      sendDate(addMonths(currentMonth, 1));
    }
  };

  return (
    <StyledDateHeader>
      <div className="header row flex-middle">
        <div className="col col-start">
          <IoIosArrowForward
            className="icon"
            onClick={() => changeMonthHandle("prev")}
          />
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, yNmFormat)}</span>
        </div>
        <div className="col col-end">
          <IoIosArrowForward
            className="icon"
            onClick={() => changeMonthHandle("next")}
          />
        </div>
      </div>
    </StyledDateHeader>
  );
}

const StyledDateHeader = styled.div`
  .row {
    padding: 0;
    display: flex;
    flex-direction: row;
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  }
  .col {
    margin: 0;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-start {
    justify-content: flex-start;
    text-align: left;
  }

  .col-center {
    justify-content: center;
    text-align: center;
  }

  .col-end {
    justify-content: flex-end;
    text-align: right;
  }
  .header {
    position: absolute;
    font-weight: 700;
    font-size: 115%;
    width: 96%;
    padding: 30px 0 23px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #141b27;
    z-index: 3;
  }

  .header .icon {
    color: #9a9a9a;
    cursor: pointer;
    margin: 0 2em;
  }

  .header .col-start .icon {
    margin-left: 2.5em;
    transform: rotate(180deg);
  }

  .header .col-end .icon {
    margin-right: 2.5em;
  }
`;

export default DateHeader;
