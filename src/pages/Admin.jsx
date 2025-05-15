// src/pages/AdminPage.js
import React from 'react';
import AllItemsSection from '../components/admin/AllItemsSection'; // Importing AllItemsSection component from admin folder
import EventList from '../components/admin/EventList';  // Importing EventListSection component from admin folder
import AnnouncementSection from '../components/admin/AnnouncementSection'; // Importing AnnouncementSection component from admin folder
import ContactFormSubmissionsSection from '../components/admin/ContactFormSubmissionsSection'; // Importing ContactFormSubmissionsSection component from admin folder
import AddAnnouncementForm from '../components/admin/AddAnnouncementForm'; // Importing AllItemsSection component from admin folder
import AddEventForm from '../components/admin/AddEventForm';  // Importing EventListSection component from admin folder
import ManageCardsForm from '../components/admin/ManageCardsForm'; // Importing AnnouncementSection component from admin folder
import '../assets/styles/admin.css'; // Ensure the CSS is imported



const AdminPage = () => {
  return (
    <section>
    <div>
      <AddAnnouncementForm /> {/* you Add Announcement  */}
      <AddEventForm /> {/* you Add events here */}
      <ManageCardsForm /> {/* you can Manage Cards */}
      <AllItemsSection /> {/* All Items Section */}
      <EventList /> {/* Event List Section */}
      <AnnouncementSection /> {/* Announcement Section */}
      <ContactFormSubmissionsSection /> {/* Contact Form Submissions Section */}
      
    </div>
    </section>
  );
};

export default AdminPage;
