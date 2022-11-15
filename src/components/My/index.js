import React from "react";
import "./index.scss";
import Mission from "../Mission";

class My extends React.Component {
  render() {
    return (
      <>
        <div className="my">
          <div className="my__title">
            <h1 className="my__title-who">
              에이님의 미션
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
              missionName={"1일1알고리즘"}
              date={"10일 전 시작"}
              tag={"스터디"}
              subTitle={"5명 참여 중"}
              subDetail={"1일1알고리즘을 실천하고 인증하며 스터디해요."}
              userName={"김컴공"}
            />
          </div>
        </div>
        <div className="my__my-post">
          <div className="my-post">
            <div className="my-post__title">내가 쓴 글</div>
            <div className="my-post__post-box">
              <div className="my-post__post-label">
                포스팅 된 미션 글이 없습니다{" "}
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
