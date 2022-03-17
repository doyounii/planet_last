import React, {useState, useEffect} from 'react';
import Footer from '../../components/Footer/Footer';
import { Link, Navigate } from 'react-router-dom';
import homeStyle from './Home.module.css';
import { FiSettings } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { RiPencilLine } from 'react-icons/ri';
import logo from './img/PLANet.png';
import profile_img from './img/Profiles.png';
import { IoIosArrowForward } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import planet from '../../planet/high.json';
import Lottie from 'react-lottie'; 
import {format} from 'date-fns';
import EditName from '../../components/Home/EditName';



function Home({ activeHome }) {


  const [income, setIncome] = useState(0);
  const [message, setMessage] = useState(0);
  const [edit, setEdit] = useState(false);
  const [expenditure, setExpenditure] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [loading, setloading] = useState(true);

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
    loop: false,        
    autoplay: false,   
    rendererSettings: {
    className: 'add-class', // svg에 적용
    preserveAspectRatio: 'xMidYMid slice'
    }
};

const [isStopped, SetIsStopped] = useState(false);
const [isPaused, SetIsPaused] = useState(true);

const onStop = () => {
SetIsStopped(!isStopped)
};

const onPause = () => {
SetIsPaused(!isPaused)
};

const editName = (e) => {
  setEdit(edit => !edit);
}

  return (
    <section className={homeStyle.contents}>
      <nav className={homeStyle.menu}>
        <a href="/Setting">
          <FiSettings className={homeStyle.icon}></FiSettings>
        </a>
        <a href="/MyPage">
          <FiUser className={homeStyle.icon}></FiUser>
        </a>
        <Link to='/Login' className={activeHome}>
        <div className={homeStyle.logo}>
          <img src={logo} alt="로고" />
        </div>
        </Link>
      </nav>
      <section className={homeStyle.profiles}>
        <div className={homeStyle.main}>
          <div className={homeStyle.nickname}>
            {message.userName}
              <RiPencilLine onClick={editName}
                className={homeStyle.icon}
                alt="닉네임 변경"
              ></RiPencilLine>
              {edit ? <EditName></EditName> : <div></div>}
          </div>
          <div className={homeStyle.profile}>
          <Lottie 
				options={lottieOptions}
				isStopped={isStopped}
				isPaused={isPaused}
				isClickToPauseDisabled={false}
				eventListeners={[
					{
						eventName: 'complete',
						callback: () => console.log('the animation completed'),
					},
				]}
		/>
        
        {/* <button onClick={onPause}>Play/Pause</button>           */}
          </div>
        </div>
      </section>
      <section className={homeStyle.monthly}>
        <div className={homeStyle.month}>
        {renderHeader()}
        </div>
        <button className={homeStyle.history}>내역</button>
        <div className={homeStyle.income}>
                      수입 {message.totalIncomeMonth}원
        </div>
        <div className={homeStyle.expend}>지출 {message.totalExpenditureMonth}원</div>
      </section>
      <section className={homeStyle.etc}>
        <div className={homeStyle.box}>
          <nav className={homeStyle.box_text}>
            데일리 에코 미션
            <Link to="/EcoMission" className={activeHome}>
              <IoIosArrowForward className={homeStyle.btn}></IoIosArrowForward>
            </Link>
          </nav>
        </div>
        <div className={homeStyle.box}>
          <nav className={homeStyle.box_text}>
            친,반환경 소비 횟수
            <Link to="/#" className={activeHome}>
              <IoIosArrowForward className={homeStyle.btn}></IoIosArrowForward>
            </Link>
          </nav>
        </div>
        <div className={homeStyle.box}>
          <nav className={homeStyle.box_text}>
            월간 플랜잇
            <Link to="/#" className={activeHome}>
              <IoIosArrowForward className={homeStyle.btn}></IoIosArrowForward>
            </Link>
          </nav>
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
    </section>
  );
}

export default Home;
