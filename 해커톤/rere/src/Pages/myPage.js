import React, { useEffect, useRef, useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BottomNav from "../components/BottomNav";
import "./myPage.css";
import MyPageTop from "../components/myPageTop";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("");
  const [daysSinceAccountCreation, setDaysSinceAccountCreation] = useState(0);
  const [score, setScore] = useState(75); // 예시 점수
  const [scoreNeeded, setScoreNeeded] = useState(100); // 다음 레벨까지 필요한 점수
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfileImage = localStorage.getItem("profileImage");
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }

    // Assuming the account creation date is stored in localStorage
    const accountCreationDate = localStorage.getItem("accountCreationDate");
    if (accountCreationDate) {
      const currentDate = new Date();
      const creationDate = new Date(accountCreationDate);
      const differenceInTime = currentDate - creationDate;
      const differenceInDays = Math.floor(
        differenceInTime / (1000 * 3600 * 24)
      );
      setDaysSinceAccountCreation(differenceInDays);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem("profileImage", reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoInputClick = () => {
    fileInputRef.current.click();
  };

  const handleEditProfile = () => {
    alert("프로필 수정 기능은 현재 준비 중입니다.");
  };

  const handleResetPsyTest = async () => {
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      const response = await fetch("https://cinining.store/psy-test", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to reset psy test: ${errorText}`);
      }

      // Clear localStorage testResults
      localStorage.removeItem("testResults");

      alert("심리테스트가 초기화되었습니다.");
      navigate("/psytest"); // Navigate to the /psytest route
    } catch (error) {
      setError(error.message);
      console.error("Error resetting psy test:", error);
    }
  };

  return (
    <div className="real-main-container">
      <div className="r-top-half">
        <div className="rmc-top-container">
          <MyPageTop />
          <div className="profile-container">
            <div className="profile" onClick={handlePhotoInputClick}>
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profileImage"
                />
              ) : (
                <p>No Image</p>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <div className="profile-name">
              <p className="profile-name-text">라임색 머리</p>
              <p className="bornDay">
                함께한 지{" "}
                <span className="BD">{daysSinceAccountCreation}일</span>
              </p>
              <p className="edit-profile" onClick={handleEditProfile}>
                프로필 수정하기 &gt;
              </p>
              <p className="edit-psytest" onClick={handleResetPsyTest}>
                심리테스트 다시하기&gt;
              </p>
            </div>
            <div className="complete">
              <p className="complete-text">구매 완료</p>
              <p className="num">12</p> {/* api 나오면 수정*/}
            </div>
            <div className="review">
              <p className="complete-text">내 후기</p>
              <p className="num">3</p>
            </div>
          </div>
        </div>
        <div className="rmc-bottom-container">
          <div className="left-container">
            <div className="level-title">관리레벨</div>
            <div className="progressbar-wrapper">
              <CircularProgressbarWithChildren
                value={score}
                styles={buildStyles({
                  pathColor: "#56805A",
                  trailColor: "#C2DFC3",
                })}
              >
                <div style={{ fontSize: 14, marginTop: -5 }}>
                  <span className="circle-num">{score}</span>점
                </div>

                <div style={{ fontSize: 10, marginTop: 3 }}>
                  앞으로 &nbsp;
                  <span className="circle-num2">{scoreNeeded - score}</span>점
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div className="level-title2">초급 Lv.1</div>
          </div>
          <div className="right-container">
            <div className="mileage-container">
              <div className="right-level-title">마일리지</div>
              <div className="rlt">적립내역&gt;</div>
            </div>
            <div className="mileage">
              <span className="point">200P</span>
              <div className="mileage-circle"></div>
            </div>
            <div className="mileage-method">마일리지 사용방법</div>
          </div>
        </div>
      </div>
      <div className="bottom-half">
        <div className="bottom-half-container">
          <div className="myPage-text">
            거래
            내역&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          </div>

          <div className="myPage-circle"></div>
          <div className="myPage-text">
            관심
            목록&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          </div>
          <div className="myPage-circle"></div>
          <div className="myPage-text">
            검사
            내역&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          </div>
          <div className="myPage-circle"></div>
          <div className="myPage-text">
            공지
            사항&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          </div>
          <div className="myPage-circle"></div>
          <div className="myPage-text">
            자주 묻는
            질문&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          </div>
          <div className="myPage-circle"></div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default MyPage;
