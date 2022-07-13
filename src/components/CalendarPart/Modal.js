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

  .calendar-example {
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

          <div className="calendar-example">
            {calendarData.map((weeks) => {
              return (
                <div className="week">
                  {weeks.map((day) => {
                    return (
                      <div className="days">
                        <div
                          className={`number eco${day.ecoCount} ${
                            day.incomeDays !== 0 || day.expenditureDays !== 0
                              ? "highlight"
                              : ""
                          } ${day.date === 21 ? "today" : ""}`}
                        >
                          {day.date}
                        </div>
                        {day.incomeDays !== 0 && (
                          <div className="money income">+{day.incomeDays}</div>
                        )}
                        {day.expenditureDays !== 0 && (
                          <div className="money expend">
                            -{day.expenditureDays}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

const calendarData = [
  [
    {
      date: 11,
      incomeDays: 0,
      ecoCount: 0,
      expenditureDays: 0,
    },
    {
      date: 12,
      incomeDays: 0,
      ecoCount: 0,
      expenditureDays: 0,
    },
    {
      date: 13,
      incomeDays: 0,
      ecoCount: 0,
      expenditureDays: 0,
    },
    {
      date: 14,
      incomeDays: 0,
      ecoCount: 3,
      expenditureDays: 14000,
    },
    {
      date: 15,
      incomeDays: 0,
      ecoCount: 0,
      expenditureDays: 0,
    },
    {
      date: 16,
      incomeDays: 0,
      ecoCount: 0,
      expenditureDays: 0,
    },
    {
      date: 17,
      incomeDays: "12,120",
      ecoCount: 2,
      expenditureDays: 0,
    },
  ],
  [
    {
      date: 18,
      incomeDays: 0,
      ecoCount: 0,
      expenditureDays: 0,
    },
    {
      date: 19,
      incomeDays: 0,
      ecoCount: 0,
      expenditureDays: 0,
    },
    {
      date: 20,
      incomeDays: "8,900",
      ecoCount: 4,
      expenditureDays: 0,
    },
    {
      date: 21,
      incomeDays: "34,000",
      ecoCount: 3,
      expenditureDays: "128,990",
    },
    {
      date: 22,
      incomeDays: 0,
      ecoCount: 0,
      expenditureDays: 0,
    },
    {
      date: 23,
      incomeDays: 0,
      ecoCount: 0,
      expenditureDays: 0,
    },
    {
      date: 24,
      incomeDays: 0,
      ecoCount: 0,
      expenditureDays: 0,
    },
  ],
];
