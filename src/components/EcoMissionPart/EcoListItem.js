import React from 'react';

import EcoStyle from "../../pages/EcoMission/Eco.module.css";

const EcoListItem = ({ mission }) => {
    const { emoji, text } = mission;

    return (
        <div className={EcoStyle.mission_box2}>
          <div className={EcoStyle.mission_icon}>{emoji}</div> 
          <p>{text}</p>
          <button className={EcoStyle.mission_complete_btn}>달성 완료</button>
        </div>
    );
}

export default EcoListItem;