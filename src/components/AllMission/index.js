import { useState } from "react";
import "./index.scss";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Mission from "../../components/Mission";


const CreateMissionBox = ({ mission }) => {
    return (

        <article className="all-mission-box">
          <div className="all-mission-box__body">
            <h2 className="all-mission-box__title"><p>title</p></h2>
            <p className="all-mission-box__content"><p>body</p></p>
            <div className="all-mission-box__people">
              
            </div>
          </div>
        </article>

    );
  };

function AllMission() {
  const [dumyTag, setDumyTag] = useState({
    tag: ["스터디", "컴공"],
  });
  return (
    <div className="App">
      <Header />
      <Aside />
      <div className="container">
      <section className="mission">
      <h1 className="mission__upper-text">
        <span role="img" aria-label="rocket">
        🐰
        </span>{" "}
        전체 미션
      </h1>
      <div className="mission__list-box">
      <Mission/>
      </div>
      <div className="scroll-detector"></div>
    </section>
      </div>
    </div>
  );
}

export default AllMission;
