import React from 'react';
import SettingStyle from './Set.module.css';
import HistorySample from '../../components/History/HistoryBack';
import Footer from '../../components/Footer/Footer';

function InformationPage() {
  return (
    <div className={SettingStyle.container}>
        <div className={SettingStyle.backBtn}>
          <HistorySample></HistorySample>
        </div>

        <div className={SettingStyle.title}>
            개인정보 처리방침
        </div>

        <div className={SettingStyle.terms_box}>
          <h2>개인정보 처리방침 전문</h2>
          <p>〈 PLANet 〉은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>
          <p> ○ 이 개인정보처리방침은 2022년 0월 0부터 적용됩니다.</p>

          <div className={SettingStyle.info_detail_box}>
            <h1>(1) 개인정보의 처리 목적</h1>
            <p>〈 PLANet 〉은 다음의 목적을 위하여 개인정보를 처리합니다.</p>
            <p> 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            <h2> 1. 홈페이지 회원가입 및 관리</h2>
            <p> 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.</p>
            <h2> 2. 민원사무 처리</h2>
            <p> 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 목적으로 개인정보를 처리합니다.</p>
            <h2> 3. 재화 또는 서비스 제공</h2>
            <p> 물품배송, 서비스 제공, 계약서·청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금결제·정산을 목적으로 개인정보를 처리합니다.</p>
            <h2> 4. 마케팅 및 광고에의 활용</h2>
            <p> 이벤트 및 광고성 정보 제공 및 참여기회 제공, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.</p>
          </div>

          <div className={SettingStyle.info_detail_box}>
            <h1>(2) 개인정보의 처리 및 보유 기간</h1>
            <p> 1. 〈 PLANet 〉은 개인정보 수집 시에 동의 받은 개인정보를 ‘탈퇴 즉시’ 파기합니다.</p>
          </div>

          <div className={SettingStyle.info_detail_box}>
            <h1>(3) 정보주체와 권리·의무 및 그 행사방법</h1>
            <p> 1. 정보주체는 〈 PLANet 〉에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
            <p> 2. 위 1항에 따른 권리 행사는 〈 PLANet 〉에 대해 「개인정보 보호법」 시행령 제41조 제 1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 〈 PLANet 〉은 이에 대해 지체 없이 조치하겠습니다.</p>
            <p> 3. 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</p>
            <p> 4. 〈 PLANet 〉은 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인인지를 확인합니다.</p>
          </div>

        </div>

        <Footer activeMenu="home">
            <div>홈</div>
        </Footer>
    </div>
  );
}

export default InformationPage;
