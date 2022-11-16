import React from "react";
import "./index.scss";
import Mission from "../Mission";

class My extends React.Component {
  render() {
    const name = localStorage.getItem("username");
    return (
      <>
        <div className="my">
          <div className="my__title">
            <h1 className="my__title-who">
              {name}님의 미션
              <span role="img" aria-label="sunglassman">
                😎
              </span>
              {/* <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              '미션이 없네요😢' */}
            </h1>

            <Mission
              // onName={"오늘의 미션"}
              missionName={"지지의 개인미션"}
              date={"2022-12-12 까지"}
              tag={"스터디"}
              subTitle={"5명 참여 중"}
              subDetail={"개인미션 테스트"}
              userName={"지지"}
            />
          </div>
        </div>
        <div className="my__my-post">
          <div className="my-post">
            <div className="my-post__title">내가 쓴 글</div>
            <div className="my-post__post-box">
              <div className="my-post__post-label">
                포스팅 된 미션 글을 불러오는 중..{" "}
                <span role="img" aria-label="sad">
                  😐
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default My;
