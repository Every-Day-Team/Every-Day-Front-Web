import React from "react";
import './index.scss';


class My extends React.Component {
  render() {
    return (
        <><div className="my">
            <div className="my__title">
                <h1 className="my__title-who">
                    정환님의 미션
                    <span role="img" aria-label="sunglassman">
                        😎
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    '미션이 없네요😢'
                </h1>
            </div>
        </div>
        <div className="my__my-post">
        <div className="my-post">
          <div className="my-post__title">내가 쓴 글</div>
          <div className="my-post__post-box">
              <div className="my-post__post-label">
                포스팅 된 미션 글이 없습니다{' '}
                <span role="img" aria-label="sad">
                  😐
                </span>
              </div>
          </div>
        </div>
        </div></>
      
    );
  }
}

export default My;
