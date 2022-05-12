import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import InquiryStyle from './Inquiry.module.css';
import HistorySample from '../../components/History/HistoryBack';

import InquiryList from './InquiryList';

const Inquiry = ({onCreates}) => {
  console.log({onCreates});
  return (
    <div className={ InquiryStyle.container }>
        {/* <InquiryForm onCreate={onCreates} test=""/> */}
        <div className={ InquiryStyle.backBtn }>
            <HistorySample></HistorySample>
        </div>

        <div className={ InquiryStyle.title }>
            1:1 문의
        </div>

        <div className={ InquiryStyle.inquiry }>
          <div className={ InquiryStyle.time_info_box }>
              <h1>운영 시간 안내</h1>
              <p>접수시간: 24시간 접수 가능</p>
              <p>답변시간: 평일 11:00 - 18:00 (토/일/공휴일 휴무)</p>
              <h4 style={{marginTop: "14px"}}>답변시간 이후 접수건은 운영시간 내 순차적 답변드립니다</h4>
              <h4>문의글은 등록 이후 수정이 불가합니다</h4>
          </div>

          <div className={ InquiryStyle.line_box }></div>

          <div className={ InquiryStyle.inquiry_list }>
            {onCreates === undefined ? <h1>내역 없음</h1> : <InquiryList list={onCreates} /> }
          </div>
        </div>
        <Link to="/InquiryForm">
            <div className={ InquiryStyle.inquiry_btn }>
              <button>문의하기</button>
            </div>
        </Link>
    </div>
  );
}

export default Inquiry;
