import React from 'react';
import RelatedEvents from '../components/news/RelatedEvents'; // Importing IntroVideo component
import AnnouncementList from '../components/news/AnnouncementList'; // Importing PopupVideo component
import '../assets/styles/news.css'; 

const NewsPage = () => {
  return (
    
    <section>
      <article>
 <aside>
  
      <RelatedEvents /></aside>
      </article>
 
      <section className="section" id="announcements">
        <AnnouncementList />
       </section>
    </section>
    
  );
};

export default NewsPage;
