import React from 'react';
import InquiryItem from './InquiryItem.js';
//import './Popup.css';

const InquiryList = ({inquiryList}) => {
    return(
      <>
        {inquiryList.map((it)=>(
        	<><div>제목: {it.title}</div><div>문의내용: {it.content}</div></>
        ))}
      </>
    );
}

export default InquiryList;