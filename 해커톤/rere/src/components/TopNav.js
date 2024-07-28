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
  margin-top: 20px;
  background-color: #dfd3c2;
`;

const MainLogoImg = styled.img`
  width: 100%;
  max-width: 100px;
  cursor: pointer;
  margin-top: 0;
  margin-left: 40%;
`;
const Heart = styled.div`
  color: #806e56;
  font-size: 25px;
  margin-left: 27%;
  cursor: pointer;
  margin-right: 6%;
`;
const TopNav = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <TopNavContainer>
      <MainLogoImg
        onClick={() => handleNavigation("/main")}
        src="/img/image.png"
      />
      <Heart>
        <FontAwesomeIcon
          onClick={() => handleNavigation("/like")}
          icon="fa-solid fa-heart"
        />
      </Heart>
    </TopNavContainer>
  );
};

export default TopNav;
