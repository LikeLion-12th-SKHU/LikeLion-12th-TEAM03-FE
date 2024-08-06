import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
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
  const { postId } = useParams();
  const [section, setSection] = useState({});

  useEffect(() => {
    if (!postId) return; // postId가 undefined인지 확인하고, 그렇다면 요청을 보내지 않습니다.
    // 백엔드 API 호출
    const fetchData = async () => {
      try {
        const response = await axios.get(`/posts/${postId}`);
        setSection(response.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchData();
  }, [postId]);

  // calculateTimeDifference 함수 추가
  const calculateTimeDifference = (createDate) => {
    const now = new Date();
    const created = new Date(createDate);
    const diffInMs = now - created;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);

    if (diffInHours >= 24) {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}일 전`;
    } else if (diffInHours > 0) {
      return `${diffInHours}시간 전`;
    } else {
      return `${diffInMinutes}분 전}`;
    }
  };

  return (
    <div className="main-container">
      <FullScreen>
        <Header>
          <HeaderLeft>
            <FontAwesomeIcon icon={faChevronLeft} />
          </HeaderLeft>
          <HeaderCenter>{section.title}</HeaderCenter>
          <HeaderRight>
            <FontAwesomeIcon icon={faListSquares} />
          </HeaderRight>
        </Header>
        <ImgSection>{section.imgUrl}</ImgSection>
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
          {section.users &&
            section.users.map((user, index) => (
              <UserList key={index}>
                <UserProfile></UserProfile>
                <Nickname>{user.nickname}</Nickname>
                <UserTime>
                  {user.location} &#45; {calculateTimeDifference(user.time)}
                </UserTime>
              </UserList>
            ))}
        </Description>
        <Footer>거래 수락</Footer>
      </FullScreen>
    </div>
  );
}

export default DetailsSeller;
