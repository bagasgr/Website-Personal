import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import './App.css'; // Pastikan file CSS ini ada dan digunakan

// Import gambar
import programmerImg from './images/fota pro.jpeg';
import cybersecurityImg from './images/cyber security.jpeg';

import Header from './components/Header'; // Pastikan path ini sesuai
import About from './components/About'; // Pastikan path ini sesuai
import Contact from './components/Contact'; // Pastikan path ini sesuai
import Projects from './components/Projects'; // Pastikan path ini sesuai
import Certifikat from './components/certifikat'; // Pastikan path ini sesuai

// Define the App component
function App() {
  return (
    <Router>
      <div className="App">
        {/* Tambahkan Header */}
        <Header />

        <div className="content">
          {/* Konten utama aplikasi */}
          <header className="App-header">
            <h1>Welcome to My Portfolio!</h1>
            <p>This is my awesome portfolio website.</p>
            <p>Bagas Gilang Ramadhan.</p>

            {/* Gambar Programmer */}
            <div className="image-container">
              <h2>Programmer</h2>
              <img src={programmerImg} alt="Programmer" className="profile-image" />
            </div>

            {/* Gambar Cybersecurity */}
            <div className="image-container">
              <h2>Cybersecurity</h2>
              <img src={cybersecurityImg} alt="Cybersecurity" className="profile-image" />
            </div>
          </header>

          {/* Definisikan Routes */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/certifikat" element={<Certifikat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
