import { useState } from "react";
import { useForm } from "react-hook-form";
import "./index.scss";
import axios from "axios";
import logo from "../../static/img/logo.png";
import { Link, Navigate, NavLink } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Aside from "../Aside";
import React from "react";
const Login = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
  } = useForm();

  const onSubmit = ({ username, password }) => {
    getLogin(username, password);
  };
  //로그인 API 호출
  const getLogin = (username, password) => {
    console.log(username, password);
    localStorage.setItem("username", username);
    axios
      .post(
        `/login`,
        JSON.stringify({
          username: username,
          password: password,
        }),
        config
      )
      .then(loginSuccess)
      .catch((error) => {
        console.log(error);
      });
  };
  //로그인 성공 시
  async function loginSuccess(response) {
    console.log("로그인 성공");
    alert("로그인 성공! 로고를 클릭하면 홈으로 넘어갑니다.");
    //이전에 남아있는 토큰이 있을 경우 지우기
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    const { authorization, authorization_refresh } = response.headers;
    //localStorage에 토큰 저장
    localStorage.setItem("accessToken", authorization);
    localStorage.setItem("refreshToken", authorization_refresh);
    console.log(response);

    // jwtDecode(authorization);
  }
  return (
    <div className="login">
      {/* <Aside></Aside> */}
      <Link to="/">
        <img
          className="login-modal__logo"
          src={logo}
          alt="daily-mission-logo"
        ></img>
      </Link>
      <form className="login_box" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username")}
          placeholder="아이디 입력하세요."
          name="username"
        />
        <input
          type="password"
          {...register("password")}
          placeholder="비밀번호를 입력하세요."
          name="password"
        />
        <button type="submit">로그인</button>
        <br></br>
        <Link to="/signUp">회원이 아니신가요?</Link>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </form>
    </div>
  );
};

export default Login;
