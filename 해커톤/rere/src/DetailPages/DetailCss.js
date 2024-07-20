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
  padding-left: 10px;
  padding-top: 5px;
  color: #56805a;
`;

export const Title = styled.div`
  padding-left: 10px;
  padding-top: 5px;
  font-size: 17px;
`;
export const Description = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #fcf4ec;
  height: 250px;
  margin-top: 10px;
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
