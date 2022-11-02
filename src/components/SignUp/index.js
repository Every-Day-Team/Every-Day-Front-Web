import { useState } from "react";
import "./index.scss";
import axios from "axios";
import logo from "../../static/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
function SignUp() {
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
  } = useForm();
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const onSubmit = ({ username, password, name, email }) => {
    console.log(username, password, name, email);
    console.log("서버로 회원가입하기");
    setSignUpError("");
    setSignUpSuccess(false);
    // 요청 보내기 직전 값 초기화 ( 요청 연달아 날릴때 첫번째 요청 때 남아있던 결과가 두 번째에 또 표시될 수 있음)
    getSignUp(username, password, name, email);
  };
  const getSignUp = (username, password, name, email) => {
    axios
      .post(
        "/signUp",
        JSON.stringify({
          username: username,
          password: password,
          name: name,
          email: email,
        }),
        config
      )
      .then((response) => {
        // 성공시
        console.log(response);
        setSignUpSuccess(true);
        alert("회원가입 성공!");
      })
      .catch((error) => {
        // 실패시
        console.log(error.response);
        alert("회원가입 실패!");
        console.log("회원가입 api 테스트 오류");
        console.log(username, password, name, email);
        setSignUpError(error.response.data);
      });
  };
  return (
    <div className="login">
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
          placeholder="아이디를 입력하세요."
          name="username"
          // onChange={this.handleInput}
        />
        <input
          type="password"
          {...register("password")}
          placeholder="비밀번호를 입력하세요."
          name="password"
          // onChange={this.handleInput}
        />
        <input
          type="text"
          {...register("name")}
          placeholder="이름을 입력하세요."
          name="name"
          // onChange={this.handleInput}
        />
        <input
          type="text"
          {...register("email")}
          placeholder="이메일을 입력하세요."
          name="email"
          // onChange={this.handleInput}
        />
        <button type="submit">회원가입</button>
        <br></br>
        <a>회원이신가요? 아니신가요?</a>
        <Link to="/login">로그인 하러가기</Link>
      </form>
    </div>
  );
}

export default SignUp;
