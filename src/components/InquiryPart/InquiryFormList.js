import React from 'react';

import InquiryStyle from '../../pages/Setting/Inquiry.module.css';

const InquiryFormList = ({inquiryList}) => {
    return (
      <div className={ InquiryStyle.inquiry_list }>
        {inquiryList.map((it) => (
          <div key={it.id}>
            <div>제목: {it.title}</div>
            <div>내용: {it.content}</div>
          </div>
        ))}
      </div>
    );
  };

  export default InquiryFormList;