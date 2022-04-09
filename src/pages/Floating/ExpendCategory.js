import React, { Component } from "react";
import { Link } from "react-router-dom";
import IncomeStyle from "./Float.module.css";
import TopNav from "../../components/FloatingPart/TopNav";
import Dashboard from "../../components/FloatingPart/Dashboard";
import SelectExpendCategory from "../../components/FloatingPart/SelectExpendCategory";

function ExpendCategory() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav process={3} total={5} />

      <Dashboard value={2} />

      <SelectExpendCategory></SelectExpendCategory>
    </div>
  );
}

export default ExpendCategory;
