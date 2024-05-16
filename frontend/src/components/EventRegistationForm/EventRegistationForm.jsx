import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EventRegistationForm = () => {
  const params = useParams();
  const { id: eventId } = params;
  let eventName = "";

  // useEffect(() => fetchEventById(eventId));

  // const fetchEventById = async (id) => {
  //   const res = await fetch(`http://localhost:3000/api/events/${id}`);
  //   const data = await res.json();
  //   eventName = data.title;
  // };

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    birth_date: "",
    referral_source: "",
  });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const loginResponse = await axios.post(
  //         "http://localhost:3000/auth/login",
  //         {
  //           username: formData.username,
  //           password: formData.password,
  //         }
  //       );

  //       if (loginResponse.data.loggedIn) {
  //         const eventResponse = await axios.post(
  //           "http://localhost:3000/events/add-event",
  //           formData,
  //           {
  //             withCredentials: true, // Передаем куки для аутентификации
  //           }
  //         );
  //         alert("Event added successfully!");
  //       } else {
  //         window.location.href = "/login";
  //       }
  //     } catch (error) {
  //       console.error("Failed to add event:", error);
  //       alert("Failed to add event");
  //     }
  //   };

  return (
    <div>
      <h1>Registation on event</h1>
      {/* <h3>{{ eventName }}</h3> */}
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label htmlFor="full_name">Fullname:</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          // onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <textarea
          id="email"
          name="email"
          value={formData.email}
          // onChange={handleChange}
          required
        />

        <label htmlFor="birth_date">Date of birth:</label>
        <input
          type="date"
          id="birth_date"
          name="birth_date"
          value={formData.birth_date}
          // onChange={handleChange}
          required
        />

        <label htmlFor="referral_source">Referral Source:</label>
        <input
          type="text"
          id="referral_source"
          name="referral_source"
          value={formData.referral_source}
          // onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventRegistationForm;
