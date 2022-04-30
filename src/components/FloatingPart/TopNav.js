import React from "react";
import IncomeStyle from "./TopNav.module.css";
import { HiOutlineMinus } from "react-icons/hi";

const activeLine = (
  <HiOutlineMinus className="flow-nav-icon" size="50" color="#F8F8F8" />
);
const nActiveLine = (
  <HiOutlineMinus className="flow-nav-icon" size="50" color="#566479" />
);

function TopNav({ process, total }) {
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
      <div className={IncomeStyle.navBar}>{setNav()}</div>
    </div>
  );
}

export default TopNav;
