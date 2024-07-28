import React from "react";
import ResultTopNav from "../components/ResultTopNav";
import "./resultPage.css";
function ResultPage() {
  return (
    <div className="main-container">
      <ResultTopNav />
      <div className="result-animal-container">
        <div className="animal-circle-div">
          <img src="/img/result-animal.png" className="animal-img"></img>
        </div>
        <div className="result-animal-detail">
          <p className="personal-type">재치형</p>
          <br />
          센스 있는 당신,
          <br />
          그에 걸맞는 가구가
          <br />
          더욱 빛나게 해줄거에요.
        </div>
      </div>
    </div>
  );
}
export default ResultPage;
