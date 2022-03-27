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
import planet from "../../planet/high.json";
import Lottie from "react-lottie";
import { format } from "date-fns";
import { EditName } from "../../components/Home/EditName";
import logo from "./img/PLANet.png";
import { Modal } from "../../components/CalendarPart/Modal";
import { QuestionModal } from "../../components/Home/QuestionModal";

function Home({ activeHome }) {
  const [income, setIncome] = useState(0);
  const [message, setMessage] = useState(0);
  const [expenditure, setExpenditure] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const [loading, setloading] = useState(true);

  const [position2, setposition2] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `/main/yui12@gmail.com/2022/${format(new Date(), "M")}`,
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
    setloading(false);
  };

  console.log(income);
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
    animationData: planet,
    loop: true,
    autoplay: true,
    rendererSettings: {
      className: "add-class", // svg에 적용
      preserveAspectRatio: "xMidYMid slice",
    },
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
                <EditName
                  className={position2}
                  onClose={closeModal2}
                  maskClosable={true}
                  visible={true}
                ></EditName>
              )}
            </div>
            <div className={homeStyle.planet}>
              <AiOutlineQuestionCircle
                className={homeStyle.question}
                onClick={(e) => openModal(e)}
              />
              <Lottie
                options={lottieOptions}
                eventListeners={[
                  {
                    eventName: "complete",
                    callback: () => console.log("the animation completed"),
                  },
                ]}
              />

              <div>
                {isModalOpen && (
                  <Modal
                    onClose={closeModal}
                    maskClosable={true}
                    visible={true}
                    closable={true}
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
            수입 {message.totalIncomeMonth}원
          </div>
          <div className={homeStyle.expend}>
            지출 {message.totalExpenditureMonth}원
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
          <Link to="/FloatingPage1" className={activeHome}>
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
