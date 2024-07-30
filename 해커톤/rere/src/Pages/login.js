import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css"; // CSS 파일 임포트

function Login() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("https://cinining.store/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginId, password }),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        // 로그인 성공 시 토큰을 로컬 스토리지에 저장
        localStorage.setItem("token", data.token);
        navigate("/psytest");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError("An error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <img src="/logo.png" alt="Logo" className="login-image" />
      <form className="login-form" onSubmit={handleLogin}>
        <h2>로그인</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          placeholder="Id"
          required
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
