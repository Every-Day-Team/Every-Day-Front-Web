import React from "react";
import "./index.scss";
import logo from "../../static/img/logo.png";
import { Link, NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-modal__logo"
          src={logo}
          alt="daily-mission-logo"
        ></img>
      </Link>
      <form class="login_box">
        <input
          type="text"
          className="id loginInput"
          placeholder="이메일을 입력하세요."
          name="email"
          // onChange={this.handleInput}
        />
        <input
          type="text"
          className="id loginInput"
          placeholder="이름을 입력하세요."
          name="name"
          // onChange={this.handleInput}
        />
        <input
          type="text"
          className="id loginInput"
          placeholder="닉네임을 입력하세요."
          name="nickname"
          // onChange={this.handleInput}
        />
        <input
          type="password"
          className="password loginInput"
          placeholder="비밀번호를 입력하세요."
          name="password"
          // onChange={this.handleInput}
        />
        <button
          type="button"
          // onClick={this.handleJoin}
          // className={
          //   this.state.email.includes("@") && this.state.password.length > 5
          //     ? "activeBtn"
          //     : "inactiveBtn"
          // }
        >
          회원가입
        </button>
        <br></br>
        <a>회원이신가요? 아니신가요?</a>
        <Link to="/login">로그인 하러가기</Link>
      </form>
    </div>
  );
};

export default SignUp;
