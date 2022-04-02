import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Calendar from "../../components/CalendarPart/CalendarBody";
import DetailList from "../../components/CalendarPart/DetailList";

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const changeDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendarPage" style={{ marginBottom: "100px" }}>
      <Calendar value={selectedDate} onChange={changeDate} />
      <DetailList value={selectedDate} />
      <Footer activeMenu="calendar">
        <div>달력</div>
      </Footer>
    </div>
  );
}

export default CalendarPage;
