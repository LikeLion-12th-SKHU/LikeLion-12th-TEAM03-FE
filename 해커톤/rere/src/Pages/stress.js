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
    { id: 1, name: "행복한" },
    { id: 2, name: "괴로운" },
    { id: 3, name: "암울한" },
    { id: 4, name: "감동적인" },
    { id: 5, name: "신나는" },
    { id: 6, name: "편안한" },
    { id: 7, name: "두려운" },
    { id: 8, name: "흥미로운" },
    { id: 9, name: "초조한" },
    { id: 10, name: "불안한" },
    { id: 11, name: "기쁜" },
    { id: 12, name: "걱정되는" },
    { id: 13, name: "설레는" },
    { id: 14, name: "무기력한" },
    { id: 15, name: "답답한" },
    { id: 16, name: "상쾌한" },
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
      navigate("/psytest/resultPage"); // 페이지 이동 처리
    } else {
      alert("1개의 항목을 선택해 주세요.");
    }
  };

  return (
    <div className="main-container">
      <TestTopNav text="감정 체크" />
      <div>
        <p className="guide">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최근 일주일,
          <br />
          가장 크게 느끼고 있는 <br />
          <span>감정을 알려주세요.</span>
        </p>
      </div>
      <div className="grid-container">
        {emotions.map((emotion, index) => (
          <button
            key={emotion.id}
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
        nextPath="/psytest/resultPage"
        onNext={handleNextClick}
        isNextEnabled={isNextEnabled}
      />
    </div>
  );
}

export default Stress;
