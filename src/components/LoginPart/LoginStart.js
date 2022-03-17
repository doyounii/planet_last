import React, {useState}from 'react';
import LoginStyle from './Login.module.css';
import google from './img/ico-google.png';
import naver from './img/ico-naver.png';
import kakao from './img/ico-kakao.png';
import logo from '../../components/LoginPart/img/Group 345.png';
import planet from '../../planet/high.json';
import Lottie from 'react-lottie';




function Login() {

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
    <section className={LoginStyle.content}>
        <div className={LoginStyle.container}>
        <img src={logo} className={LoginStyle.logo} alt="로고"/>

        <div className={LoginStyle.planet}>
        <Lottie 
				options={lottieOptions}
				isStopped={isStopped}
				isPaused={isPaused}
				isClickToPauseDisabled={false}
				style={{width: '400px', height: '400px',
            }} // svg의 부모 div에 적용
				eventListeners={[
					{
						eventName: 'complete',
						callback: () => console.log('the animation completed'),
					},
				]}
		/>
        
            </div>

            <button onClick={onPause}>Play/Pause</button>

        <p>
        지구를 위한 건강한 소비생활 <br/>
        지금 플랜잇과 시작해볼까요? 🌱
        </p>
        </div>
        <div className={LoginStyle.login}>
            <p >아이디와 비밀번호 없이 간편하게 로그인할 수 있어요</p>
            <button className={LoginStyle.google}>
                <img src={google}/> 구글로 로그인하기</button>
            <button className={LoginStyle.naver}> 
                <img src={naver}/> 네이버로 로그인하기</button>
            <button className={LoginStyle.kakao}>
                <img src={kakao}/> 카카오톡으로 로그인하기</button>
        </div>
    </section>
    );
}

export default Login
