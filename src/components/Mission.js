import React, { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 300px;
  height: fit-content;
  margin: 0px 10px 20px;
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
function Mission({
  onName,
  date,
  subTitle,
  subDetail,
  userName,
  tag,
  missionName,
}) {
  return (
    <Content>
      <ContentHeader>
        <MissionTitle>{missionName}</MissionTitle>
        <ContentData>
          {date} 까지 <br></br>
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
          <div onClick={() => alert("미션 참여 신청 완료!")}>참여하기</div>
        </UserJoin>
      </ContentDetail>
    </Content>
  );
}

export default Mission;
