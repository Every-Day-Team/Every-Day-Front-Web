import React from "react";
import "./index.scss";
import { Link } from 'react-router-dom';



class Aside extends React.Component {
  render() {
    return (
      <aside className="App-aside">
      <ul className="nav">
          <li className="nav__list nav__list--home">
            <span role="img" aria-label="house">
              🏠
            </span>{' '}
            홈
          </li>
          <li className="nav__list nav__list--all-mission">
            <span role="img" aria-label="rocket">
              🚀
            </span>{' '}
            전체 미션
          </li>
          <li className="nav__list nav__list--recent-posting">
            <span role="img" aria-label="docs">
              📃
            </span>{' '}
            포스팅
          </li>
          <Link to="./My">
          <li className="nav__list nav__list--my">
            <span role="img" aria-label="man">
              👤 MY
            </span>{' '}
            
          </li>
          </Link>
      </ul>
    </aside>
    );
  }
}
export default Aside;



