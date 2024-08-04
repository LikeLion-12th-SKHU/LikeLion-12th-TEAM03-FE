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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No token found");
        }

        const response = await fetch("https://cinining.store/psy-test", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setAnimalPic(data.animalPic);
          setType(data.type);
          setColorComments(data.colorComments || []);
          setProducts(data.postList || []);
        } else {
          console.error("Failed to fetch data, status:", response.status);
          const errorText = await response.text();
          console.error("Error details:", errorText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
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
