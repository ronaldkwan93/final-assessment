import React, { useEffect, useState } from "react";
import UserNavBar from "../components/UserNavBar";
import axios from "axios";
import "./PagesCustom.css";
import UserFooter from "../components/UserFooter";

const SalariesSearch = () => {
  const [SalariesSearch, setSalariesSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

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

  // Filtered results based on search query
  const filteredSalaries = SalariesSearch.filter((salary) =>
    salary.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <UserNavBar />
      <div>
        <div className="Main">
          <h1>Salaries</h1>
          <input
            type="search"
            placeholder="Search here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
          />
        </div>
        <div className="grid-container">
          {filteredSalaries.length > 0 ? (
            filteredSalaries.map((salary) => (
              <div key={salary._id} className="grid-item">
                <h2>{salary.name}</h2>
                <p><strong>Average:</strong> {salary.Average}</p>
                <p><strong>Starting Salary:</strong> {salary.Starting}</p>
              </div>
            ))
          ) : (
            <p>No Salaries found.</p>
          )}
        </div>
      </div>
      <UserFooter />
    </>
  );
};

export default SalariesSearch;
