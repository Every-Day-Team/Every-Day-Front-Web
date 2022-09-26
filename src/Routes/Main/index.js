import { useState } from "react";
import "./index.css";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Status from "../../components/Status";
import Mission from "../../components/Mission";
function Main() {
  const [dumyTag, setDumyTag] = useState({
    tag: ["스터디", "컴공"],
  });
  return (
    <div className="App">
      <Header />
      <Aside />
      <div className="container">
        {/* <Status /> */}
        {/* <MissionSlider /> */}
        <Mission
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
        />
      </div>
    </div>
  );
}

export default Main;
