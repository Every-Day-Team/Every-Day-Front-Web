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
              {name}λμ λ―Έμ
              <span role="img" aria-label="sunglassman">
                π
              </span>
              {/* <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              'λ―Έμμ΄ μλ€μπ’' */}
            </h1>

            <Mission
              // onName={"μ€λμ λ―Έμ"}
              missionName={"μ§μ§μ κ°μΈλ―Έμ"}
              date={"2022-12-12 κΉμ§"}
              tag={"μ€ν°λ"}
              subTitle={"5λͺ μ°Έμ¬ μ€"}
              subDetail={"κ°μΈλ―Έμ νμ€νΈ"}
              userName={"μ§μ§"}
            />
          </div>
        </div>
        <div className="my__my-post">
          <div className="my-post">
            <div className="my-post__title">λ΄κ° μ΄ κΈ</div>
            <div className="my-post__post-box">
              <div className="my-post__post-label">
                ν¬μ€ν λ λ―Έμ κΈμ λΆλ¬μ€λ μ€..{" "}
                <span role="img" aria-label="sad">
                  π
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
