import React from 'react';
import React, { useState, useEffect } from "react";
import EcoStyle from './Eco.module.css';
import HistorySample from '../../components/History/HistoryBackHome';
import { FiShare } from 'react-icons/fi'

function EcoMission() {
  return (
    <div className={EcoStyle.container}>

        <div className={EcoStyle.backBtn}>
            <HistorySample></HistorySample>
        </div>
        <div className={EcoStyle.title}>
            10월
        </div>
        <div className={EcoStyle.title_icon}>
          <FiShare />
        </div>
        <div className={EcoStyle.mission_box}>
            <p>새로운 미션이 도착했어요!</p>
            <h1>오늘의 데일리 에코 미션</h1>
            <h2>청구서 및 영수증을 온라인 발급받기</h2>
            <img src="img/recipt.png" alt="recipt"></img>
            <button className={EcoStyle.mission_btn}>달성</button>
            <h2>{todayMission.name}</h2>
            {/*<p>{String.fromCodePoint(todayMission.emoji)}</p>*/}
            <img src="img/recipt.png" alt="recipt"></img>
            <button type="submit" className={EcoStyle.mission_btn}>달성</button>
        </div>
        <div className={EcoStyle.sub_title}>
            <h1>10월 내가 달성한 미션</h1>
            <p>내가 한 미션이 어떤 변화를 만들었을까요?</p>
        </div>

        <div className={EcoStyle.mission_box2}>
          <div className={EcoStyle.mission_icon}>🍽</div> 잔반 남기지 않기
          <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
        </div>
        <div className={EcoStyle.mission_box2}>
          <div className={EcoStyle.mission_icon}>🔌</div> 안 쓰는 코드 뽑기
          <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
        </div>
        <div className={EcoStyle.mission_box2}>
          <div className={EcoStyle.mission_icon}>🚿</div> 샤워 시간 단축하기
          <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
        </div>
        <div className={EcoStyle.mission_box2}>
          <div className={EcoStyle.mission_icon}>🛋</div> 실내조명 조도 낮추기
          <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
        </div>
        <div className={EcoStyle.mission_box2}>
          <div className={EcoStyle.mission_icon}>
            <img src="img/toothbrush.png" alt="toothbrush"></img>
          </div> 양치컵 사용하기
          <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
        </div>

        <div className={EcoStyle.mission_box2}>
          <div className={EcoStyle.mission_icon}>🔌</div> 대중교통 이용하기
          <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
        </div>
 
        
    </div>
  );
}

export default EcoMission;
