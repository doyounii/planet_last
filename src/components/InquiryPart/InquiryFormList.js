import React from 'react';

import InquiryStyle from '../../pages/Setting/Inquiry.module.css';

const InquiryFormList = ({inquiryList}) => {
    return (
      <div className={ InquiryStyle.inquiry_list }>
        {inquiryList.map((it) => (
          <div key={it.id}>
            <div>내용: {it.title}</div>
          </div>
        ))}
      </div>
    );
  };

  export default InquiryFormList;