import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import "./BottomNav.css";

// 스타일 컴포넌트 정의
const BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #dfd3c2;
  padding: 10px 0;
  border-top: 1px solid #ccc;
`;

const NavIcon = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

const BottomNav = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const location = useLocation(); // useLocation 훅 사용
  const [activeNav, setActiveNav] = useState(1);

  // 경로에 따른 활성 네비게이션 아이템 설정
  useEffect(() => {
    if (location.pathname === "/main") {
      setActiveNav(1);
    } else if (location.pathname.startsWith("/recommended")) {
      // '/recommended'로 시작하는 모든 경로를 포함
      setActiveNav(2);
    } else if (location.pathname === "/community") {
      setActiveNav(3);
    } else if (location.pathname === "/chat") {
      setActiveNav(4);
    } else if (location.pathname === "/mypage") {
      setActiveNav(5);
    }
  }, [location.pathname]);

  // 각 버튼 클릭 시 경로 이동 처리
  const handleButtonClick = (navIndex, path) => {
    setActiveNav(navIndex);
    navigate(path);
  };

  return (
    <BottomNavContainer>
      <NavIcon>
        <FontAwesomeIcon
          onClick={() => handleButtonClick(1, "/main")}
          icon="fa-solid fa-house"
          className={activeNav === 1 ? "nav-item active" : "nav-item"}
        />
      </NavIcon>
      <NavIcon>
        <FontAwesomeIcon
          icon="fa-solid fa-compass"
          onClick={() => handleButtonClick(2, "/recommended")}
          className={activeNav === 2 ? "nav-item active" : "nav-item"}
        />
      </NavIcon>
      <NavIcon>
        <FontAwesomeIcon
          icon="fa-solid fa-user-group"
          onClick={() => handleButtonClick(3, "/community")}
          className={activeNav === 3 ? "nav-item active" : "nav-item"}
        />
      </NavIcon>
      <NavIcon>
        <FontAwesomeIcon
          icon="fa-solid fa-comment"
          onClick={() => handleButtonClick(4, "/chat")}
          className={activeNav === 4 ? "nav-item active" : "nav-item"}
        />
      </NavIcon>
      <NavIcon>
        <FontAwesomeIcon
          icon="fa-solid fa-user"
          onClick={() => handleButtonClick(5, "/mypage")}
          className={activeNav === 5 ? "nav-item active" : "nav-item"}
        />
      </NavIcon>
    </BottomNavContainer>
  );
};

export default BottomNav;
