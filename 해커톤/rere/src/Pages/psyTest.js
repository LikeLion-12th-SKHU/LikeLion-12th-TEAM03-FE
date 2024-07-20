import React from "react";
import TopNav from "../components/TopNav";
import styled from "styled-components";

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
`;
const PrevButton = styled.button`
  flex: 1;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  font-size: large;
  max-width: 90px;
  margin-left: 3%;
`;
const NextButton = styled.button`
  flex: 1;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  font-size: large;
  max-width: 90px;
  margin-left: auto;
  margin-right: 3%;
`;
function PsyTest() {
  return (
    <div className="main-container">
      <TopNav />
      <div></div>
      <BottomNavContainer>
        <PrevButton>이전</PrevButton>
        <NextButton>다음</NextButton>
      </BottomNavContainer>
    </div>
  );
}
export default PsyTest;
