import React, {useState} from 'react';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
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


function Home({ activeHome }) {
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
            행성 19238호
            <a href="#">
              <RiPencilLine
                className={homeStyle.icon}
                alt="닉네임 변경"
              ></RiPencilLine>
            </a>
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
        <div className={homeStyle.month}>10월</div>
        <button className={homeStyle.history}>내역</button>
        <div className={homeStyle.income}>수입 870,000원</div>
        <div className={homeStyle.expend}>지출 594,300원</div>
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
