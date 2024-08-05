import styled from "styled-components";
export const HeaderRight2 = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #806e56;
  padding-top: 2px;
  width: 20%;
  margin-right: 3%;
  justify-content: space-between;
`;

export const HeaderCenter2 = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-left: 30%;
  width: 150px;
`;

export const Design = styled.div`
  height: 3.5rem;
  z-index: 5;
  background-color: #fcf4ec;
`;

export const Design1 = styled.div`
  height: 8rem;
  width: 8rem;
  position: relative;
  bottom: 4rem;
  background-color: #c6b597;
  border-radius: 50%;
  z-index: 1;
  right: 2rem;
`;

export const Design2 = styled.div`
  height: 8rem;
  width: 8rem;
  position: relative;
  bottom: 7rem;
  background-color: #c2dfc3;
  border-radius: 50%;
  z-index: 1;
  left: 19rem;
`;

export const Design3 = styled.div`
  height: 4rem;
  width: 4rem;
  position: relative;
  bottom: 9rem;
  background-color: #56805a;
  border-radius: 50%;
  z-index: 2;
  left: 18.5rem;
`;

export const Welcome = styled.div`
  width: fit-content;
  position: relative;
  bottom: 7.5rem;
  z-index: 8;
  left: 6.7rem;
  text-align: center;
`;

export const Main = styled.div`
  background-color: white;
  position: relative;
  bottom: 12rem;
  height: fit-content;
  z-index: 5;
  padding-top: 1rem;
  padding-left: 1rem;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 800;
  width: fit-content;
`;

export const SectionContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #dfd3c2;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #56805a;
    border-radius: 6px;
  }
`;

export const Section = styled.div`
  border: 2px solid #806e56;
  width: 11rem;
  height: 14rem;
  margin-top: 1rem;
  border-radius: 25px;
`;

export const Picture = styled.img`
  display: block;
  width: 100%;
  border-bottom: 1px solid black;
  height: 8rem;
  border-radius: 25px;
  position: relative;
  top: 3rem;
`;

export const SectionTitle = styled.div`
  position: relative;
  top: 3.5rem;
  left: 0.7rem;
  width: 9.5rem;
  font-weight: 800;
`;

export const SectionKeyword = styled.div`
  color: #56805a;
  font-weight: 800;
  position: relative;
  top: 3.5rem;
  left: 0.7rem;
`;

export const SectionPlace = styled.div`
  color: #56805a;
  position: relative;
  top: 5rem;
  left: 0.8rem;
  font-size: 0.7rem;
`;

export const SectionHeart = styled.div`
  color: #98c697;
  position: relative;
  top: 3.7rem;
  left: 6.2rem;
  font-size: 1.3rem;
`;

export const HeartCount = styled.div`
  color: #29351a;
  font-size: 0.7rem;
  width: fit-content;
  position: relative;
  bottom: 1.45rem;
  left: 1.5rem;
  font-weight: 900;
  font-size: 1rem;
`;

export const Main2 = styled.div`
  height: fit-content;
  background-color: white;
  padding-top: 1rem;
  padding-left: 1rem;
  border-top: 2px solid #fcf4ec;
  margin-top: -12rem;
`;

export const SectionContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 1rem;
  gap: 1rem;
  height: 13.5rem;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #dfd3c2;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #56805a;
    border-radius: 6px;
  }
`;

export const Section2 = styled.div`
  border: 2px solid #806e56;
  width: 21rem;
  border-radius: 15px;
  height: 5rem;
`;

export const SectionTitle2 = styled.div`
  width: fit-content;
  position: relative;
  top: 0.3rem;
  left: 0.7rem;
`;

export const SectionKeyword2 = styled.div`
  color: #56805a;
  font-size: 0.7rem;
  position: relative;
  top: 0.5rem;
  left: 0.7rem;
`;

export const SectionPlace2 = styled.div`
  font-size: 0.7rem;
  width: fit-content;
  position: relative;
  top: 1.5rem;
  left: 0.7rem;
  color: #56805a;
`;

export const SectionHeart2 = styled.div`
  width: fit-content;
  color: #98c697;
  position: relative;
  top: 0.7rem;
  left: 7.7rem;
  display: flex;
  font-size: 0.8rem;
`;

export const HeartCount2 = styled.div`
  color: #29351a;
  width: fit-content;
  position: relative;
  bottom: 0.15rem;
  left: 0.3rem;
`;

export const Picture2 = styled.img`
  display: block;
  width: 50%;
  height: 5.15rem;
  border-radius: 15px;
  position: relative;
  bottom: 0.95rem;
  left: 10.5rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 1px solid #806e56;
`;
