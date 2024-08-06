import React, { useState, useEffect } from "react";
import "./psyTest.css";
import TestBottomNav from "../components/BottomNavContainer";
import TestTopNav from "../components/TopNavContainer";
import { useNavigate } from "react-router-dom";

function Depressive() {
  const numRows = 5;
  const numCols = 4;
  const maxSelections = 2; // 최대 선택 가능 개수
  const navigate = useNavigate();
  const [selectedButtons, setSelectedButtons] = useState(
    Array(numRows * numCols).fill(false)
  );
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const [score, setScore] = useState(0); // State to hold the current score

  // colors 데이터
  const colors = [
    { colorId: 1, left: "yellow", right: "yellow", score: -1, mood: "밝은" },
    { colorId: 2, left: "red", right: "white", score: +1, mood: "상큼한" },
    { colorId: 3, left: "purple", right: "purple", score: -1, mood: "코스탈" },
    { colorId: 4, left: "black", right: "black", score: -1, mood: "차가운" },
    { colorId: 5, left: "black", right: "blue", score: -1, mood: "차분한" },
    {
      colorId: 6,
      left: "white",
      right: "green",
      score: -1,
      mood: "자연친화적인",
    },
    { colorId: 7, left: "black", right: "brown", score: -1, mood: "깔끔한" },
    { colorId: 8, left: "blue", right: "yellow", score: -1, mood: "발랄한" },
    { colorId: 9, left: "brown", right: "brown", score: -1, mood: "몽환적인" },
    { colorId: 10, left: "purple", right: "yellow", score: -1, mood: "포근한" },
    { colorId: 11, left: "blue", right: "blue", score: -1, mood: "선명한" },
    { colorId: 12, left: "black", right: "green", score: -1, mood: "차분한" },
    { colorId: 13, left: "brown", right: "white", score: +1, mood: "은은한" },
    { colorId: 14, left: "white", right: "yellow", score: +1, mood: "상쾌한" },
    { colorId: 15, left: "blue", right: "red", score: -1, mood: "따뜻한" },
    { colorId: 16, left: "pink", right: "pink", score: -1, mood: "화사한" },
    { colorId: 17, left: "gray", right: "gray", score: -1, mood: "칙칙한" },
    { colorId: 18, left: "green", right: "green", score: -1, mood: "아늑한" },
    { colorId: 19, left: "black", right: "purple", score: -1, mood: "연한" },
    {
      colorId: 20,
      left: "#A68E31",
      right: "#A68E31",
      score: -1,
      mood: "부드러운",
    },
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

    // Check if exactly maxSelections buttons are selected
    setIsNextEnabled(
      newSelectedButtons.filter(Boolean).length === maxSelections
    );
  };

  const handleNextClick = async () => {
    if (isNextEnabled) {
      // 최종 제출 데이터 준비
      const selectedColorIds = colors
        .filter((_, index) => selectedButtons[index])
        .map((color) => color.colorId);

      const selectedMoods = colors
        .filter((_, index) => selectedButtons[index])
        .map((color) => color.mood);

      const additionalScore = colors
        .filter((_, index) => selectedButtons[index])
        .reduce((acc, color) => acc + color.score, 0);

      const savedData = JSON.parse(localStorage.getItem("testResults")) || {};
      const newScore = (savedData.score || 0) + additionalScore;

      const updatedData = {
        ...savedData,
        colorIds: selectedColorIds,
        moods: selectedMoods,
        score: newScore,
      };

      // Save updated data to local storage
      localStorage.setItem("testResults", JSON.stringify(updatedData));

      // 페이지 이동
      navigate("/psytest/fireinside");
    } else {
      alert("2개의 색상을 선택해 주세요.");
    }
  };

  return (
    <div className="main-container">
      <TestTopNav text="우울 체크" />
      <div className="guide-container">
        <p className="guide">
          가장 눈에 띄는 <br />
          <span>색상을 2개 골라주세요</span>
        </p>
      </div>
      <div className="grid-container">
        {colors.map((color, index) => (
          <button
            key={color.colorId}
            className={`grid-button ${
              selectedButtons[index] ? "selected" : ""
            }`}
            onClick={() => handleButtonClick(index)}
            style={{
              backgroundImage: `linear-gradient(
                to right,
                ${color.left} 50%,
                ${color.right} 50%
              )`,
            }}
          >
            {color.name}
          </button>
        ))}
      </div>
      <TestBottomNav
        nextPath="/psytest/fireinside"
        onNext={handleNextClick}
        isNextEnabled={isNextEnabled}
      />
    </div>
  );
}

export default Depressive;
