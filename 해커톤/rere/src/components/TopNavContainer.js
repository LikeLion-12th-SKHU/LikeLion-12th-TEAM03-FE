import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TopNavContainer.css";
import TextComponent from "./TextComponent";
const TestTopNavDiv = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 3rem;
  display: flex;

  justify-content: center;
  align-items: center;

  margin-top: 20px;
  background-color: #dfd3c2;
`;
function TestTopNav({ text }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <TestTopNavDiv>
      <FontAwesomeIcon
        icon="fa-solid fa-chevron-left"
        className="PrevPage"
        onClick={() => {
          handleNavigation("/main");
        }}
      />

      <div className="test-title">
        <TextComponent text={text} />
      </div>
      <div></div>
    </TestTopNavDiv>
  );
}
export default TestTopNav;
