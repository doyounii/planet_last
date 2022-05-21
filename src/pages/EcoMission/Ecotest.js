import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import EcoStyle from "./Eco.module.css";
import HistorySample from "../../components/History/HistoryBackHome";
import { format } from "date-fns";
import { FiShare } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { Modal } from "../../components/EcoMissionPart/EcoModal";

// import DateContainer from "../../components/EcoMissionPart/DateContainer";

import DateList from "../../components/DateList";

function EcoMission() {
  const [list, setList] = useState({});
  const [loading, setloading] = useState(true);
  const [todayMission, setTodayMission] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isopenModal = () => {
    setIsModalOpen(true);
  };

  const iscloseModal = () => {
    setIsModalOpen(false);
  };

  // useEffect(() => {
  //   let isSubscribed = true;
  //   fetch(`/mission`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (isSubscribed) {
  //         setTodayMission(data.todayMission);
  //         setloading(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("error!");
  //       console.log(error);
  //     });
  //   return () => (isSubscribed = false);
  // }, []);

  // const fetchFunc = () => {
  //   //백엔드로 데이터 보내기
  //   fetch(
  //     `/mission/${todayMission.emoji}/${todayMission.name}`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         mission: todayMission.emoji,
  //       }),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.token) {
  //         localStorage.setItem("wtw-token", response.token);
  //       }
  //     });
  // };

  const [date, setDate] = useState(new Date());

  return (
    <div className={EcoStyle.container}>
      <div className={EcoStyle.backBtn}>
        <HistorySample></HistorySample>
      </div>
      <div className={EcoStyle.title}>
        {isModalOpen && (
          <Modal
            onClose={iscloseModal}
            maskClosable={true}
            visible={false}
            closable={true}
            background={"#202632"}
            className="ModalInner"
          >
            <DateList
              getDate={date}
              selectedValue={date}
              onChange={(date) => setDate(date)}
            />
          </Modal>
        )}

        <input value={format(date, "M월")} onClick={isopenModal} readOnly />
        {/* <button onClick={isopenModal} className={EcoStyle.select_month_button}><BsChevronDown /></button> */}
      </div>
      <div className={EcoStyle.title_icon}>
        <FiShare />
      </div>

      <div className={EcoStyle.mission_box}>
        <p>새로운 미션이 도착했어요!</p>
        <h1>오늘의 데일리 에코 미션</h1>
        <h2>일회용품 지양하기</h2>
        {/* <h2>{todayMission.name}</h2> */}
        {/*<p>{String.fromCodePoint(todayMission.emoji)}</p>*/}
        <img src="img/recipt.png" alt="recipt"></img>
        <button type="submit" className={EcoStyle.mission_btn}>
          달성
        </button>
      </div>

      <div className={EcoStyle.sub_title}>
        <h1>{format(date, "M월")} 내가 달성한 미션</h1>
        <p>내가 한 미션이 어떤 변화를 만들었을까요?</p>
      </div>

      <div className={EcoStyle.mission_box2}>
        <div className={EcoStyle.mission_icon}>🍽</div>
        <p>잔반 남기지 않기</p>
        <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
      </div>

      <div className={EcoStyle.mission_box2}>
        <div className={EcoStyle.mission_icon}>🔌</div>
        <p>안 쓰는 코드 뽑기</p>
        <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
      </div>

      <div className={EcoStyle.mission_box2}>
        <div className={EcoStyle.mission_icon}>🚿</div>
        <p>샤워 시간 단축하기</p>
        <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
      </div>

      <div className={EcoStyle.mission_box2}>
        <div className={EcoStyle.mission_icon}>🛋</div>
        <p>실내조명 조도 낮추기를 해봅시다 어때요?</p>
        <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
      </div>

      <div className={EcoStyle.mission_box2}>
        <div className={EcoStyle.mission_icon}>🪥</div>
        <p>양치컵 사용하기</p>
        <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
      </div>

      <div className={EcoStyle.mission_box2}>
        <div className={EcoStyle.mission_icon}>🚌</div> 대중교통 이용하기
        <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
      </div>

      <Footer activeMenu="home">
        <div>홈</div>
      </Footer>
    </div>
  );
}

export default EcoMission;
