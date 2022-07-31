import React, { useEffect } from "react";
import Portal from "../../Modal/Portal";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { ReactComponent as RoundArrow } from "../../../components/CalendarPart/roundArrow.svg";
import Chart from "chart.js/auto";
import { LineGraph2 } from '../LineGraph';

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
          <div className="line">
            {calendarInfoData(children)}
          </div>
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

  .arrow {
    position: fixed;
    color: rgba(var(--light-gray));
    transform: scaleY(-1);
    width: 20px;
    height: 20px;
    top: 430px;
    left: 56%;
  }

  .line {
    width: 90%;
    margin-left: 5%;
    margin-rightL 5%;
    padding-top: 390px;
  }
  .ment{
    position: absolute;
    width: 119px;
    height: 38px;
    left: 62%;
    top: 440px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;

    color: #FFFFFF;
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
        <LineGraph2
        ></LineGraph2>
        <RoundArrow className="arrow" />
        <p className='ment'>친환경 태그가 많을수록 <br />
          초록빛을 띠어요</p>
      </div>
    </>
  );
};
