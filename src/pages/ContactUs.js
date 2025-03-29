import React from "react";
import "../assets/styles/ContactUs.css";
import office from "../assets/Images/AboutUs/A1.jpg"; 
import ComprehensiveIT from "../Components/ComprehensiveIT";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <>
    <div className="services-container">
      {/* Section 1: Services Header */}
      <div className="services-header">
        <h2>We are here to help</h2>
        <p className="services-subtitle">
          Call us at: 1-800-356-8933 <br />
          Email us: support@jaitechnologies.com
        </p>
        <button>Schedule a free consultation</button>
      </div>

      {/* Section 2: Image Display */}
      <div className="services-image">
        <img src={office} alt="Office Workspace" />
      </div>

      {/* Section 3: Locations Wrapper (Ensures Vertical Layout) */}
      <div className="locations-container">
        {/* Our Locations */}
        <div className="location-box">
          <h2>Our Locations</h2>
          <p>
            Our offices are located in Ohio, USA, and Hyderabad, India, and we’d love to show you around. 
            Even if you don’t see an office nearby, we have the resources to support your business, wherever you are.
          </p>
        </div>

        {/* US Location */}
        <div className="location-box">
          <h2>US Location</h2>
          <h4>Columbus</h4>
          <p>1900 Polaris Parkway, Suite 450-25, Columbus, OH 43240-4035</p>
        </div>

        {/* India Location */}
        <div className="location-box">
          <h2>India Location</h2>
          <h4>Hyderabad</h4>
          <p>Plot No 35, Pragathi Nagar, Hyderabad 500062</p>
        </div>
      </div>

      {/* Comprehensive IT Services Component */}
      
    </div>
    <ComprehensiveIT />
      <Footer />
    </>
  );
};

export default ContactUs;

