import React from "react";
import { useLocation } from "react-router-dom";

function DetailCategory() {
  const data = useLocation().state;
  console.log(data);
  return <div style={{ color: "white" }}>hi</div>;
}

export default DetailCategory;
