import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/join.css"; // CSS 파일 임포트

function Join() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 토큰을 확인
    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      // 토큰이 존재하고 값이 "undefined"가 아니면 자동으로 로그인 후 메인 페이지로 이동
      navigate("/main");
    }
  }, [navigate]);

  const handleJoin = async (event) => {
    event.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (nickname.length > 5) {
      setError("Nickname must be 5 characters or less");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://cinining.store/users/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginId, password, nickname }),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("token", data.token);
        navigate("/login"); // 로그인 페이지로 이동
      } else {
        setError(data.message || "회원가입 실패");
      }
    } catch (error) {
      console.error("Error 발생!:", error);
      setError("An error occurred while joining. Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    <div className="join-container">
      <form onSubmit={handleJoin} className="join-form">
        <h2>회원가입</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          placeholder="Id"
          required
          className="join-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="join-input"
        />
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickName(e.target.value)}
          placeholder="5자 이내"
          required
          className="join-input"
        />
        <button type="submit" className="join-button">
          {isLoading ? "..." : "Join"}
        </button>
      </form>
    </div>
  );
}

export default Join;
