import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RelatedEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('events')) || [];

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // Sort events by date
    events.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Filter and prioritize today's and tomorrow's events
    const filteredEvents = events.filter(event => new Date(event.date) >= today);
    const sortedEvents = [
      ...filteredEvents.filter(event => new Date(event.date).toDateString() === today.toDateString()),
      ...filteredEvents.filter(event => new Date(event.date).toDateString() === tomorrow.toDateString()),
      ...filteredEvents.filter(event => new Date(event.date) > tomorrow),
    ];

    const eventsToShow = sortedEvents.slice(0, 2); // Limit to 3 events
    setUpcomingEvents(eventsToShow);
  }, []);

  return (
    
    <aside className="related-events">
      <div id="calendar">
        <div id="calendar-header"></div>

        <h1>
          Événements prochaine
          <Link
            to="/eventspage"
            className="see-also"
            style={{
              color: 'white',
              textDecoration: 'none',
              backgroundColor: 'transparent'
            }}
          >
            voir plus
          </Link>
        </h1>

        <div id="calendar-dates"></div>
        <div id="events-section">
          <div id="events-container" className="events-calendar1">
            {upcomingEvents.map((event, index) => {
              const eventDate = new Date(event.date);
              const categoryClass = event.category.toLowerCase().replace(/\s+/g, '-');

              return (
                <div key={index} className={`event-card ${categoryClass}`} style={{ marginBottom: '10px' }}>
                  <div className="date">
                    {eventDate.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="title">{event.title}</div>
                  <div className="category">{event.category}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RelatedEvents;
