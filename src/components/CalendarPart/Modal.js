import React, { useEffect } from "react";
import Portal from "./Portal";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { AiOutlineLoading } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

export function Modal({
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
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex={-1}
        visible={visible}
      >
        <ModalInner tabIndex={0} className="modal-inner">
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
          <span className="eco-day-circle">● </span>
          <span className="eco-day">는 환경기념일이 있는 날에 표시됩니다</span>
          <AiOutlineLoading className="top-arrow" />
          <IoIosArrowForward className="top-arrow-point" />
          <AiOutlineLoading className="bottom-arrow" />
          <IoIosArrowForward className="bottom-arrow-point" />
          <div className="non-eco-cnt">
            <span className="non-eco-circle">●</span> 는 반환경적인 소비 항목의
            횟수,
          </div>
          <span className="eco-cnt">
            <span className="eco-circle">●</span> 는 친환경적인 소비 항목의
            횟수를 의미합니다.
          </span>
        </div>
      </ModalWrapper>
    </Portal>
  );
}

Modal.defaultProps = {
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
  display: ${(props) => (props.visible ? "block" : "none")};
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
    color: #f5f5f5;
    width: 20px;
    height: 20px;
    float: right;
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
    color: #1466fe;
    left: 31%;
  }
  .non-eco-circle {
    color: #3a4556;
  }
  .eco-circle {
    color: #07d4a9;
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
    color: #f5f5f5;
    transform: rotate(-100deg);
    width: 30px;
    height: 30px;
    top: ${(props) => props.className - 33}px;
    left: 35%;
  }
  .top-arrow-point {
    position: fixed;
    color: #f5f5f5;
    transform: rotate(90deg);
    width: 20px;
    height: 20px;
    top: ${(props) => props.className - 25}px;
    left: calc(35% - 10px);
  }
  .bottom-arrow {
    position: fixed;
    color: #f5f5f5;
    transform: rotate(70deg);
    width: 30px;
    height: 30px;
    top: ${(props) => props.className + 8}px;
    left: 8%;
  }
  .bottom-arrow-point {
    position: fixed;
    color: #f5f5f5;
    transform: rotate(-90deg);
    width: 20px;
    height: 20px;
    top: ${(props) => props.className + 8}px;
    left: 13%;
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
  background-color: rgba(20, 27, 39, 0.9);
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
  border-color: rgb(20, 27, 39);
  opacity: 0.8;
  border-width: ${(props) => props.className - 10}px 20vh
    calc(100vh - ${(props) => props.className + 20}px) 0;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #202632;
  border-radius: 10px;
  width: 90%;
  height: 75%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 20px;
`;
