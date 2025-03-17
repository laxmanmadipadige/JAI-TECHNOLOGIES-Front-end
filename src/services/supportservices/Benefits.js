import React from "react";
import './supportservices.css' // Import the CSS file to apply styles
import cod1 from '../../assets/Images/coding2.avif'
import cod from '../../assets/Images/coding.avif'
// ITServices Component - Displays information about the benefits of managed IT services
const Benefits = () => {
  return (
    <>
    
    <div className="container"> {/* Main container that holds the content */}
      <div className="content"> {/* Content section for the main title, description, and service cards */}
        <h1>Benefits of managed IT services provided by Jai Technologies</h1> {/* Main title */}
        
        <p>
          Are you busy putting out IT instead of focusing on your core business?
          If your technology is draining resources rather than optimizing them,
          Netsurit can get you back on track. A professionally managed services
          provider can give you the decisive edge to:
        </p>
        
        <ul>
          {/* List of benefits offered by Jai Technologies */}
          <li>Grow your business while our experts handle your technology.</li>
          <li>Get more done with information technology that increases productivity and efficiency.</li>
          <li>Eliminate budgeting surprises with a flat monthly rate for comprehensive IT coverage.</li>
          <li>Protect your business and your data from unexpected problems and unwanted intruders.</li>
        </ul>

        {/* Grid of service cards, each showcasing a benefit */}
        <div className="grid">
          <ServiceCard
            title="IT Service for You"
            description="We know that every businesses’ needs are completely different from the next, so we offer packages for any business size or budget."
          />
          <ServiceCard
            title="Keeping Your Team Productive"
            description="Our managed services include round-the-clock monitoring of your key infrastructure, computers and network servers."
          />
          <ServiceCard
            title="Predictable Costs 24/7"
            description="We doesn’t charge you more when your network is down or a server fails. Our flat-rate fee programs covers all of that whenever you need it done."
          />
          <ServiceCard
            title="Our Team is Ready to Help"
            description="Part of what makes our managed services so exceptional is that we are always available, regardless of time or holiday."
          />
        </div>
      </div>
      {/* Image section */}
      <div className="image-container">
        <img src={cod} alt="IT Services" /> {/* Display an image related to IT services */}
      </div>
    </div>
    
    <div className="it-services-container">
      <div className="it-services-content">
        {/* Left side: Image */}
        <div className="it-services-image">
          <img
            src={cod1} // Replace with your actual image
            alt="IT Services"
          />
        </div>

        {/* Right side: Text */}
        <div className="it-services-text">
          <h2>Our managed IT services let you concentrate on what matters</h2>
          <p>
            Are you busy putting out IT fires instead of focusing on your core
            business? If your technology is draining resources rather than
            optimizing them, Netsurit can get you back on track. A professionally
            managed services provider can give you the decisive edge to:
          </p>
        </div>
      </div>
    </div>

    </>
  );
};

// ServiceCard Component - Displays individual service cards with a title, description, and an icon
const ServiceCard = ({ title, description }) => {
  return (
    <>
    <div className="service-card"> {/* Container for each service card */}
      <div className="icon">✔</div> {/* Icon indicating service */}
      <div>
        <h2>{title}</h2> {/* Title of the service */}
        <p>{description}</p> {/* Description of the service */}
      </div>
      
    </div>
    
    </>
  );
};
 export default Benefits;