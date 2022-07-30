import React, { useState } from 'react';
import SwipeableList from "../../components/Swipeable/SwipeableList";
import InquiryStyle from './Inquiry.module.css';

const InquiryItem = ({ id, title, content, created_date }) => {
  const [visible, setVisible] = useState(false);
  
    const onSwipe = (index) => {
        setTimeout(() => {
        }, 2000);
      };
    
    return (
    <div>
      <SwipeableList key={id} onSwipe={onSwipe}>
        <div className={ InquiryStyle.inquiry_list }
        onClick={() => {
          setVisible(!visible);
        }}>
          <p>{new Date(created_date).toLocaleString()}</p>
          <h2>{title}</h2>
          <h4>미해결</h4>
        </div>
      </SwipeableList>

    {visible && 
      <div className={ InquiryStyle.inquiry_qna }>
        Q.
        <p>{title}</p>
        <h2>{content}</h2>

        <br />

        A.
        <p>아직 문의가 접수되지 않았습니다.</p>
      </div>
    }
    </div>
    );
  };
  
  export default InquiryItem;