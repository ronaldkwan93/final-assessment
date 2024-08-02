import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ name, email, password }, {
        abortEarly: false,
      });
      console.log("Form Submitted", { name, email, password });
      axios
        .post("http://localhost:3001/register", { name, email, password })
        .then((result) => {
          console.log(result);
          navigate("/login");
        });
    } catch (error) {
      if (error.inner) {
        const newErrors = {};

        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });

        setErrors(newErrors);
      } else {
        console.log(error);
      }
    }
  };


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-50">
      <div class="container">
          <div class="row align-items-center">
            <div class="col-sm d-flex justify-content-start">
              <h2>Register</h2>
            </div>
            <div class="col-sm d-flex justify-content-end">
              <Link
                to="/"
                className="btn btn-default border bg-light rounded-0 text-decoration-none"
              >
                return
              </Link>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-danger h6 ">{errors.name}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-danger h6 ">{errors.email}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-danger h6 ">{errors.password}</p>}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0 shadow p-3 mb-5 rounded-top rounded-bottom">
            Register
          </button>
        </form>
        <p>Already have an Account</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
