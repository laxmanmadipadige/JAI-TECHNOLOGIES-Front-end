import React from 'react';
import '../assets/styles/Footer.css'; // ✅ Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer"> {/* 🔹 Main footer container */}
      <div className="footer-content"> {/* 🔹 Wrapper for footer sections */}

        {/* 🔹 Products Section */}
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li><a href="CogniFin">CogniFin</a></li>
            <li><a href="CogniTip">CogniTip</a></li>
            <li><a href="CogniQuotes">CogniQuotes</a></li>
            <li><a href="CogniStar">CogniStar</a></li>
            <li><a href="CogniPoc">CogniPoc</a></li>
          </ul>
        </div>

        {/* 🔹 Services Section */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="aisdlc">AI-Powered SDLC & Automation</a></li>
            <li><a href="aiconsulting">AI Consulting & Strategy</a></li>
            <li><a href="aipowereddataanalysis">AI-Driven Data Intelligence</a></li>
            <li><a href="personalizationservices">Personalization & Customer Engagement</a></li>
            <li><a href="computervisionsolutions">Computer Vision & NLP Solutions</a></li>
            <li><a href="aia">AI-Powered Business Optimization</a></li>
          </ul>
        </div>

        {/* 🔹 Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="aboutus">About us</a></li>
            <li>Careers</li>
          </ul>
        </div>

      </div>

      {/* 🔹 Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2023 JAI Technologies</p> {/* 🔹 Copyright notice */}
      </div>
    </footer>
  );
}

export default Footer;

/*Component Structure

The footer consists of three sections:
Products: Links to company products.
Services: Links to AI-based services.
Company: Links to About Us and Careers pages.
A footer bottom section contains copyright information.
Navigation

The <a href="..."> links allow navigation to different sections/pages.
These should ideally be React Router links (<Link to="..." />) if used within a React Single Page Application (SPA).
*/