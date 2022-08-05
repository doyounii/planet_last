import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CouponStyle from "./Coupon.module.css";
import Footer from "../../components/Footer/Footer";
import HistorySample from "../../components/History/HistoryBack";
import { FaChevronRight } from "react-icons/fa";
import Modal from "../../components/CouponPart/CouponModal";

import AvailableCoupon from "./AvailableCoupon";
import UsedCoupon from "./UsedCoupon";
import ExpireCoupon from "./ExpireCoupon";

import { useIsFocused } from '@react-navigation/native';

import { Button } from "antd";

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

  //const isFocused = useIsFocused();

  const fetchData = async () => {
    console.log("in function");

    const response = await axios.get(`https://플랜잇.웹.한국:8080/api/coupon`, {
      //headers: { userId: userId },
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

  /*버튼마다 컴포넌트 변경하기*/
  const [content, setContent] = useState();

  const [click, setClick] = useState(false);

  const btnValueSetting = e => {
    const {name} = e.target;
    setContent(name);
    setClick(!click);
  }

  const selectComponent = {
    first: <AvailableCoupon />,
    second: <UsedCoupon />,
    third: <ExpireCoupon />
  }

  const MAIN_DATA = [
    {
      id: 1,
      text: '보유',
      name: 'first',
    },
    {
      id: 2,
      text: '사용완료',
      name: 'second',
    },
    {
      id: 3,
      text: '기간만료',
      name: 'third',
    },
  ];

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
        {MAIN_DATA.map(data => {
          return (
            <Button className={(click === true ? CouponStyle.coupon_available : CouponStyle.coupon_expiration)}
             onClick={btnValueSetting} name={data.name} key={data.id}>
              {data.text}
            </Button>
          );
        })}
        </div>
      </div>

      {content && 
          <div>
            {selectComponent[content]}
          </div>}

      <Footer activeMenu="home">
        <div>홈</div>
      </Footer>
    </div>
  );
}

export default Coupon;
