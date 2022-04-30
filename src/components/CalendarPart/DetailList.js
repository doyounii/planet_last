import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import ko from "date-fns/locale/ko";
import { isSameDay, setDate } from "date-fns";
import { StyledDetailBlock } from "./StyledDetail";

const tempData3 = {
  totalMoney: {
    식비: -25000,
  },
  totalDetails: {
    식비: [
      {
        id: 119,
        type: "식비",
        cost: 25000,
        memo: "짜장면 먹음",
        ecoList: null,
        income: false,
      },
    ],
  },
};

const tempData4 = {
  totalMoney: {
    급여: +561000,
    교통: -2000,
    식비: -15000,
  },
  totalDetails: {
    급여: [
      {
        id: 13,
        type: "급여",
        cost: 561000,
        memo: "알바 월급 보너스",
        income: true,
      },
    ],
    교통: [
      {
        id: 18,
        type: "교통",
        cost: 2000,
        memo: "버스 두번 갈아탐",
        ecoList: [
          {
            eco: "G",
            ecoDetail: "대중교통 이용",
            etcMemo: null,
          },
        ],
        income: false,
      },
    ],
    식비: [
      {
        id: 17,
        type: "식비",
        cost: 9500,
        memo: "친구랑 저녁",
        ecoList: [
          {
            eco: "G",
            ecoDetail: "비건식당 방문",
            etcMemo: null,
          },
          {
            eco: "G",
            ecoDetail: "다회용기 사용",
            etcMemo: null,
          },
        ],
        income: false,
      },
      {
        id: 16,
        type: "식비",
        cost: 3500,
        memo: "아이스 아메리노",
        ecoList: [
          {
            eco: "G",
            ecoDetail: "다회용기 사용",
            etcMemo: null,
          },
          {
            eco: "R",
            ecoDetail: "컵홀더 받아옴",
            etcMemo: null,
          },
        ],
        income: false,
      },
    ],
  },
};

const isEco = (ecoCnt) => (ecoCnt > 0 ? "eco" : ecoCnt < 0 ? "neco" : "etc");
const isEcoT = (eco) => (eco === "G" ? "eco" : eco === "R" ? "neco" : "etc");

export function DetailItem({ item, ecoCnt }) {
  return (
    <>
      <div
        className="details-memo"
        onClick={(e) => console.log(e.target.value)}
        key={item.id}
      >
        {item.memo !== null ? item.memo : item.type}
        {item.ecoList !== undefined &&
          item.ecoList !== null &&
          item.ecoList.map((data) => {
            return (
              <div className={`details-detail ${isEcoT(data.eco)}`}>
                {data.ecoDetail == "기타" ? data.etcMemo : data.ecoDetail}
              </div>
            );
          })}
      </div>

      <div className={`details-cost ${isEco(ecoCnt)}`}>
        {item.income ? "+" : "-"}
        {item.cost.toLocaleString("ko-KR")}원
      </div>
    </>
  );
}

function DetailList(props) {
  let date = props.value;
  const [list, setList] = useState([]);
  const [totalList, setTotalList] = useState([]);
  const [detailList, setDetailList] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      `calendar/user1@naver.com/2022/${format(props.value, "M")}/${format(
        props.value,
        "d"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    setData(data);

    setloading(false);
  };

  useEffect(() => {
    fetchData();

    // if (isSameDay(props.value, new Date())) {
    //   setData(tempData3);
    // } else {
    //   setDate(tempData4);
    // }

    setloading(false);
  }, [props.value]);

  const setData = (data) => {
    let getList = [];
    let totalTemp = [];
    let detailTemp = [];
    let moneySum = 0;

    // totalMoney(0)와 totalDetails(1) 나눔
    Object.keys(data).forEach((key) =>
      getList.push({ name: key, value: data[key] })
    );

    Object.keys(getList[0].value).forEach((key) => {
      totalTemp.push({ name: key, value: getList[0].value[key] });
      moneySum += getList[0].value[key];
    });
    // 토탈(하루 총 값): {}일 경우 작동 안함
    if (totalTemp.length !== 0) {
      detailTemp = Object.values(getList[1].value);
    }
    setTotalList(totalTemp);
    setDetailList(detailTemp);
    setTotalMoney(moneySum);
  };

  const renderDetailList = (filterType) => {
    let detailList = [];
    let ecoCnt = 0;

    filterType !== undefined &&
      filterType !== null &&
      filterType.forEach((item) => {
        {
          item.ecoList !== undefined &&
            item.ecoList !== null &&
            item.ecoList.forEach((item) => {
              if (item.eco === "G") {
                ecoCnt += 1;
              } else if (item.eco === "R") {
                ecoCnt -= 1;
              }
            });
        }

        detailList.push(
          <div className="details" key={item.id}>
            <div className={`details-circle ${isEco(ecoCnt)}`}>● &nbsp;</div>
            <DetailItem item={item} ecoCnt={ecoCnt} />
          </div>
        );
        ecoCnt = 0;
      });

    return detailList;
  };

  const renderList = () => {
    let renderList = [];

    for (let i = 0; i < totalList.length; i++) {
      renderList.push(
        <Link
          className="detail-link"
          to={`/calendar/${format(date, "M")}/${format(date, "d")}`}
          state={{
            date: props.value,
            typeName: totalList[i].name,
            typeCost: totalList[i].value,
            typeDetail: detailList[i],
          }}
        >
          <div className="detail-box" key={totalList[i].name + i}>
            <div className="type">
              <div className="type-name">{totalList[i].name}</div>
              <div className="type-cost">
                {totalList[i].value.toLocaleString()}원
              </div>
            </div>
            {renderDetailList(detailList[i])}
          </div>
        </Link>
      );
    }

    return <div className="item-list">{renderList}</div>;
  };

  if (loading) return <div style={{ color: "white" }}>로딩중..</div>;
  return (
    <StyledDetailBlock>
      <div className="detail-list">
        <div className="selected-detail">
          <div className="selected-date">
            {format(props.value, "M. d EEEEE", { locale: ko })}
          </div>
          <div className="selected-total">{totalMoney}원</div>
        </div>
        {renderList()}
      </div>
    </StyledDetailBlock>
  );
}

export default DetailList;
