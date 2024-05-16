// LoginForm.js
import React, { useState } from "react";
import axios from "axios";
import "../FormStyles/FormStyles.module.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log([name, value]);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        ...formData,
      });

      if (res.data.token) {
        console.log("Logged in successfully!");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login. Please try again later.");
    }
  };

  const redirectToRegisterForm = () => {
    return navigate("/register");
  };

  return (
    <>
      <Header />
      <div className="form-container">
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
          <span>or</span>
          <button onClick={redirectToRegisterForm}>Register</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
