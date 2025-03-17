import React from 'react';
import Benefits from './Benefits';
import ServiceList from './ServiceList';
import ComprehensiveIT from '../../Components/ComprehensiveIT';
import blue from '../../assets/Images/bluebackground.png';
import Footer from '../../Components/Footer'
const AIConsulting=()=>{
  return(
    <>
    {/* AI Banner Section */}
    <div className="ai-banner-container">
        <div className="ai-banner-content">
          <div className="ai-banner-tag">SERVICES</div>
          <h1 className="ai-banner-title">AI Consulting & Strategy</h1>
          <p className="ai-banner-description">
          Gain expert guidance on AI adoption, implementation, and optimization, ensuring maximum business impact. </p>
          <button className="ai-banner-button">Schedule a Free Consultation</button>
        </div>
        <img
          src={blue}
          alt="IT Services Background"
          className="ai-banner-background"
        />
      </div>
        <Benefits />
        <ServiceList />
        <ComprehensiveIT />
        <Footer />
    </>
  )
}

export default AIConsulting