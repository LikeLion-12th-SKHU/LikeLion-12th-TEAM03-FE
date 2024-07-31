import React, { useState, useEffect } from "react";
import ResultTopNav from "../components/ResultTopNav";
import "./resultPage.css";
import Example from "../components/Example";

function ResultPage() {
  const [animalPic, setAnimalPic] = useState("");
  const [type, setType] = useState("");
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0); // State to hold the score
  useEffect(() => {
    // 로컬 스토리지에서 점수를 불러와 상태에 설정
    const savedData = JSON.parse(localStorage.getItem("testResults")) || {};
    if (savedData.score) {
      setScore(savedData.score);
    }
  }, []);

  useEffect(() => {
    // 백엔드에서 데이터 가져오는 함수
    const fetchAnimalPic = async () => {
      try {
        const response = await fetch("https://cinining.store/psy-test"); // 백엔드 엔드포인트
        if (response.ok) {
          const data = await response.json();
          setAnimalPic(data.animalPic); // 'animalPic' 필드에서 이미지 URL을 설정
          setType(data.type); // 'type' 필드에서 타입을 설정
          setComment(data.comment); // 'comment' 필드에서 코멘트를 설정
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAnimalPic();
  }, []);

  return (
    <div className="main-container">
      <ResultTopNav />
      <div className="result-animal-container">
        <div className="animal-circle-div">
          {animalPic ? (
            <img src={animalPic} alt="Result Animal" className="animal-img" />
          ) : (
            <p>Loading...</p> // 이미지 로딩 중 표시할 내용
          )}
        </div>
        <div className="result-animal-detail">
          <p className="personal-type">{type}</p>
          <br />
          <p>{comment}</p>
        </div>
        <div className="progress-div">
          <Example />
        </div>
        <div className="type-product"></div>
      </div>
    </div>
  );
}

export default ResultPage;
