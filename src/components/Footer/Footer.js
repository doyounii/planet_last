import React from "react";
import { Link } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { FiCalendar, FiTrendingUp, FiGift } from "react-icons/fi";
import styles from "../Footer/Footer.module.css";
import { Icon } from '@iconify/react';

function Footer({ activeMenu }) {
  return (
    <div className={styles.menu}>
      <Link
        to="/"
        className={activeMenu === "home" ? styles.focused : styles.link}
      >
        <RiHomeLine className={styles.icon}/>
        <p className={activeMenu === "home" ? styles.text : styles.text2}>홈</p>
      </Link>
      <Link
        to="/calendar"
        className={activeMenu === "calendar" ? styles.focused : styles.link}
      >
        <FiCalendar className={styles.icon} />
        <p className={activeMenu === "calendar" ? styles.text : styles.text2}>캘린더</p>
      </Link>
      <Link
        to="/statistics"
        className={activeMenu === "statistics" ? styles.focused : styles.link}
      >
        <FiTrendingUp className={styles.icon} />
        <p className={activeMenu === "statistics" ? styles.text : styles.text2}>통계</p>
      </Link>
      <Link
        to="/diary"
        className={activeMenu === "diary" ? styles.focused : styles.link}
      >
        <Icon icon="uil:diary" className={styles.icon}/>
        <p className={activeMenu === "diary" ? styles.text : styles.text2}>일기</p>
      </Link>
      <Link
        to="/news"
        className={activeMenu === "news" ? styles.focused : styles.link}
      >
        <FiGift className={styles.icon} />
        <p className={activeMenu === "news" ? styles.text : styles.text2}>소식</p>
      </Link>
    </div>
  );
}

export default Footer;
