// EventsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './EventsList.module.css';

const EventsList = () => {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchEvents();
    }, [page]);

    const fetchEvents = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/events?page=${page}&pageSize=${pageSize}`);
            const { events, totalPages } = response.data;
            setEvents(events);
            setTotalPages(totalPages);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleRegister = (eventId) => {
        // Логика для регистрации на событие
        console.log(`Register for event ${eventId}`);
    };

    const handleViewDetails = (eventId) => {
        // Логика для просмотра деталей события
        console.log(`View details for event ${eventId}`);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Events List</h1>
            <ul className={styles['event-list']}>
                {events.length > 0 ? (
                    events.map(event => (
                        <li key={event.event_id} className={styles['event-item']}>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <p>Date: {event.event_date}</p>
                            <button onClick={() => handleRegister(event.event_id)}>Register</button>
                            <button onClick={() => handleViewDetails(event.event_id)}>View Details</button>
                        </li>
                    ))
                ) : (
                    <li className={styles['event-item']}>No events found</li>
                )}
            </ul>
            <div className={styles.pagination}>
                <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                <span>Page {page} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default EventsList;
