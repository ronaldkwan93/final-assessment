import React, { useEffect, useState } from "react";
import UserNavBar from "../components/UserNavBar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./PagesCustom.css";
import UserFooter from "../components/UserFooter";
import step from '/step-icon.png'

const UserHome = () => {
  const [user, setUser] = useState(null);
  const [pinnedCareers, setPinnedCareers] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      axios
        .post("http://localhost:3001/getUser", { email })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the user!", error);
        });
    }

    const storedPinnedCareers = localStorage.getItem("pinnedCareers");
    if (storedPinnedCareers) {
      setPinnedCareers(JSON.parse(storedPinnedCareers));
    }
  }, []);

  const handleUpdateProfile = () => {
    navigate("/updateProfile"); // Navigate to the UpdateProfile component
  };

  const handleRemoveCareer = (careerId) => {
    const updatedPinnedCareers = pinnedCareers.filter(
      (career) => career._id !== careerId
    );
    setPinnedCareers(updatedPinnedCareers);
    localStorage.setItem("pinnedCareers", JSON.stringify(updatedPinnedCareers));
  };

  const handleCareerClick = (careerName) => {
    const formattedCareerName = careerName.toLowerCase().replace(/ /g, "-"); // Encode the career name for the URL
    const url = `https://www.seek.com.au/career-advice/role/${formattedCareerName}`;
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <>
      <UserNavBar />
      <div className="userProfileMain">
        <div className="Main">
          <div className="UserContainer">
            <div className="u-container1"></div>
            <div className="u-container2">
              <div>
                {user ? (
                  <h1 className="pageHeader">Welcome back, {user.name}! <img src={step} alt="" /></h1>
                ) : (
                  <p>Loading user data...</p>
                )}
                <button onClick={handleUpdateProfile}>
                  <h6> Edit credentials</h6>
                </button>
                {user ? (
                  <h6>Email: {user.email}</h6>
                ) : (
                  <p>Loading user data...</p>
                )}
                {user ? (
                  <h6>Password: {user.password}</h6>
                ) : (
                  <p>Loading user data...</p>
                )}
              </div>
              <div>
                <p className="card">
                  Click on the “Edit Credentials” button to access and modify
                  your personal details such as email, password, and contact
                  information. <br /> Make sure to save any changes to update
                  your profile.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="savedHelp">
          <p className="card">
            Quickly access and manage the careers you’ve pinned for easy
            reference. Helping you keep track of your top career
            interests and opportunities. <br />Take your first step!
          </p>
        </div>
        <h2 className="saved">Saved:</h2>
        <div className="grid-container">
          {pinnedCareers.length > 0 ? (
            pinnedCareers.map((career) => (
              <div key={career._id} className="grid-item">
                <h2>{career.name}</h2>
                <p>
                  <strong>Discipline:</strong> {career.discipline}
                </p>
                <p>
                  <strong>Years of Study:</strong> {career.studyYears}
                </p>
                <button
                  className="delete-button"
                  onClick={() => handleRemoveCareer(career._id)}
                >
                  Delete
                </button>
                <button
                  className="view-career-button"
                  onClick={() => handleCareerClick(career.name)}
                >
                  View Career
                </button>
              </div>
            ))
          ) : (
            <Link to="/careers" className="careerLink">
              <p>Can't see any pins. Click here to explore!</p>
            </Link>
          )}
        </div>
      </div>
      <UserFooter />
    </>
  );
};

export default UserHome;
