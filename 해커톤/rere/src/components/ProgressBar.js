// ProgressBar.js
import React from "react";
import "./ProgressBar.css"; // CSS 파일 임포트

const ProgressBar = ({ completed }) => {
  return (
    <div className="real-PB-container">
      <p className="level-text">관리 레벨</p>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${completed}%` }}>
          {/* 진행률 바 내부에 추가적인 내용이 필요하면 여기에 추가 */}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
