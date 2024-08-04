import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import UserNavBar from "../components/UserNavBar";
import axios from "axios";
import { Navigate } from "react-router-dom";

const UserHome = () => {
  const [user, setUser] = useState(null);

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
  }, []);

  return (
    <>
      <UserNavBar />
      <div className="d-flex flex-column align-items-center">
        <div className="Main">
          <h1>User Profile</h1>
        </div>
        <div>
          {user ? (
            <h2>{user.name}</h2>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserHome;
