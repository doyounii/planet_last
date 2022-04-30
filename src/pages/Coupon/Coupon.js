import React from 'react';
import { Link } from 'react-router-dom';
import CouponStyle from './Coupon.module.css';
import Footer from '../../components/Footer/Footer';
import HistorySample from '../../components/History/HistoryBack';
import { FaChevronRight } from 'react-icons/fa';
import DropBox from './DropBox';

function Coupon() {
  const calcDday = () => {
    var today = new Date();
   
    const planetCoupon = [
      {name: 'pompom', dday: new Date(2022, 11, 31)}, 
      {name: 'pompompom', dday: new Date(2022, 3, 11)}
    ];
    
    function isPompom(element) {
      if(element.name === 'pompom')  {
        return true;
      }
    }

    const pompom = planetCoupon.find(isPompom);
    var gap = pompom.dday.getTime() - today.getTime();
    var result = Math.ceil(gap / (1000 * 60 * 60 * 24));

    if( result === 0 ) {
      return 'D-day';
    }
    else if( result < 0 ) {
      return '만료';
    }
    return 'D-' + result;
  }

  return (
    <div className={ CouponStyle.container }>
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
            <h1>현재 사용가능한 쿠폰 <b style={{color:"#00C982"}}>1</b>장이 남았어요</h1>
            <div className={ CouponStyle.drop_box }>
              <p>총 1개</p>
              <div className={ CouponStyle.dropbox }><DropBox /></div>
            </div>
        </div>

        <div className={ CouponStyle.coupon_use_box }>
          <div className={ CouponStyle.coupon_available }>
            <div className={ CouponStyle.coupon_dday }>{calcDday()}</div>
            <img src="img/coupon.png" alt="planet-coupon"></img>
            <h1>친환경 상점 〈폼폼〉</h1>
            <p>10% 할인쿠폰</p>
          </div>
          <div className={ CouponStyle.coupon_expiration }>
            <div className={ CouponStyle.coupon_dday }>{calcDday()}</div>
            <img src="img/coupon.png" alt="planet-coupon"></img>
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
