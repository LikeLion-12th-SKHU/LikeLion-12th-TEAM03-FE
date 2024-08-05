import React, { useState, useEffect } from "react";
import ResultTopNav from "../components/ResultTopNav";
import "./resultPage.css";
import Example from "../components/Example";

function ResultPage() {
  const [animalPic, setAnimalPic] = useState("");
  const [type, setType] = useState("");
  const [colorComments, setColorComments] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("No token found. Please log in.");
          return;
        }

        const response = await fetch("https://cinining.store/psy-test", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch data: ${errorText}`);
        }

        const data = await response.json();
        console.log("API response data:", data); // API 응답 데이터 로그
        setAnimalPic(data.animalPic);
        setType(data.type);
        setColorComments(data.colorComments || []);
        setProducts(data.postList || []);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("colorComments state updated:", colorComments); // 상태 업데이트 후 로그
  }, [colorComments]);

  return (
    <div className="main-container">
      <ResultTopNav />
      <div className="result-animal-container">
        <div className="animal-circle-div">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <img src={animalPic} alt="Result Animal" className="animal-img" />
          )}
        </div>
        <div className="result-animal-detail">
          <p className="personal-type">{type}</p>
          <br />
          {colorComments.length > 0 ? (
            colorComments.map((comment, index) => <p key={index}>{comment}</p>)
          ) : (
            <p>No comments available.</p>
          )}
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
              products.map((product) => (
                <div key={product.id} className="product-item">
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
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default ResultPage;
