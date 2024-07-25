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

import { IconHeader } from "./DetailConsumerCss";

import {
  TypeButton,
  UserList,
  UserProfile,
  Nickname,
  UserTime,
} from "./DetailSellerCss";

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
        <Description>
          <IconHeader>
            <FontAwesomeIcon icon={faChevronDown} />
          </IconHeader>
          <TypeButton>
            신청순
            <FontAwesomeIcon icon={faChevronDown} />
          </TypeButton>
          <UserList>
            <UserProfile></UserProfile>
            <Nickname>라임색머리</Nickname>
            <UserTime>항동 &#45; 15시간 전 </UserTime>
          </UserList>
          <UserList>
            <UserProfile></UserProfile>
            <Nickname>라임색머리</Nickname>
            <UserTime>항동 &#45; 15시간 전 </UserTime>
          </UserList>
        </Description>
        <Footer>거래 수락</Footer>
      </FullScreen>
    </div>
  );
}

export default DetailsSeller;
