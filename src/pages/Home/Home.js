import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { Link, Navigate } from "react-router-dom";
import homeStyle from "./Home.module.css";
import {
  FiSettings,
  FiUser,
  FiCheckCircle,
  FiEdit3,
  FiShoppingBag,
} from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillPlusCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import high from "../../planet/1-2.json";
import highmid from "../../planet/1-2.json";
import low from "../../planet/4-2.json";
import mid from "../../planet/3-2.json";
import Lottie from "react-lottie";
import { format } from "date-fns";
import { EditName } from "../../components/Home/EditName";
import logo from "./img/PLANet.png";
import zero from "./img/Mask.png";
import { Modal } from "../../components/CalendarPart/Modal";
import { QuestionModal } from "../../components/Home/QuestionModal";
import DonutChart from "../../components/StatisticsPart/DonutChart";
import { CgClose } from "react-icons/cg";

function Home({ activeHome }) {
  const [income, setIncome] = useState(0);
  const [message, setMessage] = useState(0);
  const [expenditure, setExpenditure] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isDonut, setIsDonut] = useState(false);
  const [loading, setloading] = useState(true);

  const [position2, setposition2] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetchData();
    // setMessage(data);
    // setUserName(data.userName);
    // setloading(false);
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `/main/2022/${format(new Date(), "M")}`,
      //${format(new Date(), "M")}
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    setMessage(data);
    setUserName(data.userName);
    setloading(false);
  };

  // const fetchFunc = (e) => {
  //   e.preventDefault();
  //   //백엔드로 데이터 보내기
  //   fetch(`/main/update/${userName}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       useName: userName,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.token) {
  //         localStorage.setItem("wtw-token", response.token);
  //       }
  //     })
  //     .then((e) => {
  //       Navigate("/");
  //     });
  // };

  console.log(message);
  const renderHeader = () => {
    const yNmFormat = "M월";

    return (
      <div className="header row flex-middle">
        <div className="col col-center">
          <span>{format(currentDate, yNmFormat)}</span>
        </div>
      </div>
    );
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      className: "add-class", // svg에 적용
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const maxLength = (text) => {
    if (text.length > text.maxLength) {
      text = text.slice(0, text.maxLength);
    }
  };

  const onReset = () => {
    setUserName("");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal2 = (e) => {
    setposition2(e.clientY);
    setIsModalOpen2(true);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleLottie = () => {
    setIsDonut(true);
  };

  const eco = message.ecoPercentage;

  if (eco != 0) {
    if (eco > 0 && eco < 25) {
      lottieOptions.animationData = low;
    } else if (eco >= 25 && eco < 50) {
      lottieOptions.animationData = mid;
    } else if (eco >= 50 && eco < 75) {
      lottieOptions.animationData = highmid;
    } else {
      lottieOptions.animationData = high;
    }
  }
  if (loading) return <div>loading...</div>;
  return (
    <>
      <div className={homeStyle.contents}>
        <nav className={homeStyle.menu}>
          <Link to="/Login" className={activeHome}>
            <img src={logo} className={homeStyle.logo} />
          </Link>
          <Link to="/Setting">
            <FiSettings className={homeStyle.icon}></FiSettings>
          </Link>
          <Link to="/MyPage">
            <FiUser className={homeStyle.icon}></FiUser>
          </Link>
        </nav>
        <section className={homeStyle.profiles}>
          <div className={homeStyle.main}>
            <div className={homeStyle.nickname}>
              {message.userName}
              <FiEdit3
                className={homeStyle.icon}
                alt="닉네임 변경"
                onClick={(e) => openModal2(e)}
              ></FiEdit3>
              {isModalOpen2 && (
                // <Modal
                //   className={position2}
                //   onClose={closeModal2}
                //   maskClosable={true}
                //   visible={true}
                // >
                //   <form onSubmit={fetchFunc}>
                //     <input
                //       id="inputMemo"
                //       type="text"
                //       value={userName}
                //       onChange={handleChange}
                //       maxLength="8"
                //       onInput={maxLength(userName)}
                //     />
                //     <CgClose onClick={onReset}></CgClose>

                //     <p>{userName.length}/8</p>

                //     <button type="submit">완료</button>
                //   </form>
                //   <button onClick={closeModal2}>취소</button>
                // </Modal>
                <EditName
                  className={position2}
                  onClose={closeModal2}
                  maskClosable={true}
                  visible={true}
                ></EditName>
              )}
            </div>
            <div>
              <AiOutlineQuestionCircle
                className={homeStyle.question}
                onClick={(e) => openModal(e)}
              />
              <div onClick={handleLottie} className={homeStyle.planet}>
                {isDonut ? (
                  <div>
                    <DonutChart percentage={message.ecoPercentage}></DonutChart>{" "}
                  </div>
                ) : eco === 0 ? (
                  <div>
                    {" "}
                    <img src={zero} />
                    <p>
                      아직 행성이 만들어지지 않았어요! <br /> 지금 바로 가계부를
                      작성해보세요{" "}
                    </p>
                  </div>
                ) : (
                  <Lottie
                    options={{ ...lottieOptions }}
                    eventListeners={[
                      {
                        eventName: "complete",
                        callback: () => console.log("the animation completed"),
                      },
                    ]}
                    isClickToPauseDisabled={true}
                  ></Lottie>
                )}
              </div>

              <div>
                {isModalOpen && (
                  <Modal
                    onClose={closeModal}
                    maskClosable={true}
                    visible={true}
                    closable={true}
                    background={false}
                  >
                    <QuestionModal />
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className={homeStyle.monthly}>
          <div className={homeStyle.month}>{renderHeader()}</div>
          <Link to="/#" className={activeHome}>
            <IoIosArrowForward
              className={homeStyle.history}
            ></IoIosArrowForward>
          </Link>
          <div className={homeStyle.income}>
            수입 <h1>{message.totalIncomeMonth.toLocaleString()}원</h1>
          </div>
          <div className={homeStyle.expend}>
            지출 <h1>{message.totalExpenditureMonth.toLocaleString()}원</h1>
          </div>
        </section>
        <section className={homeStyle.etc}>
          <div className={homeStyle.box}>
            <p className={homeStyle.box_text}>
              데일리
              <br /> 에코 미션
              <Link to="/EcoMission" className={activeHome}>
                <IoIosArrowForward
                  className={homeStyle.btn}
                ></IoIosArrowForward>
              </Link>
            </p>
            <FiCheckCircle className={homeStyle.check}></FiCheckCircle>
          </div>
          <div className={homeStyle.box}>
            <p className={homeStyle.box_text}>
              친 · 반환경 <br /> 소비 횟수
              <Link to="/#" className={activeHome}>
                <IoIosArrowForward
                  className={homeStyle.btn}
                ></IoIosArrowForward>
              </Link>
              <div className={homeStyle.num}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
            </p>
          </div>
          <div className={homeStyle.box}>
            <p className={homeStyle.box_text}>
              월간 <br />
              플랜잇
              <Link to="/#" className={activeHome}>
                <IoIosArrowForward
                  className={homeStyle.btn}
                ></IoIosArrowForward>
              </Link>
            </p>
            <FiShoppingBag className={homeStyle.bag}></FiShoppingBag>
          </div>
        </section>
        <section>
          <Link to="/FloatingPage" className={activeHome}>
            <AiFillPlusCircle className={homeStyle.floating}></AiFillPlusCircle>
          </Link>
        </section>
        <Footer activeMenu="home">
          <div>홈</div>
        </Footer>
      </div>
    </>
  );
}

export default Home;

const data = {
  userName: "사용자1",
  totalIncomeMonth: 102000,
  totalExpenditureMonth: 54900,
  ecoPercentage: 0,
  noEcoPercentage: 100,
};
