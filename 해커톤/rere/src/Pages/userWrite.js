import React, { useRef, useState } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faX,
  faCheck,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import {
  FullScreen,
  Header,
  HeaderCenter,
  HeaderCenter1,
  HeaderRight,
} from "./standardCss";

import {
  HeaderLeftIcon,
  HeaderCenterWrite,
  HeaderRightIcon,
  Main,
  Title,
  TitleName,
  TitleInput,
  Content,
  ContentName,
  ContentInput,
  Photo,
  PhotoName,
  PhotoInput,
  PhotoResult,
  Place,
  PlaceName,
  PlaceInput,
  PriceName,
  PriceInput,
  DealInput,
  Keyword,
  KeywordName,
  KeywordInput,
  Color,
  ColordName,
  ColorInput,
  CategoryInput,
} from "./userWriteCss";

function UserWrite() {
  const fileInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [place, setPlace] = useState("");
  const [dealTime, setDealTime] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [color, setColor] = useState("");

  const handlePhotoInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).slice(0, 10); // 최대 10개의 파일만 선택
    const newImages = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) =>
      [...prevImages, ...newImages].slice(0, 10)
    ); // 기존 이미지와 새 이미지 합쳐서 최대 10개
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("locationId", parseInt(place, 10)); // Long으로 변환
    formData.append("time", parseInt(dealTime, 10)); // Integer로 변환
    formData.append("price", parseInt(price, 10)); // Integer로 변환
    formData.append("categoryId", parseInt(category, 10)); // Long으로 변환
    formData.append("moodId", parseInt(keyword, 10)); // Long으로 변환

    // 이미지 파일 추가
    selectedImages.forEach((image, index) => {
      const file = fileInputRef.current.files[index];
      if (file) {
        formData.append(`imgUrl`, file); // 백엔드의 키에 맞추어 `imgUrl`로 설정
      }
    });

    try {
      const response = await fetch("https://cinining.store/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Content-Type': 'multipart/form-data', // FormData는 Content-Type을 자동으로 설정하므로 주석 처리합니다.
        },
        body: formData,
      });

      const responseText = await response.text();

      if (response.ok) {
        alert("글이 성공적으로 작성되었습니다.");
      } else {
        console.error("Error response:", responseText);
        alert(`글 작성에 실패했습니다: ${responseText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="main-container">
      <FullScreen>
        <Header>
          <HeaderLeftIcon>
            <FontAwesomeIcon icon={faX} />
          </HeaderLeftIcon>
          <HeaderCenter>
            <HeaderCenterWrite>글쓰기</HeaderCenterWrite>
          </HeaderCenter>
          <HeaderRightIcon>
            <FontAwesomeIcon icon={faCheck} onClick={handleSubmit} />
          </HeaderRightIcon>
        </Header>
        <Main>
          <Title>
            <TitleName>제목</TitleName>
            <TitleInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요"
            />
          </Title>
          <Content>
            <ContentName>내용</ContentName>
            <ContentInput
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="제품을 설명해주세요"
            />
          </Content>
          <Photo>
            <PhotoName>
              제품 사진
              <PhotoInput onClick={handlePhotoInputClick}>
                <FontAwesomeIcon icon={faCamera} />
              </PhotoInput>
            </PhotoName>

            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              multiple // 여러 파일을 선택할 수 있도록 함
            />
            <PhotoResult>
              {selectedImages.map((image, index) => (
                <div
                  key={index}
                  style={{
                    width: "120px",
                    marginRight: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fcf4ec",
                    padding: "40px auto",
                    borderRadius: "30px",
                  }}
                >
                  <img
                    src={image}
                    alt={`Selected ${index}`}
                    style={{
                      display: "block",
                      width: "80px",
                      height: "fit-content",
                      objectFit: "contain", // 이미지가 컨테이너 내에 맞게 조정되도록 함
                      borderRadius: "30px",
                      margin: "10px 5px",
                    }}
                  />
                </div>
              ))}
            </PhotoResult>
          </Photo>
          <Place>
            <PlaceName>거래 장소</PlaceName>
            <PlaceInput
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              placeholder="장소 추가"
            />
          </Place>
          <Place>
            <PlaceName>거래 시간</PlaceName>
            <DealInput
              value={dealTime}
              onChange={(e) => setDealTime(e.target.value)}
              placeholder="시간 선택"
            />
          </Place>
          <Place>
            <PriceName>가격</PriceName>
            <PriceInput
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="가격을 입력해주세요"
            />
          </Place>
          <Place>
            <PlaceName>카테고리</PlaceName>
            <CategoryInput
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="카테고리 선택"
            />
          </Place>
          <Keyword>
            <KeywordName>키워드</KeywordName>
            <KeywordInput
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="#따뜻한"
            />
          </Keyword>
        </Main>
      </FullScreen>
    </div>
  );
}

export default UserWrite;
