import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faX,
  faCheck,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FullScreen, Header, HeaderCenter } from "./standardCss";

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
  PlaceSelect,
  PriceName,
  PriceInput,
  DealInput,
  Keyword,
  KeywordName,
  KeywordInput,
  CategoryInput,
} from "./userWriteCss";

function UserWrite() {
  const fileInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [placeId, setPlaceId] = useState(""); // 거래 장소의 ID를 저장할 상태 변수
  const [dealTime, setDealTime] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState([]); // 키워드를 배열로 저장
  const navigate = useNavigate();

  // 거래 장소 목록
  const places = [
    { id: 1, name: "서울특별시 강남구" },
    { id: 2, name: "서울특별시 구로구" },
    { id: 3, name: "서울특별시 강북구" },
    { id: 4, name: "서울특별시 강서구" },
    { id: 5, name: "서울특별시 관악구" },
    { id: 6, name: "서울특별시 광진구" },
    { id: 7, name: "서울특별시 구로구" },
    { id: 8, name: "서울특별시 금천구" },
    { id: 9, name: "서울특별시 노원구" },
    { id: 10, name: "서울특별시 도봉구" },
    { id: 11, name: "서울특별시 동대문구" },
    { id: 12, name: "서울특별시 동작구" },
    { id: 13, name: "서울특별시 마포구" },
    { id: 14, name: "서울특별시 서대문구" },
    { id: 15, name: "서울특별시 서초구" },
    { id: 16, name: "서울특별시 성동구" },
    { id: 17, name: "서울특별시 성북구" },
    { id: 18, name: "서울특별시 송파구" },
    { id: 19, name: "서울특별시 양천구" },
    { id: 20, name: "서울특별시 영등포구" },
    { id: 21, name: "서울특별시 용산구" },
    { id: 22, name: "서울특별시 은평구" },
    { id: 23, name: "서울특별시 종로구" },
    { id: 24, name: "서울특별시 중구" },
    { id: 25, name: "서울특별시 중랑구" },
  ];

  // 카테고리 목록
  const categories = [
    { id: 1, name: "벽지/바닥재" },
    { id: 2, name: "가구/수납" },
    { id: 3, name: "캔들/디퓨저" },
    { id: 4, name: "인테리어 소품" },
    { id: 5, name: "패브릭" },
    { id: 6, name: "생활용품" },
    { id: 7, name: "조명" },
    { id: 8, name: "식물/꽃" },
    { id: 9, name: "반려동물용품" },
  ];

  const keywordOptions = [
    { id: 1, name: "빈티지" },
    { id: 2, name: "생동감있는" },
    { id: 3, name: "자연친화적인" },
    { id: 4, name: "클래식한" },
    { id: 5, name: "차분한" },
    { id: 6, name: "포근한" },
    { id: 7, name: "모던한" },
    { id: 8, name: "아기자기한" },
    { id: 9, name: "미니멀리즘" },
    { id: 10, name: "몽환적인" },
    { id: 11, name: "에클레틱 스타일" },
    { id: 12, name: "차분한" },
    { id: 13, name: "스칸디나비아 스타일" },
    { id: 14, name: "스포티한" },
    { id: 15, name: "코스탈 스타일" },
    { id: 16, name: "펑키한" },
    { id: 17, name: "네추럴 스타일" },
    { id: 18, name: "아늑한" },
    { id: 19, name: "레트로 스타일" },
    { id: 20, name: "보헤미안 스타일" },
  ];

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

  const handleKeywordChange = (event) => {
    const selectedKeyword = parseInt(event.target.value);
    setKeywords((prevKeywords) => {
      if (prevKeywords.includes(selectedKeyword)) {
        // 이미 선택된 키워드이면 제거
        return prevKeywords.filter((keyword) => keyword !== selectedKeyword);
      } else {
        // 선택되지 않은 키워드이면 추가
        return [...prevKeywords, selectedKeyword];
      }
    });
  };

  const handleXButtonClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      console.log("토큰이 없습니다.");
      return;
    }

    const formData = new FormData();

    // JSON 데이터 생성
    const jsonData = JSON.stringify({
      title: title,
      content: content,
      locationId: parseInt(placeId),
      time: parseInt(dealTime),
      price: parseInt(price),
      categoryId: parseInt(category),
      moodIds: keywords, // 키워드 리스트를 포함
    });

    formData.append("post", new Blob([jsonData], { type: "application/json" }));

    // FormData에 파일 추가
    const files = fileInputRef.current.files;
    for (let i = 0; i < files.length; i++) {
      // 파일을 Blob 객체로 변환
      const fileBlob = new Blob([files[i]], { type: files[i].type });
      formData.append("imgUrl", fileBlob, files[i].name);
    }

    try {
      const response = await fetch("https://cinining.store/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      console.log("토큰:", token);
      console.log("title:", title);
      console.log("content:", content);
      console.log("locationId:", placeId);
      console.log("time:", dealTime);
      console.log("price:", price);
      console.log("categoryId:", category);
      console.log("moodIds:", keywords);

      // FormData의 모든 항목 로그 확인
      for (let [key, value] of formData.entries()) {
        console.log(`확인 :::: ${key}:`, value);
      }

      const responseText = await response.text();
      console.log("응답 상태 코드:", response.status);
      console.log("응답 본문:", responseText);

      if (response.ok) {
        alert("글이 성공적으로 작성되었습니다.");
        navigate(-1); // 글 작성 후 메인 페이지로 이동
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
            <FontAwesomeIcon icon={faX} onClick={handleXButtonClick} />
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
            <PlaceSelect
              value={placeId}
              onChange={(e) => setPlaceId(e.target.value)}
            >
              <option value="">거래 장소를 선택하세요</option>
              {places.map((place) => (
                <option key={place.id} value={place.id}>
                  {place.name}
                </option>
              ))}
            </PlaceSelect>
          </Place>
          <Place>
            <PlaceName>거래 시간</PlaceName>
            <DealInput
              value={dealTime}
              onChange={(e) => setDealTime(e.target.value)}
              placeholder="시간을 입력하세요. (숫자로만)"
            />
          </Place>
          <Place>
            <PriceName>가격</PriceName>
            <PriceInput
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="가격을 입력해주세요 (숫자로만)"
            />
          </Place>
          <Place>
            <PlaceName>카테고리</PlaceName>
            <CategoryInput
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">카테고리를 선택하세요</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </CategoryInput>
          </Place>
          <Keyword>
            <KeywordName>키워드</KeywordName>
            <KeywordInput
              multiple // 다중 선택 가능하도록 추가
              value={keywords}
              onChange={handleKeywordChange}
            >
              <option value="" disabled>
                키워드를 선택하세요
              </option>
              {keywordOptions.map((keyword) => (
                <option key={keyword.id} value={keyword.id}>
                  {keyword.name}
                </option>
              ))}
            </KeywordInput>
          </Keyword>
        </Main>
      </FullScreen>
    </div>
  );
}

export default UserWrite;
