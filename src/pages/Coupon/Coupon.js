import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CouponStyle from './Coupon.module.css';
import Footer from '../../components/Footer/Footer';
import HistorySample from '../../components/History/HistoryBack';
import { FaChevronRight } from 'react-icons/fa';
import DropBox from '../../components/CouponPart/DropBox';
import { Modal } from "../../components/CouponPart/CouponModal";
import Popup from '../../components/InquiryPart/Popup';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import CouponInfo from '../../components/InquiryPart/CouponInfo';
import CouponUseInfo from '../../components/InquiryPart/CouponUseInfo';
import CouponDetailInfo from '../../components/InquiryPart/CouponDetailInfo';

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

  useEffect(() => {
    const fetchData = async () => {
      console.log('in function');
      const response = await fetch(
        `zinzo1019@gmail.com/mypage/coupon`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      ).then((data) => {
          return data;
        }).catch((error) => {
          console.log(error);
        });
  
      const data = await response.json();
      console.log(data);
      setCouponArr(data.couponDtos);
      setCouponCnt(data.couponCount);
  
      setloading(false);
    };

    fetchData();
  }, []);

  console.log(couponArr);

  function Coupon({remainingDays, coupon, discount, availability}){
    // const isActive = {availability}; 
    // console.log(isActive);
    return(
      <div onClick={() => openModal()} className={ {availability} ? CouponStyle.coupon_available : CouponStyle.coupon_expiration }>
      <div className={ CouponStyle.coupon_dday }>D-{remainingDays}</div>
      <img src="img/coupon.png" alt="planet-coupon"></img>
      <h1>{coupon}</h1>
      <p>{discount}% 할인쿠폰</p>
    </div>   
    )
  }

  return (
    <div className={ CouponStyle.container }>
      
      
      {isModalOpen && (
          <Modal
            onClose={closeModal}
            maskClosable={true}
            visible={false}
            closable={true}
            background={"#202632"}
            className="ModalInner"
          >

            <div className={ CouponStyle.coupon_modal }>
              <h1>{couponArr[0].coupon}</h1>
              <p>{couponArr[0].discount}% 할인쿠폰</p>
              <img src="img/coupon.png" alt="planet-coupon"></img>
              <h2>22.03.02 - 22.05.05</h2>
              {/* <h2>{startDate} - {endDate}</h2> */}

              <div className={ CouponStyle.coupon_info }>
                사용정보
                <button onClick={() => {
                  setVisible(!visible);
                }}>{visible ? <BsChevronUp /> : <BsChevronDown />}
                </button>
                <br/>
                {visible && <CouponUseInfo />}
              </div>

              <div className={ CouponStyle.coupon_info }>
                쿠폰설명
                <button onClick={() => {
                  setVisible2(!visible2);
                }}>{visible2 ? <BsChevronUp /> : <BsChevronDown />}
                </button>
                <br/>
                {visible2 && <CouponInfo />}
              </div>

              <div className={ CouponStyle.coupon_info }>
                상세정보
                <button onClick={() => {
                  setVisible3(!visible3);
                }}>{visible3 ? <BsChevronUp /> : <BsChevronDown />}
                </button>
                <br/>
                {visible3 && <CouponDetailInfo />}
              </div>

              <div className={ CouponStyle.coupon_use_btn }>
                <button onClick={isopenModal}>사용하기</button>
                <Popup open={modalOpen} close={iscloseModal}>
                  직원이신가요?
                </Popup>
              </div>
            </div>

          </Modal>
        )}



      <div className={ CouponStyle.backBtn }>
            <HistorySample></HistorySample>
        </div>

        <div className={ CouponStyle.title }>
            MY 쿠폰함
        </div>

        <Link to="/CouponJoin" style={{ textDecoration: 'none', color: 'white' }}>
        <div className={ CouponStyle.coupon_box }>
            쿠폰 등록
            <FaChevronRight className={ CouponStyle.info_icon }/>
        </div>
        </Link>

        <div className={ CouponStyle.coupon_detail_box }>
            <h1>현재 사용가능한 쿠폰 <b style={{color:"#00C982"}}>{couponCnt}</b>장이 남았어요</h1>
            <div className={ CouponStyle.drop_box }>
              <p>총 {couponCnt}개</p>
              <div className={ CouponStyle.dropbox }><DropBox /></div>
            </div>
        </div>

      <div className={ CouponStyle.coupon_use_box }>
        {couponArr.map(famous=> <Coupon coupon={famous.coupon} remainingDays={famous.remainingDays} discount={famous.discount} />)}
      </div>

      <Footer activeMenu="home">
        <div>홈</div>
      </Footer>
    </div>
  );
}

export default Coupon;
