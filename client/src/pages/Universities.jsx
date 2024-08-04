import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import UserNavBar from "../components/UserNavBar";
import axios from "axios";

const Universities = () => {
  const [Universities, setUniversities] = useState([]);

  useEffect(() => {
    // Fetch Universities from the backend when the component mounts
    axios
      .get("http://localhost:3001/getUniversities")
      .then((response) => {
        setUniversities(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the Universities!", error);
      });
  }, []);

  return (
    <>
      <UserNavBar />
      <div>
        <div className="Main">
          <h1>Universities</h1>
          <input type="search" placeholder="Search here" />
        </div>
        <div></div>
        <div>
          {/* Map and display Universities */}
          {Universities.length > 0 ? (
            <ul>
              {Universities.map((career) => (
                <li key={career._id}>
                  <h2>{career.name}</h2>
                  <p>
                    <strong>Description:</strong> {career.description}
                  </p>
                  <p>
                    <strong>Location:</strong> {career.location}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Universities found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Universities;
