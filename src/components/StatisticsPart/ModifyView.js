import React, { useState, useEffect } from "react";
import "./Modify.css";
import { RiDeleteBin6Line } from 'react-icons/ri';
import HistorySample from '../../components/History/HistoryBack';
import styled from "styled-components";
import { FiEdit3 } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io'
import CalendarModal from "./CalendarModal";
import DateModal from "./DateModal";

function ModifyView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

  const openModal = (e) => {
    setIsModalOpen(true);
  };
  
  const modalClose = () => {
    setIsModalOpen(!openModal);
  }

  const openDateModal = (e) => {
    setModalOpen(true);
  };

  const dateModalClose = () => {
    setModalOpen(!openDateModal);
  }

  //컨테이너 눌렀을 때 close가 되지 않게
  const onCloseModal = (e) => {
    if(e.target === e.currentTarget){
      modalClose();
      dateModalClose();
    }
  }

  //페이지 나갔다 들어오면 이상한 곳에서 스크롤 멈춤 -> 수정 필요
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);



  return (
    <div className="calendar">
      {renderHeader()}

      {/*asset modal*/}
      {isModalOpen && (
        <ModalWrap onClick={onCloseModal}>
        <ModalContainer>
          <ModalInner>
            <p>자산</p>
            <h1>
                <IoIosClose onClick={modalClose}/>
            </h1>
          </ModalInner>
          <ModalInner>
            <div>💳 <h3>카드</h3></div>
            <div>🏦 <h3>은행</h3></div>
            <div>💵 <h3>현금</h3></div>
          </ModalInner>
        </ModalContainer>
      </ModalWrap>
      )}

      {/*date modal*/}
      {modalOpen && (
        <ModalWrap onClick={onCloseModal}>
        <ModalContainer>
          <ModalInner>
            <p>날짜</p>
            <h1>
                <IoIosClose onClick={dateModalClose}/>
            </h1>
          </ModalInner>
          <DateModal />
          {/*<CalendarModal />*/}
        </ModalContainer>
      </ModalWrap>
      )}

      <>
        <div className="modify-container">
          <input
              value={'커피 테이크아웃'}
              //onChange={this.handleChange}
          />
          <p><FiEdit3 /></p>

          <div className="modify-detail">
            <p>날짜</p>
            <input
              value={'2022년 2월 12일'}
              onClick={(e) => openDateModal(e)}
              //onChange={this.handleChange}
            />
          </div>

          <div className="modify-detail">
            <p>자산</p>
            <input
              value={'현금'}
              onClick={(e) => openModal(e)}
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

const ModalWrap = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100vh;
  z-index: 10500;
  position: absolute;
  top: 0;
  font-family: Pretendard;
`;

const ModalContainer = styled.div`
  background-color: #202632;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  font-family: Pretendard;
  padding: 18px 32px 18px 32px;
  display: block;
  position: absolute;
  bottom: 0px;
  height: 45%;
  width: 100%;
`;

const ModalInner = styled.div`
  display: flex;
  font-family: Pretendard;
  p {
      background-color: transparent;
      text-align: center;
      font-size: 18px;
      font-family: Pretendard;
      width: 100%;
      marign: 0;
      padding: 0;
  }
  h1 {
    position: absolute;
    top: 10px;
    right: 3%;
  }
  svg {
      width: 32px;
      height: 32px;
      cursor: pointer;
  }
  div {
    background: rgba(255, 255, 255, 0.5) !important;
    width: 93.52px;
    height: 93.52px;
    border-radius: 17.48px;
    padding: 30px;
    margin: 0 auto;
    text-align: center;
    font-size: 32px;
  }
  h3 {
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    color: #ffffff;
  }
`;
