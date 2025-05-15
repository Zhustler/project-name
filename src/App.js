import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No need to wrap with Router here
import NavBar from './components/NavBar'; // Import NavBar component
import Footer from './components/Footer'; // Import Footer component
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Admin from './pages/Admin';
import Eventspage from './pages/Eventspage';

const App = () => (
    <>
        <header>
            <NavBar />
        </header>
        <>
        <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/eventspage" element={<Eventspage />} />
      </Routes>
    
        </>
        
        <Footer />
</>
);

export default App;