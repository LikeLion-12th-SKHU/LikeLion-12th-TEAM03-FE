import React, { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BottomNav from "../components/BottomNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./category.css";
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
  HeaderCenter1,
  HeaderRight,
  Keywords,
  Distance,
  Price,
  Main,
  Section,
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
  LeftImg,
} from "../Pages/standardCss";

function Candle() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [sections, setSections] = useState([]);

  const distanceRef = useRef(null);
  const priceRef = useRef(null);
  const headerCenterRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = useCallback(
    (content, ref) => () => {
      if (dropdownOpen === content) {
        setDropdownOpen(null);
      } else {
        setDropdownOpen(content);
        if (ref?.current) {
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

  const writeClick = () => {
    navigate(`/write`);
  };

  const calculateTimeDifference = (createDate) => {
    const now = new Date();
    const created = new Date(createDate);
    const diffInMs = now - created;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInHours >= 24) {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}일 전`;
    }

    return `${diffInHours}시간 전`;
  };

  useEffect(() => {
    // 백엔드 API 호출
    const fetchData = async () => {
      try {
        const response = await axios.get("/posts");
        setSections(response.data.posts);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-container">
      <FullScreen>
        <Header>
          <HeaderLeft>
            <img src="/logo2.png" alt="advertisement" />
          </HeaderLeft>
          <HeaderCenter
            ref={headerCenterRef}
            onClick={toggleDropdown("HeaderCenter", headerCenterRef)}
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
            onClick={toggleDropdown("거리순", distanceRef)}
          >
            거리순
            <InnerChevron>
              <FontAwesomeIcon icon={faChevronDown} />
            </InnerChevron>
          </Distance>
          <Price ref={priceRef} onClick={toggleDropdown("가격", priceRef)}>
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
              <LeftImg src={section.imgUrl} />
              <RightDesc>
                <Tag>&#35;{section.mood.name}</Tag>
                <Title>{section.title}</Title>
                <Place>
                  {section.location.name} •{" "}
                  {calculateTimeDifference(section.createDate)}
                </Place>
                <PriceInfo>
                  {section.price ? section.price.toLocaleString() : 0}원
                </PriceInfo>
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
      <Write onClick={() => writeClick()}>
        <FontAwesomeIcon icon={faPlus} /> 글쓰기
      </Write>
      <BottomNav />
    </div>
  );
}

export default Candle;
