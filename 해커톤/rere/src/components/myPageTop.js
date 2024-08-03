import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./myPageTop.css";
const TestTopNavDiv = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-top: 20px;
  background-color: #dfd3c2;
`;
function MyPageTop() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <TestTopNavDiv>
      <FontAwesomeIcon
        icon="fa-solid fa-chevron-left"
        className="PrevPage2"
        onClick={() => {
          handleNavigation("/main");
        }}
      />

      <div className="test-title">
        <FontAwesomeIcon
          icon="fa-solid fa-bell"
          className="bell"
          onClick={() => {
            handleNavigation("/main");
          }}
        />
        &nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon
          icon="fa-solid fa-gear"
          className="gear"
          onClick={() => {
            handleNavigation("/setting");
          }}
        />
      </div>
      <div></div>
    </TestTopNavDiv>
  );
}
export default MyPageTop;
