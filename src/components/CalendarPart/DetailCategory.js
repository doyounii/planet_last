import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { DetailItem } from "./DetailList";
import SwipeableList from "../Swipeable/SwipeableList";
import { StyledDetailPageBlock } from "./StyledDetail";
import { IoIosArrowForward } from "react-icons/io";
function DetailCategory() {
  const data = useLocation().state;
  const [detailList, setDetailList] = useState(data.typeDetail);

  const isEco = (ecoCnt) => (ecoCnt > 0 ? "eco" : ecoCnt < 0 ? "neco" : "etc");

  return (
    <StyledDetailPageBlock>
      <div className="detail-page">
        <div className="detail-info-block">
          <div className="selected-date">{data.date}</div>
          <div className="detail-info">
            <IoIosArrowForward className="forward-arrow" />
            <div className="detail-type">{data.typeName}</div>
          </div>
          <div className="detail-cost">
            <div className="detail-info">
              <div className="detail-cost-label">수입</div>
              <div className="detail-cost-value">내역 없음</div>
            </div>
            <div className="detail-info">
              <div className="detail-cost-label">지출</div>
              <div className="detail-cost-value">{data.typeCost}</div>
            </div>
          </div>
        </div>

        <div className="detail-div-list">
          <div className="detail-history">내역</div>
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
    </StyledDetailPageBlock>
  );
}

export default DetailCategory;
