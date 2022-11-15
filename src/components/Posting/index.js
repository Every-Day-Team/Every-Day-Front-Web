// @ts-nocheck
import React from "react";
import "./index.scss";
import Header from "../Header";
import Aside from "../Aside";
import Popup from "reactjs-popup";
import moment from "moment";
import axios from "axios";
import { useForm } from "react-hook-form";

const Posting = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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

  const onSubmit = ({ title, content, endDate }) => {
    setGamer(title, content,endDate);
  };
  const setGamer = (title, content, endDate) => {
    console.log(title, content, endDate);
    axios
      .post(
        `/mission`,
        JSON.stringify({
          title: title,
          content: content,
          endDate : endDate
        }),
        config
      )
      .then((response) => {
        console.log("미션 등록 성공");
        alert("미션 등록에 성공!");
        console.log(response);
      })
      .catch((error) => {
        alert("미션 등록에 성공!");
        console.log(error);
      });
  };
  return (
    <div className="App">
      <Header />
      <Aside />
      <div className="container">
        <Popup
          modal
          closeOnDocumentClick
          trigger={<button className="create-mission-btn">미션 만들기</button>}
        >
          {(close) => (
            <div className="new-mission">
              <span
                className="submit-board__cancel-button"
                onClick={() => {
                  close();
                }}
              >
                ×
              </span>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="new-mission__title">
                  <label>미션 이름</label>
                  <input className="new-mission__input new-mission__input"
                    name="title"
                    type="text"
                    {...register("title")}
                    placeholder="제목을 작성하세요."
                  />
                  </div>
                  <div className="new-mission__contents">
                  <label>미션 내용</label>
                  <input className="new-mission__input"
                    name="content"
                    type="text"
                    {...register("content")}
                    placeholder="내용를 작성하세요."
                    name="content"
                  />
                </div>
                <div className="new-mission__end-date">
                  <label>종료 날짜</label>
                  <input
                    className="new-mission__input"
                    type="text"
                    name="endDate"
                    {...register("endDate")}
                    placeholder="종료 날짜를 작성하세요."
                  />
                </div>
                <div>
                  <button size="large" type="submit" onClick="alert('미션 등록 성공!')" >
                    
                    생성하기
                  </button>
                </div>
              </form>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default Posting;
