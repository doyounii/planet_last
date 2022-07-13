import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CouponStyle from "./Coupon.module.css";
import Footer from "../../components/Footer/Footer";
import HistorySample from "../../components/History/HistoryBack";
import { FaChevronRight } from "react-icons/fa";
import DropBox from "../../components/CouponPart/DropBox";
import Modal from "../../components/CouponPart/CouponModal";
import Popup from "../../components/InquiryPart/Popup";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import CouponInfo from "../../components/CouponPart/CouponInfo";
import CouponUseInfo from "../../components/CouponPart/CouponUseInfo";
import CouponDetailInfo from "../../components/CouponPart/CouponDetailInfo";

function Coupon() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //popup modal
  const [modalOpen, setModalOpen] = useState(false);

  const isopenModal = () => {
    setModalOpen(true);
  };

  const iscloseModal = () => {
    setModalOpen(false);
  };

  const [couponArr, setCouponArr] = useState([]);
  const [couponCnt, setCouponCnt] = useState("");

  const [loading, setloading] = useState(true);
  const userId = window.localStorage.getItem("userId");

  const [current, setCurrent] = useState({
    couponData: {
      coupon: "",
    },
  });

  const fetchData = async () => {
    console.log("in function");

    const response = await axios.get(`https://플랜잇.웹.한국:8080/api/coupon`, {
      headers: { userId: userId },
    });
    const data = await response.data;
    console.log(data);
    setCouponArr(data.couponDtos);
    setCouponCnt(data.couponCount);

    setCurrent({
      ...current,
      couponData: { coupon: data.couponDtos[0].coupon || {} },
    });

    if (data && data.length > 0) {
      console.log(data[0]);
    }

    setloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(current);

  console.log(couponArr);

  function Coupon({ remainingDays, coupon, discount, availability }) {
    return (
      <div
        onClick={() => openModal()}
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
          <div className={CouponStyle.coupon_modal}>
            <p>cno 불러오기 test : {couponArr[0].cno}</p>
            <h1>{couponArr[0].coupon}</h1>
            <p>{couponArr[0].discount}% 할인쿠폰</p>
            <img src="img/coupon.png" alt="planet-coupon"></img>
            <h2>
              {couponArr[0].startDate} - {couponArr[0].endDate}
            </h2>

            <div className={CouponStyle.coupon_info}>
              사용정보
              <button
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                {visible ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <br />
              {visible && (
                <CouponUseInfo>{couponArr[0].usageInfo}</CouponUseInfo>
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
              {visible2 && <CouponInfo>{couponArr[0].couponInfo}</CouponInfo>}
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
                <CouponDetailInfo>{couponArr[0].detailInfo}</CouponDetailInfo>
              )}
            </div>

            <div className={CouponStyle.coupon_use_btn}>
              <button onClick={isopenModal}>사용하기</button>
              <Popup open={modalOpen} close={iscloseModal}>
                직원이신가요?
              </Popup>
            </div>
          </div>
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
