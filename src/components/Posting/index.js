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

  const onSubmit = ({ title, content }) => {
    setGamer(title, content);
  };
  const setGamer = (title, content) => {
    console.log(title, content);
    axios
      .post(
        `/mission`,
        JSON.stringify({
          title: title,
          content: content,
        }),
        config
      )
      .then((response) => {
        console.log("미션 등록 성공");
        alert("미션 등록에 성공!");

        console.log(response);
      })
      .catch((error) => {
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
                  {/* <input
                    type="img"
                    {...register("uploadFile")}
                    placeholder="사진 넣기."
                    name="uploadFile"
                  /> */}
                  <input
                    type="text"
                    {...register("title")}
                    placeholder="제목을 작성하세요."
                    name="title"
                  />
                  <input
                    type="text"
                    {...register("content")}
                    placeholder="내용를 작성하세요."
                    name="content"
                  />
                </div>
                <div>
                  <button size="large" type="submit">
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
