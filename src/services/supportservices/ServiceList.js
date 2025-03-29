import React, { useEffect, useState } from "react";
import "../supportservices/supportservices.css" // Import the CSS file to apply styles
import arrowImage from '../../assets/Images/Arrow.jpeg'; // Ensure the arrow image is in your project folder

// ITServices Component - Displays information about the benefits of managed IT services

// Array of services with title and description
const services = [
  { title: "Technical Implementation", description: "We offer affordable IT solutions that help you reduce costs and improve your bottom line." },
  { title: "IT Helpdesk Support", description: "Reliable IT support to keep your operations running smoothly with minimal downtime." },
  { title: "Managed IT Services", description: "Comprehensive IT management to optimize your business performance." },
  { title: "IT Consulting", description: "Expert advice to align your technology with your business goals." },
  { title: "Network Support", description: "Ensure seamless connectivity and security for your IT infrastructure." },
  { title: "Field Tech Support", description: "Ensure seamless connectivity and security for your IT infrastructure." },

];

// ServiceList Component - Displays a list of IT services with a scroll-triggered animation
const ServiceList = () => {
  const [visibleIndex, setVisibleIndex] = useState(0); // State to track which service item is visible based on scroll position

  // useEffect hook to handle the scroll event and determine which service item to display
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the current scroll position of the page
      const index = Math.min(Math.floor(scrollPosition / 200), services.length - 1); // Calculate the index of visible services based on scroll position
      setVisibleIndex(index); // Update the visible index to control the visibility of the service items
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up event listener when component unmounts
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="service-container"> {/* Main container for the ServiceList */}
      <div className="content-wrapper">
        {/* Left Side - Title, Description, and Arrow Image */}
        <div className="text-section">
          <h1 className="header-text">Cutting-edge tools that drive performance</h1> {/* Title of the section */}
          <p className="description">
            If your technology is draining resources rather than optimizing them, we can get you
            back on track. A professionally managed services provider can give you the decisive edge to:
          </p>
          <div className="arrow-pattern">
            <img src={arrowImage} alt="Decorative arrow pattern" /> {/* Decorative arrow image */}
          </div>
        </div>

        {/* Right Side - List of Services */}
        <div className="services-list">
          {/* Iterate through the 'services' array to display each service */}
          {services.map((service, index) => (
            <div key={index} className={`service-item ${index <= visibleIndex ? "visible" : ""}`}>
              <div className="service-icon">➜</div> {/* Icon for each service item */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3> {/* Service title */}
                <p className="service-description">{service.description}</p> {/* Service description */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Export ITServices component as the default export
export default ServiceList;
// Export ServiceList as a named export

