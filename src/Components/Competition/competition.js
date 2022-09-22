import React from "react";
import Course from "../Course/course";
import "./competition.css";

const competition = () => {
  return (
    <div className="container">
      <h1 className="pt-5 custom-title">Instructor's Competition</h1>
      <div className="custom-title-seperator"></div>
      <Course />
    </div>
  );
};

export default competition;
