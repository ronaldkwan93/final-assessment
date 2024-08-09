import React from "react";
import Footer from "../components/Footer";
import NavbarHome from "../components/Navbar";
import './About.css';

const About = () => {
  return (
    <div>
      <NavbarHome />
      <div className="whole">
        <div className="header">Here to help.</div>
        <div className="title">Making Careers Better</div>
        <p>
          What is Step.IO? At Step.IO, we're dedicated to empowering career
          journeys through a vibrant community of students and mentors. Our
          mission is simple: to connect, inspire, and support career growth
          together.
          <br /> But achieving this mission? It's no small feat.
          <br />
          Every day, we're motivated to create a platform that fosters career
          exploration and professional development. By facilitating meaningful
          connections and providing valuable resources, we're helping break down
          barriers to career success. Together, we're building a supportive
          environment where individuals can thrive, discover new opportunities,
          and reach their full potential.
        </p>
        <div className="cta-container">
          <a href="/register" className="cta-button">Start here</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
