import React from "react";
import NavbarHome from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "typeface-roboto";


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="">
      <NavbarHome />

      <div className="card">
        <header className="headerHome">
          <h1>Discover Your Future, with STEP.IO</h1>
        </header>

        <div className="grid-item2">
          <div>Your personal career adviser</div>

          <div className="grid-item2">
            <strong>What's your question?</strong>
            <div>
              <label htmlFor="email"></label>
            </div>
          </div>
          <form action="">
            <input type="email" required />
            <div>
              <button className="btn" onClick={handleClick}>
                USE STEP.IO{" "}
              </button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
      <div className="people">
        {/* <div>Discover Your potential with Confidence with Step.io</div> */}
        <img src="/networking.png" alt="" />
      </div>

      <div className="homeBlurb">
        <div>
          <strong>What is STEP.IO?</strong>
        </div>
        Explore trusted insights to make informed decisions about your career,
        salary expectations, and university options. We provide the resources
        you need to succeed.
      </div>

      <div className="info-container">
        <div className="card">
          Uncover Your Dream Job <img src="/job.jpg" alt="" />
        </div>
        <div className="card">
          Choose the Right College for You <img src="/college.jpg" alt="" />
        </div>
        <div className="card">
          See How Salaries Stack Up <img src="/salary.jpg" alt="" />
        </div>
      </div>

      <div className="homeBlurb">
        <h1>Ready to accelerate your career?</h1>
        <button className="btn" onClick={handleClick}>YES!</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
