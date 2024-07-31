// Example.js
import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import "./ProgressBar.css";

const Example = () => {
  const [score, setScore] = useState(0); // score를 상태로 관리

  useEffect(() => {
    // 로컬 스토리지에서 score 값을 읽어옴
    const savedData = JSON.parse(localStorage.getItem("testResults")) || {};
    const savedScore = savedData.score || 0; // score가 없으면 기본값 0
    setScore(savedScore); // 상태 업데이트
  }, []); // 컴포넌트 마운트 시 한 번 실행

  const getLevelMessage = () => {
    if (score >= 60) {
      return "높은 레벨이군요!";
    } else if (score >= 40) {
      return "보통 레벨이군요!";
    } else {
      return (
        <>
          관리 레벨이 낮군요 <br /> 원하는 가구를 통해 삶의 질을 높여보세요!
        </>
      );
    }
  };

  return (
    <div>
      <ProgressBar completed={score} /> {/* score 값을 completed로 전달 */}
      <p className="level-comment">{getLevelMessage()}</p>
    </div>
  );
};

export default Example;
