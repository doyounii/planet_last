import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  * {
    font: Pretendard;
  }

  .selected-date {
    margin-top: 20px;
    color: white;
    font-size: 19px;
    font-weight: 600;
  }
  .type-name {
    font-size: 24px;
    font-weight: 600;
    color: white;
  }

  .type-cost {
    font-size: 16px;
    font-weight: 600;
    color: white;
  }
  .type {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .eco {
    color: #00c982;
  }
  .neco {
    color: #566479;
  }
  .etc {
    color: #b4b6b8;
  }

  .details {
    font-size: 14px;
    margin-top: 25px;
  }
  .details-circle {
    margin-top: 2px;
    font-size: 8px;
  }
  .details-memo {
    color: #b4b6b8;
    margin-left: 8px;
  }
  .details-detail {
    margin-top: 8px;
    font-size: 13px;
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

function StyledModalBlock({ children }) {
  return <StyledModal>{children}</StyledModal>;
}

export default StyledModalBlock;
