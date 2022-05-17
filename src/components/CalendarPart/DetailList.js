import React, { useState, useEffect } from "react";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import ko from "date-fns/locale/ko";
import { isSameDay, setDate } from "date-fns";
import { StyledDetailBlock } from "./StyledDetail";

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

function DetailList({ value }) {
  let date = value;
  const queryClient = useQueryClient();

  const [totalList, setTotalList] = useState([]);
  const [detailList, setDetailList] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);

  useEffect(() => {
    if (date !== undefined || date !== null) {
      const getData = queryClient.getQueryData([
        "detailData",
        format(date, "yyyy-MM-dd"),
      ]);
      setData(getData);
    }
  }, [date]);

  const setData = (data) => {
    let moneySum = 0;

    let totalTemp = Object.keys(data.totalMoney).map((key) => {
      return { name: key, value: data.totalMoney[key] };
    });

    let detailTemp = Object.keys(data.totalDetails).map((key) => {
      return { name: key, value: data.totalDetails[key] };
    });

    totalTemp.map((data) => (moneySum += data.value));

    setTotalList(totalTemp);
    setDetailList(detailTemp);
    setTotalMoney(moneySum);
  };

  const renderDetailList = (filterType) => {
    let detailList = [];
    let ecoCnt = 0;
    console.log(filterType);
    filterType !== undefined &&
      filterType !== null &&
      filterType.value.forEach((item) => {
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
            date: date,
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

  // if (loading) return <div style={{ color: "white" }}>로딩중..</div>;
  return (
    <StyledDetailBlock>
      <div className="detail-list">
        <div className="selected-detail">
          <div className="selected-date">
            {format(value, "M. d EEEEE", { locale: ko })}
          </div>
          <div className="selected-total">{totalMoney.toLocaleString()}원</div>
        </div>
        {renderList()}
      </div>
    </StyledDetailBlock>
  );
}

export default DetailList;
