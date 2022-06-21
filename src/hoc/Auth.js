import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth(SpecificComponent, option, adminRoute = null) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      if (option) {
        alert("로그인하세요");
        navigate("/login");
      }
    }
  }, []);
  return <SpecificComponent />;
}

export default Auth;
