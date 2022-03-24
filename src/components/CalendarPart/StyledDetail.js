import React from "react";
import styled from "styled-components";

const StyledDetail = styled.div`
  .selected-detail {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    font-weight: 600;
    margin: 5% 10%;
  }
  .selected-date {
    font-size: 19px;
  }
  .selected-total {
    font-size: 16px;
    margin-left: auto;
  }
  .item-list {
    font-family: Pretendard;
    bottom: 70px;
  }

  .detail-box {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 13px;
    margin-bottom: 10px;
    padding: 20px;
  }

  .detail-box:active {
    opacity: 0.5;
  }
  .type-name {
    font-size: 14px;
    font-weight: 600;
    color: white;
  }

  .type-cost {
    font-size: 14px;
    font-weight: normal;
    color: white;
  }
  .type {
    margin-bottom: 15px;
  }
<<<<<<< HEAD
<<<<<<< HEAD
  .eco {
    color: #00c982;
  }
  .neco {
    color: #566479;
  }
  .etc {
    color: #b4b6b8;
  }
=======
>>>>>>> c7e50d2805b925cd6662f02b873304b27dce1503
=======
>>>>>>> 00e099d85f6a0b933c44f65e555bff9e08f7e2c4

  .details {
    font-size: 12px;
    margin-top: 10px;
  }
  .details-circle {
    margin-top: 1.5px;
    font-size: 10px;
  }
  .details-memo {
    color: #b4b6b8;
  }
  .details-detail {
    margin-top: 8px;
    font-size: 11px;
  }

  .type,
  .details {
    display: flex;
    flex-direction: row;
  }

  .type-cost,
  .details-cost {
    margin-left: auto;
  }
`;

export function StyledDetailBlock({ children }) {
  return <StyledDetail>{children}</StyledDetail>;
}

const StyledDetailPage = styled.div`
  .detail-page {
    font-family: Pretendard;
    margin-bottom: 70px;
  }
  .detail-info-block {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    color: white;
    margin-bottom: 60px;
  }

  .selected-date {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin: 30px 0;
  }
  .forward-arrow {
    color: white;
    transform: rotate(180deg);
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
  .detail-info {
    display: flex;
    flex-direction: row;
    line-height: 16px;
    margin-bottom: 20px;
  }

  .detail-type {
    font-weight: 500;
    font-size: 18px;
  }
  .detail-cost {
    top: 15px;
  }

  .detail-info .detail-cost-label {
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.5;
    margin-left: 1%;
  }

  .detail-info .detail-cost-value {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: white;
    margin-left: auto;
  }

  .detail-div-list {
    color: white;
    width: 100%;
  }
  .detail-history {
    font-size: 12px;
    color: #ffffff;
    opacity: 0.5;
    margin-left: 5%;
    margin-bottom: 20px;
  }
  .details {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 13px;
    margin-bottom: 13px;
  }
  .details-circle {
    margin-top: 3px;
    font-size: 8px;
  }

  .details-memo {
    font-size: 15px;
    line-height: 16px;
    font-weight: 500;
  }
  .details-detail {
    font-size: 11px;
    line-height: 13px;
    margin-top: 7px;
    font-weight: 400;
  }
  .details .details-cost {
    font-size: 15px;
    font-weight: 400;
    margin-left: auto;
  }
`;

export function StyledDetailPageBlock({ children }) {
  return <StyledDetailPage>{children}</StyledDetailPage>;
}
