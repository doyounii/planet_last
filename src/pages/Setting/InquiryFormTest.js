import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import InquiryStyle from './Inquiry.module.css';
import HistorySample from '../../components/History/HistoryBack';
import Uploader from "../../components/InquiryPart/Uploader";
import Popup from '../../components/InquiryPart/Popup';

import Inquiry from './Inquiry';

const InquiryForm = () => {
  // const [data, setData] = useState([]);
  const [state, setState] = useState({
    title: "",
    content: "",
  });
  const dataId = useState(0);

  const onCreates = (title, content) => {
    const created_date = new Date().getTime();
    console.log(title);

    const newItem = {
      title,
      content,
      created_date,
      id : dataId.current
    };

    dataId.current += 1;
    setState({newItem, ...state});
  }

  const navigate = useNavigate();

  console.log('asda', onCreates);

  // const [state, setState] = useState({
  //   title: "",
  //   content: "",
  // });

  const titleInput = useRef();
  const contentTextarea = useRef();

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    });
  };

  const handleSubmit = () => {
    if(state.title.length < 1){
      titleInput.current.focus();
      return;
    }
    if(state.content.length < 5){
      contentTextarea.current.focus();
      return;
    }
    //저장될 내용들 호출
    onCreates(state.title, state.content);
    console.log(onCreates);
    window.confirm("성공!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    navigate("/inquiry");
    
    setState({
      title: "",
      content: "",
    });
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    // <form onSubmit={handleSubmit}>
    <div className={ InquiryStyle.container }>
      {/* <InquiryForm onCreate={onCreates} test=""/>  */}
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
                ref={titleInput}
                type="text"
                name="title"
                value={state.title}
                onChange={handleChangeState}
                placeholder='제목을 입력하세요'
              />
              <textarea
                ref={contentTextarea}
                type="text"
                name="content"
                value={state.content}
                onChange={handleChangeState}
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
          <Popup open={modalOpen} close={closeModal} submit={handleSubmit}>
            문의를 등록하시겠습니까?
          </Popup>
        </div>
    </div>
    // </form>
  );
}

export default InquiryForm;