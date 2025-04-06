"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic frontend validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );
      localStorage.setItem("token", data.token);
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <div
          className="card border-0 shadow-lg"
          style={{ maxWidth: "500px", borderRadius: "16px" }}
        >
          <div className="card-body p-5">
            <div className="text-center mb-4">
              <h2 className="fw-bold" style={{ color: "#7C00FE" }}>
                Create Your Account
              </h2>
              <p className="text-muted">
                Join Jigsaw Collab and start collaborating
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "12px" }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "12px" }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "12px" }}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "12px" }}
                />
              </div>

              {error && <p className="text-danger mb-3">{error}</p>}

              <button
                type="submit"
                className="btn btn-lg w-100 mb-3"
                style={{
                  backgroundColor: "#F5004F",
                  color: "white",
                  borderRadius: "12px",
                }}
              >
                Register
              </button>

              <div className="text-center">
                <p className="mb-0">
                  Already have an account?{" "}
                  <Link to="/login" style={{ color: "#7C00FE" }}>
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
