import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faListSquares,
  faChevronDown,
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
  Footer,
} from "./DetailCss";

import {
  IconHeader,
  Question,
  QuestionComment,
  DetailDescription,
  DescBox,
  Deal,
  DealName,
} from "./DetailConsumerCss";

function DetailsConsumer() {
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
        <Description>
          <IconHeader>
            <FontAwesomeIcon icon={faChevronDown} />
          </IconHeader>
          <Question>거래를 신청할까요?</Question>
          <QuestionComment>
            제안하고 싶은 장소/시간/가격이 있다면 <br />
            제안하기를 눌러 수정해주세요.
          </QuestionComment>
          <DetailDescription>
            <DescBox>
              <Deal>거래 장소</Deal>
              <DealName>서울시 구로구 항동 1-1</DealName>
            </DescBox>
            <DescBox>
              <Deal>거래 시간</Deal>
              <DealName>3시</DealName>
            </DescBox>
            <DescBox>
              <Deal>가격</Deal>
              <DealName>20,000원</DealName>
            </DescBox>
          </DetailDescription>
        </Description>
        <Footer>거래 신청</Footer>
      </FullScreen>
    </div>
  );
}

export default DetailsConsumer;
