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
          <br />이 색깔을 선택한 당신은 많은 돈 또는 비싼 상품이 꼭 필요한
          상황에 놓였어요.
        </div>
      </div>
    </div>
  );
}
export default ResultPage;
