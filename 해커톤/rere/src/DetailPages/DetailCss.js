import { styled, keyframes } from "styled-components";

export const FullScreen = styled.div`
  background-color: white;
  height: 880px;
  width: 100%;
  border: 1px solid #dfd3c2;
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  background-color: #dfd3c2;
  color: #29351a;
`;

export const HeaderLeft = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

export const HeaderCenter = styled.div``;

export const HeaderRight = styled.div`
  margin-right: 10px;
  font-size: 20px;
`;

export const ImgSection = styled.img`
  display: block;
  width: 100%;
  max-width: 500px;
  background-color: #fcf4ec;
  height: 300px;
  margin-top: 50px;
`;

export const Keywords = styled.div`
  padding-left: 1rem;
  padding-top: 5px;
  color: #56805a;
`;

export const Title = styled.div`
  padding-left: 1rem;
  padding-top: 5px;
  font-size: 1.5rem;
`;
export const Description = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #fcf4ec;
  height: 15rem;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description2 = styled.div`
  border: 1.5px solid #806e56;
  width: 90%;
  height: 100%;
`;

export const UserInfo = styled.div`
  width: 100%;
  max-width: 500px;
  height: 40px;
  display: flex;
`;

export const Profile = styled.img`
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-top: 15px;
  margin-left: 10px;
  background-color: #806e56;
`;

export const UserName = styled.div`
  margin-top: 23px;
  margin-left: 10px;
  font-size: 14px;
  color: #56805a;
  width: 120px;
`;

export const Place = styled.div`
  margin-left: 75px;
  font-size: 14px;
  margin-top: 23px;
  color: #56805a;
`;

export const ProductInfo = styled.div`
  margin-left: 10px;
  font-size: 23px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
`;

export const Price = styled.div``;

export const Heart = styled.div`
  display: flex;
`;

export const Count = styled.div`
  color: #29351a;
  margin-right: 10px;
  font-size: 15px;
  margin-top: 3px;
`;

export const HeartEmogi = styled.div`
  color: #98c697;
  font-size: 18px;
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 8%;
  background-color: #c2dfc3;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 1px 5px 7px gray;
`;
//border: 1px solid black;

// 슬라이드 업 애니메이션
const slideUp = keyframes`
  from {
    transform: translateY(100%); /* 아래에서 시작 */
  }
  to {
    transform: translateY(0); /* 원래 위치로 */
  }
`;

export const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 50%;
  background-color: #fcf4ec;
  border-radius: 10px 10px 0 0; /* 위쪽만 둥글게 */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
  animation: ${slideUp} 0.3s ease-out; /* 슬라이드 애니메이션 추가 */
  z-index: 1000; /* 모달이 가장 위에 오도록 설정 */
`;

export const ModalContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  z-index: 999; /* 모달 뒤에 깔리도록 설정 */
`;

export const Title2 = styled.h2`
  margin: 0;
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #c2dfc3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const suggest = styled.p`
  color: #806e56;
`;
