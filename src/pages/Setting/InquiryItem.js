import React from 'react';

const InquiryItem = ({ id, title, content, created_date }) => {
    return (
      <div>
          <span className="author_info">
            | 제목 : {title}
          </span>
          <br />
          <span className="date">{new Date(created_date).toLocaleString()}</span>

        <div className="content">{content}</div>
      </div>
    );
  };
  
  export default InquiryItem;