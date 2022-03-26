import React from 'react';
import { Link } from 'react-router-dom';
import MypageStyle from './Mypage.module.css';
import Footer from '../../components/Footer/Footer';
import HistorySample from '../../components/History/History';
import { FaChevronRight } from 'react-icons/fa';

function MyPage() {
  return (
    <div className={ MypageStyle.container }>
        <div className={ MypageStyle.backBtn }>
            <HistorySample></HistorySample>
        </div>
        <div className={ MypageStyle.title }>
            마이페이지
        </div>
        <div className={ MypageStyle.name_box }>
            <h1>이수빈</h1>
            <p>20201961@sungshin.ac.kr</p>
        </div>
        <div className={ MypageStyle.login_box }>
            <h1>소셜로그인 연결</h1>

            {/*임시 icon 사용*/}
            <div className={ MypageStyle.kakao_icon }>
              <img src="img/kakao.png" alt="kakao"></img>
              <h2>연결하기</h2>
            </div>

            <div className={ MypageStyle.naver_icon }>
              <img src="img/naver.png" alt="naver"></img>
              <h2>연결하기</h2>
            </div>

            <div className={ MypageStyle.google_icon }>
              <img src="img/google.png" alt="google"></img>
              <h2>연결하기</h2>
            </div>

        </div>
        <div className={ MypageStyle.coupon_box }>
            MY 쿠폰함
            <Link to="#">
              <FaChevronRight className={MypageStyle.info_icon}/>
            </Link>
        </div>
        <div className={ MypageStyle.logout_box }>
            <p>로그아웃</p>
        </div>
        <div className={ MypageStyle.drop_box }>
            <p>회원탈퇴</p>
        </div>
        <Footer activeMenu="home">
            <div>홈</div>
        </Footer>
    </div>
  );
}

export default MyPage;
