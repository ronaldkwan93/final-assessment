import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import UserNavBar from "../components/UserNavBar";
import axios from "axios";
import './PagesCustom.css';
import UserFooter from "../components/UserFooter";

const CareerSearch = () => {
  const [careers, setCareers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pinnedCareers, setPinnedCareers] = useState([]); // Manage pinned careers

  useEffect(() => {
    // Fetch careers from the backend when the component mounts
    axios
      .get("http://localhost:3001/getCareers")
      .then((response) => {
        setCareers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the careers!", error);
      });

    // Load pinned careers from local storage
    const storedPinnedCareers = localStorage.getItem('pinnedCareers');
    if (storedPinnedCareers) {
      setPinnedCareers(JSON.parse(storedPinnedCareers));
    }
  }, []);

  const handleCareerClick = (careerName) => {
    const formattedCareerName = careerName.toLowerCase().replace(/ /g, "-");
    const url = `https://www.seek.com.au/career-advice/role/${formattedCareerName}`;
    window.open(url, "_blank");
  };

  const handlePinClick = (career) => {
    let updatedPinnedCareers = [...pinnedCareers];
    const index = updatedPinnedCareers.findIndex(c => c._id === career._id);

    if (index > -1) {
      // Remove from pinned careers
      updatedPinnedCareers.splice(index, 1);
    } else {
      // Add to pinned careers
      updatedPinnedCareers.push(career);
    }

    setPinnedCareers(updatedPinnedCareers);
    localStorage.setItem('pinnedCareers', JSON.stringify(updatedPinnedCareers));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCareers = careers.filter((career) =>
    career.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <UserNavBar />
      <div>
        <div className="Main">
          <h1>Careers</h1>
          <p className="card">Found something? Click on the Pin to save to your profile!</p>
          <input
            type="search"
            placeholder="Search here"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid-container">
          {/* Map and display careers */}
          {filteredCareers.length > 0 ? (
            filteredCareers.map((career) => (
              <div
                key={career._id}
                className={`grid-item ${pinnedCareers.some(c => c._id === career._id) ? 'pinned' : ''}`}
                onClick={() => handleGridItemClick(career.name)}
              >
                <h2>
                  {career.name} 
                  <img 
                    src="/pin.png" 
                    alt="pin" 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the click from triggering the grid item click handler
                      handlePinClick(career);
                    }}
                    className={pinnedCareers.some(c => c._id === career._id) ? 'pinned' : ''}
                  />
                </h2>
                <p>
                  <strong>Discipline:</strong> {career.discipline}
                </p>
                <p>
                  <strong>Years of Study:</strong> {career.studyYears}
                </p>
                <button
                  className="view-career-button"
                  onClick={() => handleCareerClick(career.name)}
                >
                  View Career
                </button>
                {pinnedCareers.some(c => c._id === career._id) && (
                  <div className="pinned-message">
                    Pinned!
                  </div>
                )}

              </div>
            ))
          ) : (
            <p>No careers found.</p>
          )}
        </div>
      </div>
      <UserFooter />
    </>
  );
};

export default CareerSearch;
