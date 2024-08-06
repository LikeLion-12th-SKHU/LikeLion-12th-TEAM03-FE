import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("postId:", postId); // postId가 제대로 전달되고 있는지 확인

    const fetchPost = async () => {
      try {
        const response = await axios.get(`/posts/${postId}`);
        setPost(response.data); // 데이터 구조에 맞게 설정
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      <FullScreen>
        <Header>
          <HeaderLeft>
            <FontAwesomeIcon icon={faChevronLeft} />
          </HeaderLeft>
          <HeaderCenter>{post.title}</HeaderCenter>
          <HeaderRight>
            <FontAwesomeIcon icon={faListSquares} />
          </HeaderRight>
        </Header>
        <ImgSection src={post.imgUrl} alt={post.title} />
        <Title>{post.title}</Title>
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
              <DealName>{post.location.name}</DealName>
            </DescBox>
            <DescBox>
              <Deal>거래 시간</Deal>
              <DealName>{post.time}시</DealName>
            </DescBox>
            <DescBox>
              <Deal>가격</Deal>
              <DealName>{post.price.toLocaleString()}원</DealName>
            </DescBox>
          </DetailDescription>
        </Description>
        <Footer>거래 신청</Footer>
      </FullScreen>
    </div>
  );
}

export default DetailsConsumer;
