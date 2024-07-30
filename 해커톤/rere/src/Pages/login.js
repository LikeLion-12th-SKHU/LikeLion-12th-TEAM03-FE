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
      const response = await fetch("#", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginId, password }),
      });

      const result = await response.json();
      console.log("Response Data:", result); // 응답 데이터 콘솔 출력
      setIsLoading(false);

      if (response.ok) {
        // 데이터 구조에 따라 접근
        const token = result.data?.token;
        console.log("Token:", token); // 토큰 값 출력

        if (token) {
          localStorage.setItem("token", token);
          console.log("Stored Token:", localStorage.getItem("token")); // 토큰 저장 여부 콘솔 출력
          navigate("/psytest");
        } else {
          console.error("Token is missing in the response.");
          setError("Token is missing in the response.");
        }
      } else {
        setError(result.message || "Login failed.");
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
