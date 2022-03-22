import React from "react";
import "./Modify.css";
import { RiPencilLine, RiDeleteBin6Line } from 'react-icons/ri';
import HistorySample from '../../components/History/HistoryBack';

function ModifyView() {
  const renderHeader = () => {
    return (
      <div style={{zIndex:"2"}} className="header row2 flex-middle">
          <div style={{position:"relative", left:"-48px", zIndex:"1", background:"transparent"}}><HistorySample /></div>
        <div className="col col-center">
          <span>식비</span>
        </div>
        <div style={{
          position:"relative", 
          left:"15px", 
          zIndex:"1", 
          background:"transparent",
          top:"-3px",
          cursor:"pointer"
        }}><RiDeleteBin6Line style={{width:"24px", height:"24px", color:"#939393"}}/></div>
      </div>
    );
  };

  return (
    <div className="calendar">
      {renderHeader()}
      <>
        <div className="modify-container">
          <input
              value={'커피 테이크아웃'}
              //onChange={this.handleChange}
          />
          <p><RiPencilLine /></p>

          <div className="modify-detail">
            <p>날짜</p>
            <input
              value={'2022년 2월 12일'}
              //onChange={this.handleChange}
            />
          </div>

          <div className="modify-detail">
            <p>자산</p>
            <input
              value={'현금'}
              //onChange={this.handleChange}
            />
          </div>

          <div className="modify-detail">
            <p>금액</p>
            <input
              value={'5,400원'}
              //onChange={this.handleChange}
            />
          </div>

          <div className="modify-detail">
            <p>분류</p>
            <input
              value={'식비'}
              //onChange={this.handleChange}
            />
          </div>

          <div className="modify-detail">
            <p>태그</p>
            {/* 태그는 어떻게 받아올지 모르겠음 .. */}
            <div className="modify-tag">다회용기 사용</div>
            <div className="modify-tag">비닐봉투 소비</div>
          </div>

          <div className="modify-detail">
            <p>메모</p>
            <input
              value={'메모를 입력해주세요'}
              //onChange={this.handleChange}
            />
          </div>

          <div className="modify-btn">
            <button>저장</button>
          </div>

        </div>
      </>
    </div>
  );
}

export default ModifyView;
