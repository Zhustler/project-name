// components/Main.jsx
import React from 'react';
import AllItemsSection from '../components/shop/AllItemsSection';
import MerchSection from '../components/shop/MerchSection';
import TicketsSection from '../components/shop/TicketsSection';
import OtherSection from '../components/shop/OtherSection';
import '../assets/styles/shop.css'; 

const Main = () => {
  return (
    <main>
      <AllItemsSection />
      <MerchSection />
      <TicketsSection />
      <OtherSection />
    </main>
  );
};

export default Main;
