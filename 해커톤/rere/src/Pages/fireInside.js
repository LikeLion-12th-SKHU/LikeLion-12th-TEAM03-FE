import React, { useState } from "react";
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

  const emotions = [
    { id: 1, name: "꽉 차 있다" },
    { id: 2, name: "적당하다" },
    { id: 3, name: "부족한 것 같다" },
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

    // 감정 데이터 전송
    const emotionData = emotions[index];
    sendEmotionData(emotionData.id);
  };

  const sendEmotionData = async (emotionId) => {
    try {
      const formData = new FormData();
      formData.append("emotionId", emotionId);

      const response = await fetch("YOUR_SERVER_ENDPOINT", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send emotion data");
      }

      console.log("Emotion data sent successfully");
    } catch (error) {
      console.error("Error sending emotion data:", error);
    }
  };

  const handleNextClick = () => {
    if (isNextEnabled) {
      navigate("/psytest/stress"); // 페이지 이동 처리
    } else {
      alert("1개의 항목을 선택해 주세요.");
    }
  };

  return (
    <div className="main-container">
      <TestTopNav text="불안 체크" />
      <div>
        <p className="guide">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;물잔의{" "}
          <br />
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
        nextPath="/psytest/stress"
        onNext={handleNextClick}
        isNextEnabled={isNextEnabled}
      />
    </div>
  );
}

export default FireInside;
