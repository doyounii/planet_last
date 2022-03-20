import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { DetailItem } from "./DetailList";
import SwipeableList from "../Swipeable/SwipeableList";

function DetailCategory() {
  const data = useLocation().state;
  const [detailList, setDetailList] = useState(data.typeDetail);

  const isEco = (ecoCnt) => (ecoCnt > 0 ? "eco" : ecoCnt < 0 ? "neco" : "etc");

  return (
    <div style={{ color: "white" }}>
      <div className="detail-date">{data.date}</div>
      <div className="detail-type">{data.typeName}</div>
      <div className="detail-cost">
        <div className="detail-cost-income">내역 없음</div>
        <div className="detail-cost-expend">{data.typeCost}</div>
      </div>
      <div className="detail-div-list">
        <div className="history">내역</div>
        {detailList.length !== 0 &&
          detailList.map((item) => {
            let ecoCnt = 0;
            item.ecoList.forEach((item) => {
              if (item.eco === "G") {
                ecoCnt += 1;
              } else if (item.eco === "R") {
                ecoCnt -= 1;
              }
            });
            return (
              <SwipeableList key={item.id}>
                <div className="details" key={item.id}>
                  <div className={`details-circle ${isEco(ecoCnt)}`}>
                    ● &nbsp;
                  </div>
                  <DetailItem item={item} ecoCnt={ecoCnt} />
                </div>
              </SwipeableList>
            );
          })}
      </div>
    </div>
  );
}

export default DetailCategory;
