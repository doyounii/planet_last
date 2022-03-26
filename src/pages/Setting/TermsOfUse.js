import React from 'react';
import { Link } from 'react-router-dom';
import SettingStyle from './Set.module.css';
import HistorySample from '../../components/History/HistoryBack';
import Footer from '../../components/Footer/Footer';
import { FaChevronRight } from 'react-icons/fa';

function Setting() {
  return (
    <div className={SettingStyle.container}>
        <div className={SettingStyle.backBtn}>
          <HistorySample></HistorySample>
        </div>
        <div className={SettingStyle.title}>
            서비스 이용약관
        </div>
        <div className={SettingStyle.use_box}>
            이용약관
            <Link to="/UsePage">
              <FaChevronRight className={SettingStyle.info_icon}/>
            </Link>
        </div>
        <div className={SettingStyle.use_box}>
            개인정보 처리방침
            <Link to="/InformationPage">
              <FaChevronRight className={SettingStyle.info_icon}/>
            </Link>
        </div>

        <Footer activeMenu="home">
            <div>홈</div>
        </Footer>
    </div>
  );
}

export default Setting;
