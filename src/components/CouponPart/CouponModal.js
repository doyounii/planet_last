import React, { useEffect, useState } from "react";
import Portal from "../../components/CalendarPart/Portal";
import PropTypes from "prop-types";
import styled from "styled-components";
import CouponStyle from "../../pages/Coupon/Coupon.module.css";
import { CgClose } from "react-icons/cg";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Popup from "../../components/InquiryPart/Popup";

import "../../components/CalendarPart/Calendar.css";

import CouponInfo from "../../components/CouponPart/CouponInfo";
import CouponUseInfo from "../../components/CouponPart/CouponUseInfo";
import CouponDetailInfo from "../../components/CouponPart/CouponDetailInfo";

const CouponModal = ({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  background,
  current
}) => {

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

  console.log(current);
  console.log("테스트");

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
 
   //popup modal
   const [modalOpen, setModalOpen] = useState(false);
 
   const isopenModal = () => {
     setModalOpen(true);
   };
 
   const iscloseModal = () => {
     setModalOpen(false);
   };

  // useEffect(() => {
  //   document.body.style.cssText = `position: fixed; top: -${window.scrollY}px; left:0px; right:0px; bottom:0px;`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = `position: ""; top: "";`;
  //     window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //   };
  // }, []);

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
        <div className={CouponStyle.coupon_modal}>
            {/* <p>cno 불러오기 test : {current.cno}</p> */}
            <h1>친환경 상점 {current.coupon}</h1>
            <p>{current.discount}% 할인쿠폰</p>
            <img src="img/coupon.png" alt="planet-coupon"></img>
            <h2>
              {current.startDate} - {current.endDate}
            </h2>

            <div className={CouponStyle.coupon_info}>
              사용정보
              <button
                onClick={() => {
                  setVisible1(!visible1);
                }}
              >
                {visible1 ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <br />
              {visible1 && (
                <CouponUseInfo>{current.usageInfo}</CouponUseInfo>
              )}
            </div>

            <div className={CouponStyle.coupon_info}>
              쿠폰설명
              <button
                onClick={() => {
                  setVisible2(!visible2);
                }}
              >
                {visible2 ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <br />
              {visible2 && <CouponInfo>{current.couponInfo}</CouponInfo>}
            </div>

            <div className={CouponStyle.coupon_info}>
              상세정보
              <button
                onClick={() => {
                  setVisible3(!visible3);
                }}
              >
                {visible3 ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <br />
              {visible3 && (
                <CouponDetailInfo>{current.detailInfo}</CouponDetailInfo>
              )}
            </div>

            <div className={CouponStyle.coupon_use_btn}>
              <button onClick={isopenModal}>사용하기</button>
              <Popup open={modalOpen} close={iscloseModal}>
                직원이신가요?
              </Popup>
            </div>
          </div>
      </ModalInner>
    </ModalWrapper>
  </Portal>
  );
}

export default CouponModal;

CouponModal.defaultProps = {
  background: "#141b27",
  visible: false,
  closable: true,
  maskClosable: true,
};

CouponModal.propTypes = {
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

  .modal-close {
    color: #f5f5f5;
    width: 20px;
    height: 20px;
    float: right;
    cursor: pointer;
  }

  .top-arrow {
    position: fixed;
    color: #f5f5f5;
    width: 20px;
    height: 20px;
    top: ${(props) => props.className - 33}px;
    left: 35%;
  }

  .bottom-arrow {
    position: fixed;
    color: #f5f5f5;
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
  background-color: rgba(20, 27, 39, 0.9);
  z-index: 3;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: ${(props) => (props.background ? "#202632" : "#141b27")};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: ${(props) => (props.visible ? "90%" : "100%")};
  height: ${(props) => (props.visible ? "none" : "90vh")};
  top: 30%;
  transform: ${(props) => (props.visible ? "translateY(-50%)" : "none")};
  margin: 0 auto;
  padding: 20px 20px;
  color: white;
`;


