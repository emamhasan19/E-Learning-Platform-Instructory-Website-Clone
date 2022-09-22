import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <a className="navbar-brand" href="/">
              <img
                className="img-fluid"
                src="https://instructory.net/assets/images/logo-new-white.png"
                width={200}
                alt=""
              />
            </a>
            <p style={{ textAlign: "justify" }} className="text-white">
              Instructory is all about connecting & discovering talents,
              inspiring people and impact lives with the best teaching and
              earning opportunities. “Instructory” is an online teaching
              marketplace, where instructors can create and upload their
              knowledge & make money online. It is also an E-Learning Platform
              to learn anything from anywhere from the best & Top rated
              Professionals and Freelancers! It has created earning
              opportunities for millions of instructors!
            </p>
            <h3 className="text-white mt-4">Contact Us</h3>
            <p className="text-white mt-4">+8801621863540, +8801995729570</p>
          </div>
          <div className="col-md-3">
            <h6 className="text-white">Useful Links</h6>
            <hr style={{ color: "white", height: "2px" }} />
            <li>Blog</li>
            <li>Our Instructors</li>
            <li>Our Learners</li>
            <li>Become an Affiliator</li>
            <li>Become an Online Teacher</li>
            <li>How it Works</li>
            <li>Course Categories</li>
            <li>Create an Account</li>
          </div>
          <div className="col-md-3">
            <h6 className="text-white">Need Support</h6>
            <hr style={{ color: "white", height: "2px" }} />
            <li>Contact Us</li>
            <li>FAQ</li>
            <h6 className="text-white mt-5">Legal</h6>
            <hr style={{ color: "white", height: "2px" }} />
            <li>Site Map</li>
            <li>Privacy Policy</li>
            <li>Purchase and Withdraw</li>
          </div>
          <div className="col-md-3">
            <h6 className="text-white">About Instructor</h6>
            <hr style={{ color: "white", height: "2px" }} />
            <li>Our Story</li>
            <li>Refund Policy</li>
            <li>Terms and Conditions</li>
            <h6 className="text-white mt-4">More</h6>
            <hr style={{ color: "white", height: "2px" }} />
            <li>News and Events</li>
            <li>Instructor's Level</li>
          </div>
          <p style={{ marginBottom: "0" }} className="text-center text-white">
            <h5>Developed By:</h5>
            <h3>
              <a
                href="https://www.facebook.com/eemam.hhasan/"
                className="text-decoration-none ps-1 text-white"
                target="_blank"
                rel="noreferrer"
              >
                <span style={{ color: "#ffa146" }}>Emam Hasan Bijoy</span>
              </a>
            </h3>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
