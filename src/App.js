import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Menu from './pages/Menu';
import DrinksMenu from './pages/DrinksMenu';
import MoreMenu from './pages/MoreMenu';
function App() {
  return (
    <Router>
    <Navbar />
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/specials" element={<MoreMenu />} />
      <Route path="/drinks" element={<DrinksMenu />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
