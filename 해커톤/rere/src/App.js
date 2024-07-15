import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Join from "./Pages/join";
import Main from "./Pages/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
