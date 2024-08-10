import React from "react";
import NavbarHome from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import UserFooter from "../components/UserFooter";
import UserNavBar from "../components/UserNavBar";

const UserContact = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xkgwbzla");

  const handleContinue = () => {
    navigate("/userabout"); 
  };

  if (state.succeeded) {
    return (
      <div className="contactForm">
        <div className="card">
          <p>
            Thanks for your submission! We will be in contact within the next
            1-2 business days.
          </p>{" "}
          <button className="contactSubmit" onClick={handleContinue}>Continue</button>
        </div>
      </div>
    );
  }
  return (
    <div className="contactBody">
      <UserNavBar />
      <h1 className="conTitle">Any Questions? Leave us a message!</h1>
      <div className="contactForm">
        <form action="" className="card" onSubmit={handleSubmit}>
          <div className="formCon">
            <label>Name: </label>
            <input type="text" />
          </div>
          <div className="formCon">
            <label>Email: </label>
            <input type="email" id="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="contactMessage formCon">
            <textarea
              id="message"
              name="message"
              className="messageInput"
              rows="5"
              placeholder="Enter your message here..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="contactSubmit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
      <UserFooter />
    </div>
  );
};

export default UserContact;
