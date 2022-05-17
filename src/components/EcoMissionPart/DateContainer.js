import React, { useState } from 'react'

import DateList from "../../components/DateList";

function DateContainer() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const onchangeDate = (date) => {
    setCurrentMonth(date);
  };
  
    return (
      <DateList getDate={currentMonth} sendDate={onchangeDate} />
    );
}

export default DateContainer;