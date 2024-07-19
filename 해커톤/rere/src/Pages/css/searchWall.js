// css/searchWall.js
import { styled, keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 200px; /* 필요한 최대 높이로 조절 */
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    max-height: 200px; /* 최대 높이 */
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

export const FullScreen = styled.div`
  background-color: white;
  height: 880px;
`;

export const Header = styled.header`
  background-color: #dfd3c2;
  color: white;
  text-align: center;
  padding: 13px;
  font-weight: 600;
  color: black;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  padding: 1px;
  font-style: italic;
`;

export const HeaderLeft1 = styled.div`
  font-size: 30px;
`;

export const HeaderLeft2 = styled.div`
  font-size: 15px;
`;

export const HeaderCenter = styled.div`
  line-height: 60px;
  display: flex;
  align-items: center;
`;

export const HeaderCenter1 = styled.div``;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const ChevronImg = styled.img`
  width: 40px;
  height: 30px;
`;

export const Keywords = styled.div`
  border-bottom: 2px solid #c6b597;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Distance = styled.div`
  background-color: #fcf4ec;
  border: 1px solid #eeeeee;
  border-radius: 30px;
  width: fit-content;
  padding: 5px 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Price = styled.div`
  background-color: #fcf4ec;
  border: 1px solid #eeeeee;
  border-radius: 30px;
  width: fit-content;
  padding: 5px 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Main = styled.div`
  margin: 5px auto;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #fcf4ec;
`;

export const LeftImg = styled.div`
  border: 2px solid #dfd3c2;
  border-radius: 20px;
  width: 45%;
  height: 120px;
  margin: 10px;
  margin-left: 20px;
  margin-right: 15px;
`;

export const RightDesc = styled.div`
  width: 30%;
  height: 120px;
`;

export const Tag = styled.div`
  color: #56805a;
  font-weight: 700;
  width: 120px;
`;

export const Title = styled.div`
  font-weight: 700;
  margin-top: 3px;
`;

export const Place = styled.div`
  font-size: 12px;
  color: #56805a;
  margin-top: 5px;
`;

export const PriceInfo = styled.div`
  font-weight: 700;
  margin-top: 10px;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: 100px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  padding: 5px auto;
  max-height: ${({ isOpen }) =>
    isOpen ? "200px" : "0"}; /* 동적 최대 높이 설정 */
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; /* 동적 불투명도 설정 */
  animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 1s forwards; /* 애니메이션 설정 */
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 0;
  cursor: pointer;
  font-size: 13px;
  border-bottom: 1px solid #dfd3c2;
  text-align: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;
