import React, { useState } from "react";
import styled from "styled-components";
import "./index.scss";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from "../../components/Header";
import Aside from "../../components/Aside";



const Wrap = styled.div`
  height: 180px;
  width: 400px;
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


function AllMission(props) {
  const content =posts && posts.map((post) =>
  <Wrap>
  <Contents>
  <Content key={post.id}>
  <ContentHeader>
    <MissionTitle>{post.title}</MissionTitle>
    <ContentData>
    {post.content} <br></br>
    </ContentData>
  </ContentHeader>
  <ContentDetail>
  <Link to="/MissionDetail"> 
  <UserJoin>
  <div>참여하기</div>
    </UserJoin>
    </Link>
  </ContentDetail>
  </Content>
  </Contents>
  </Wrap>
  );
  return (
    <div className="App">
    <Header />
    <Aside />
    <div className="container">

        <h1 className="mission__upper-text">
        <span role="img" aria-label="rocket">
        🐰
        </span>{' '}
        전체 미션
        </h1>
    <div className="mission__list-box">
      {content}
    </div>
  </div>
  </div>
  );
}

const posts = [
  {id: 1, title: '1일 1커밋', content: '잔디 채우기'},
  {id: 2, title: '1일 1알고리즘', content: '매일 알고리즘하고 인증하기'},
  {id: 3, title: '매일 약먹기', content: '약 맨날 거르는 사람들 컴온'},
  {id: 4, title: '매일 헬스하기', content: '운동 매일매일하자'},
  {id: 5, title: '매일 알고리즘', content: '1일 1알고리즘'},
  {id: 6, title: '다이어트 식단 참여', content: '스위스다이어트식단 ㄱ'},
  {id: 7, title: '토익영단어 1000개 돌파', content: '하루에 50개씩 해요'},
  {id: 8, title: '토익 스터디', content: '스터디하실분 참여 ㄱㄱ'},
  {id: 9, title: '메모 습관 기르기', content: '매일매일 메모장으로 매모습관 길러요'},
  {id: 10, title: '기부모임 가입하기', content: '기부멤버 찾아요'},
  {id: 10, title: '다이어트 식단 참여', content: '스위스다이어트식단 ㄱ'},
  {id: 11, title: '매일 약먹기', content: '약 맨날 거르는 사람들 컴온'},
  {id: 12, title: '매일 헬스하기', content: '운동 매일매일하자'},
  {id: 13, title: '매일 알고리즘', content: '1일 1알고리즘'},
  {id: 14, title: '다이어트 식단 참여', content: '스위스다이어트식단 ㄱ'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AllMission posts={posts} />);


export default AllMission;

