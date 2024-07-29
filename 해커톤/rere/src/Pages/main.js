// Main.js
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import "./main.css";
import React, { useState, useEffect } from "react";

const Main = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 각 버튼 클릭 시 경로 이동 처리
  const handleNavigation = (path) => {
    navigate(path);
  };

  const Today = () => {
    const [date, setData] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setData(new Date());
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    const day = date.toLocaleDateString("ko-KR", { weekday: "long" });
    return <div className="today">{day},</div>;
  };

  return (
    <div className="real-main-container">
      <div className="top-half">
        <TopNav />
        <div className="main-img-container">
          <img
            src="/img/real-main-img.png"
            alt="advertisement"
            className="ad"
          />
        </div>
        <div className="main-text">
          <p>
            <span className="various-product">다양한 상품</span>을 만나보세요!
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
        <div className="circle">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <img src="/img/furniture.jpg" className="circle4"></img>
        </div>
        <div className="description">
          <div className="tired">
            피곤한&nbsp;
            <Today />
          </div>

          <div className="comment">
            이런 분위기는
            <br /> 어떠세요?
          </div>
          <div className="keywords">
            <div className="keyword1">
              <div className="keyCircle1"></div>
              <div className="word1">&#35;따뜻한</div>
            </div>
            <div className="keyword2">
              <div className="keyCircle2"></div>
              <div className="word2">&#35;휴식</div>
            </div>
          </div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default Main;
