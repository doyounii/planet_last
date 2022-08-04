import React, { useState } from "react";
import CouponStyle from "./Coupon.module.css";
import Footer from "../../components/Footer/Footer";
import HistorySample from "../../components/History/HistoryBack";
import Popup from "../../components/InquiryPart/Popup";
import { useNavigate } from "react-router-dom";

function CouponJoin() {
  const [coupon, setCoupon] = useState("");
  const [disabled, setdisabled] = useState(true);

  //popup modal
  const [modalOpen, setModalOpen] = useState(false);

  const isopenModal = () => {
    setModalOpen(true);
  };

  const iscloseModal = () => {
    setModalOpen(false);
  };

  const handleCouponValue = (e) => {
    setCoupon(e.target.value);
    setdisabled(coupon.length === 0 ? true : false);
  };

  const navigate = useNavigate();

  const userId = window.localStorage.getItem("userId");

  const fetchFunc = () => {
    //백엔드로 데이터 보내기
    fetch(`https://플랜잇.웹.한국:8080/api/coupon/register/${coupon}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        userId: userId,
      },
      body: JSON.stringify({
        cno: coupon,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.token) {
          localStorage.setItem("wtw-token", response.token);
        }
      });
  };

  const handleSubmit = () => {
    //쿠폰번호에 맞는 쿠폰 정보값 넘겨줘야함
    fetchFunc();
    navigate("/Coupon");
  };

  return (
    <div className={CouponStyle.container}>
      <div className={CouponStyle.backBtn}>
        <HistorySample></HistorySample>
      </div>
      <div className={CouponStyle.title}>쿠폰 등록</div>
      <div className={CouponStyle.coupon_input_box}>
        <h1>쿠폰번호를 등록해 주세요</h1>
        <input
          type="text"
          name="inputD"
          placeholder="쿠폰번호 입력 (한글, 영문, 숫자)"
          onChange={(e) => handleCouponValue(e)}
        />
      </div>

      <div className={CouponStyle.coupon_btn}>
        <button
          onClick={isopenModal}
          disabled={coupon.length !== 0 ? false : true}
        >
          등록하기
        </button>
        <Popup open={modalOpen} close={iscloseModal} submit={handleSubmit}>
          쿠폰을 등록합니다!
        </Popup>
      </div>

      <Footer activeMenu="home">
        <div>홈</div>
      </Footer>
    </div>
  );
}

export default CouponJoin;
