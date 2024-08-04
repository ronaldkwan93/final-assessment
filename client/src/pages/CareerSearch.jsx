import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import UserNavBar from "../components/UserNavBar";
import axios from "axios";

const CareerSearch = () => {
  const [careers, setCareers] = useState([]);

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
  }, []);

  return (
    <>
      <UserNavBar />
      <div>
        <div className="Main">
          <h1>Careers</h1>
          <input type="search" placeholder="Search here" />
        </div>
        <div>{/* Create search bar here */}</div>
        <div>
          {/* Map and display careers */}
          {careers.length > 0 ? (
            <ul>
              {careers.map((career) => (
                <li key={career._id}>
                  <h2>{career.name}</h2>
                  <p>
                    <strong>Discipline:</strong> {career.discipline}
                  </p>
                  <p>
                    <strong>Years of Study:</strong> {career.studyYears}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No careers found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerSearch;
