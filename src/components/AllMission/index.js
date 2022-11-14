import { useState } from "react";
import "./index.scss";
import Header from "../../components/Header";
import Aside from "../../components/Aside";



const URL_API = "http://100.25.224.191:8080/mission"

const URL_Title = "http://100.25.224.191:8080/mission/Title"

const URL_Content = "http://100.25.224.191:8080/mission/Content"

function title(){
  return fetch(URL_Title)
  .then(response => {
      return response.json();
  })
  .then(title => {
      return title;
  })
  .catch(error => console.log(error));
}

function content(){
  return fetch(URL_Content)
  .then(response => {
      return response.json();
  })
  .then(content => {
      return content;
  })
  .catch(error => console.log(error));
}


export {
  title,
  content
}


const CreateMissionBox = ({ mission }) => {
    return (

        <article className="all-mission-box">
          <div className="all-mission-box__body">
            <h2 className="all-mission-box__title">{title}</h2>
            <p className="all-mission-box__content">{content}</p>
            <div className="all-mission-box__people">
              <p>2022-12-02</p>
            </div>
          </div>
        </article>

    );
  };

function AllMission() {
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
      <CreateMissionBox/>
      </div>
      <div className="scroll-detector"></div>
    </section>
      </div>
    </div>
  );
}

export default AllMission;
