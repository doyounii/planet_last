import React from 'react';
import { Link } from 'react-router-dom';
import SettingStyle from './Set.module.css';
import Footer from '../../components/Footer/Footer';
import HistorySample from '../../components/History/History';
import { FaChevronRight } from 'react-icons/fa';
import SwitchButton from '../../components/SettingPart/SwitchButton';

function Setting() {
  return (
    <div className={SettingStyle.container}>
        <div className={SettingStyle.backBtn}>
            <HistorySample></HistorySample>
        </div>
        <div className={SettingStyle.title}>
            설정
        </div>
        <div>
        <div className={SettingStyle.sub_title}>
            알림 설정
        </div>
        <div className={SettingStyle.toggle_box}>
            가계부 미작성 알림
            <SwitchButton />
        </div>
        <div className={SettingStyle.toggle_box}>
            이벤트 알림
            <SwitchButton />
        </div>
        <div className={SettingStyle.toggle_box}>
            환경의 날 알림
            <SwitchButton />
        </div>
        </div>

        <div>
        <div className={SettingStyle.sub_title2}>
            정보
        </div>
        <div className={SettingStyle.toggle_box2}>
            서비스 이용약관
            <Link to="/TermsOfUse">
              <FaChevronRight className={SettingStyle.info_icon}/>
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
