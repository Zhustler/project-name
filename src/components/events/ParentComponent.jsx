import React, { useState } from 'react';
import FiltersSidebar from './FiltersSidebar';
import EventsCalendar from './EventsCalendar';

const ParentComponent = () => {
  const [filterDate, setFilterDate] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  // Example event data
  const allEvents = [
    { title: 'Workshop React', date: '2025-05-20', category: 'Workshops' },
    { title: 'Academic Conference 2025', date: '2025-05-22', category: 'Academic Conference' },
    { title: 'Film Festival', date: '2025-05-25', category: 'Film' },
    { title: 'Podcast Episode', date: '2025-05-20', category: 'Poducast' },
    { title: 'Faculty Meeting', date: '2025-05-21', category: 'Faculty' },
  ];

  // Filter events by date and category
  const filteredEvents = allEvents.filter(event => {
    const matchesDate = filterDate ? event.date === filterDate : true;
    const matchesCategory = filterCategory ? event.category === filterCategory : true;
    return matchesDate && matchesCategory;
  });

  return (
    <div style={{ display: 'flex' }}>
      <FiltersSidebar
        onFilterByDate={setFilterDate}
        onFilterToday={() => setFilterDate(new Date().toISOString().split('T')[0])}
        onShowAllEvents={() => {
          setFilterDate('');
          setFilterCategory('');
        }}
        onFilterByCategory={setFilterCategory}
      />
      <EventsCalendar events={filteredEvents} />
    </div>
  );
};

export default ParentComponent;
