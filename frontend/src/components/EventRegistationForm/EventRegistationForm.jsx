import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";

const EventRegistationForm = () => {
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    birth_date: "",
    referral_source: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        ...formData,
      });

      if (res.data.loggedIn) {
        await fetch(
          "http://localhost:3001/events/add-event",
          { method: "POST" },
          formData,
          {
            withCredentials: true, // Передаем куки для аутентификации
          }
        );
        alert("Event added successfully!");
      } else {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Failed to add event:", error);
      alert("Failed to add event");
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1>Registation on event</h1>
        <h3>{state.event.title}</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="full_name">Fullname:</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <textarea
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="birth_date">Date of birth:</label>
          <input
            type="date"
            id="birth_date"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
            required
          />

          <label htmlFor="referral_source">Referral Source:</label>
          <input
            type="text"
            id="referral_source"
            name="referral_source"
            value={formData.referral_source}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EventRegistationForm;
