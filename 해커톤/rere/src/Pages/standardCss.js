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
  width: 100%;
  margin-top: 35px;
  max-width: 500px;
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
  height: 50px;
  position: fixed;
  width: 95%;
  max-width: 475px;
`;

export const HeaderLeft = styled.div`
  margin-top: -8px;
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
  margin-right: 20px;
  margin-bottom: -5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;

export const HeaderCenter1 = styled.div`
  font-size: 18px;
`;

export const ChevronImg = styled.div`
  color: #806e56;
  margin-left: 5px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #806e56;
  padding-top: 2px;
`;

export const Keywords = styled.div`
  margin-top: 75px;
  border-bottom: 2px solid #c6b597;
  height: 60px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Distance = styled.div`
  background-color: #fcf4ec;
  border: 1px solid #eeeeee;
  border-radius: 30px;
  width: fit-content;
  padding: 10px 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  font-size: 10px;
  font-weight: 100;
  margin-left: 10px;
  margin-right: 5px;

  display: flex;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Price = styled.div`
  background-color: #fcf4ec;
  border: 1px solid #eeeeee;
  border-radius: 30px;
  width: fit-content;
  padding: 10px 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  font-size: 10px;
  font-weight: 100;
  display: flex;
  margin-right: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const InnerChevron = styled.div`
  margin-left: 4px;
`;

export const Words = styled.div`
  background-color: #806e56;
  border: 1px solid #eeeeee;
  border-radius: 30px;
  width: fit-content;
  padding: 10px 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  color: white;
  font-size: 10px;
  font-weight: 100;
  margin-right: 5px;

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
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: 0.4s;
  }
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
  width: 150px;
`;

export const Title = styled.div`
  font-weight: 700;
  margin-top: 3px;
  width: 130px;
`;

export const Place = styled.div`
  font-size: 12px;
  color: #56805a;
  margin-top: 5px;
  width: 100px;
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

export const Write = styled.div`
  position: fixed;
  bottom: 80px;
  right: 8%;
  background-color: #c2dfc3;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 1px 5px 7px gray;
`;
