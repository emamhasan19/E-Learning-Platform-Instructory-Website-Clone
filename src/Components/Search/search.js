import React from "react";
import "./search.css";

const search = () => {
  return (
    <div className="container d-flex justify-content-center">
      <input
        type="text"
        className="course-search"
        placeholder="Start Learning! Ex:Fiverr Freelancing Flash Course"
      />
      <button className="btn-sa">Search Anything</button>
    </div>
  );
};

export default search;
