import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import "./Statistics.css";
import { IoIosArrowForward } from "react-icons/io";
import HistorySample from "../../components/History/HistoryBack";
import DropBox from "../../components/StatisticsPart/DropBox";
import ko from "date-fns/locale/ko";
import DateHeader from "../../components/DateHeader";
import { DetailMemo } from "./StatisticsWays";
import { StyledDetailPageBlock } from "../../components/CalendarPart/StyledDetail";

const OPTIONS = [
  { value: "all", name: "전체" },
  { value: "income", name: "수입" },
  { value: "expend", name: "지출" },
];

function StatisticsDetail() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [message, setMessage] = useState(0);
  const [detailDtoList, setDetailDtoList] = useState([]);

  const wayEmoji = (way) => (way === "은행" ? "🏦" : (way === "카드" ? "💳" : "💵"));

  const fetchData = async () => {
    const response = await fetch(
      `/statistics/2022/3`,
      //${format(new Date(), "M")}
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    setMessage(data);
    setDetailDtoList(data.detailDtoList);
  };

  useEffect(() => {
    // fetchData();
    setMessage(data);
    setDetailDtoList(data.detailDtoList);
    // setloading(false);
  }, []);

  return (
    <div className="static-detail-container">
      <DateHeader
        goBack={true}
        getDate={currentMonth}
        sendDate={(date) => setCurrentMonth(date)}
      />

      <div className="detail-box">
        <Link
          to={`/statisticsView/income/${format(currentMonth, "yyyy")}/${format(
            currentMonth,
            "M"
          )}`}
          state={{ name: "income" }}
          style={{ textDecoration: "none" }}
        >
          <div className="income-box">
            <p>수입</p>
            <IoIosArrowForward className="detail-icon" />
            <h1>{message.totalMonthIncome}원</h1>
          </div>
        </Link>
        <Link
          to={`/statisticsView/expend/${format(currentMonth, "yyyy")}/${format(
            currentMonth,
            "M"
          )}`}
          state={{ name: "expenditure" }}
          style={{ textDecoration: "none" }}
        >
          <div className="income-box">
            <p>지출</p>
            <IoIosArrowForward className="detail-icon" />
            <h1>{message.totalMonthExpenditure}원</h1>
          </div>
        </Link>
        <div className="balloon">
          <p>지난달 이맘때보다</p>
          <h1>
            약{" "}
            <b style={{ color: "#00C982" }}>
              {message.inDif}원{" "}
              {message.inMore ? "더" : "덜"}
            </b>{" "}
            들어오고
          </h1>
          <h1>
            약{" "}
            <b style={{ color: "#00C982" }}>
              {message.exDif}원{" "}
              {message.exMore ? "더" : "덜"}
            </b>{" "}
            썼어요
          </h1>
        </div>
      </div>

      <div className="line-box"></div>

      <div className="statistics-box">
        <div className="drop-box">
          <DropBox options={OPTIONS} defaultValue="all" />
        </div>

        {detailDtoList.map((data) => {
          return (
            <>
              <p className="statistic-detail-list date">
                {format(parseISO(data.date), "d일 EEEE", { locale: ko })}
              </p>
              {data.detailDtoList.map((value) => {
                let ecoCnt = 0;
                value.ecoList !== null &&
                  value.ecoList.forEach((value) => {
                    if (value.eco === "G") {
                      ecoCnt += 1;
                    } else if (value.eco === "R") {
                      ecoCnt -= 1;
                    }
                  });
                return (
                  <Link
                    className="detail-link"
                    to={`/statisticsModify`}
                    style={{ textDecoration: "none" }}
                    state={{
                      item: value,
                      date: parseISO(data.date),
                    }}
                  >
                    <StyledDetailPageBlock>
                      <div className="statistic-detail-list" key={value.id}>
                        <div className="stat-detail-icon">
                          {wayEmoji(value.way)}
                        </div>
                        <DetailMemo item={value} ecoCnt={ecoCnt} />
                      </div>
                    </StyledDetailPageBlock>
                  </Link>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default StatisticsDetail;

const data = {
  "totalMonthIncome": 880,
  "totalMonthExpenditure": 92000,
  "inMore": true,
  "exMore": true,
  "inDif": 880,
  "exDif": 92000,
  "detailDtoList": [
    {
      "date": "2022-03-04",
      "detailDtoList": [
        {
          "type": "생필품",
          "way": "은행",
          "cost": 32000,
          "memo": "츄파츕스 사먹음",
          "ecoList": [
            {
              eco: "G",
              ecoDetail: "중고거래/나눔/기부",
              etcMemo: null,
            },
            {
              eco: "G",
              ecoDetail: "비건식당 방문",
              etcMemo: null,
            },
            {
              eco: "R",
              ecoDetail: "식자재 낭비",
              etcMemo: null,
            },
          ],
          income: false,
        },
      ],
    },
    {
      "date": "2022-03-20",
      "detailDtoList": [
        {
          "type": "마트",
          "way": "현금",
          "cost": 53000,
          "memo": "츄파츕스 사먹음",
          "ecoList": [
            {
              eco: "G",
              ecoDetail: "중고거래/나눔/기부",
              etcMemo: null,
            },
            {
              eco: "G",
              ecoDetail: "비건식당 방문",
              etcMemo: null,
            },
            {
              eco: "R",
              ecoDetail: "식자재 낭비",
              etcMemo: null,
            },
          ],
          income: false,
        },
      ],
    },
    {
      "date": "2022-03-23",
      "detailDtoList": [
        {
          "type": "경조사/회비",
          "way": "은행",
          "cost": 7000,
          "memo": "츄파츕스 사먹음",
          "ecoList": [
            {
              eco: "G",
              ecoDetail: "중고거래/나눔/기부",
              etcMemo: null,
            },
            {
              eco: "G",
              ecoDetail: "비건식당 방문",
              etcMemo: null,
            },
            {
              eco: "R",
              ecoDetail: "식자재 낭비",
              etcMemo: null,
            },
          ],
          income: false,
        },
      ],
    },
  ]
}
