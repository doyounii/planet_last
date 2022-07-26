import React, { useEffect } from "react";
import Portal from "../../CalendarPart/Portal";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { ReactComponent as RoundArrow } from "../../../components/CalendarPart/roundArrow.svg";
import "../../../components/CalendarPart/Calendar.css";


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



InfoModal.defaultProps = {
    visible: false,
    closable: true,
    maskClosable: true,
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

const calendarInfoData = (monthView) => {
    return (
        <>

            {/* <span className="calendar-desc">
                        친환경 태그가 많을수록 초록ssfa빛을 띠어요
                    </span>
                    <RoundArrow className="calendar-arrow" /> */}

            <div >
                <img src="img/line.png"
                    style={{ 'width': '85%', 'paddingTop': '330px', 'marginLeft': '10%' }} />
            </div>
        </>
    );
};
