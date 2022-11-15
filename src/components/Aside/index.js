import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  fontWeight: 800,
  borderRight: "5px solid #798dc1",
  display: "block",
};
const CreateUserMissionList = ({
  currentUser,
  isMyNavVisible,
  onClickMyMissionList,
}) => {
  return (
    <ul className={`my-nav${isMyNavVisible ? "" : "--hidden"}`}>
      {currentUser.missions.map((mission) => {
        if (mission.banned === false) {
          return (
            <Link to={`/my/${mission.id}`} exact>
              <li
                className="my-nav__list"
                onClick={() => onClickMyMissionList(mission.id)}
              >
                {mission.title}
              </li>
            </Link>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

const CreateLoginAlert = ({ isMyNavVisible }) => {
  return (
    <ul className={`my-nav${isMyNavVisible ? "" : "--hidden"}`}>
      <li className="my-nav__login">
        <Link to={"/login"}>
          <span className="my-nav__login-text">로그인</span>
        </Link>{" "}
        해 주세요!
      </li>
    </ul>
  );
};
const Aside = ({ isLogin }) => {
  return (
    <aside className="App-aside">
      <ul className="nav">
        <NavLink to="/" exact style={{ textDecoration: "none" }}>
          <li className="nav__list">
            <span role="img" aria-label="house">
              🏠
            </span>{" "}
            홈
          </li>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <li className="nav__list">
            <span role="img" aria-label="rocket">
              🐰
            </span>{" "}
            전체 미션
          </li>
        </NavLink>
        <NavLink to="/Posting" style={{ textDecoration: "none" }}>
          <li className="nav__list">
            <span role="img" aria-label="docs">
              📃
            </span>{" "}
            포스팅
          </li>
        </NavLink>
        <NavLink to="/TodoList" style={{ textDecoration: "none" }}>
          <li className="nav__list">
            <span role="img" aria-label="man">
              👻 투두리스트
            </span>{" "}
          </li>
        </NavLink>
        <NavLink
          to={isLogin ? "/my" : "/login"}
          style={{ textDecoration: "none" }}
        >
          <li className="nav__list">
            <span role="img" aria-label="man">
              {isLogin ? "🌱 MY" : "🧑‍💻 Login"}
            </span>
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Aside;
