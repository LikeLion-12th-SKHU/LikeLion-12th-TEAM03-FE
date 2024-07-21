// Main.js
import React from "react";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import "./main.css";

const Main = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 각 버튼 클릭 시 경로 이동 처리
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="real-main-container">
      <div className="top-half">
        <TopNav />
        <div>
          <img src="/img/main.png" alt="advertisement" className="ad" />
        </div>
        <div className="main-text">
          <p>
            <span>다양한 상품</span>을 만나보세요!
          </p>
        </div>
        <div className="category">
          <button onClick={() => handleNavigation("/recommended/wallpaper")}>
            벽지/바닥재
          </button>
          <button onClick={() => handleNavigation("/recommended/furniture")}>
            가구/수납
          </button>
          <button onClick={() => handleNavigation("/recommended/candle")}>
            캔들/디퓨저
          </button>
          <button onClick={() => handleNavigation("/recommended/interior")}>
            인테리어 소품
          </button>
          <button onClick={() => handleNavigation("/recommended/fabric")}>
            패브릭
          </button>
          <button
            onClick={() => handleNavigation("/recommended/houseHoldGoods")}
          >
            생활용품
          </button>
          <button onClick={() => handleNavigation("/recommended/light")}>
            조명
          </button>
          <button onClick={() => handleNavigation("/recommended/plant")}>
            식물/꽃
          </button>
          <button onClick={() => handleNavigation("/recommended/pet")}>
            반려동물용품
          </button>
          <div className="content"></div>
        </div>
      </div>
      <div className="bottom-half">
        <div className="bottom-img"></div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Main;
