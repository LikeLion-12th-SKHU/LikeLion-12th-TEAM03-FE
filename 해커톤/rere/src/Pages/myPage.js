import React from "react";
import BottomNav from "../components/BottomNav";
import "./myPage.css";
import MyPageTop from "../components/myPageTop";
function MyPage() {
  return (
    <div className="real-main-container">
      <div className="r-top-half">
        <div className="rmc-top-container">
          <MyPageTop />
          <div className="profile-container">
            <div className="profile"></div>
            <div className="profile-name"></div>
            <div className="complete">
              <p className="complete-text">구매 완료</p>
              <p>12</p> {/* api 나오면 수정*/}
            </div>
            <div className="review">
              <p className="complete-text">내 후기</p>
              <p>3</p>
            </div>
          </div>
        </div>
        <div className="rmc-bottom-container"></div>
      </div>
      <div className="bottom-half"></div>
      <BottomNav />
    </div>
  );
}
export default MyPage;
