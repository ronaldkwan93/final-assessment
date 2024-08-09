import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import UserNavBar from "../components/UserNavBar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './PagesCustom.css';

const UserHome = () => {
  const [user, setUser] = useState(null);
  const [pinnedCareers, setPinnedCareers] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const email = localStorage.getItem('userEmail'); 
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

    const storedPinnedCareers = localStorage.getItem('pinnedCareers');
    if (storedPinnedCareers) {
      setPinnedCareers(JSON.parse(storedPinnedCareers));
    }
  }, []);

  const handleUpdateProfile = () => {
    navigate("/updateProfile"); // Navigate to the UpdateProfile component
  };

  const handleRemoveCareer = (careerId) => {
    const updatedPinnedCareers = pinnedCareers.filter(career => career._id !== careerId);
    setPinnedCareers(updatedPinnedCareers);
    localStorage.setItem('pinnedCareers', JSON.stringify(updatedPinnedCareers));
  };

  const handleCareerClick = (careerName) => {
    const formattedCareerName =careerName.toLowerCase().replace(/ /g, "-"); // Encode the career name for the URL
    const url = `https://www.seek.com.au/career-advice/role/${formattedCareerName}`;
    window.open(url, '_blank'); // Open the URL in a new tab
  };

  return (
    <>
      <UserNavBar />
      <div className="d-flex flex-column align-items-center">
        <div className="Main">
          <h1>User Profile</h1>
        </div>
        <div>
          {user ? (
            <h2>Welcome back, {user.name}!</h2>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
        <div>
          <button onClick={handleUpdateProfile}>Change your credentials</button>
        </div>
        <div>
          {user ? (
            <h2>Email: {user.email}</h2>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
        <div>
          {user ? (
            <h2>Password: {user.password}</h2>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
        <h2 className="saved">Saved:</h2>
        <div className="grid-container">
          {pinnedCareers.length > 0 ? (
            pinnedCareers.map((career) => (
              <div key={career._id} className="grid-item">
                <h2>{career.name}</h2>
                <p><strong>Discipline:</strong> {career.discipline}</p>
                <p><strong>Years of Study:</strong> {career.studyYears}</p>
                <button className="delete-button" onClick={() => handleRemoveCareer(career._id)}>Delete</button>
                <button className="view-career-button" onClick={() => handleCareerClick(career.name)}>View Career</button>
              </div>
            ))
          ) : (
            <Link to='/careers' className="careerLink">
              <p>Can't see any pins. Click here to explore!</p>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserHome;
