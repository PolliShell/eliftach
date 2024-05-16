import React, { useState, useEffect } from "react";
import styles from "./EventsList.module.css";
import { useNavigate } from "react-router-dom";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  let [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, [page]);

  const fetchEvents = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/events?page=${page}&pageSize=5`,
        {
          method: "POST",
        }
      ).catch((err) => console.log(err));

      const data = await res.json();
      const { events, totalPages } = data;

      setEvents([...events]);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(++page);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(--page);
    }
  };

  const handleRegister = (event) => {
    return navigate(`/event-registation/${event._id}`, { state: { event } });
  };

  const handleViewDetails = (event) => {
    // Логика для просмотра деталей события
    console.log(`View details for event ${event}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Events List</h1>
      <ul className={styles["event-list"]}>
        {events.length > 0 ? (
          events.map((event) => (
            <li key={event._id} className={styles["event-item"]}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>Дата: {event.event_date.slice(0, 10)}</p>
              <button onClick={() => handleRegister(event)}>Register</button>
              <button onClick={() => handleViewDetails(event)}>
                View Details
              </button>
            </li>
          ))
        ) : (
          <li className={styles["event-item"]}>No events found</li>
        )}
      </ul>
      <div className={styles.pagination}>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default EventsList;
