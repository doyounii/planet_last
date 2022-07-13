import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import CouponStyle from "./Coupon.module.css";
import Footer from "../../components/Footer/Footer";
import HistorySample from "../../components/History/HistoryBack";
import { FaChevronRight } from "react-icons/fa";
import DropBox from "../../components/CouponPart/DropBox";
import Modal from "../../components/CouponPart/CouponModal";

function Coupon() {

  //쿠폰 누르면 나오는 모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [couponArr, setCouponArr] = useState([]);
  const [couponCnt, setCouponCnt] = useState("");

  const [loading, setloading] = useState(true);

  const [current, setCurrent] = useState({});

  const fetchData = async () => {
    console.log("in function");

    const response = await axios.get(`https://플랜잇.웹.한국:8080/api/coupon`, {
      headers: { userId: "whwhyoon@naver.com" },
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
        onClick={() => {setCurrent(data);
          openModal(); }}
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
        >
        </Modal>
      )}

      <div className={CouponStyle.backBtn}>
        <HistorySample></HistorySample>
      </div>

      <div className={CouponStyle.title}>MY 쿠폰함</div>

      <Link to="/CouponJoin" style={{ textDecoration: "none", color: "white" }}>
        <div className={CouponStyle.coupon_box}>
          쿠폰 등록
          <FaChevronRight className={CouponStyle.info_icon} />
        </div>
      </Link>

      <div className={CouponStyle.coupon_detail_box}>
        <h1>
          현재 사용가능한 쿠폰 <b style={{ color: "#00C982" }}>{couponCnt}</b>
          장이 남았어요
        </h1>
        <div className={CouponStyle.drop_box}>
          <p>총 {couponCnt}개</p>
          <div className={CouponStyle.dropbox}>
            <DropBox />
          </div>
        </div>
      </div>

      <div className={CouponStyle.coupon_use_box}>
        {couponArr.map((famous) => (
          <Coupon
            data={famous}
            coupon={famous.coupon}
            remainingDays={famous.remainingDays}
            discount={famous.discount}
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
