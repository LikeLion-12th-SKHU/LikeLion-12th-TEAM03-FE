import React, { useState, useEffect } from "react";
import "./fireInside.css";
import TestBottomNav from "../components/BottomNavContainer";
import TestTopNav from "../components/TopNavContainer";
import { useNavigate } from "react-router-dom";

function FireInside() {
  const numRows = 1; // 1열
  const numCols = 3; // 3열
  const maxSelections = 1; // 최대 선택 가능 개수
  const navigate = useNavigate();
  const [selectedButtons, setSelectedButtons] = useState(
    Array(numRows * numCols).fill(false)
  );
  const [isNextEnabled, setIsNextEnabled] = useState(false); // '다음' 버튼 활성화 여부 상태
  const [score, setScore] = useState(0); // State to hold the current score

  const emotions = [
    { id: 1, name: "꽉 차 있다", score: -5 },
    { id: 2, name: "적당하다", score: +5 },
    { id: 3, name: "부족한 것 같다", score: -5 },
  ];

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("testResults")) || {};
    if (savedData.score) {
      setScore(savedData.score);
    }
  }, []);

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
      // 최종 선택된 버튼의 id를 찾고 데이터 전송
      const selectedIndex = selectedButtons.findIndex(Boolean);
      if (selectedIndex !== -1) {
        const emotionData = emotions[selectedIndex];

        const savedData = JSON.parse(localStorage.getItem("testResults")) || {};
        const newScore = (savedData.score || 0) + emotionData.score;

        const updatedData = {
          ...savedData,
          // emotionId는 유지하고 score만 업데이트
          score: newScore,
        };

        localStorage.setItem("testResults", JSON.stringify(updatedData));

        navigate("/psytest/depressive"); // 페이지 이동 처리
      }
    } else {
      alert("1개의 항목을 선택해 주세요.");
    }
  };

  return (
    <div className="main-container">
      <TestTopNav text="불안 체크" />
      <div className="guide-container">
        <p className="guide">
          물잔의 <br />
          <span>상태는 어떠한가요?</span>
        </p>
      </div>
      <div className="bottle">
        <div className="bottle-half"></div>
      </div>
      <div className="button-container">
        {emotions.slice(0, numCols).map((emotion, index) => (
          <button
            key={emotion.id}
            className={`button-item ${
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
        buttonText="완료"
      />
    </div>
  );
}

export default FireInside;
