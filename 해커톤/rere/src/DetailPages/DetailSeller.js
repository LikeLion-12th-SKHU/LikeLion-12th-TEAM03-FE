import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faListSquares,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  FullScreen,
  Header,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  ImgSection,
  Keywords,
  Title,
  Description,
  UserInfo,
  Profile,
  UserName,
  Place,
  ProductInfo,
  Price,
  Heart,
  Count,
  HeartEmogi,
  Footer,
} from "./DetailCss";

function DetailsSeller() {
  return (
    <div className="main-container">
      <FullScreen>
        <Header>
          <HeaderLeft>
            <FontAwesomeIcon icon={faChevronLeft} />
          </HeaderLeft>
          <HeaderCenter>인테리어 조명 처리합니다.</HeaderCenter>
          <HeaderRight>
            <FontAwesomeIcon icon={faListSquares} />
          </HeaderRight>
        </Header>
        <ImgSection></ImgSection>
        <Keywords>&#35;따뜻한</Keywords>
        <Title>인테리어 조명 처리합니다.</Title>
        <Description>제품 설명란</Description>
        <UserInfo>
          <Profile></Profile>
          <UserName>라임색 머리</UserName>
          <Place>항동 &#45; 16시간 전</Place>
        </UserInfo>
        <ProductInfo>
          <Price>20,000₩</Price>
          <Heart>
            <Count>18</Count>
            <HeartEmogi>
              <FontAwesomeIcon icon={faHeart} />
            </HeartEmogi>
          </Heart>
        </ProductInfo>
        <Footer>거래 신청</Footer>
      </FullScreen>
    </div>
  );
}

export default DetailsSeller;
