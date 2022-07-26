import React, { useState, useEffect } from "react";
import axios from "axios";
import CouponStyle from "./Coupon.module.css";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/CouponPart/CouponModal";

function Coupon() {
  //쿠폰 누르면 나오는 모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [couponArr, setCouponArr] = useState([]);
  const [couponCnt, setCouponCnt] = useState("");

  const [loading, setloading] = useState(true);
  const userId = window.localStorage.getItem("userId");

  const [current, setCurrent] = useState({});

  const fetchData = async () => {
    console.log("in function");

    const response = await axios.get(`https://플랜잇.웹.한국:8080/api/coupon`, {
      headers: { userId: userId },
    });
    const data = await response.data;
    console.log(data);
    setCouponArr(data.couponDtos);
    setCouponCnt(data.couponCount);

    if (data && data.length > 0) {
      console.log(data[0]);
    }

    setloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function Coupon({ data, remainingDays, coupon, discount, availability }) {
    return (
        <div
        onClick={() => {
          setCurrent(data);
          openModal();
        }}
        className={
          { availability }
            ? CouponStyle.coupon_available
            : CouponStyle.coupon_expiration
        }
      >
        <div className={CouponStyle.coupon_dday}>D-{remainingDays}</div>
        <img src="img/coupon.png" alt="planet-coupon"></img>
        <h1>{coupon}</h1>
        <p>{discount}% 할인쿠폰</p>
      </div>
    );
  }

  return (
    <div className={CouponStyle.container}>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          maskClosable={true}
          visible={false}
          closable={true}
          background={"#202632"}
          className="ModalInner"
          current={current}
        ></Modal>
      )}

      <div className={CouponStyle.coupon_use_box}>
        {/* 사용 가능 쿠폰 */}
        {couponArr.filter((it) => it.availability === true).map((famous) => (
          <Coupon
            data={famous}
            coupon={famous.coupon}
            remainingDays={famous.remainingDays}
            discount={famous.discount}
            availability={famous.availability}
          />
        ))}
      </div>

      <Footer activeMenu="home">
        <div>홈</div>
      </Footer>
    </div>
  );
}

export default Coupon;
