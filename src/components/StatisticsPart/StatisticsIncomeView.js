import React, { useState, useEffect } from "react";
import { format, subMonths, addMonths } from "date-fns";
import "./Statistics.css";
import { IoIosArrowForward } from "react-icons/io";
import HistorySample from '../../components/History/HistoryBack';


function StatisticsDetail() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isMonthView, setIsMonthView] = useState(true);
  const [monthView, setMonthView] = useState();
  const [animation, setanimation] = useState("");

  useEffect(() => {
    setMonthView();
  }, [selectedDate, currentMonth]);

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const renderHeader = () => {
    const yNmFormat = "yyyy년 M월";

    return (
      <div style={{zIndex:"2"}} className="header row2 flex-middle">
          <div style={{position:"relative", left:"-48px", zIndex:"1", background:"transparent"}}><HistorySample /></div>
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
    );
  };

  const nowMFormat = "M";

  return (
    <div className="calendar">
      {renderHeader()}
      <div className={`${animation}`}>
        {isMonthView && (
          <>

          <div className="detail-box">
              <div className="income-detail-box">
                  <p>{format(currentMonth, nowMFormat)}월 수입 총액</p>
                  <h1>800,000원</h1>
              </div>
              <div className="balloon2">
                  <p>지난달 이맘때보다</p>
                  <h1>약 <b style={{color:"#00C982"}}>10만원 더</b> 들어왔어요</h1>
              </div>
          </div>

          <div className="line-box"></div>

          <div className="statistics-box">
              <div className="day-box">
                  <p>29일 수요일</p>
                  <div className="day-breakdown-box">
                      <div className="day-breakdown-box-icon">💰</div>
                      <h1>용돈</h1>
                      <h2>+800,000원</h2>
                      <p>&nbsp;</p>

                      <div className="day-breakdown-box-icon">💰</div>
                      <h1>용돈</h1>
                      <h2>+800,000원</h2>
                      <p>&nbsp;</p>

                      <div className="day-breakdown-box-icon">💰</div>
                      <h1>용돈</h1>
                      <h2>+800,000원</h2>
                      <p>&nbsp;</p>

                      <div className="day-breakdown-box-icon">💰</div>
                      <h1>용돈</h1>
                      <h2>+800,000원</h2>
                      <p>&nbsp;</p>

                      <div className="day-breakdown-box-icon">💰</div>
                      <h1>용돈</h1>
                      <h2>+800,000원</h2>
                      <p>&nbsp;</p>
                  </div>
              </div>
          </div>

          </>
        )}
      </div>
    </div>
  );
}

export default StatisticsDetail;
