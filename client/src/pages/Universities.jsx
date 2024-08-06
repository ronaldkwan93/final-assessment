import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import UserNavBar from "../components/UserNavBar";
import axios from "axios";
import "./PagesCustom.css";

const Universities = () => {
  const [universities, setUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleGridItemClick = (url) => {
    window.location.href = url;
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <UserNavBar />
      <div>
        <div className="Main">
          <h1>Universities</h1>
          <input
            type="search"
            placeholder="Search here"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid-container">
          {/* Map and display Universities */}
          {filteredUniversities.length > 0 ? (
            filteredUniversities.map((university) => (
              <div
                key={university._id}
                className="grid-item"
                onClick={() => handleGridItemClick(university.link)} // Use the link from the university object
              >
                <h2>{university.name}</h2>
                <p>
                  <strong>Description:</strong> {university.description}
                </p>
                <p>
                  <strong>Location:</strong> {university.location}
                </p>
              </div>
            ))
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
