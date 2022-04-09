import React from "react";

import styled from "styled-components";

import { AiOutlineQuestionCircle } from "react-icons/ai";

import Lottie from "react-lottie";
import high from "../../planet/1-2.json";
import highmid from "../../planet/2-2.json";
import low from "../../planet/4-2.json";
import mid from "../../planet/3-2.json";
import { Sliders } from "../CalendarPart/Sliders";

const lottieDefault = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    className: "add-class", // svg에 적용
    preserveAspectRatio: "xMidYMid slice",
  },
};

const modalData = [
  {
    animation: high,
    ment: "당신은 행성 히어로!\n지금처럼 착한 소비 이어가주세요 😇",
  },
  {
    animation: highmid,
    ment: "잘 하고 있어요!\n조금 더 노력하면 푸른 행성을 볼 수 있겠어요 🌎",
  },
  {
    animation: mid,
    ment: "노력하셔야겠어요 😱\n 소비를 줄이고 친환경적 소비를 실천해주세요",
  },
  {
    animation: low,
    ment: "반환경 소비는 자제해주세요 ❌\n 당신의 작은 변화가 행성을 바꿀 수 있어요\n플랜잇이 함께 할게요 💪🏻",
  },
];

export function QuestionModal() {
  return (
    <ModalWrapper>
      <p className="coment">
        나의 행성은 어떤 상태일까요?{" "}
        <AiOutlineQuestionCircle
          className="question"
          // onClick={(e) => openModal(e)}
        />
      </p>
      <Sliders dots={true} index={0}>
        {modalData.map((data, index) => {
          return (
            <>
              <div className="lottie" key={index}>
                <Lottie
                  options={{ ...lottieDefault, animationData: data.animation }}
                  eventListeners={[
                    {
                      eventName: "complete",
                      callback: () => console.log("the animation completed"),
                    },
                  ]}
                />
              </div>
              <p className="ment" key={10 + index}>
                {data.ment}
              </p>
              <p className="ment" key={20 + index}>
                {data.ment2}
              </p>
              <p className="ment3" key={30 + index}>
                {data.ment3}
              </p>
            </>
          );
        })}
      </Sliders>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  * {
    font-style: normal;
  }

  .question {
    position: relative;
    opacity: 0.4;
    color: #ffffff;
    cursor: pointer;
    margin-left: 5px;
    top: 2px;
  }

  .lottie {
    box-sizing: border-box;
    width: 280px;
    height: 280px;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
    z-index: 90;
  }

  .coment {
    margin: 35px 5% 15px 5%;

    font-weight: 600;
    font-size: 19px;
    text-align: center;
    color: #ffffff;
  }
  .ment {
    margin-bottom: 20px;
    white-space: pre-wrap; /* 줄바꿈용 */

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 4px;
    text-align: center;

    /* light grey */
    color: #b4b6b8;
    z-index: 100;
  }
  .ment3 {
    margin: 20px 5%;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 5px;
    text-align: center;

    /* light grey */
    color: #b4b6b8;
    z-index: 100;
    margin-bottom: 40px;
  }
`;
