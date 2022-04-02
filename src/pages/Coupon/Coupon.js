import React from 'react';
import { Link } from 'react-router-dom';
import CouponStyle from './Coupon.module.css';
import Footer from '../../components/Footer/Footer';
import HistorySample from '../../components/History/HistoryBack';
import { FaChevronRight } from 'react-icons/fa';
import DropBox from './DropBox';

function Coupon() {
  return (
    <div className={ CouponStyle.container }>
        <div className={ CouponStyle.backBtn }>
            <HistorySample></HistorySample>
        </div>

        <div className={ CouponStyle.title }>
            MY 쿠폰함
        </div>

        <Link to="/CouponJoin" style={{ textDecoration: 'none' }}>
        <div className={ CouponStyle.coupon_box }>
            쿠폰 등록
            <FaChevronRight className={ CouponStyle.info_icon }/>
        </div>
        </Link>

        <div className={ CouponStyle.coupon_detail_box }>
            <h1>현재 사용가능한 쿠폰 <b style={{color:"#00C982"}}>0</b>장이 남았어요</h1>
            <div className={ CouponStyle.drop_box }>
              <p>총 1개</p>
              <div className={ CouponStyle.dropbox }><DropBox /></div>
            </div>
        </div>

        <div className={ CouponStyle.coupon_use_box }>
          <div className={ CouponStyle.coupon_available }>
            <h1>친환경 상점 〈폼폼〉</h1>
            <p>10% 할인쿠폰</p>
          </div>
          <div className={ CouponStyle.coupon_expiration }>
            <h1>친환경 상점 〈폼폼〉</h1>
            <p>10% 할인쿠폰</p>
          </div>
        </div>

        <Footer activeMenu="home">
            <div>홈</div>
        </Footer>
    </div>
  );
}

export default Coupon;
