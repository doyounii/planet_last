import React, { useState, useEffect } from "react";
import axios from "axios";
import CouponStyle from "./Coupon.module.css";

import { CouponItem } from "./Coupon";
import Modal from "../../components/CouponPart/CouponModal";

function UsedCoupon({ coupons }) {
  //쿠폰 누르면 나오는 모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [couponArr, setCouponArr] = useState([]);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    if (coupons !== undefined && coupons !== null) {
      setCouponArr(coupons);
    }
  }, [coupons]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        {/* 사용 완료 쿠폰 */}
        {couponArr
          .filter((it) => it.availability === false)
          .map((famous) => (
            <CouponItem
              key={famous.cno}
              data={famous}
              availability={famous.availability}
              setContent={(data) => setCurrent(data)}
              openModal={openModal}
            />
          ))}
      </div>
    </div>
  );
}

export default UsedCoupon;
