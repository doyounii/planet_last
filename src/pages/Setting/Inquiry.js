import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import InquiryStyle from './Inquiry.module.css';
import HistorySample from '../../components/History/HistoryBack';

import InquiryForm from './InquiryForm';
import InquiryList from './InquiryList';

const Inquiry = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(false);

  const dataId = useRef(0);

  const onCreate = (title, content) => {
    const created_date = new Date().getTime();
    
    console.log(created_date);

    const newItem = {
      title,
      content,
      created_date,
      id: dataId.current,
    };

    dataId.current += 1;

    setData([newItem, ...data]);
    setForm(false);
  };

  return (
    // <>
    // <InquiryForm onCreate={onCreate} />
    // <div className={InquiryStyle.inquiry_list}>
    //   {data === undefined ? <h1>내역없음</h1> : <InquiryList inquiryList={data} /> }
    // </div>
    // </>
    <div className={ InquiryStyle.container }>

        {!form &&<><div className={InquiryStyle.backBtn}>
        <HistorySample></HistorySample>
      </div><div className={InquiryStyle.title}>
          1:1 문의
        </div><div className={InquiryStyle.inquiry}>

          <div className={InquiryStyle.time_info_box}>
            <h1>운영 시간 안내</h1>
            <p>접수시간: 24시간 접수 가능</p>
            <p>답변시간: 평일 11:00 - 18:00 (토/일/공휴일 휴무)</p>
            <h4 style={{ marginTop: "14px" }}>답변시간 이후 접수건은 운영시간 내 순차적 답변드립니다</h4>
            <h4>문의글은 등록 이후 수정이 불가합니다</h4>
          </div>

          <div className={InquiryStyle.line_box}></div>

          <div className={InquiryStyle.inquiry_list_box}>
            {data.length === 0 ? <h1>내역없음</h1> : <InquiryList inquiryList={data} />}
          </div>

        </div><div className={InquiryStyle.inquiry_btn}>
          <button onClick={() => setForm(true)}>문의하기</button>
        </div></>}
        {form && <InquiryForm onCreate={onCreate}/>}

     
    </div>
  );
}

export default Inquiry;
