import React, { useState, useEffect } from "react";
import { useQuery, useQueries, queryClient, useQueryClient } from "react-query";
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
  // const response = await fetch(
  //   `/calendar/${format(date, "yyyy")}/${format(date, "M")}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   }
  // );
  // const data = await response.json();
  const data = {
    anniversaryList: ["2022-06-03", "2022-06-13", "2022-06-17"],
    calendarDto: {
      sumOfEcoCount: 29,
      sumOfNoneEcoCount: 12,
      totalMonthIncome: 0,
      totalMonthExpenditure: 265277,
      calendarDayDtos: [
        {
          date: "2022-06-20",
          incomeDays: 0,
          ecoCount: 1,
          noneEcoCount: 1,
          expenditureDays: 2000,
        },
        {
          date: "2022-06-23",
          incomeDays: 0,
          ecoCount: 3,
          noneEcoCount: 6,
          expenditureDays: 19600,
        },
        {
          date: "2022-06-24",
          incomeDays: 0,
          ecoCount: 4,
          noneEcoCount: 2,
          expenditureDays: 8400,
        },
        {
          date: "2022-06-25",
          incomeDays: 0,
          ecoCount: 5,
          noneEcoCount: 0,
          expenditureDays: 7000,
        },
        {
          date: "2022-06-26",
          incomeDays: 0,
          ecoCount: 16,
          noneEcoCount: 3,
          expenditureDays: 561872,
        },
      ],
    },
    content:
      "자연과 가까울수록 병은 멀어지고, 자연과 멀수록 병은 가까워진다. - 요한 볼프강 폰 괴테",
  };
  return data;
};

const fetchDetailData = async (day) => {
  // console.log("fetch");
  // const date = parseISO(day);
  // const response = await fetch(
  //   `calendar/${format(date, "yyyy")}/${format(date, "M")}/${format(
  //     date,
  //     "d"
  //   )}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   }
  // );
  // const data = await response.json();
  const data = {
    totalMoney: {
      가전: -20432,
      교통: -46486,
      생필품: -74263,
      통신: -4200,
    },
    totalDetails: {
      가전: [
        {
          type: "가전",
          way: "현금",
          id: "20",
          cost: 20432,
          memo: "빵 사먹음",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "중고거래/나눔/기부",
              userAdd: null,
            },
            {
              eco: "G",
              ecoDetail: "비건식당 방문",
              userAdd: null,
            },
            {
              eco: "N",
              ecoDetail: "사용자 추가",
              userAdd: "라벨 붙은 음료수 삼",
            },
          ],
          income: false,
        },
      ],
      교통: [
        {
          type: "교통",
          way: "카드",
          id: "22",
          cost: 46486,
          memo: "빵 사먹음",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "중고거래/나눔/기부",
              userAdd: null,
            },
            {
              eco: "G",
              ecoDetail: "비건식당 방문",
              userAdd: null,
            },
            {
              eco: "N",
              ecoDetail: "사용자 추가",
              userAdd: "라벨 붙은 음료수 삼",
            },
          ],
          income: false,
        },
      ],
      생필품: [
        {
          type: "생필품",
          way: "카드",
          id: "25",
          cost: 3690,
          memo: "엽떡 사먹음",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "다회용기 사용",
              userAdd: null,
            },
            {
              eco: "G",
              ecoDetail: "중고거래/나눔/기부",
              userAdd: null,
            },
          ],
          income: false,
        },
        {
          type: "생필품",
          way: "현금",
          id: "26",
          cost: 70573,
          memo: "빵 사먹음",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "중고거래/나눔/기부",
              userAdd: null,
            },
            {
              eco: "G",
              ecoDetail: "비건식당 방문",
              userAdd: null,
            },
          ],
          income: false,
        },
      ],
      통신: [
        {
          type: "통신",
          way: "카드",
          id: "20",
          cost: 1400,
          memo: "new memo",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "친환경 제품 구매",
              userAdd: null,
            },
            {
              eco: "N",
              ecoDetail: "사용자 추가",
              userAdd: "평생 쓰는 물건 잃어버려서 재구매",
            },
            {
              eco: "G",
              ecoDetail: "비건식당 방문",
              userAdd: null,
            },
          ],
          income: false,
        },
      ],
    },
  };
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

        <div style={{ color: "white" }}>
          <a href="http://ec2-3-39-87-115.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao">
            Naver
          </a>
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
          <div style={{ color: "white" }}>내역 없음</div>
        )}
      </div>
      <Footer activeMenu="calendar">
        <div>달력</div>
      </Footer>
    </div>
  );
}

export default CalendarPage;
