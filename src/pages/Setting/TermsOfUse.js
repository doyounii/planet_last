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
        <div className={SettingStyle.title2}>
            법률정보 및 이용약관
        </div>
        <div>
          <div className={SettingStyle.use_box}>
            개인정보 처리방침 (가제)
            <Link to="#">
              <FaChevronRight className={SettingStyle.info_icon2}/>
            </Link>
          </div>
          <div className={SettingStyle.use_box}>
            이용약관 (가제)
            <Link to="#">
              <FaChevronRight className={SettingStyle.info_icon2}/>
            </Link>
          </div>
        </div>


        <Footer activeMenu="home">
            <div>홈</div>
        </Footer>
    </div>
  );
}

export default Setting;
