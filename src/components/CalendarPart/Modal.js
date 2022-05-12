import React, { useEffect } from "react";
import Portal from "./Portal";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

import { ReactComponent as RoundArrow } from "./roundArrow.svg";
import "./Calendar.css";

export function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  background,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px; left:0px; right:0px; bottom:0px;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex={-1}
      >
        <ModalInner
          visible={visible}
          background={background}
          tabIndex={0}
          className="modal-inner"
        >
          {closable && <CgClose className="modal-close" onClick={close} />}
          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
}

export function InfoModal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px; left:0px; right:0px; bottom:0px;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    <Portal elementId="modal-root">
      <InfoModalOverlay visible={visible} className={className} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex={-1}
        visible={visible}
      >
        <div className="infoModal">
          <CgClose className="modal-close" onClick={close} />
          {calendarInfoData(children)}
        </div>
      </ModalWrapper>
    </Portal>
  );
}

Modal.defaultProps = {
  background: "#141b27",
  visible: false,
  closable: true,
  maskClosable: true,
};

InfoModal.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
};

Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  font-family: Pretendard;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  overflow: auto;
  outline: 0;
  .infoModal {
    position: relative;
    color: white;
    font-size: 13px;
  }

  .modal-close {
    color: rgba(var(--light-gray));
    width: 20px;
    height: 20px;
    float: right;
    cursor: pointer;
  }
  .infoModal .modal-close {
    margin-right: 25px;
    margin-top: 25px;
  }

  .eco-day-circle,
  .eco-day {
    position: fixed;
    top: ${(props) => props.className - 55}px;
    left: 35%;
  }
  .eco-day-circle {
    font-size: 10px;
    color: rgba(var(--blue));
    left: 31%;
  }
  .non-eco-cnt {
    position: fixed;
    top: ${(props) => props.className + 45}px;
    left: 7%;
  }
  .eco-cnt {
    position: fixed;
    top: ${(props) => props.className + 65}px;
    left: 7%;
  }
  .top-arrow {
    position: fixed;
    color: rgba(var(--light-gray));
    width: 20px;
    height: 20px;
    top: ${(props) => props.className - 33}px;
    left: 35%;
  }

  .bottom-arrow {
    position: fixed;
    color: rgba(var(--light-gray));
    transform: rotate(180deg);
    width: 20px;
    height: 20px;
    top: ${(props) => props.className + 10}px;
    left: 13%;
  }

  .calendar-desc {
    position: fixed;
    top: ${(props) => props.className + 150}px;
    left: 45%;
  }
  .calendar-arrow {
    position: fixed;
    top: ${(props) => props.className + 170}px;
    left: 50%;
  }

  .calendars {
    position: absolute;
    width: 100%;
    top: ${(props) => props.className + 190}px;
  }
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(var(--navy), 0.9);
  z-index: 3;
`;

const InfoModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-color: blue;

  z-index: 3;
  border-style: solid;
  border-color: rgba(var(--navy));
  opacity: 0.8;
  border-width: ${(props) => props.className - 10}px 20vh
    calc(100vh - ${(props) => props.className + 20}px) 0;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: ${(props) => (props.background ? "#202632" : "#141b27")};
  border-radius: 10px;
  width: ${(props) => (props.visible ? "90%" : "100%")};
  height: ${(props) => (props.visible ? "none" : "50vh")};
  top: 50%;
  transform: ${(props) => (props.visible ? "translateY(-50%)" : "none")};
  margin: 0 auto;
  padding: 20px 20px;
  color: white;
`;

const calendarInfoData = (monthView) => {
  return (
    <>
      <span className="eco-day-circle">● </span>
      <span className="eco-day">는 환경기념일이 있는 날에 표시됩니다</span>
      <RoundArrow className="top-arrow" />
      <RoundArrow className="bottom-arrow" />
      <div className="non-eco-cnt">
        <span className="neco-cal-circle">●</span> 는 반환경적인 소비 항목의
        횟수,
      </div>
      <span className="eco-cnt">
        <span className="eco-cal-circle">●</span> 는 친환경적인 소비 항목의
        횟수를 의미합니다.
      </span>

      {monthView && (
        <>
          <span className="calendar-desc">
            친환경 태그가 많을수록 초록빛을 띠어요
          </span>
          <RoundArrow className="calendar-arrow" />
          <div className="calendars">
            <div className="body">
              <div class="row">
                <div class="col cell">
                  <div class="number empty">11</div>
                </div>
                <div class="col cell">
                  <div class="number empty">12</div>
                </div>
                <div class="col cell">
                  <div class="number empty">13</div>
                </div>
                <div class="col cell">
                  <div class="number eco3">14</div>
                  <div class="detail-cost ex-day">-14,000</div>
                </div>
                <div class="col cell">
                  <div class="number empty">15</div>
                </div>
                <div class="col cell">
                  <div class="number empty">16</div>
                </div>
                <div class="col cell">
                  <div class="number eco2">17</div>
                  <div class="detail-cost ex-day">-5,230</div>
                  <div class="detail-cost in-day">+12,120</div>
                </div>
              </div>
              <div class="row">
                <div class="col cell">
                  <div class="number empty">18</div>
                </div>
                <div class="col cell">
                  <div class="number empty">19</div>
                </div>
                <div class="col cell">
                  <div class="number eco4">20</div>
                  <div class="detail-cost in-day">+8,900</div>
                </div>
                <div class="col cell selected">
                  <div class="number eco2">21</div>
                  <div class="detail-cost ex-day">-34,000</div>
                  <div class="detail-cost in-day">+128,990</div>
                </div>
                <div class="col cell">
                  <div class="number empty">22</div>
                </div>
                <div class="col cell">
                  <div class="number empty">23</div>
                </div>
                <div class="col cell">
                  <div class="number empty">24</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
