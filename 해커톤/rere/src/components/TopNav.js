import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../icons";

const TopNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: 20px;
  background-color: rgb(252, 244, 236);
`;

const MainLogoImg = styled.img`
  width: 100%;
  max-width: 120px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 150px;
`;
const Heart = styled.div`
  color: brown;
  font-size: 30px;
  margin-left: 120px;
  cursor: pointer;
`;
const TopNav = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <TopNavContainer>
      <MainLogoImg onClick={() => handleNavigation("/main")} src="/logo.png" />
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
