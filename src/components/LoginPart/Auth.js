import React, { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

function Auth(SpecificComponent, option) {
  const REST_API_KEY = process.env.REACT_APP_API_URL;
  const REDIRECT_URI = "http://localhost:3000/oauth";

  const code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
    });

    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );

      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.access_token);
      navigate.replace("/mypage");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();

    const userId = window.localStorage.getItem("userId");

    if (option) {
      if (!userId) {
        alert("로그인하세요");
        navigate("/login");
      }
    }
  }, []);
  return <SpecificComponent />;
}

export default Auth;
