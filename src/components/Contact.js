import React from 'react';
import './Contact.css'; // Tambahkan file CSS untuk styling jika diperlukan
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>My Contact Details</h1>
      <ul className="contact-list">
        <li>
          <FaEnvelope className="icon" /> Email: <a href="mailto:bagasiyain205@gmail.com">bagasiyain205@gmail.com</a>
        </li>
        <li>
          <FaPhone className="icon" /> Phone: <a href="tel:+6289699196195">089699196195</a>
        </li>
        <li>
          <FaLinkedin className="icon" /> LinkedIn: <a href="https://www.linkedin.com/in/bagas-gilang-ramadhan" target="_blank" rel="noopener noreferrer">Bagas Gilang Ramadhan</a>
        </li>
        <li>
          <FaGithub className="icon" /> GitHub: <a href="https://github.com/bagasgr" target="_blank" rel="noopener noreferrer">bagasgr</a>
        </li>
        <li>
          <FaInstagram className="icon" /> Instagram: <a href="https://instagram.com/bagasg.r04" target="_blank" rel="noopener noreferrer">@bagasg.r04</a>
        </li>
        <li>
          <FaTiktok className="icon" /> TikTok: <a href="https://tiktok.com/@bagasg.r04" target="_blank" rel="noopener noreferrer">@bagasg.r04</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
