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
    <div>
      <NavbarHome />

      <div className="main-container">
        <div className="people">
          <img src="/networking.png" alt="Networking" />
        </div>

        <div className="card">
          <header className="headerHome">
            <h1>Discover Your Future, with STEP.IO!</h1>
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
                  USE STEP.IO
                </button>
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>

      <div className="homeBlurb">
        <div>
          {/* <strong>Discover STEP.IO</strong> */}
        </div>
        <h4>

        Explore with <strong>STEP.IO</strong> and see trusted insights to make informed decisions about your career,
        salary expectations, and university options. We provide the resources
        you need to succeed.
        </h4>
      </div>
      <div className="info-container">
        <div className="card">
          Uncover Your Dream Job <img src="/job.jpg" alt="Job" />
          <p>Chart Your Career Course—Explore, Prepare, and Achieve Success in Your Chosen Field.</p>
        </div>
        <div className="card">
          Choose the Right College for You{" "}
          <img src="/college.jpg" alt="College" />
          <p>Navigate Your Academic Journey—Discover the Campus, Community, and Programs That Will Shape Your Future.</p>
        </div>
        <div className="card">
          See How Salaries Stack Up <img src="/salary.jpg" alt="Salary" />
          <p>Compare Earnings Across Industries—Understand What You Can Expect to Earn in Your Chosen Field.</p>
        </div>
      </div>

      <div className="homeBlurb">
        <h1>Ready to accelerate your career?</h1>
        <button className="btn" onClick={handleClick}>
          Trial STEP.IO
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
