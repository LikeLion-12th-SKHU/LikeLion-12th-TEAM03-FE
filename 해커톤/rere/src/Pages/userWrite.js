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
} from "./userWriteCss";

function UserWrite() {
  const fileInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);

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
            <FontAwesomeIcon icon={faCheck} />
          </HeaderRightIcon>
        </Header>
        <Main>
          <Title>
            <TitleName>제목</TitleName>
            <TitleInput placeholder="제목을 입력해주세요" />
          </Title>
          <Content>
            <ContentName>내용</ContentName>
            <ContentInput placeholder="제품을 설명해주세요" />
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
                <img
                  key={index}
                  src={image}
                  alt={`Selected ${index}`}
                  style={{
                    width: "130px",
                    height: "130px",
                    objectFit: "cover",
                    borderRadius: "20px",
                    marginRight: "10px", // 이미지 사이에 간격 추가
                  }}
                />
              ))}
            </PhotoResult>
          </Photo>
          <Place>
            <PlaceName>거래 장소</PlaceName>
            <PlaceInput placeholder="장소 추가"></PlaceInput>
          </Place>
          <Place>
            <PlaceName>거래 시간</PlaceName>
            <DealInput placeholder="시간 선택"></DealInput>
          </Place>
          <Place>
            <PriceName>가격</PriceName>
            <PriceInput placeholder="가격을 입력해주세요"></PriceInput>
          </Place>
          <Place>
            <PlaceName>카테고리</PlaceName>
            <PlaceInput placeholder="카테고리 선택"></PlaceInput>
          </Place>
          <Keyword>
            <KeywordName>키워드</KeywordName>
            <KeywordInput>&#35;따뜻한</KeywordInput>
          </Keyword>
          <Color>
            <ColordName>색상</ColordName>
            <ColorInput></ColorInput>
          </Color>
        </Main>
      </FullScreen>
    </div>
  );
}

export default UserWrite;
