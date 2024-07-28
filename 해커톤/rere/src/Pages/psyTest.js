import React, { useState } from "react";
import "./psyTest.css";
import TestBottomNav from "../components/BottomNavContainer";
import TestTopNav from "../components/TopNavContainer";
import { useNavigate } from "react-router-dom";

function PsyTest() {
  const numRows = 5;
  const numCols = 4;
  const maxSelections = 4; // 최대 선택 가능 개수
  const navigate = useNavigate();
  const [selectedButtons, setSelectedButtons] = useState(
    Array(numRows * numCols).fill(false)
  );
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  const colors = [
    { id: 1, left: "yellow", right: "yellow" },
    { id: 2, left: "red", right: "white" },
    { id: 3, left: "purple", right: "purple" },
    { id: 4, left: "black", right: "black" },
    { id: 5, left: "black", right: "blue" },
    { id: 6, left: "white", right: "green" },
    { id: 7, left: "black", right: "brown" },
    { id: 8, left: "blue", right: "yellow" },
    { id: 9, left: "brown", right: "brown" },
    { id: 10, left: "purple", right: "yellow" },
    { id: 11, left: "blue", right: "blue" },
    { id: 12, left: "black", right: "green" },
    { id: 13, left: "brown", right: "white" },
    { id: 14, left: "white", right: "yellow" },
    { id: 15, left: "blue", right: "red" },
    { id: 16, left: "pink", right: "pink" },
    { id: 17, left: "gray", right: "gray" },
    { id: 18, left: "green", right: "green" },
    { id: 19, left: "black", right: "purple" },
    { id: 20, left: "#A68E31", right: "#A68E31" },
  ];

  const handleButtonClick = (index) => {
    const currentSelectionCount = selectedButtons.filter(Boolean).length;
    const newSelectedButtons = [...selectedButtons];

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

    // 색상 데이터 전송
    const colorData = colors[index];
    sendColorData(colorData.id);

    // Check if exactly maxSelections buttons are selected
    setIsNextEnabled(
      newSelectedButtons.filter(Boolean).length === maxSelections
    );
  };

  const sendColorData = async (colorId) => {
    try {
      const formData = new FormData();
      formData.append("colorId", colorId);

      const response = await fetch("서버 엔드포인트!!!", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send color data");
      }

      console.log("Color data sent successfully");
    } catch (error) {
      console.error("Error sending color data:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      // 최종 제출 데이터 준비
      const selectedColorIds = colors
        .filter((_, index) => selectedButtons[index])
        .map((color) => color.id);

      const formData = new FormData();
      formData.append("selectedColorIds", JSON.stringify(selectedColorIds));

      const response = await fetch("YOUR_SERVER_SUBMIT_ENDPOINT", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      console.log("Submission successful");
      // 제출 후 페이지 전환 또는 알림 처리
      // navigate("/some/path"); // 예시로 페이지 이동
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleNextClick = () => {
    // 3개가 선택되었을 때만 데이터를 제출하고 다음 페이지로 이동
    if (isNextEnabled) {
      handleSubmit();
      navigate("/psytest/fireinside"); // 페이지 이동
    }
  };

  return (
    <div className="main-container">
      <TestTopNav text="우울 체크" />
      <div className="guide-container">
        <p className="guide">
          가장 눈에 띄는 <br />
          <span>색상을 4개 골라주세요</span>
        </p>
      </div>
      <div className="grid-container">
        {colors.map((color, index) => (
          <button
            key={color.id}
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

export default PsyTest;
