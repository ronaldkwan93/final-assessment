import React from "react";
import './About.css';
import UserNavBar from "../components/UserNavBar";
import UserFooter from "../components/UserFooter";

const UserAbout = () => {
  return (
    <div>
      <UserNavBar />
      <div className="whole">
        <div className="header">Got a Question? We got answers.</div>
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
          <a href="/member" className="cta-button">Start here</a>
        </div>
      </div>
      <UserFooter />
    </div>
  );
};

export default UserAbout;
