import React from "react";
import NavbarHome from "../components/Navbar";
import "./Home.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    
    navigate('/register');
  };

  return (
    <div className="App">
      <NavbarHome />
      <main className="HomeContent">
        <div className="HomeTitle">Discover Your Future, now</div>
        <div className="midText">
        <div>Free Career advise portal</div>
        <div><label htmlFor="email">
              <strong>Provide Email here</strong>
            </label></div>
            <form action="">
        <input type="email" required />
              <div>
                <button onClick={handleClick}>Sign me up! </button>
              </div>
            </form>
        <div>
          </div>
          
        <div>Discover Your potential with Confidence with Step.io</div>
        <div>
          Explore trusted insights to make informed decisions about your career,
          salary expectations, and university options. We provide the resources
          you need to succeed.
        </div>

        </div>
        <div className="info-container">
          <div className="info-item">Uncover Your Dream Job</div>
          <div className="info-item">Choose the Right College for You</div>
          <div className="info-item">See How Salaries Stack Up</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
