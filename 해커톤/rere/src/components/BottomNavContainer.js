import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function TestBottomNav({ nextPath, onNext, isNextEnabled, buttonText }) {
  const BottomNavContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #c6b597;
    padding: 10px 0;
    border-top: 1px solid #ccc;
    max-height: 40px;
    height: 100px; /* Adjusted to fit content */
  `;

  const PrevButton = styled.button`
    flex: 1;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    font-size: 0.8rem;
    max-width: 65px;
    margin-left: 3%;
    border: none;
    font-family: "SUITE", sans-serif;
    border-radius: 30rem;
    font-weight: bold;
    background-color: #fcf4ec;
    color: #806e56;
    &:hover {
      color: #29351a;
      transition: color 0.3s;
    }
  `;

  const NextButton = styled.button`
    flex: 1;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    font-size: 0.8rem;
    max-width: 65px;
    margin-left: auto;
    margin-right: 3%;
    border: none;
    font-family: "SUITE", sans-serif;
    border-radius: 30rem;
    font-weight: bold;
    background-color: ${isNextEnabled ? "#fcf4ec" : "#e0e0e0"};
    color: ${isNextEnabled ? "#806e56" : "#999999"};
    pointer-events: ${isNextEnabled ? "auto" : "none"};
    &:hover {
      color: ${isNextEnabled ? "#29351a" : "#999999"};
      transition: color 0.3s;
    }
  `;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <BottomNavContainer>
      <PrevButton className="PrevButton" onClick={goBack}>
        이전
      </PrevButton>
      <NextButton
        className="NextButton"
        onClick={onNext}
        disabled={!isNextEnabled}
      >
        {buttonText || "다음"}
      </NextButton>
    </BottomNavContainer>
  );
}

export default TestBottomNav;
