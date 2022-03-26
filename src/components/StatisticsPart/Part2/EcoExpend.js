import React from "react";
import "./EcoExpend.css";

function EcoExpend() {
    return (
        <div className="statistics-box">
            <div className="day-box">
                <div className="day-breakdown-box">
                    <p>지출 카테고리 <span>태그개수</span></p>
                    

                    <div className="day-breakdown-box-icon" style={{  color: '#00c982'}}>● 🛒</div>
                    <h1>마트</h1>
                    <h2>12개</h2>
                    <p></p>

                    <div className="day-breakdown-box-icon" style={{  color: '#1466FE'}}>● 🚗</div>
                    <h1>교통</h1>
                    <h2>8개</h2>
                    <p></p>

                    <div className="day-breakdown-box-icon" style={{  color: '#083FA5'}}>● 🎬</div>
                    <h1>문화생활</h1>
                    <h2>5개</h2>
                    <p></p>

                    <div className="day-breakdown-box-icon" style={{  color: '#728EC6'}}>● 💬</div>
                    <h1>기타</h1>
                    <h2>3개</h2>
                    <p></p>

                    <div className='more'>
                    <h1 style={{ color: '#C7D2E8'}}>● 더보기 5개</h1>
                    <h2>2개</h2>
                    </div> 
                </div>
            </div>
        </div>

    )
}

export default EcoExpend;