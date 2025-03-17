import React from 'react';
import { Element } from 'react-scroll';
import '../assets/styles/ProServCard.css'; // Importing CSS for styling
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

const Services = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to navigate to the Solutions page
  const handleViewAllSolutions = () => {
    window.scrollTo(0, 0);
    navigate('/solutions'); // Navigate to the Solutions route
  };

  return (
    <Element name="serviceCard">
    <div className="products-container">
      {/* Header Section */}
      <h1 className="products-header">Services</h1>

      {/* Services Grid Section */}
      <div className="products-grid">
        
        {/* Service 1: AI-Powered SDLC */}
        <div className="product-card">
          <h3>AI-Powered SDLC & Automation </h3>
          <p>
          Automate development cycles, optimize infrastructure, and enhance software quality with AI-driven solutions.</p>
          <a href="aisdlc" className="learn-more">Learn more</a> {/* Link to more details */}
        </div>

        {/* Service 2: AI Consulting */}
        <div className="product-card">
          <h3>AI Consulting & Strategy</h3>
          <p>
          Gain expert guidance on AI adoption, implementation, and optimization, ensuring maximum business impact.
          </p>
          <a href="aiconsulting" className="learn-more">Learn more</a>
        </div>

        {/* Service 3: AI-Powered Data Analysis */}
        <div className="product-card">
          <h3>AI-Driven Data Intelligence</h3>
          <p>
          Unlock actionable insights with AI-powered analytics, predictive modeling, and big data processing.

          </p>
          <a href="aipowereddataanalysis" className="learn-more">Learn more</a>
        </div>

        {/* Service 4: AI-Powered Business Optimization */}
        <div className="product-card">
          <h3>AI-Powered Business Optimization</h3>
          <p>
          Drive efficiency, scale operations, and future-proof your business with intelligent automation.
          </p>
          <a href="aia" className="learn-more">Learn more</a>
        </div>

        {/* Service 5: Computer Vision Solutions */}
        <div className="product-card">
          <h3>Computer Vision & NLP Solutions</h3>
          <p>
            Providing computer vision solutions for tasks such as image recognition, object detection, facial recognition, and video analytics.
          </p>
          <a href="computervisionsolutions" className="learn-more">Learn more</a>
        </div>

        

        {/* Service 6 : Personalization & Customer Engagement */}
        <div className="product-card">
          <h3>Personalization & Customer Engagement </h3>
          <p>
          Enhance customer experiences with AI-driven recommendations, content personalization, and chatbot solutions.
          </p>
          <a href="personalizationservices" className="learn-more">Learn more</a>
        </div>

        
      </div>

      {/* Button to navigate to all solutions */}
      <button onClick={handleViewAllSolutions} className="contact-btn">View All Solutions</button>
    </div>
    </Element>
  );
};

// Exporting the Services component
export default Services;

/*
Displays a List of AI-Powered Services

Uses a grid layout to organize service offerings.
Each service has a title, description, and a "Learn More" link.
Navigation Using useNavigate Hook

The useNavigate() hook from react-router-dom is used for programmatic navigation.
Clicking the "View All Solutions" button navigates users to the solutions page (/solutions).
Uses External CSS (Products.css)

The component is styled using an external CSS file (Products.css).
Provides a clean and responsive UI.
Each Service Has a Unique Page Link

The "Learn more" link for each service navigates to a dedicated route (e.g., aisdlc, aiconsulting, etc.).
These links likely lead to detailed service pages.
🛠 Breakdown of the Component's Structure
Section	Purpose
Header (<h1>)	Displays the "Services" title.
Services Grid (<div className="products-grid">)	Organizes service offerings in a grid layout.
Service Cards (<div className="product-card">)	Displays each service with a title, description, and "Learn more" link.
Navigation (useNavigate())	Enables programmatic navigation to the /solutions page.
Button (View All Solutions)	Allows users to explore all available solutions.
*/