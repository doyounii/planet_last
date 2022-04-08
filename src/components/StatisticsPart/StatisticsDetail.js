import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format, subMonths, addMonths, parseISO } from "date-fns";
import "./Statistics.css";
import { IoIosArrowForward } from "react-icons/io";
import HistorySample from "../../components/History/HistoryBack";
import DropBox from "./DropBox";
import ko from "date-fns/locale/ko";
import DateHeader from "../DateHeader";
import { DetailItem } from "../CalendarPart/DetailList";
import { StyledDetailPageBlock } from "../CalendarPart/StyledDetail";

const tempData = {
  totalMonthIncome: 36000,
  totalMonthExpenditure: 14000,
  inMore: false, //더 들어왔는지
  exMore: true, //더 썼는지
  inDif: 92000, //더 들어온 가격
  exDif: 14000, //더 쓴 가격
  detailDtoList: [
    {
      date: "2022-04-26",
      detailDtoList: [
        {
          way: "현금",
          type: "경조사/회비",
          cost: 92503,
          memo: null,
          ecoList: null,
          income: true,
        },
        {
          way: "은행",
          type: "월급",
          cost: 1726000,
          memo: "3월 + 4월",
          ecoList: null,
          income: true,
        },
        {
          way: "카드",
          type: "생필품",
          cost: 4990,
          memo: "비누",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "친환경 제품 구매",
              etcMemo: null,
            },
            {
              eco: "N",
              ecoDetail: "기타",
              etcMemo: "평생 쓰는 물건 잃어버려서 재구매",
            },
            {
              eco: "G",
              ecoDetail: "비건식당 방문",
              etcMemo: null,
            },
          ],
          income: false,
        },
        {
          way: "카드",
          type: "가전",
          cost: 50000,
          memo: "가스레인지",
          ecoList: null,
          income: false,
        },
      ],
    },
    {
      date: "2022-04-27",
      detailDtoList: [
        {
          way: "현금",
          type: "생필품",
          cost: 92503,
          memo: "텀블러",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "친환경 제품 구매",
              etcMemo: null,
            },
            {
              eco: "N",
              ecoDetail: "기타",
              etcMemo: "평생 쓰는 물건 잃어버려서 재구매",
            },
          ],
          income: false,
        },
        {
          way: "현금",
          type: "카드",
          cost: 92503,
          memo: "학식",
          ecoList: null,
          income: false,
        },
      ],
    },
  ],
};

function StatisticsDetail() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [detailData, setDetailData] = useState({
    totalMonthIncome: 36000,
    totalMonthExpenditure: 14000,
    inMore: false, //더 들어왔는지
    exMore: true, //더 썼는지
    inDif: 92000, //더 들어온 가격
    exDif: 14000,
  });
  const [detailList, setDetailList] = useState(tempData.detailDtoList);

  const wayEmoji = (way) => (way === "은행" ? "🏦" : "카드" ? "💳" : "💰");

  return (
    <div className="calendar">
      <DateHeader
        getDate={currentMonth}
        sendDate={(date) => setCurrentMonth(date)}
      />

      <div className="detail-box">
        <Link
          to={`/statisticsView/income/${format(currentMonth, "yyyy")}/${format(
            currentMonth,
            "M"
          )}`}
          style={{ textDecoration: "none" }}
        >
          <div className="income-box">
            <p>수입</p>
            <IoIosArrowForward className="detail-icon" />
            <h1>{detailData.totalMonthIncome.toLocaleString()}원</h1>
          </div>
        </Link>
        <Link
          to={`/statisticsView/expend/${format(currentMonth, "yyyy")}/${format(
            currentMonth,
            "M"
          )}`}
          style={{ textDecoration: "none" }}
        >
          <div className="income-box">
            <p>지출</p>
            <IoIosArrowForward className="detail-icon" />
            <h1>{detailData.totalMonthExpenditure.toLocaleString()}원</h1>
          </div>
        </Link>
        <div className="balloon">
          <p>지난달 이맘때보다</p>
          <h1>
            약{" "}
            <b style={{ color: "#00C982" }}>
              {detailData.inDif.toLocaleString()}원{" "}
              {detailData.inMore ? "더" : "덜"}
            </b>{" "}
            들어오고
          </h1>
          <h1>
            약{" "}
            <b style={{ color: "#00C982" }}>
              {detailData.exDif.toLocaleString()}원{" "}
              {detailData.exMore ? "더" : "덜"}
            </b>{" "}
            썼어요
          </h1>
        </div>
      </div>

      <div className="line-box"></div>

      <div className="statistics-box">
        <div className="drop-box">
          <DropBox />
        </div>

        {detailList.map((data) => {
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
                  <StyledDetailPageBlock>
                    <div className="details" key={value.id}>
                      <div className="stat-detail-icon">
                        {wayEmoji(value.way)}
                      </div>
                      <DetailItem item={value} ecoCnt={ecoCnt} />
                    </div>
                  </StyledDetailPageBlock>
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
