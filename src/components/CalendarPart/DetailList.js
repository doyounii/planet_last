import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import ko from "date-fns/locale/ko";
import { StyledDetailBlock } from "./StyledDetail";

const tempData = {
  totalMoney: {
    가전: -20432,
    교통: -46486,
    생필품: -74263,
    식비: -100696,
    통신: -4200,
  },
  totalDetails: {
    통신: [
      {
        id: 13,
        type: "통신",
        cost: 1401,
        memo: "new memo1",
        ecoList: [
          {
            eco: "R",
            ecoDetail: "기타",
            etcMemo: "라벨이 붙은 음료수 구매",
          },
          {
            eco: "G",
            ecoDetail: "중고거래/나눔/기부",
            etcMemo: null,
          },
          {
            eco: "R",
            ecoDetail: "비닐봉투 소비",
            etcMemo: null,
          },
        ],
        income: false,
      },
      {
        id: 24,
        type: "통신",
        cost: 1403,
        memo: "new memo3",
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
    ],
    가전: [
      {
        id: 19,
        type: "가전",
        cost: 20432,
        memo: "빵 사먹음",
        ecoList: [
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
            eco: "N",
            ecoDetail: "기타",
            etcMemo: "라벨 붙은 음료수 삼",
          },
        ],
        income: false,
      },
    ],
    교통: [
      {
        id: 18,
        type: "교통",
        cost: 46486,
        memo: "빵 사먹음",
        ecoList: [
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
            eco: "N",
            ecoDetail: "기타",
            etcMemo: "라벨 붙은 음료수 삼",
          },
        ],
        income: false,
      },
    ],
    생필품: [
      {
        id: 17,
        type: "생필품",
        cost: 3690,
        memo: "엽떡 사먹음",
        ecoList: [
          {
            eco: "G",
            ecoDetail: "다회용기 사용",
            etcMemo: null,
          },
          {
            eco: "G",
            ecoDetail: "중고거래/나눔/기부",
            etcMemo: null,
          },
        ],
        income: false,
      },
      {
        id: 16,
        type: "생필품",
        cost: 70573,
        memo: "빵 사먹음",
        ecoList: [
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
        ],
        income: false,
      },
    ],
    식비: [
      {
        id: 15,
        type: "식비",
        cost: 83504,
        memo: "엽떡 사먹음",
        ecoList: [
          {
            eco: "G",
            ecoDetail: "다회용기 사용",
            etcMemo: null,
          },
          {
            eco: "G",
            ecoDetail: "중고거래/나눔/기부",
            etcMemo: null,
          },
        ],
        income: false,
      },
      {
        id: 14,
        type: "식비",
        cost: 17192,
        memo: "빵 사먹음",
        ecoList: [
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
        {item.ecoList !== null &&
          item.ecoList.map((data) => {
            return (
              <div className={`details-detail ${isEcoT(data.eco)}`}>
                {data.ecoDetail == "기타" ? data.etcMemo : data.ecoDetail}
              </div>
            );
          })}
      </div>

      <div className={`details-cost ${isEco(ecoCnt)}`}>
        {item.income == true ? "+" : "-"}
        {item.cost.toLocaleString("ko-KR")}원
      </div>
    </>
  );
}

function DetailList(props) {
  let date = props.value;
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
    // fetchData();
    setData(tempData);
    setloading(false);
  }, []);

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
      filterType.forEach((item) => {
        item.ecoList.forEach((item) => {
          if (item.eco === "G") {
            ecoCnt += 1;
          } else if (item.eco === "R") {
            ecoCnt -= 1;
          }
        });

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
            date: format(props.value, "M. d EEEEE", { locale: ko }),
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
