import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/join.css"; // CSS 파일 임포트

function Join() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleJoin = async (event) => {
    event.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
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

      setIsLoading(false);

      if (response.ok) {
        navigate("/login");
      } else {
        const data = await response.json();
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
          placeholder="NickName"
          required
          className="join-input"
        />
        <button type="submit" className="join-button">
          {isLoading ? "Joining..." : "Join"}
        </button>
      </form>
    </div>
  );
}

export default Join;
