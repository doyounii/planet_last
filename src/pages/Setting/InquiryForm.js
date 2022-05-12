import React, { useState } from 'react';
import { post } from 'axios';
import InquiryStyle from './Inquiry.module.css';
import HistorySample from '../../components/History/HistoryBack';
import Uploader from "../../components/InquiryPart/Uploader";
import Popup from '../../components/InquiryPart/Popup';

function Inquiry() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    addFormList()
    
    .then((response) => {
      console.log(response.data);
    })
  }

  const constructor = (props) => {
    constructor.state = {
      file: null,
      title: '',
      content: '',
      fileName: '',
    }
    
    constructor.handleFormSubmit = constructor.handleFormSubmit.bind(constructor)
    constructor.handleFileChange = constructor.handleFileChange.bind(constructor)
    constructor.handleValueChange = constructor.handleValueChange.bind(constructor)
    constructor.addCustomer = constructor.addCustomer.bind(constructor)
    
    }

  const addFormList = () =>{
 
    const url = '/api/customers';

    const formData = new FormData();
    
    formData.append('image', constructor.state.file)
    formData.append('title', this.state.title)
    formData.append('content', this.state.content)
    
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
        }    
    }
    
    return post(url, formData, config)
  }

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
              <Uploader />
              <p>유의사항</p>
              <h4>답변시간 이후 접수건은 운영시간 내 순차적 답변드립니다</h4>
              <h4>문의글은 등록 이후 수정이 불가합니다</h4>
          </div>
        </div>
        <div className={ InquiryStyle.inquiry_submit_btn }>
          <button onClick={openModal}>등록하기</button>
          <Popup open={modalOpen} close={closeModal} submit={onSubmit}>
            문의를 등록하시겠습니까?
          </Popup>
        </div>
    </div>
  );
}

export default Inquiry;