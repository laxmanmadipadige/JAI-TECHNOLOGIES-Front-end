import React from 'react';
import '../assets/styles/FeaturesSection.css'; // Import CSS for styling

// Import feature icons
import Cost from "../assets/Images/logos/Cost-effectiveness.svg";
import Industry from '../assets/Images/logos/Industry.svg';
import Innovative from '../assets/Images/logos/Innovative.svg';
import Scalability from '../assets/Images/logos/Scalability.svg';

const FeaturesSection = () => {
  return (
    <div className="features-section">
      {/* Header Section */}
      <div className="header">
        <button className="header-button">WHAT WE DO</button>
        <h1>Simplifying IT for a complex world.</h1>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {/* Feature: Cost-effectiveness */}
        <div className="feature">
          <img src={Cost} alt="Cost-effectiveness" />
          <h3>AI Product Innovation</h3>
          <p>Cutting-edge AI solutions like Cognitips, Cogniquotes, and Cognistars, transforming automation, intelligence, and business strategy.</p>
        </div>

        {/* Feature: Innovative Technology */}
        <div className="feature">
          <img src={Innovative} alt="Innovative Technology" />
          <h3>Custom AI Products</h3>
          <p>We design and build AI-powered products tailored to business needs, enabling seamless integration and competitive advantage</p>
        </div>

        {/* Feature: Industry Expertise */}
        <div className="feature">
          <img src={Industry} alt="Industry Expertise" />
          <h3>AI Powered IT Services</h3>
          <p>From AI-driven automation to advanced analytics, we provide IT solutions that optimize operations and enhance decision-making.</p>
        </div>

        {/* Feature: Scalability */}
        <div className="feature">
          <img src={Scalability} alt="Scalability" />
          <h3>Scalable AI Solutions</h3>
          <p>Whether leveraging JaiTech’s Cogni products or custom-built AI tools, we deliver future-ready, scalable solutions for sustainable business growth.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
