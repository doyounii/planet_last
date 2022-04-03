import React, { useState, useEffect } from "react";
import IncomeStyle from "./TopNav.module.css";
import { HiOutlineMinus } from "react-icons/hi";
const activeLine = (
  <HiOutlineMinus className="flow-nav-icon" size="50" color="#F8F8F8" />
);
const nActiveLine = (
  <HiOutlineMinus className="flow-nav-icon" size="50" color="#566479" />
);
//수입 상단바
//함수형 컴포넌트
function TopNav({ process, total }) {
  const [navigation, setNavigation] = useState([]); //깜빡이는 문제 있어서 추가함.

  useEffect(() => {
    setNavigation(setNav());
  }, [process, total]);

  const setNav = () => {
    let tempNav = [];
    for (let i = 0; i < process; i++) {
      tempNav.push(<li key={i}>{activeLine}</li>);
    }
    for (let i = process; i < total; i++) {
      tempNav.push(<li key={i}>{nActiveLine}</li>);
    }
    return tempNav;
  };
  return (
    <div className={IncomeStyle.header}>
      <div className={IncomeStyle.navBar}>{navigation}</div>
    </div>
  );
}

export default TopNav;
