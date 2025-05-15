import React, { useState } from 'react';

const FiltersSidebar = ({ onFilterByDate, onFilterToday, onShowAllEvents }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleMonthChange = (e) => {
    setCurrentMonth(parseInt(e.target.value) - 1);
  };

  const handleYearChange = (e) => {
    setCurrentYear(parseInt(e.target.value));
  };

  const generateCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-dates"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isToday =
        day === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear();

      calendarDays.push(
        <div
          key={date}
          className={`calendar-dates ${isToday ? 'today' : ''}`}
          onClick={() => onFilterByDate(date)} // Call the parent function
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  const renderYearOptions = () => {
    const yearOptions = [];
    for (let year = currentYear - 5; year <= currentYear + 5; year++) {
      yearOptions.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return yearOptions;
  };

  return (
    <aside className="filters">
      <h2>Filters</h2>
      <div className="filterbuttons">
        <button onClick={onShowAllEvents}>Tous les Événements</button>
        <button onClick={onFilterToday}>Événements d’Aujourd’hui</button>
      </div>
            <select id="filter-category">
            <option value="">Filtrer</option>
			<option value="Interview">Intinterview</option>
            <option value="Workshops">Workshops</option>
            <option value="Academic Conference">Academic conference</option>
			<option value="Film">film</option>
			<option value="Poducast">poducast</option>
			<option value="Faculty">Faculty</option>
            </select>
      <div className="calendar-nav">
        <select value={currentMonth + 1} onChange={handleMonthChange}>
          <option value="1">Janvier</option>
          <option value="2">Février</option>
          <option value="3">Mars</option>
          <option value="4">Avril</option>
          <option value="5">Mai</option>
          <option value="6">Juin</option>
          <option value="7">Juillet</option>
          <option value="8">Août</option>
          <option value="9">Septembre</option>
          <option value="10">Octobre</option>
          <option value="11">Novembre</option>
          <option value="12">Décembre</option>
        </select>
        <select value={currentYear} onChange={handleYearChange}>
          {renderYearOptions()}
        </select>
        <div id="calendar-dates" className="calendar-dates">
          {generateCalendar()}
        </div>
      </div>
    </aside>
  );
};

export default FiltersSidebar;