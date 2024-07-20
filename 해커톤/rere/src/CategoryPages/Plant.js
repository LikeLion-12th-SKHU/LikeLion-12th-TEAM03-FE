import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  FullScreen,
  Header,
  HeaderLeft,
  HeaderCenter,
  HeaderLeft1,
  HeaderLeft2,
  HeaderCenter1,
  HeaderRight,
  Keywords,
  Distance,
  Price,
  Main,
  Section,
  LeftImg,
  RightDesc,
  Tag,
  Title,
  Place,
  PriceInfo,
  Dropdown,
  DropdownItem,
  Write,
  ChevronImg,
  Words,
  InnerChevron,
} from "../Pages/standardCss";

// 임시 데이터
const sections = [
  {
    id: 1,
    tag: "#따뜻한 #휴식",
    title: "인테리어 조명 처리합니다",
    place: "항동 - 8시간 전",
    price: "30,000원",
  },
  {
    id: 2,
    tag: "#모던한 #디자인",
    title: "모던한 가구 판매합니다",
    place: "강남구 - 2시간 전",
    price: "50,000원",
  },
  {
    id: 3,
    tag: "#따뜻한 #휴식",
    title: "인테리어 조명 처리합니다",
    place: "항동 - 8시간 전",
    price: "30,000원",
  },
  {
    id: 4,
    tag: "#모던한 #디자인",
    title: "모던한 가구 판매합니다",
    place: "강남구 - 2시간 전",
    price: "50,000원",
  },
  {
    id: 5,
    tag: "#따뜻한 #휴식",
    title: "인테리어 조명 처리합니다",
    place: "항동 - 8시간 전",
    price: "30,000원",
  },
  {
    id: 6,
    tag: "#모던한 #디자인",
    title: "모던한 가구 판매합니다",
    place: "강남구 - 2시간 전",
    price: "50,000원",
  },
  // 더 많은 데이터를 추가할 수 있음
];

function Plant() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const distanceRef = useRef(null);
  const priceRef = useRef(null);
  const headerCenterRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = useCallback(
    (content, ref) => {
      if (dropdownOpen === content) {
        setDropdownOpen(null);
      } else {
        setDropdownOpen(content);
        if (ref.current) {
          const { top, left, height } = ref.current.getBoundingClientRect();
          setDropdownPosition({ top: top + height, left });
        }
      }
    },
    [dropdownOpen]
  );

  const handleSectionClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="main-container">
      <FullScreen>
        <Header>
          <HeaderLeft>
            <HeaderLeft1>RERE</HeaderLeft1>
            <HeaderLeft2>&#45; be happy &#45;</HeaderLeft2>
          </HeaderLeft>
          <HeaderCenter
            ref={headerCenterRef}
            onClick={() => toggleDropdown("HeaderCenter", headerCenterRef)}
          >
            <HeaderCenter1>인테리어 소품</HeaderCenter1>
            <ChevronImg>
              <FontAwesomeIcon icon={faChevronDown} />
            </ChevronImg>
          </HeaderCenter>
          <HeaderRight>
            <FontAwesomeIcon icon={faBars} />
          </HeaderRight>
        </Header>
        <Keywords>
          <Distance
            ref={distanceRef}
            onClick={() => toggleDropdown("거리순", distanceRef)}
          >
            거리순
            <InnerChevron>
              <FontAwesomeIcon icon={faChevronDown} />
            </InnerChevron>
          </Distance>
          <Price
            ref={priceRef}
            onClick={() => toggleDropdown("가격", priceRef)}
          >
            가격
            <InnerChevron>
              <FontAwesomeIcon icon={faChevronDown} />
            </InnerChevron>
          </Price>
          <Words>&#35;따뜻한</Words>
          <Words>&#35;모던한</Words>
        </Keywords>
        <Main>
          {sections.map((section) => (
            <Section
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
            >
              <LeftImg />
              <RightDesc>
                <Tag>{section.tag}</Tag>
                <Title>{section.title}</Title>
                <Place>{section.place}</Place>
                <PriceInfo>{section.price}</PriceInfo>
              </RightDesc>
            </Section>
          ))}
        </Main>
        {dropdownOpen === "거리순" && (
          <Dropdown
            isOpen={dropdownOpen === "거리순"}
            top={dropdownPosition.top}
            left={dropdownPosition.left}
          >
            <DropdownItem>100km 이내</DropdownItem>
            <DropdownItem>50km 이내</DropdownItem>
            <DropdownItem>10km 이내</DropdownItem>
          </Dropdown>
        )}
        {dropdownOpen === "가격" && (
          <Dropdown
            isOpen={dropdownOpen === "가격"}
            top={dropdownPosition.top}
            left={dropdownPosition.left}
          >
            <DropdownItem>10,000원 이하</DropdownItem>
            <DropdownItem>50,000원 이하</DropdownItem>
            <DropdownItem>100,000원 이하</DropdownItem>
          </Dropdown>
        )}
        {dropdownOpen === "HeaderCenter" && (
          <Dropdown
            isOpen={dropdownOpen === "HeaderCenter"}
            top={dropdownPosition.top}
            left={dropdownPosition.left}
          >
            <DropdownItem>소품</DropdownItem>
            <DropdownItem>가구</DropdownItem>
            <DropdownItem>조명</DropdownItem>
          </Dropdown>
        )}
      </FullScreen>
      <Write>
        <FontAwesomeIcon icon={faPlus} /> 글쓰기
      </Write>
      <BottomNav />
    </div>
  );
}
export default Plant;
