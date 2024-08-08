import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import UserNavBar from "../components/UserNavBar";
import axios from "axios";
import "./PagesCustom.css";

const SalariesSearch = () => {
  const [SalariesSearch, setSalariesSearch] = useState([]);

  useEffect(() => {
    // Fetch SalariesSearch from the backend when the component mounts
    axios
      .get("http://localhost:3001/getSalaries")
      .then((response) => {
        setSalariesSearch(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the SalariesSearch!", error);
      });
  }, []);

  return (
    <>
      <UserNavBar />
      <div>
        <div className="Main">
          <h1>Salaries</h1>
          <input type="search" placeholder="Search here" />
        </div>
        <div>{/* Create search bar here */}</div>
        <div className="grid-container">
          {/* Map and display SalariesSearch */}
          {SalariesSearch.length > 0 ? (
            <ul>
              {SalariesSearch.map((salary) => (
                <div key={salary._id} className="grid-item">
                  <h2>{salary.name}</h2>
                   {/* Direct reference to public directory */}
                  <p>
                    <strong>Average:</strong> {salary.Average}
                  </p>
                  <p>
                    <strong>Starting Salary:</strong> {salary.Starting}
                  </p>
                </div>
              ))}
            </ul>
          ) : (
            <p>No SalariesSearch found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SalariesSearch;
