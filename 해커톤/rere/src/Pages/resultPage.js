import React, { useState, useEffect } from "react";
import ResultTopNav from "../components/ResultTopNav";
import "./resultPage.css";
import Example from "../components/Example";

function ResultPage() {
  const [animalPic, setAnimalPic] = useState("");
  const [type, setType] = useState("");
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const [products, setProducts] = useState([]); // Array 타입의 제품 리스트 상태

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("testResults")) || {};
    if (savedData.score) {
      setScore(savedData.score);
    }
  }, []);

  useEffect(() => {
    const fetchAnimalPic = async () => {
      try {
        const response = await fetch("https://cinining.store/psy-test");
        if (response.ok) {
          const data = await response.json();
          setAnimalPic(data.animalPic);
          setType(data.type);
          setComment(data.comment);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAnimalPic();
  }, []);

  useEffect(() => {
    // 임의의 데이터로 제품 리스트 설정
    const mockProducts = Array.from({ length: 10 }, (_, index) => ({
      imageUrl: `https://via.placeholder.com/150?text=Product+${index + 1}`,
      title: `Product ${index + 1}`,
    }));
    setProducts(mockProducts);
  }, []);

  return (
    <div className="main-container">
      <ResultTopNav />
      <div className="result-animal-container">
        <div className="animal-circle-div">
          {animalPic ? (
            <img src={animalPic} alt="Result Animal" className="animal-img" />
          ) : (
            <p>Loading...</p>
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
        <div className="type-product-container">
          <div className="type-product-text">
            <span className="type-contain-text">#{type}</span>을 포함한 상품
          </div>
        </div>
        <div className="row-container">
          <div className="row-product">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={index} className="product-item">
                  <img src={product.imageUrl} alt={product.title} />
                  <p>{product.title}</p>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
