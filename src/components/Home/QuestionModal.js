import React, { useEffect } from "react";
import Portal from "../CalendarPart/Portal";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import Lottie from 'react-lottie';
import high from '../../planet/high.json';
import highmid from '../../planet/highmid.json';
import low from '../../planet/low.json';
import mid from '../../planet/mid.json';

SwiperCore.use([Navigation, Pagination, Autoplay])


export function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px; left:0px; right:0px; bottom:0px;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  const lottieOptions1 = {
    animationData: high,  
    loop: true,        
    autoplay: true,   
    rendererSettings: {
    className: 'add-class', // svg에 적용
    preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const lottieOptions2 = {
    animationData: highmid,  
    loop: true,        
    autoplay: true,   
    rendererSettings: {
    className: 'add-class', // svg에 적용
    preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const lottieOptions3 = {
    animationData: mid,  
    loop: true,        
    autoplay: true,   
    rendererSettings: {
    className: 'add-class', // svg에 적용
    preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const lottieOptions4 = {
    animationData: low,  
    loop: true,        
    autoplay: true,   
    rendererSettings: {
    className: 'add-class', // svg에 적용
    preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex={-1}
        visible={visible}
      >
        <ModalInner tabIndex={0} className="modal-inner">
          {closable && <CgClose className="modal-close" onClick={close} />}
          {children}
          <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}

      >
        <SwiperSlide>
        <p className='coment'>나의 행성은 어떤 상태일까요?</p>
          <div className='lottie'>
          <Lottie 
            options={lottieOptions1}
            eventListeners={[
              {
                eventName: 'complete',
                callback: () => console.log('the animation completed'),
              },
            ]}
            //style={{'width': '380px', height: '380px',   'margin-right': '300px'
          
          //}}
		      />
          </div>
        <p className='ment'>당신은 행성 히어로! <br/> 지금처럼 착한 소비 이어가주세요😇</p>
        </SwiperSlide>
        <SwiperSlide>
        <p className='coment'>나의 행성은 어떤 상태일까요?</p>
          <div className='lottie'>
          <Lottie 
            options={lottieOptions2}
            eventListeners={[
              {
                eventName: 'complete',
                callback: () => console.log('the animation completed'),
              },
            ]}
            //style={{'width': '380px', height: '380px',   'margin-right': '300px'
          
          //}}
		      />
          </div>
        <p className='ment'>잘 하고 있어요! <br/>
조금 더 노력하면 푸른 행성을 볼 수 있겠어요 🌎</p>
        </SwiperSlide>
        <SwiperSlide>
        <p className='coment'>나의 행성은 어떤 상태일까요?</p>
          <div className='lottie'>
          <Lottie 
            options={lottieOptions3}
            eventListeners={[
              {
                eventName: 'complete',
                callback: () => console.log('the animation completed'),
              },
            ]}
            //style={{'width': '380px', height: '380px',   'margin-right': '300px'
          
          //}}
		      />
          </div>
        <p className='ment'>노력하셔야겠어요 😱 <br/>
소비를 줄이고 친환경적 소비를 실천해주세요</p>
        </SwiperSlide>
        <SwiperSlide>
        <p className='coment'>나의 행성은 어떤 상태일까요?</p>
          <div className='lottie'>
          <Lottie 
            options={lottieOptions4}
            eventListeners={[
              {
                eventName: 'complete',
                callback: () => console.log('the animation completed'),
              },
            ]}
            //style={{'width': '380px', height: '380px',   'margin-right': '300px'
          
          //}}
		      />
          </div>
        <p className='ment'>반환경 소비는 자제해주세요 ❌ <br/>
당신의 작은 변화가 행성을 바꿀 수 있어요 <br/>
플랜잇이 함께 할게요 💪🏻</p>
        </SwiperSlide>
      </Swiper>
          
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
}

Modal.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
};


Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  font-family: Pretendard;
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  overflow: auto;
  outline: 0;
  .infoModal {
    position: relative;
    color: white;
    font-size: 13px;
  }

  .modal-close {
    color: #f5f5f5;
    width: 20px;
    height: 20px;
    float: right;
  }
  .lottie {
    box-sizing: border-box;
    width: 300px;
    height: 300px;
    margin-left: 5%;
    margin-right: 5%;
    margin: auto;
    top: 60px;
    border-radius: 50%;
    overflow: hidden;
    z-index:90;
  }
  .swiper-pagination {
  }
  .swiper-pagination-bullet {
    background: #C4C4C4;
  }
  .swiper-pagination-bullet-active {
    background: #ffff;
  }
  .coment {
    width: 221px;
    height: 23px;
    left: 152px;
    margin-left: 5%;
    margin-right: 5%;
    margin: auto;
    margin-top: 55px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
    /* identical to box height */
    text-align: center;
    color: #FFFFFF;
  }
  .ment {
    width: 270px;
    height: 40px;
    left: 73px;
    
    margin-left: 5%;
    margin-right: 5%;
    margin: auto;

    margin-bottom: 50px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    /* light grey */
    color: #B4B6B8;
    z-index:100;
  }
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(20, 27, 39, 0.9);
  z-index: 3;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background: #141B27;
  border-radius: 10px;
  width: 90%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 20px;
`;
