// src/components/home/Home.js
import React, { useState, useEffect } from 'react';
import FiltersSidebar from '../components/events/FiltersSidebar';
import Calendar from '../components/events/Calendar';

import '../assets/styles/eventspage.css';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    // Fetch events from localStorage
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
    setFilteredEvents(storedEvents);
  }, []);

  const handleFilterByDate = (date) => {
    const filtered = events.filter((event) => event.date === date);
    setFilteredEvents(filtered);
  };

  const handleFilterToday = () => {
    const today = new Date().toISOString().split('T')[0];
    const filtered = events.filter((event) => event.date === today);
    setFilteredEvents(filtered);
  };

  const handleShowAllEvents = () => {
    setFilteredEvents(events);
  };

  return (
    <section className="calendar-container1">
      <FiltersSidebar
        onFilterByDate={handleFilterByDate}
        onFilterToday={handleFilterToday}
        onShowAllEvents={handleShowAllEvents}
      />
      <div>
        <Calendar events={filteredEvents} />
      </div>
    </section>
  );
};

export default Home;
