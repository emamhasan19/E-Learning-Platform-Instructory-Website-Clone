import React from "react";
import courseList from "../../Data/courseData";
import "./course.css";

const Course = () => {
  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        {courseList.map((data) => (
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-3 my-5">
            <img
              style={{ cursor: "pointer" }}
              src={data.image}
              className="img-fluid"
              alt=""
            />
            <div className="card p-3 bg-white pt-3">
              <div className="d-flex">
                <div className="col-6">
                  <small
                    style={{ marginTop: "-0.2rem" }}
                    className="text-muted"
                  >
                    {data.instructor}
                  </small>
                </div>
                <div className="col-2"></div>

                <div className="col-4 d-flex p-2">
                  <i
                    style={{ color: "#8dc63f" }}
                    class="fa-solid fa-cart-shopping pe-2"
                  ></i>
                  <i
                    style={{ color: "#ff4669" }}
                    class="fa-solid fa-heart pe-2"
                  ></i>
                  <i
                    style={{ color: "#63d7fb" }}
                    class="fa-solid fa-share-nodes pe-2"
                  ></i>
                </div>
              </div>
              <h6 className="fw-bold mt-2" title={data.title}>
                {data.title}
              </h6>
              <div className="d-flex">
                <i
                  style={{ color: "goldenrod" }}
                  class="fa-regular fa-star"
                ></i>
                <i
                  style={{ color: "goldenrod" }}
                  class="fa-regular fa-star"
                ></i>
                <i
                  style={{ color: "goldenrod" }}
                  class="fa-regular fa-star"
                ></i>
                <i
                  style={{ color: "goldenrod" }}
                  class="fa-regular fa-star"
                ></i>
                <i
                  style={{ color: "goldenrod" }}
                  class="fa-regular fa-star"
                ></i>
              </div>
              <div className="d-flex py-2">
                <div className="col-6">
                  <h5
                    style={{ color: "#00a99d", fontSize: "26px" }}
                    className="fw-bold mt-3"
                  >
                    ৳{data.price}
                  </h5>
                </div>

                <div className="col-5 ms-3">
                  <button className="mt-3 btn-bn text-white fw-bold">
                    Buy Now
                  </button>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
