import React from "react";
import Course from "../Course/course";
import "./courses.css";

const Courses = (props) => {
  return (
    <div className="container">
      <h1 className="pt-5 custom-title">{props.title}</h1>
      <div className="custom-title-seperator"></div>
      <Course />
    </div>
  );
};

export default Courses;
