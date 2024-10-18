import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Importing icons
import './IncentivesSection.css'; // Assuming you store your CSS in this file

const IncentivesSection = () => {
  return (
    <section className="incentives-section">
      <div className="content-wrapper">
        <h2 className="insane-title">Exclusive Perks for Early Birds!</h2>
        <p className="incentives-desc">Join the waitlist today and enjoy:</p>
        <ul className="incentives-list">
          <li>🎉 Early access to our product launch</li>
          <li>💸 Up to 30% discount on your first purchase</li>
          <li>🚀 Exclusive access to premium products before anyone else</li>
        </ul>

        <p className="limited-time-offer">
          Limited-time offer: Be the first to know about special promotions and discounts!
        </p>

        <div className="social-media">
          <h3>Follow Us on Social Media</h3>
          <div className="social-icons">
            <a href="https://instagram.com/life.withkennedyy" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} className="icon instagram" />
            </a>
            <a href="https://facebook.com/profile.php?id=100074868560128" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={40} className="icon facebook" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} className="icon linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncentivesSection;
