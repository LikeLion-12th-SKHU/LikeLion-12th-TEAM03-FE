import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../icons";
import "./TopNav.css";

const TopNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-top: 33px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
`;

const MainLogoImg = styled.img`
  width: 100%;
  max-width: 100px;
  cursor: pointer;
  margin-top: 0;
  margin-left: -1rem;
`;
const Share = styled.div`
  color: #29351a;
  font-size: 1.3rem;
  margin-left: 27%;
  cursor: pointer;
  margin-right: -0.3rem;
`;
const ResultTopNav = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <TopNavContainer>
      <FontAwesomeIcon
        icon="fa-solid fa-chevron-left"
        className="PrevPage"
        onClick={() => {
          handleNavigation("/main");
        }}
      />
      <MainLogoImg
        onClick={() => handleNavigation("/main")}
        src="/img/result-logo.png"
      />
      <Share>
        <FontAwesomeIcon
          onClick={() => handleNavigation("/#")} // 공유 기능 넣기
          icon="fa-solid fa-arrow-up-from-bracket"
        />
      </Share>
    </TopNavContainer>
  );
};

export default ResultTopNav;
