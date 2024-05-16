import React, { useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import "../FormStyles/FormStyles.module.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    birth_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/auth/register", {
        ...formData,
      });

      if (res.data.token) {
        console.log("Signed up successfully!");
        // redirect to events page
      } else {
        console.log("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="Date"
            placeholder="Birth Date"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
