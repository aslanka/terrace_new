import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import MenuAdmin from './pages/admin/MenuAdmin';
import Menu from './pages/Menu'
function App() {
  return (
    <Router>
    <Navbar />
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/menuAdmin" element={<MenuAdmin />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
