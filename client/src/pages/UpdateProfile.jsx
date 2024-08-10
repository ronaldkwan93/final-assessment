import React, { useEffect, useState } from "react";
import UserNavBar from "../components/UserNavBar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import arrowBack from "/arrowback.png";
import UserFooter from "../components/UserFooter";

const UpdateProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      axios
        .post("http://localhost:3001/getUser", { email })
        .then((response) => {
          setUser(response.data);
          setName(response.data.name);
          setEmail(response.data.email);
          setPassword(response.data.password);
        })
        .catch((error) => {
          console.error("There was an error fetching the user!", error);
        });
    } else {
      console.error("Email not found in local storage.");
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("userEmail"); // Retrieve email from local storage

    if (!email) {
      console.error("User email is missing");
      return;
    }

    axios
      .put("http://localhost:3001/updateUser", { email, name, password }) // Pass email instead of userId
      .then((response) => {
        console.log("Profile updated:", response.data);
        navigate(`/member`); // Navigate to the member page or another page
      })
      .catch((error) => {
        console.error("There was an error updating the profile!", error);
      });
  };

  return (
    <>
      <UserNavBar />
      <div className="d-flex flex-column align-items-center">
        <div className="Main">
          <Link to={"/member"}>
            <img src={arrowBack} alt="Back" />
          </Link>
        </div>
        <div className="card">
          <div>
            <h1>Update Profile</h1>
            <form onSubmit={handleUpdate}>
              <div>
                <label>Name: </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Email: </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="passwordInput">
                <label>Password: </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Update Profile</button>
            </form>
          </div>
        </div>
      </div>
      <UserFooter />
    </>
  );
};

export default UpdateProfile;
