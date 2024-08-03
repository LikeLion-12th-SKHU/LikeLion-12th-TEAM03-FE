import React, { useState, useEffect } from "react";
import ResultTopNav from "../components/ResultTopNav";
import "./resultPage.css";
import Example from "../components/Example";

function ResultPage() {
  const [animalPic, setAnimalPic] = useState("");
  const [type, setType] = useState("");
  const [colorComments, setColorComments] = useState(""); // 변경된 상태 변수
  const [products, setProducts] = useState([]); // Array 타입의 제품 리스트 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // 데이터를 가져오기 전에 로딩 상태로 설정
      try {
        const response = await fetch("https://cinining.store/psy-test", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}), // 빈 객체를 보냄
        });
        if (response.ok) {
          const data = await response.json();
          setAnimalPic(data.animalPic);
          setType(data.type);
          setColorComments(data.colorComments); // 변경된 데이터 필드
          setProducts(data.postList); // 서버로부터 받은 데이터로 제품 리스트 설정
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // 데이터 가져오기 완료 후 로딩 상태 해제
      }
    };

    fetchData();
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
          <p>{colorComments}</p> {/* 변경된 변수 사용 */}
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
            {isLoading ? (
              <p>Loading products...</p>
            ) : products.length > 0 ? (
              products.map((product, index) => (
                <div key={index} className="product-item">
                  <img src={product.postImg} alt={product.postTitle} />
                  <p>{product.postTitle}</p>
                </div>
              ))
            ) : (
              <p>아직 해당 유형과 관련된 상품이 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
