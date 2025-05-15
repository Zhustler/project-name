import React, { useState } from 'react';

const EventsCalendar = ({ events }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State to track the search query
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const eventsPerPage = 5; // Number of events per page

  // Filter events based on the search query
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    return (
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      eventDate.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Calculate the events to display on the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <h2 className="titlecalendar">Calendrier des Événements</h2>
      <div className="search-bar-container">
        <input
          type="text"
          id="search-event"
          placeholder="Search by title, category, or date..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
        />
      </div>
      <div className="events-container">
        {currentEvents.length > 0 ? (
          currentEvents.map((event, index) => (
            <div
              key={index}
              className={`event-card ${event.category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="date">
                {new Date(event.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
              <div className="title">{event.title}</div>
              <div className="category">{event.category}</div>
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1} // Disable if on the first page
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages} // Disable if on the last page
        >
          Next
        </button>
      </div>
    </>
  );
};

export default EventsCalendar;