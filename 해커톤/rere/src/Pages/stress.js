import React, { useState } from "react";
import "./stress.css"; // CSS 파일
import TestBottomNav from "../components/BottomNavContainer";
import TestTopNav from "../components/TopNavContainer";
import { useNavigate } from "react-router-dom";

function Stress() {
  const numRows = 4; // 4행으로 감정 버튼 배치
  const numCols = 4; // 4열로 감정 버튼 배치
  const maxSelections = 1; // 최대 선택 가능 개수
  const navigate = useNavigate();
  const [selectedButtons, setSelectedButtons] = useState(
    Array(numRows * numCols).fill(false)
  );
  const [isNextEnabled, setIsNextEnabled] = useState(false); // '다음' 버튼 활성화 여부 상태

  const emotions = [
    { emotionId: 1, name: "행복한", score: 10 },
    { emotionId: 2, name: "괴로운", score: -10 },
    { emotionId: 3, name: "암울한", score: -10 },
    { emotionId: 4, name: "감동적인", score: 10 },
    { emotionId: 5, name: "신나는", score: 10 },
    { emotionId: 6, name: "편안한", score: 10 },
    { emotionId: 7, name: "두려운", score: -10 },
    { emotionId: 8, name: "흥미로운", score: 10 },
    { emotionId: 9, name: "긴장되는", score: -10 },
    { emotionId: 10, name: "불안한", score: -10 },
    { emotionId: 11, name: "기쁜", score: 10 },
    { emotionId: 12, name: "걱정되는", score: -10 },
    { emotionId: 13, name: "설레는", score: 10 },
    { emotionId: 14, name: "무기력한", score: -10 },
    { emotionId: 15, name: "답답한", score: -10 },
    { emotionId: 16, name: "상쾌한", score: 10 },
  ];

  const handleButtonClick = (index) => {
    const newSelectedButtons = [...selectedButtons];
    const currentSelectionCount = selectedButtons.filter(Boolean).length;

    if (newSelectedButtons[index]) {
      // 이미 선택된 버튼을 클릭한 경우 선택 해제
      newSelectedButtons[index] = false;
    } else if (currentSelectionCount < maxSelections) {
      // 선택되지 않은 버튼을 클릭한 경우 최대 선택 수량 내에서 선택
      newSelectedButtons[index] = true;
    } else {
      // 최대 선택 수량 초과 시 추가 선택 불가
      alert(`최대 ${maxSelections}개만 선택할 수 있습니다.`);
      return;
    }

    setSelectedButtons(newSelectedButtons);

    // Check if exactly 1 button is selected
    setIsNextEnabled(
      newSelectedButtons.filter(Boolean).length === maxSelections
    );
  };

  const handleNextClick = () => {
    if (isNextEnabled) {
      // 선택된 감정의 ID를 찾아서 로컬 스토리지에 저장
      const selectedIndex = selectedButtons.findIndex(Boolean);
      if (selectedIndex !== -1) {
        const emotionData = emotions[selectedIndex];
        const { emotionId, score } = emotionData;

        // 로컬 스토리지에 emotionId와 score 저장
        const savedData = JSON.parse(localStorage.getItem("testResults")) || {};
        savedData.emotionId = emotionId;
        savedData.score = (savedData.score || 50) + score;
        localStorage.setItem("testResults", JSON.stringify(savedData));

        console.log("Emotion and score saved to localStorage:", savedData);

        navigate("/psytest/depressive"); // 페이지 이동 처리
      }
    } else {
      alert("1개의 항목을 선택해 주세요.");
    }
  };

  return (
    <div className="main-container">
      <TestTopNav text="감정 체크" />
      <div className="guide-container">
        <p className="guide">
          최근 일주일,
          <br />
          가장 크게 느끼고 있는 <br />
          <span>감정을 알려주세요.</span>
        </p>
      </div>
      <div className="grid-container">
        {emotions.map((emotion, index) => (
          <button
            key={emotion.emotionId} // emotionId로 변경
            className={`grid-button ${
              selectedButtons[index] ? "selected" : ""
            }`}
            onClick={() => handleButtonClick(index)}
          >
            {emotion.name}
          </button>
        ))}
      </div>
      <TestBottomNav
        nextPath="/psytest/depressive"
        onNext={handleNextClick}
        isNextEnabled={isNextEnabled}
      />
    </div>
  );
}

export default Stress;
