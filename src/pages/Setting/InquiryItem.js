import React from 'react';
import SwipeableList from "../../components/Swipeable/SwipeableList";
import InquiryStyle from './Inquiry.module.css';


const InquiryItem = ({ id, title, content, created_date }) => {
    const onSwipe = (index) => {
        setTimeout(() => {
        }, 2000);
      };
    
    return (
    <SwipeableList key={id} onSwipe={onSwipe}>
        <div className={ InquiryStyle.inquiry_list }>
          <p>{new Date(created_date).toLocaleString()}</p>
          <h2>{title}</h2>
          <h4>미해결</h4>
        {/* <div className="content">{content}</div> */}
      </div>
    </SwipeableList>
    );
  };
  
  export default InquiryItem;