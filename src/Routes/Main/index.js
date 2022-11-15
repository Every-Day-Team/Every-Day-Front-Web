import { useState, useEffect } from "react";
import "./index.css";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import axios from "axios";
import Mission from "../../components/Mission";
function Main() {
  const [dumyTag, setDumyTag] = useState({
    tag: ["스터디", "컴공"],
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    withCredentials: true,
  };
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getMissionList();
    isLogin();
    console.log("미션리스트");
    async function getMissionList() {
      axios
        .get("/mission")
        .then((response) => {
          console.log(response);
          setDatas(response.data.simpleLectureDtoList);
          console.log("데이터", datas);
        })
        .catch((error) => {});
    }
  }, []);
  console.log("데이터밖", datas);
  const isLogin = () => {
    const token = localStorage.getItem("accessToken");
    console.log("실행");
    if (!token) {
      console.log("비로그인");
      return false;
    } else {
      console.log("마이페이지로 이동");
      return true;
    }
  };
  return (
    <div className="App">
      <Header />
      <Aside isLogin={isLogin()} />
      <div className="wrap">
        <h1>전체 미션</h1>
        <div className="container">
          {datas &&
            datas?.map((item) => (
              <Mission
                missionName={item.title}
                date={item.createdDate}
                tag={dumyTag}
                subTitle={"5명 참여 중"}
                subDetail={item.content}
                userName={item.writerName}
              />
            ))}
          {/* <Mission
          onName={"오늘의 미션"}
          missionName={"1일1알고리즘"}
          date={"10일 전 시작"}
          tag={dumyTag}
          subTitle={"5명 참여 중"}
          subDetail={"1일1알고리즘을 실천하고 인증하며 스터디해요."}
          userName={"김컴공"}
        />
        <Mission
          onName={"이런 미션 어때요?"}
          missionName={"매일매일 블로그 챌린지"}
          date={"10일 전 시작"}
          tag={dumyTag}
          subTitle={"5명 참여 중"}
          subDetail={"매일"}
          userName={"김컴공"}
        />
        <Mission
          onName={"새로운 미션"}
          missionName={"오운완!"}
          date={"1일 전 시작"}
          tag={dumyTag}
          subTitle={"5명 참여 중"}
          subDetail={"오늘 운동 완료! 운동 인증 같이해요!"}
          userName={"김헬스"}
        /> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
