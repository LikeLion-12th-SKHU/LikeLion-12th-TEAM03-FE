import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
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
  Description2,
  Modal,
  ModalContent,
  ModalOverlay,
  CloseButton,
  Title2,
  suggest,
} from "./DetailCss";

function DetailsPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log("postId:", postId);

    const fetchPost = async () => {
      try {
        const response = await axios.get(`/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="main-container">
      <FullScreen>
        <Header>
          <HeaderLeft>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
            />
          </HeaderLeft>
          <HeaderCenter>{post.title}</HeaderCenter>
          <HeaderRight>
            <FontAwesomeIcon icon={faListSquares} />
          </HeaderRight>
        </Header>
        <ImgSection src={post.imgUrl} alt={post.title} />
        <Keywords>
          {post.moods.map((mood) => (
            <span key={mood.moodId}>#{mood.name} </span>
          ))}
        </Keywords>
        <Title>{post.title}</Title>
        <Description>
          <Description2>{post.content}</Description2>
        </Description>
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
        <Footer onClick={handleModalOpen}>거래 신청</Footer>

        {/* 모달 부분 */}
        {modalOpen && (
          <>
            <ModalOverlay onClick={handleModalClose} />
            <Modal>
              <ModalContent>
                <Title2>거래 신청</Title2>
                <p>거래를 신청할까요?</p>
                <suggest>
                  제안하고 싶은 장소/시간/가격이 있다면
                  <br />
                  제안하기를 눌러 수정해주세요.
                </suggest>
                <p>거래를 신청할까요?</p>
                <CloseButton onClick={handleModalClose}>신청하기</CloseButton>
              </ModalContent>
            </Modal>
          </>
        )}
      </FullScreen>
    </div>
  );
}

export default DetailsPage;
