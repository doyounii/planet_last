import React from 'react';
import SettingStyle from './Set.module.css';
import HistorySample from '../../components/History/HistoryBack';
import Footer from '../../components/Footer/Footer';

function UsePage() {
  return (
    <div className={SettingStyle.container}>
        <div className={SettingStyle.backBtn}>
          <HistorySample></HistorySample>
        </div>
        <div className={SettingStyle.title}>
            이용약관
        </div>
        <div className={SettingStyle.terms_box}>
          <h1>PLANet 서비스 이용약관</h1>

          <div className={SettingStyle.terms_detail_box}>
              <h1>제 1조 (목적)</h1>
              <p>이 약관은 주식회사 PLANet(이하 “회사”)이 제공하는 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
          </div>

          <div className={SettingStyle.terms_detail_box}>
              <h1>제 2조 (용어의 정의)</h1>
              <p> 1. 이 약관에서 사용되는 용어의 정의는 다음과 같습니다.</p>
              <p> 가. “서비스”는 회사가 개발한 PLANet 가계부 웹사이트를 통해 이용자에게 제공하는 가계부 서비스를 말합니다.</p>
              <p> 나. “이용자”는 회사의 약관에 따른 계약을 체결하여 서비스를 이용하는 자를 말합니다.</p>
              <p> 다. “이용계약”은 서비스 이용과 관련해 회사와 이용자 간의 체결한 계약을 말합니다.</p>
              <p> 라. “아이디”는 이용자의 식별 및 서비스 이용을 위하여 이용자가 정하고 회사가 승인하는 이메일 주소 형식의 문자 또는 숫자, 기호의 조합을 의미합니다.</p>
              <p> 마. “비밀번호”는 이용자가 부여받은 아이디와 일치하는 이용자임을 확인하기 위하여 이용자 자신이 정한 문자 또는 숫자, 기호의 조합을 의미합니다.</p>
              <p> 2. 이 약관에서 사용하는 용어의 정의는 제1항 각 호에서 정하는 것을 제외하고는 관계 법령 및 개인정보처리방침, 회사가 별도로 정한 지침 기타 일반적인 관례에 의합니다.</p>
          </div>

          <div className={SettingStyle.terms_detail_box}>
              <h1>제 3조 (약관의 효력 범위)</h1>
              <p> 1. 약관은 서비스를 이용하는 모든 이용자에 대하여 효력이 있습니다.</p>
              <p> 2. 이 약관은 이용자가 회사로부터 약관에 동의하여 회사와 이용계약을 체결한 날로부터 이용 계약을 해지하는 시점까지 적용되는 것을 원칙으로 합니다.</p>
          </div>

          <div className={SettingStyle.terms_detail_box}>
              <h1>제 4조 (약관의 명시 및 개정)</h1>
              <p> 1. 회사는 이용자가 쉽게 알 수 있도록, 회사의 서비스 초기화면에 상설메뉴로 이 약관의 내용을 게시합니다.</p>
              <p> 2. 회사는 『약관의 규제에 관한 법률』, 『정보통신망 이용촉진 및 정보 보호 등에 관한 법률』 등 관련 법령을 위반하지 않는 범위에서 기타 서비스 정책을 수시로 개정 또는 변경할 수 있습니다.</p>
              <p> 3. 회사는 약관을 개정하는 경우 적용일자 및 개정사유를 개정 전 약관과 함께 적용일자 7일 전(이용자에게 불리하거나 중대한 사항의 변경은 30일 이전)부터 서비스 공지사항에 게시하는 방법으로 이용자에게 통지합니다.</p>
              <p> 4. 회사는 전항에 따라 개정 약관을 공지 또는 통지하면서 그와 함께 이용자가 개정 약관의 효력발생일까지 그에 대한 거부의사를 표시하지 않거나 탈퇴하지 않으면 그 이용자는 청약철회 등 개정약관에 정한 모든 내용에 대하여 동의한 것으로 간주됩니다.</p>
              <p> 5. 회사는 개정 약관의 적용에 동의하지 않는 이용자에 대하여 개정 약관의 내용을 적용할 수 없습니다. 단, 이 경우 회사 및 이용자는 이용계약을 해지할 수 있습니다.</p>
          </div>

        </div>

        <Footer activeMenu="home">
            <div>홈</div>
        </Footer>
    </div>
  );
}

export default UsePage;
