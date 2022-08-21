import React from "react";

import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { FiSettings, FiUser } from "react-icons/fi";
import homeStyle from "../Home/Home.module.css";
import logo from "../Home/img/PLANet.png";

function News() {
  return (
    <div>
      <nav className={homeStyle.menu}>
        <Link to="/Login">
          <img alt="플랜잇 로고" src={logo} className={homeStyle.logo} />
        </Link>
        <Link to="/Setting">
          <FiSettings className={homeStyle.icon}></FiSettings>
        </Link>
        <Link to="/MyPage">
          <FiUser className={homeStyle.icon}></FiUser>
        </Link>
      </nav>
      <div
        className="diary"
        style={{
          width: "100vw",
          color: "#636E75",
          textAlign: "center",
          marginTop: "40vh",
        }}
      >
        업데이트 예정입니다✨
      </div>
      <Footer activeMenu="news">
        <div>소식</div>
      </Footer>
    </div>
  );
}

export default News;
