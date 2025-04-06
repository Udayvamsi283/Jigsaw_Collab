"use client";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Save user data in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ username: data.username, token: data.token })
      );

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
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
                Welcome Back
              </h2>
              <p className="text-muted">Sign in to continue to Jigsaw Collab</p>
            </div>

            <form onSubmit={handleSubmit}>
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

              <div className="mb-4">
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
                <div className="text-end mt-1">
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "#7C00FE" }}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-lg w-100 mb-3"
                style={{
                  backgroundColor: "#FFAF00",
                  color: "white",
                  borderRadius: "12px",
                }}
              >
                Login
              </button>

              {error && (
                <div className="text-danger text-center mt-2">{error}</div>
              )}

              <div className="text-center mt-3">
                <p className="mb-0">
                  Don't have an account?{" "}
                  <Link to="/register" style={{ color: "#7C00FE" }}>
                    Register
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

export default LoginPage;
