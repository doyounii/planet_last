import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DetailItem } from "./DetailList";
import SwipeableList from "../Swipeable/SwipeableList";
import { StyledDetailPageBlock } from "./StyledDetail";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../Footer/Footer";

function DetailCategory() {
  const history = useNavigate();
  const data = useLocation().state;
  const [detailList, setDetailList] = useState(data.typeDetail);

  const isEco = (ecoCnt) => (ecoCnt > 0 ? "eco" : ecoCnt < 0 ? "neco" : "etc");

  const onSwipe = (index) => {
    setTimeout(() => {
      setDetailList(detailList.filter((item) => item.id != index));
    }, 2000);
  };

  return (
    <>
      <StyledDetailPageBlock>
        <div className="detail-page">
          <div className="detail-info-block">
            <div className="selected-date">{data.date}</div>
            <div className="detail-info">
              <IoIosArrowForward
                className="forward-arrow"
                onClick={() => {
                  history(-1);
                }}
              />
              <div className="detail-type">{data.typeName}</div>
            </div>
            <div className="detail-cost">
              <div className="detail-info">
                <div className="detail-cost-label">수입</div>
                <div className="detail-cost-value">내역 없음</div>
              </div>
              <div className="detail-info">
                <div className="detail-cost-label">지출</div>
                <div className="detail-cost-value">
                  {data.typeCost.toLocaleString()}원
                </div>
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
                  //onClick-Link to 추가할 것
                  <SwipeableList key={item.id} onSwipe={onSwipe}>
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
      <Footer activeMenu="calendar" />
    </>
  );
}

export default DetailCategory;
