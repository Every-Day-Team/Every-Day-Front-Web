import React from "react";
import "./index.scss";
import logo from "../../static/img/logo.png";

const Login = () => {
  // const handleInput = (e) => {
  //   const { value, name } = e.target;
  //   this.setState({ [name]: value });
  // };
  return (
    <div className="login">
      <img
        className="login-modal__logo"
        src={logo}
        alt="daily-mission-logo"
      ></img>
      <form class="login_box">
        <input
          type="text"
          className="id loginInput"
          placeholder="이메일을 입력하세요."
          name="email"
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
          로그인
        </button>
        <br></br>
        <a href="#">회원이 아니신가요?</a>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </form>
    </div>
  );
};

export default Login;
