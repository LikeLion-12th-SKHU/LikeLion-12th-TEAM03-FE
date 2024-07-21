import React from "react";
import "./psyTest.css";
import TestBottomNav from "../components/BottomNavContainer";
import TestTopNav from "../components/TopNavContainer";

function PsyTest() {
  return (
    <div className="main-container">
      <TestTopNav text="우울 체크" />
      <div></div>
      <TestBottomNav />
    </div>
  );
}
export default PsyTest;
