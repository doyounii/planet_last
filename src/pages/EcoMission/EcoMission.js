import React, { useState, useEffect, useRef, useCallback } from "react";
import Footer from "../../components/Footer/Footer";
import EcoStyle from "./Eco.module.css";
import HistorySample from "../../components/History/HistoryBackHome";
import { format } from "date-fns";
import { FiShare } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { Modal } from "../../components/EcoMissionPart/EcoModal";
import axios from "axios";

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

  const [missions, setMissions] = useState([
    {
      id: 1,
      emoji: "",
      text: "",
    },
  ]);

  const [missionArr, setMissionArr] = useState([]);

  const userId = window.localStorage.getItem("userId");

  const fetchData = async () => {
    console.log("in function");

    const response = await axios.get(
      `https://플랜잇.웹.한국:8080/api/mission/2022/8`,
      {
        headers: { userId: userId },
      }
    );
    const data = await response.data;
    console.log(data);

    setMissionArr(data.missions);

    setMissions([
      {
        emoji: data.todayMission.emoji,
        text: data.todayMission.name,
      },
    ]);

    if (data && data.length > 0) {
      console.log(data[0]);
    }

    setloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //const testStr = missions[0].emoji.slice(2, 8);
  const testStr = missions[0].emoji;
  console.log(testStr);
  console.log(String.fromCodePoint(testStr));

  console.log("백에서 오는 데이터 확인", missionArr);

  const fetchFunc = () => {
    //백엔드로 데이터 보내기
    fetch(
      //`https://플랜잇.웹.한국:8080/api/mission/${todayMission.emoji}/${todayMission.name}`,
      `https://플랜잇.웹.한국:8080/api/mission/${missions[0].emoji}/${missions[0].text}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          userId: userId,
        },
        body: JSON.stringify({
          mission: missions[0].emoji,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.token) {
          localStorage.setItem("wtw-token", response.token);
        }
      });
  };

  console.log("----");
  console.log(missions);
  console.log(todayMission.emoji);
  console.log("----");

  const [inputs, setInputs] = useState([]);

  const { emoji, text } = inputs;

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

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
      setInputs([
        ...inputs,
        {
          emoji: String.fromCodePoint(testStr),
          text: missions[0].text,
        },
      ]);
      nextId.current += 1;

      //백으로 데이터 보내기
      //fetchFunc();
    },
    [missions, emoji, text]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    //달성 버튼 누르면 백엔드로 정보 넘겨주기
    fetchFunc();
  };

  console.log(missions[0].text);

  //달성한 미션 가져오기
  function EcoMission({ data, name, emoji }) {
    return (
      <div className={EcoStyle.mission_box2}>
        <div className={EcoStyle.mission_icon}>
          {String.fromCodePoint(emoji)}
        </div>
        <p>{name}</p>
        <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
      </div>
    );
  }

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
        {/* To-do 달 바뀔 때마다 리스트 빈 화면으로 초기화 하기 */}
        {format(date, "M월")}{" "}
        <button onClick={isopenModal} className={EcoStyle.select_month_button}>
          <BsChevronDown />
        </button>
      </div>

      <div className={EcoStyle.title_icon}>
        <FiShare />
      </div>

      <form className={EcoStyle.mission_box}>
        <p>새로운 미션이 도착했어요!</p>
        <h1>오늘의 데일리 에코 미션</h1>

        <div className={EcoStyle.mission_box_input}>
          <input
            value={missions[0].text || "NONE"}
            emoji={emoji}
            text={text}
            onChange={onChange}
            onCreate={onCreate}
          />
        </div>

        <p>{String.fromCodePoint(testStr)}</p>

        <button
          type="submit"
          //onClick={onCreate}
          onClick={onSubmit}
          className={EcoStyle.mission_btn}
        >
          달성
        </button>
      </form>

      <div className={EcoStyle.sub_title}>
        <h1>{format(date, "M월")} 내가 달성한 미션</h1>
        <p>내가 한 미션이 어떤 변화를 만들었을까요?</p>
      </div>

      <EcoList missions={inputs} />

      {/* 달성한 미션 가져오기 */}
      {missionArr.map((famous) => (
        <EcoMission data={famous} name={famous.name} emoji={famous.emoji} />
      ))}

      <Footer activeMenu="home">
        <div>홈</div>
      </Footer>
    </div>
  );
};

export default EcoMission;
