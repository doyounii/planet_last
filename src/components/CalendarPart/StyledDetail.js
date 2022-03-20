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

function StyledDetailBlock({ children }) {
  return <StyledDetail>{children}</StyledDetail>;
}

export default StyledDetailBlock;
