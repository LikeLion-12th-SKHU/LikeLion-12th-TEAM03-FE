import React from "react";
import "./psyTest.css";
import TestBottomNav from "../components/BottomNavContainer";
import TestTopNav from "../components/TopNavContainer";

function FireInside() {
  return (
    <div className="main-container">
      <TestTopNav text="불안 체크" />
      <div></div>
      <TestBottomNav />
    </div>
  );
}
export default FireInside;
