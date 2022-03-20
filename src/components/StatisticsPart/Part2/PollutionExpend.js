import React from "react";
import "../Statistics.css";

function PollutionExpend() {
    return (
        <div className="statistics-box">
            <div className="drop-box">
                
            </div>

            <div className="day-box">
                <div className="day-breakdown-box">
                    <p>지출 카테고리</p>
                    <p>태그개수</p>

                    <div id='circle' style={{  background: '#8593B1'}}> &nbsp; &nbsp; &nbsp;</div>
                    <div className="day-breakdown-box-icon">🛒</div>
                    <h1>마트</h1>
                    <h2>120개</h2>
                    <p></p>

                    <div id='circle' style={{  background: '#667492'}}> &nbsp; &nbsp; &nbsp;</div>
                    <div className="day-breakdown-box-icon">🚗</div>
                    <h1>교통</h1>
                    <h2>80개</h2>
                    <p></p>

                    <div id='circle' style={{  background: '#475572'}}> &nbsp; &nbsp; &nbsp;</div>
                    <div className="day-breakdown-box-icon">🎬</div>
                    <h1>문화생활</h1>
                    <h2>50개</h2>
                    <p></p>

                    <div id='circle' style={{  background: '#303B51'}}> &nbsp; &nbsp; &nbsp;</div>
                    <div className="day-breakdown-box-icon">💬</div>
                    <h1>기타</h1>
                    <h2>30개</h2>
                    <p></p>

                    <div className='more'>
                    <div id='circle' style={{  background: '#C7D2E8',  'margin-left': '9px'}}> &nbsp; &nbsp; &nbsp;</div>
                    <h1 style={{   color: '#ffffff' }}>더보기 5개</h1>
                    <h2>20개</h2>
                    </div> 
                </div>
            </div>
        </div>

    )
}

export default PollutionExpend;