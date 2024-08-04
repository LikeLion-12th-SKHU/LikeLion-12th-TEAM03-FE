import React from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faPlus,
  faSearch,
  faBell,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  FullScreen,
  Header,
  HeaderLeft,
  HeaderCenter,
  Keywords,
  Distance,
  Price,
  Words,
  InnerChevron,
} from "./standardCss";

import {
  HeaderRight2,
  HeaderCenter2,
  Design,
  Design1,
  Main,
  Eraser,
  Design2,
  Design3,
  Welcome,
  Title,
  Section,
  Picture,
  SectionTitle,
  SectionKeyword,
  SectionPlace,
  SectionHeart,
  HeartCount,
  SectionContainer,
  Main2,
} from "./coummnityCss";

const dummyData = [
  {
    title: "왜 안 되냐고 ~~",
    keyword: "#따뜻한",
    place: "항동 - 16시간 전",
    heartCount: 21,
  },
  {
    title: "오늘의 날씨는",
    keyword: "#맑음",
    place: "서울 - 5시간 전",
    heartCount: 10,
  },
  {
    title: "새로운 시작",
    keyword: "#모던한",
    place: "부산 - 2일 전",
    heartCount: 45,
  },
  {
    title: "안녕하세요!",
    keyword: "#환영",
    place: "인천 - 3일 전",
    heartCount: 12,
  },
  {
    title: "좋은 아침입니다",
    keyword: "#상쾌한",
    place: "대구 - 1일 전",
    heartCount: 33,
  },
];

function Community() {
  return (
    <div className="main-container">
      <FullScreen>
        <Header>
          <HeaderLeft>
            <img src="/logo2.png" alt="advertisement" />
          </HeaderLeft>
          <HeaderCenter>
            <HeaderCenter2>커뮤니티</HeaderCenter2>
          </HeaderCenter>
          <HeaderRight2>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faBell} />
          </HeaderRight2>
        </Header>
        <Keywords>
          <Distance>전체</Distance>
          <Price>
            추천순
            <InnerChevron>
              <FontAwesomeIcon icon={faChevronDown} />
            </InnerChevron>
          </Price>
          <Words>&#35;키워드 검색</Words>
        </Keywords>

        <Design>
          <Design1></Design1>
          <Welcome>
            <strong>라임색 머리</strong> 님,
            <br />
            오늘도 행복한 하루 되세요.
          </Welcome>
        </Design>
        <Design2></Design2>
        <Design3></Design3>
        <Main>
          <Title>오늘의 인기글 10</Title>
          <SectionContainer>
            {dummyData.map((data, index) => (
              <Section key={index}>
                <Picture></Picture>
                <SectionTitle>{data.title}</SectionTitle>
                <SectionKeyword>{data.keyword}</SectionKeyword>
                <SectionPlace>{data.place}</SectionPlace>
                <SectionHeart>
                  <FontAwesomeIcon icon={faHeart} />
                  <HeartCount>{data.heartCount}</HeartCount>
                </SectionHeart>
              </Section>
            ))}
          </SectionContainer>
        </Main>
        <Main2>
          <Title>최신 글</Title>
          <SectionContainer>
            {dummyData.map((data, index) => (
              <Section key={index}>
                <Picture></Picture>
                <SectionTitle>{data.title}</SectionTitle>
                <SectionKeyword>{data.keyword}</SectionKeyword>
                <SectionPlace>{data.place}</SectionPlace>
                <SectionHeart>
                  <FontAwesomeIcon icon={faHeart} />
                  <HeartCount>{data.heartCount}</HeartCount>
                </SectionHeart>
              </Section>
            ))}
          </SectionContainer>
        </Main2>
        <BottomNav />
      </FullScreen>
    </div>
  );
}
export default Community;
