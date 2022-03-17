import React from "react";
import Footer from "../../components/Footer/Footer";
import Calendar from "../../components/CalendarPart/CalendarBody";

function CalendarPage() {
  // let emoji = "💳";
  // useEffect(() => {
  //   fetch(`/mission/yui12@gmail.com/${emoji}/절약`, {
  //     method: "post",
  //     body: JSON.stringify({
  //       name: "💳",
  //       batch: 1,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.success) {
  //         alert("저장 완료");
  //       }
  //     });
  // }, []);

  return (
    <div className="calendarPage">
      <Calendar />
      <Footer activeMenu="calendar">
        <div>달력</div>
      </Footer>
    </div>
  );
}

export default CalendarPage;
