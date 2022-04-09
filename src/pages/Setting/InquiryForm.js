import React from 'react';
import { Link } from 'react-router-dom';
import InquiryStyle from './Inquiry.module.css';
import HistorySample from '../../components/History/HistoryBack';

function Inquiry() {
  const onSubmit = () => {
    if (window.confirm("문의를 등록하시겠습니까?")) {
      alert("등록되었습니다.");
    } else {
      alert("등록을 취소하였습니다.");
    }
  };

  return (
    <div className={ InquiryStyle.container }>
        <div className={ InquiryStyle.backBtn }>
            <HistorySample></HistorySample>
        </div>

        <div className={ InquiryStyle.title }>
            1:1 문의
        </div>

        <div className={ InquiryStyle.inquiry }>
          <div className={ InquiryStyle.time_info_box }>
              <h1>내용</h1>
              <input
                type="text"
                name="inquiryTitle"
                placeholder='제목을 입력하세요'
              />
              <textarea
                type="text"
                name="inquiryContent"
                placeholder='내용을 입력하세요 (0/1000)'
              />
          </div>

          <div className={ InquiryStyle.line_box }></div>
          
          <div className={ InquiryStyle.inquiry_form }>
              <h1>사진</h1>
              <p>유의사항</p>
              <h4>답변시간 이후 접수건은 운영시간 내 순차적 답변드립니다</h4>
              <h4>문의글은 등록 이후 수정이 불가합니다</h4>
          </div>

          <Link to="#">
            <div className={ InquiryStyle.inquiry_submit_btn }>
              <button onClick={onSubmit}>등록하기</button>
            </div>
          </Link>
        </div>
    </div>
  );
}

export default Inquiry;