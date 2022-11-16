import React, { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  height: 320px;
`;

const Contents = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 30vw;
  height: fit-content;
  margin: 0px 5px;
  background-color: whitesmoke;
  padding: 18px;
  border-radius: 20px;
`;

const ContentData = styled.div`
  color: navy;
  margin-left: 12px;
  margin-bottom: 10px;
  span {
    color: darkred;
  }
`;
const ContentHeader = styled.div`
  font-weight: 400;
  margin-bottom: 20px;
`;
const ContentDetail = styled.div``;
const Detail = styled.div`
  height: 80px;
  margin-left: 10px;
`;
const UserJoin = styled.div`
  display: flex;
  justify-content: space-between;
  div:first-child {
    color: #616161;
  }
  div:last-child {
    color: #33624f;
    :hover {
      cursor: pointer;
    }
  }
`;
const Title = styled.div`
  /* display: inline-block; */
  margin-top: 40px;
  font-weight: 600;
  font-size: 26px;
  margin-left: 30px;
`;
const SeeMore = styled.div`
  /* display: inline-block; */
  text-align: right;
  font-size: 14px;
  margin-bottom: 5px;
  margin-left: 30px;
  span {
    padding-right: 20px;
    cursor: pointer;
    :hover {
      color: #282e40;
    }
  }
`;
const MissionTitle = styled.div`
  margin-top: 30px;
  font-weight: 600;
  font-size: 26px;
  margin-left: 10px;
`;
function MissionSlider({
  onName,
  date,
  subTitle,
  subDetail,
  userName,
  tag,
  missionName,
}) {
  const [dumy, setDumy] = useState(["1", "2", "3"]);
  return (
    <Wrap>
      <Title>{onName}</Title>
      <SeeMore>
        <span>더 보기</span>
      </SeeMore>
      <Contents>
        {/* <SlideBtn>
          <Svg
            fill="white"
            viewBox="0 0 256 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
              clipRule="evenodd"
            />
          </Svg>
        </SlideBtn> */}
        {dumy.map((_item, index) => (
          <Content key={index}>
            <ContentHeader>
              <MissionTitle>{missionName}</MissionTitle>
              <ContentData>
                {date} <br></br>
                <span>{subTitle}</span>
              </ContentData>
            </ContentHeader>

            <ContentDetail>
              <Detail>{subDetail}</Detail>
              <UserJoin>
                <div>{userName}</div>
                {/* <TagWrap>
                  <Tag>
                    <TagUl>
                      {tag.tag.map((item, index) => (
                        <TagLi key={index}>{item}</TagLi>
                      ))}
                    </TagUl>
                  </Tag>
                </TagWrap> */}
                <div>참여하기</div>
              </UserJoin>
            </ContentDetail>
          </Content>
        ))}
        {/* <SlideBtn>
          <Svg
            fill="white"
            viewBox="0 0 256 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
            />
          </Svg>
        </SlideBtn> */}
      </Contents>
    </Wrap>
  );
}

export default MissionSlider;
