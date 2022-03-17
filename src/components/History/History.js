import React from 'react';
import HistoryStyle from './History.module.css';
import { useNavigate } from 'react-router-dom'
import { FaChevronLeft, FaTimes } from 'react-icons/fa';

function HistorySample() {
  const navigate = useNavigate();
  
  return(
    //홈 화면으로 이동
    <button className={HistoryStyle.goBackBtn} onClick={ () => {
        navigate('/#');
    } }>
      <FaTimes className="icon" size="20" color="white" />
    </button>
  );
}

export default HistorySample;