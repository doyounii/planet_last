import React, { useState, useEffect, useRef, useCallback } from "react";
import Footer from "../../components/Footer/Footer";
import EcoStyle from "./Eco.module.css";
import HistorySample from "../../components/History/HistoryBackHome";
import { format } from "date-fns";
import { FiShare } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { Modal } from "../../components/EcoMissionPart/EcoModal";

import DateList from "../../components/DateList";
import EcoList from "../../components/EcoMissionPart/EcoList";

const EcoMission = () => {
  const [loading, setloading] = useState(true);
  const [todayMission, setTodayMission] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isopenModal = () => {
    setIsModalOpen(true);
  };

  const iscloseModal = () => {
    setIsModalOpen(false);
  };

  //배열..
  const [missions, setMissions] = useState([
    {
      id: 1,
      emoji: "",
      text: "",
    },
  ]);

  useEffect(() => {
    let isSubscribed = true;
    fetch(`/brenna9981@gmail.com/mission/2022/5`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (isSubscribed) {
          // setTodayMission(data.todayMission);
          // setMissName(data.todayMission.name || {});
          // setMissionEmo(data.todayMission.emoji || {});

          setMissions({
            emoji: data.todayMission.emoji,
            text: data.todayMission.name,
          })

          if (data && data.length > 0) {
            console.log(data[0]);
          }

          setloading(false);
        }
      })
      .catch((error) => {
        console.log("error!");
        console.log(error);
      });

    return () => (isSubscribed = false);
  }, []);

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

  console.log('----');
  // console.log(missName);
  // console.log(missionEmo);
  console.log(missions);
  console.log(missions.emoji);
  console.log(missions.text);
  console.log('----');
  
  const [inputs, setInputs] = useState({
    //missions.map 오류
    emoji: missions[0].emoji,
    text: missions[0].text,
    // emoji: String.fromCodePoint(todayMission.emoji),
    // text: todayMission.name,
  });

  const { emoji, text } = inputs;

  // const onChange = useCallback(
  //   (e) => {
  //     const { name, value } = e.target;
  //     setInputs({
  //       ...inputs,
  //       [name]: value,
  //     });
  //   },
  //   [inputs]
  // );

  const nextId = useRef(1);

  const onCreate = useCallback(
    (e) => {
      e.preventDefault();
      const mission = {
        id: nextId.current,
        emoji,
        text,
      };
      setMissions(missions.concat(mission));
      
      //다음날 데이터로 초기화
      setInputs({
        emoji: "#",
        text: "다음날 데이터",
      });
      nextId.current += 1;
    },
    [missions, emoji, text]
  );

  // const onSubmit = useCallback(
  //   e => {
  //     onInsert();
  //     e.preventDefault();
  //   },
  //   []
  // );

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

      {format(date, "M월")} <button onClick={isopenModal} className={EcoStyle.select_month_button}><BsChevronDown /></button>
      </div>
      
      <div className={EcoStyle.title_icon}>
        <FiShare />
      </div>
      

      <form className={EcoStyle.mission_box}>
        <p>새로운 미션이 도착했어요!</p>
        <h1>오늘의 데일리 에코 미션</h1>
        
        <div className={EcoStyle.mission_box_input}>
          <input
            value={text || ''}
            emoji={emoji}
            text={text}
            // onChange={onChange}
            // onCreate={onCreate}
          />
        </div>
        {/* <p>{String.fromCodePoint(todayMission.emoji)}</p> */}

        <button
          type="submit"
          onClick={onCreate}
          className={EcoStyle.mission_btn}
        >
          달성
        </button>
      </form>

      <div className={EcoStyle.sub_title}>
        <h1>{format(date, "M월")} 내가 달성한 미션</h1>
        <p>내가 한 미션이 어떤 변화를 만들었을까요?</p>
      </div>

      <EcoList missions={missions} />

      <Footer activeMenu="home">
        <div>홈</div>
      </Footer>
    </div>
  );
};

export default EcoMission;
