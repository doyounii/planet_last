import React from 'react';
import InquiryItem from './InquiryItem';

const InquiryList = ({inquiryList}) => {
    return(
      <>
        {inquiryList.map((it)=>(
        	<InquiryItem key={it.id} {...it} />
        ))}
      </>
    );
}

export default InquiryList;